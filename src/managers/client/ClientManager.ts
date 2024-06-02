import { Collection } from "@discordjs/collection";
import { CachedManager } from "@teamspeak.js/managers/CachedManager";
import { Client } from "@teamspeak.js/structures/Client";
import { ClientListCommandFlags } from "@teamspeak.js/websocket/enums/ClientListCommandFlags";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { TsIdentifier } from "@teamspeak.js/structures/typings/TsIdentifier";
import {
    ClientDbInfoCommand,
    ClientDbListCommand,
    ClientGetDbIdFromUIdCommand,
    ClientGetIdsCommand,
    ClientGetUIdFromClIdCommand,
    ClientInfoCommand,
    ClientListCommand
} from "@teamspeak.js/websocket/queryCommands/commands";

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

        const entry = this.holds ? new this.holds(this.client, data, false) : data;
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
        options: { cache: boolean; force: boolean } = { cache: true, force: false }
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
            const totalCount = await this.client.execute<any[]>(new ClientDbListCommand(undefined, true)).then(data => {
                return data[0]?.count ?? 0;
            });

            let offset = 0;
            let clientsData: Client[] = [];
            do {
                const newData = await this.client.execute<any[]>(new ClientDbListCommand(offset)).then(data => {
                    offset += data.length;
                    return data.map(elem => new Client(this.client, elem));
                });
                clientsData = clientsData.concat(newData);
            } while (offset < totalCount);

            const onlineClients = await this.client
                .execute<
                    any[]
                >(new ClientListCommand([ClientListCommandFlags.INCLUDE_UNIQUE_ID, ClientListCommandFlags.INLCUDE_AWAY_DATA, ClientListCommandFlags.INCLUED_VOICE_DATA, ClientListCommandFlags.INCLUED_TIMES_DATA, ClientListCommandFlags.INCLUED_GROUPS_DATA, ClientListCommandFlags.INCLUED_INFO_DATA, ClientListCommandFlags.INCLUED_COUNTRY_DATA, ClientListCommandFlags.INCLUED_IP, ClientListCommandFlags.INCLUED_BADGES_DATA]))
                .then(data => {
                    return Array.isArray(data) ? data.map(elem => new Client(this.client, elem)) : [data];
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
                await this.client.execute(new ClientGetUIdFromClIdCommand(clientId)).then(data => {
                    clientUniqueId = data?.cluid ?? undefined;
                });
            }

            if (clientUniqueId === undefined) {
                return undefined;
            }

            // Convert the unique id into a db id
            const clientDbId = await this.client.execute(new ClientGetDbIdFromUIdCommand(clientUniqueId)).then(data => {
                return data?.cldbid;
            });

            if (clientDbId === undefined) {
                return undefined;
            }

            // Query for the client
            const clientData = await this.client.execute(new ClientDbInfoCommand(clientDbId)).then(data => {
                return new Client(this.client, data);
            });

            await this.client.execute(new ClientGetIdsCommand(clientUniqueId)).then(data => {
                clientData._patch(data);
            });

            if (clientData.serverId !== null) {
                await this.client.execute(new ClientInfoCommand(clientData.serverId)).then(data => {
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
