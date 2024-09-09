import { Collection } from "@discordjs/collection";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { CachedManager } from "@teamspeak.js/managers/CachedManager";
import { Permission, PermissionResolvable } from "@teamspeak.js/structures/classes/Permission";
import { TsIdentifier } from "@teamspeak.js/structures/typings/TsIdentifier";

export abstract class PermissionManager extends CachedManager<Permission> {
    constructor(client: QueryClient, prefill: Collection<number, Permission> | undefined = undefined) {
        super(client, Permission, prefill);
    }

    protected add(data: Permission, useCache: boolean = true): Permission {
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

    public resolve(idOrInstance: PermissionResolvable): Permission | null {
        if (idOrInstance instanceof this.holds) {
            return idOrInstance;
        }

        const result: Permission | undefined = this.cache.find(item => item.id === idOrInstance);

        return result ?? null;
    }

    public resolveId(idOrInstance: PermissionResolvable): number | null {
        if (idOrInstance instanceof this.holds) {
            return idOrInstance.id;
        }

        if (typeof idOrInstance === "number") {
            return idOrInstance;
        }

        return null;
    }

    abstract fetch(id: number | undefined, options: { cache?: boolean; force?: boolean }): Promise<Permission | Collection<TsIdentifier, Permission> | undefined>;
}
