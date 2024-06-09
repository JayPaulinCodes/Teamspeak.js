import { Collection } from "@discordjs/collection";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { Permission, PermissionResolvable } from "@teamspeak.js/structures/classes/Permission";
import { TsIdentifier } from "@teamspeak.js/structures/typings/TsIdentifier";
import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";
import { PermissionManager } from "../permissionManager/PermissionManager";
import { notNull } from "@teamspeak.js/utils/Filters";
import { ChannelGroup } from "@teamspeak.js/structures/classes/ChannelGroup";

export class ChannelGroupPermissionManager extends PermissionManager {
    private readonly channelGroup: ChannelGroup;

    constructor(queryClient: QueryClient, channelGroup: ChannelGroup, prefill: Collection<number, Permission> | undefined = undefined) {
        super(queryClient, prefill);

        this.channelGroup = channelGroup;
    }

    public async fetch(
        id: number | undefined = undefined,
        options: { cache: boolean; force: boolean } = { cache: true, force: false }
    ): Promise<Permission | Collection<TsIdentifier, Permission> | undefined> {
        options.cache = options.cache ?? true;
        options.force = options.force ?? false;

        // If we aren't forcing the query check, try to find it in the cache
        if (!options.force && id !== undefined) {
            const existingItem: Permission | undefined = this.cache.find(item => item.id === id);
            if (existingItem !== undefined) return existingItem;
        }

        // Query for the virtual servers
        const permissions = await this.queryClient.execute<any[]>(new QueryCommand("channelgrouppermlist", { cgid: this.channelGroup.id })).then(data => {
            return data.map(elem => new Permission(this.queryClient, elem));
        });

        if (id === undefined) {
            // If we are using a cache we might as well update it it now that we have the data
            if (options.cache) {
                permissions.forEach(perm => this.add(perm));
                return this.cache.clone();
            }

            // Return the appropriate data
            const colData = new Collection<TsIdentifier, Permission>();
            permissions.forEach(perm => colData.set(perm.id, perm));
            return colData;
        } else {
            const permmission = permissions.find(perm => perm.id === id);

            if (permmission === undefined) {
                return permmission;
            }

            // If we are using a cache we might as well update it it now that we have the data
            if (options.cache) {
                this.add(permmission);
            }

            // Return the appropriate data
            return permmission;
        }
    }
    
    // ADD DOCS
    public async remove(permission: PermissionResolvable | PermissionResolvable[], reason: string | undefined): Promise<ChannelGroup> {
        const targetPerms = Array.isArray(permission) ? permission : [ permission ];
        const resolvedPermIds = targetPerms.map(perm => this.resolveId(perm)).filter(notNull);
        
        await this.queryClient.execute(new QueryCommand("channelgroupdelperm", {
            cgid: this.channelGroup.id,
            permid: resolvedPermIds
        }));

        await this.fetch(undefined, { cache: true, force: true });

        return this.channelGroup;
    }
    
    // ADD DOCS
    public async set(permission: Permission | Permission[], reason: string | undefined): Promise<ChannelGroup> {
        const targetPerms = Array.isArray(permission) ? permission : [ permission ];
        const filteredPerms = targetPerms.map(perm => perm.toQueryJSON()).filter(notNull);
        const filledPerms = filteredPerms.map(perm => {
            return [
                {
                    key: "permid",
                    value: perm.permid,
                },
                {
                    key: "permvalue",
                    value: perm.permvalue,
                },
                {
                    key: "permnegated",
                    value: perm?.permnegated ?? false,
                },
                {
                    key: "permskip",
                    value: perm?.permskip ?? false,
                }
            ]
        })
        
        await this.queryClient.execute(new QueryCommand("servergroupaddperm", {
            cgid: this.channelGroup.id,
            perms: filledPerms
        }));

        await this.fetch(undefined, { cache: true, force: true });

        return this.channelGroup;
    }
}
