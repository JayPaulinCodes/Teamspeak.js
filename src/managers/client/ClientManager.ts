import { Collection } from "@discordjs/collection";
import { CachedManager } from "@teamspeak.js/managers/CachedManager";
import { Client } from "@teamspeak.js/structures/classes/Client";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { TsIdentifier } from "@teamspeak.js/structures/typings/TsIdentifier";
import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

export class ClientManager extends CachedManager<Client> {
    constructor(client: QueryClient, prefill: Collection<TsIdentifier, Client> | undefined = undefined) {
        super(client, Client, prefill);
    }


    protected add(data: Client, useCache: boolean = true): Client {
        const existingItem = this.cache.get(data.uniqueId);

        if (existingItem !== undefined) {
            if (useCache) {
                existingItem._patch(data, false);
                return existingItem;
            }

            const clone = existingItem._clone();
            clone._patch(data, false);
            return clone;
        }

        const entry = this.holds ? new this.holds(this.queryClient, data, false) : data;
        if (useCache) {
            this.cache.set(data.uniqueId, entry);
        }
        return entry;
    }

    public resolve(idOrInstance: TsIdentifier | Object): Client | null {
        if (idOrInstance instanceof this.holds) {
            return idOrInstance;
        }

        let result: Client | null = null;
        if (typeof idOrInstance === "string") {
            result = result ?? this.cache.get(idOrInstance) ?? null;
            result = result ?? this.cache.find(elem => elem.myTeamspeakId === idOrInstance) ?? null;
            return result;
        } else if (typeof idOrInstance === "number") {
            result = result ?? this.cache.find(elem => elem.serverId === idOrInstance) ?? null;
            result = result ?? this.cache.find(elem => elem.databaseId === idOrInstance) ?? null;
            return result;
        }

        return null;
    }

    public resolveId(idOrInstance: string | Client): string | null {
        if (idOrInstance instanceof this.holds) {
            return idOrInstance.uniqueId;
        }

        if (typeof idOrInstance === "string") {
            return idOrInstance;
        }

        return null;
    }

    public async fetch(
        clientId: string | number | undefined = undefined,
        options: { cache?: boolean; force?: boolean } = { cache: true, force: false }
    ): Promise<Client | Collection<TsIdentifier, Client> | undefined> {
        options.cache = options.cache ?? true;
        options.force = options.force ?? false;

        // If we aren't forcing the query check, try to find it in the cache
        if (!options.force && clientId !== undefined) {
            let existingItem: Client | undefined;
            if (typeof clientId === "string") {
                existingItem = this.cache.get(clientId)
            } else if (typeof clientId === "number") {
                existingItem = this.cache.find(elem => elem.serverId === clientId);
                existingItem = existingItem ?? this.cache.find(elem => elem.databaseId === clientId);
            }
            if (existingItem !== undefined) return existingItem;
        }

        if (clientId === undefined) {
            // Query for the clients
            const totalCount = await this.queryClient.execute<any[]>(new QueryCommand("clientdblist", undefined, [ "-count" ])).then(data => {
                return data[0]?.count ?? 0;
            });

            let offset = 0;
            const clientsData: Client[] = [];
            do {
                const newData = await this.queryClient.execute<any[]>(new QueryCommand("clientdblist", { start: offset })).then(data => {
                    offset += data.length;
                    return data.map(elem => new Client(this.queryClient, elem));
                });

                for (let i = 0; i < newData.length; i++) {
                    const client = newData[i];
                    
                    const clientDbId = await this.queryClient.execute(new QueryCommand("clientgetdbidfromuid", { cluid: client.uniqueId })).then(data => {
                        return data?.cldbid;
                    });

                    client._patch({ cldbid: clientDbId }, true, true);

                    if (clientDbId !== undefined) {
                        await this.queryClient.execute<any[]>(new QueryCommand("clientdbinfo", { cldbid: clientDbId })).then(data => {
                            return client._patch(data, true, true);
                        });
                    }

                    clientsData.push(client);
                }

                // clientsData = clientsData.concat(newData);
            } while (offset < totalCount);

            const onlineClients = await this.queryClient
                .execute<any[]>(new QueryCommand("clientlist", undefined, [
                    "-uid",
                    "-away",
                    "-voice",
                    "-times",
                    "-groups",
                    "-info",
                    "-country",
                    "-ip",
                    "-badges",
                ]))
                .then(data => {
                    return Array.isArray(data) ? data.map(elem => new Client(this.queryClient, elem)) : [data];
                });

            onlineClients.forEach(elem => {
                const index = clientsData.findIndex(_elem => _elem.uniqueId === elem.uniqueId);
                if (index !== -1) {
                    clientsData[index]._patch(elem, false);
                }
            });

            // If we are using a cache we might as well update it it now that we have the data
            if (options.cache) {
                clientsData.forEach(elem => this.add(elem));
                return this.cache.clone();
            }

            // Return the appropriate data
            const colData = new Collection<TsIdentifier, Client>();
            clientsData.forEach(elem => colData.set(elem.uniqueId, elem));
            return colData;
        } else {
            let clientUniqueId: string | undefined = undefined;
            // If the id provided is a number assume it to be the server id and convert to unique id
            if (typeof clientId === "number") {
                await this.queryClient.execute(new QueryCommand("clientgetuidfromclid", { clid: clientId })).then(data => {
                    clientUniqueId = data?.cluid ?? undefined;
                });
            }

            if (clientUniqueId === undefined) {
                return undefined;
            }

            // Convert the unique id into a db id
            const clientDbId = await this.queryClient.execute(new QueryCommand("clientgetdbidfromuid", { cluid: clientUniqueId })).then(data => {
                return data?.cldbid;
            });

            if (clientDbId === undefined) {
                return undefined;
            }

            // Query for the client
            const clientData = await this.queryClient.execute(new QueryCommand("clientdbinfo", { cldbid: clientDbId })).then(data => {
                return new Client(this.queryClient, data);
            });

            await this.queryClient.execute(new QueryCommand("clientgetids", { cluid: clientUniqueId })).then(data => {
                clientData._patch(data);
            });

            if (clientData.serverId !== undefined) {
                await this.queryClient.execute(new QueryCommand("clientinfo", { clid: clientData.serverId })).then(data => {
                    clientData._patch(data);
                });
            }

            // If we are using a cache we might as well update it it now that we have the data
            if (options.cache) {
                this.add(clientData);
            }

            // Return the appropriate data
            return clientData;
        }
    }
}
