import { Collection } from "@discordjs/collection";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { CachedManager } from "@teamspeak.js/managers/CachedManager";
import { VirtualServer, VirtualServerResolvable } from "@teamspeak.js/structures/classes/VirtualServer";
import { TsIdentifier } from "@teamspeak.js/structures/typings/TsIdentifier";
import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

export class VirtualServerManager extends CachedManager<VirtualServer> {
    constructor(client: QueryClient, prefill: Collection<number, VirtualServer> | undefined = undefined) {
        super(client, VirtualServer, prefill);
    }

    protected add(data: VirtualServer, useCache: boolean = true): VirtualServer {
        const existingItem = this.cache.get(data.id);

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
            this.cache.set(data.id, entry);
        }
        return entry;
    }

    public resolve(idOrInstance: VirtualServerResolvable): VirtualServer | null {
        if (idOrInstance instanceof this.holds) {
            return idOrInstance;
        }

        const result: VirtualServer | undefined = this.cache.find(item => item.id === idOrInstance);

        return result ?? null;
    }

    public resolveId(idOrInstance: VirtualServerResolvable): number | null {
        if (idOrInstance instanceof this.holds) {
            return idOrInstance.id;
        }

        if (typeof idOrInstance === "number") {
            return idOrInstance;
        }

        return null;
    }

    public async fetch(
        id: number | undefined = undefined,
        options: { cache?: boolean; force?: boolean } = { cache: true, force: false }
    ): Promise<VirtualServer | Collection<TsIdentifier, VirtualServer> | undefined> {
        options.cache = options.cache ?? true;
        options.force = options.force ?? false;

        // If we aren't forcing the query check, try to find it in the cache
        if (!options.force && id !== undefined) {
            const existingItem: VirtualServer | undefined = this.cache.find(item => item.id === id);
            if (existingItem !== undefined) return existingItem;
        }

        // Query for the virtual servers
        const virtualServers = await this.queryClient.execute<any[]>(new QueryCommand("serverlist", undefined, [
            "-uid",
            "-short",
            "-all"
        ])).then(data => {
            if (Array.isArray(data)) {
                return data.map(elem => new VirtualServer(this.queryClient, elem));
            } else {
                return [ new VirtualServer(this.queryClient, data) ];
            }
        });

        if (id === undefined) {
            // If we are using a cache we might as well update it it now that we have the data
            if (options.cache) {
                virtualServers.forEach(vServer => this.add(vServer));
                return this.cache.clone();
            }

            // Return the appropriate data
            const colData = new Collection<TsIdentifier, VirtualServer>();
            virtualServers.forEach(vServer => colData.set(vServer.id, vServer));
            return colData;
        } else {
            const virtualServer = virtualServers.find(vServer => vServer.id === id);

            if (virtualServer === undefined) {
                return virtualServer;
            }

            // If we are using a cache we might as well update it it now that we have the data
            if (options.cache) {
                this.add(virtualServer);
            }

            // Return the appropriate data
            return virtualServer;
        }
    }
}
