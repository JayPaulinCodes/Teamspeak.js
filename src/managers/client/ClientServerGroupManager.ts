import { Collection } from "@discordjs/collection";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { DataManager } from "@teamspeak.js/managers/DataManager";
import { Client } from "@teamspeak.js/structures/classes/Client";
import { ServerGroup, ServerGroupResolvable } from "@teamspeak.js/structures/classes/ServerGroup";
import { TsIdentifier } from "@teamspeak.js/structures/typings/TsIdentifier";
import { notNull } from "@teamspeak.js/utils/Filters";
import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

export class ClientServerGroupManager extends DataManager<ServerGroup> {
    private readonly client: Client;

    constructor(queryClient: QueryClient, client: Client) {
        super(queryClient, ServerGroup);
        
        this.client = client;
    }

    public override get cache(): Collection<TsIdentifier, ServerGroup> {
        return this.queryClient.serverGroups.cache.filter(group => this.client.serverGroupIds.includes(group.id));
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
    
    // ADD DOCS
    public async add(group: ServerGroupResolvable | ServerGroupResolvable[], reason?: string): Promise<Client> {
        if (this.client.databaseId === undefined) { return this.client; }

        // If the client has no groups listed, double check to verify
        if (this.client.serverGroupIds.length === 0) {
            if (this.client.databaseId === undefined) {
                const clientDbId = await this.queryClient.execute(new QueryCommand("clientgetdbidfromuid", { cluid: this.client.id })).then(data => {
                    return data?.cldbid;
                });

                this.client._patch({ cldbid: clientDbId }, true, true);
            }

            const clientDbId = this.client.databaseId as number;
            const serverGroups = await this.queryClient.execute<any[]>(new QueryCommand("servergroupsbyclientid", { cldbid: clientDbId })).then(data => {
                return data?.map(entry => entry?.sgid);
            });

            this.client._patch({ clientServergroups: serverGroups }, true, true);
        }

        const targetGroups = Array.isArray(group) ? group : [ group ];
        const resolvedGroupIds = targetGroups.map(group => this.queryClient.serverGroups.resolveId(group))
            .filter(notNull).filter(group => !this.client.serverGroupIds.includes(group));
        const commands: Promise<any>[] = [];

        for (let i = 0; i < resolvedGroupIds.length; ++i) {
            const targetGroupId = resolvedGroupIds[i];
            commands.push(this.queryClient.execute(new QueryCommand("servergroupaddclient", {
                sgid: targetGroupId,
                cldbid: this.client.databaseId
            })))
        }
        
        await Promise.all(commands);

        const clone = this.client._clone();
        clone._patch({ serverGroupIds: [ ...this.client.serverGroupIds, ...resolvedGroupIds ] }, false, true);
        return clone;
    }
    
    // ADD DOCS
    public async remove(group: ServerGroupResolvable | ServerGroupResolvable[], reason?: string): Promise<Client> {
        if (this.client.databaseId === undefined) { return this.client; }

        // If the client has no groups listed, double check to verify
        if (this.client.serverGroupIds.length === 0) {
            if (this.client.databaseId === undefined) {
                const clientDbId = await this.queryClient.execute(new QueryCommand("clientgetdbidfromuid", { cluid: this.client.id })).then(data => {
                    return data?.cldbid;
                });

                this.client._patch({ cldbid: clientDbId }, true, true);
            }

            const clientDbId = this.client.databaseId as number;
            const serverGroups = await this.queryClient.execute<any[]>(new QueryCommand("servergroupsbyclientid", { cldbid: clientDbId })).then(data => {
                return data?.map(entry => entry?.sgid);
            });

            this.client._patch({ clientServergroups: serverGroups }, true, true);
        }

        const targetGroups = Array.isArray(group) ? group : [ group ];
        const resolvedGroupIds = targetGroups.map(group => this.queryClient.serverGroups.resolveId(group))
            .filter(notNull).filter(group => this.client.serverGroupIds.includes(group));
        const commands: Promise<any>[] = [];

        for (let i = 0; i < resolvedGroupIds.length; ++i) {
            const targetGroupId = resolvedGroupIds[i];
            commands.push(this.queryClient.execute(new QueryCommand("servergroupdelclient", {
                sgid: targetGroupId,
                cldbid: this.client.databaseId
            })))
        }
        
        await Promise.all(commands);

        const clone = this.client._clone();
        clone._patch({ serverGroupIds: [ ...this.client.serverGroupIds, ...resolvedGroupIds ] }, false, true);
        return clone;
    }
    
    // ADD DOCS
    public async set(groups: ServerGroupResolvable | ServerGroupResolvable[], reason?: string): Promise<Client> {
        if (this.client.databaseId === undefined) { return this.client; }

        // If the client has no groups listed, double check to verify
        if (this.client.serverGroupIds.length === 0) {
            if (this.client.databaseId === undefined) {
                const clientDbId = await this.queryClient.execute(new QueryCommand("clientgetdbidfromuid", { cluid: this.client.id })).then(data => {
                    return data?.cldbid;
                });

                this.client._patch({ cldbid: clientDbId }, true, true);
            }

            const clientDbId = this.client.databaseId as number;
            const serverGroups = await this.queryClient.execute<any[]>(new QueryCommand("servergroupsbyclientid", { cldbid: clientDbId })).then(data => {
                return data?.map(entry => entry?.sgid);
            });

            this.client._patch({ clientServergroups: serverGroups }, true, true);
        }

        const targetGroups = Array.isArray(groups) ? groups : [ groups ];
        const targetGroupIds = targetGroups.map(group => this.queryClient.serverGroups.resolveId(group)).filter(notNull);
        const groupsToAdd = targetGroupIds.filter(group => !this.client.serverGroupIds.includes(group));
        const groupsToRemove = this.client.serverGroupIds.filter(group => !targetGroupIds.includes(group as number)).map(group => group as number);

        const commands: Promise<any>[] = [];

        for (let i = 0; i < groupsToAdd.length; ++i) {
            const targetGroupId = groupsToAdd[i];
            commands.push(this.queryClient.execute(new QueryCommand("servergroupaddclient", {
                sgid: targetGroupId,
                cldbid: this.client.databaseId
            })))
        }

        for (let i = 0; i < groupsToRemove.length; ++i) {
            const targetGroupId = groupsToRemove[i];
            commands.push(this.queryClient.execute(new QueryCommand("servergroupdelclient", {
                sgid: targetGroupId,
                cldbid: this.client.databaseId
            })))
        }
        
        await Promise.all(commands);

        const clone = this.client._clone();
        clone._patch({ serverGroupIds: [ ...groupsToAdd, ...groupsToRemove ] }, false, true);
        return clone;
    }
}
