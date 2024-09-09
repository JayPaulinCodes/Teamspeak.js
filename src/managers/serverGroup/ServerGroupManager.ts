import { Collection } from "@discordjs/collection";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { CachedManager } from "@teamspeak.js/managers/CachedManager";
import { ServerGroup, ServerGroupResolvable } from "@teamspeak.js/structures/classes/ServerGroup";
import { TsIdentifier } from "@teamspeak.js/structures/typings/TsIdentifier";
import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

export class ServerGroupManager extends CachedManager<ServerGroup> {
    constructor(client: QueryClient, prefill: Collection<number, ServerGroup> | undefined = undefined) {
        super(client, ServerGroup, prefill);
    }

    protected add(data: ServerGroup, useCache: boolean = true): ServerGroup {
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

    public resolve(idOrInstance: ServerGroupResolvable): ServerGroup | null {
        if (idOrInstance instanceof this.holds) {
            return idOrInstance;
        }

        const result: ServerGroup | undefined = this.cache.find(item => item.id === idOrInstance);

        return result ?? null;
    }

    public resolveId(idOrInstance: ServerGroupResolvable): number | null {
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
    ): Promise<ServerGroup | Collection<TsIdentifier, ServerGroup> | undefined> {
        options.cache = options.cache ?? true;
        options.force = options.force ?? false;

        // If we aren't forcing the query check, try to find it in the cache
        if (!options.force && id !== undefined) {
            const existingItem: ServerGroup | undefined = this.cache.find(item => item.id === id);
            if (existingItem !== undefined) return existingItem;
        }

        // Query for the virtual servers
        const groups = await this.queryClient.execute<any[]>(new QueryCommand("servergrouplist")).then(data => {
            return data.map(elem => new ServerGroup(this.queryClient, elem));
        });

        if (id === undefined) {
            // If we are using a cache we might as well update it it now that we have the data
            if (options.cache) {
                groups.forEach(group => this.add(group));
                return this.cache.clone();
            }

            // Return the appropriate data
            const colData = new Collection<TsIdentifier, ServerGroup>();
            groups.forEach(group => colData.set(group.id, group));
            return colData;
        } else {
            const group = groups.find(group => group.id === id);

            if (group === undefined) {
                return group;
            }

            // If we are using a cache we might as well update it it now that we have the data
            if (options.cache) {
                this.add(group);
            }

            // Return the appropriate data
            return group;
        }
    }
}
