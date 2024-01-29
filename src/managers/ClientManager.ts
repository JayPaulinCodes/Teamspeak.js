import { Collection } from "@discordjs/collection";
import { QueryClient } from "../client/QueryClient";
import { Channel } from "../structures/Channel";
import CachedManager from "./CachedManager";
import { ChannelListCommand } from "../websocket/queryCommands/commands/ChannelListCommand";
import { ChannelInfoCommand } from "../websocket/queryCommands/commands";
import { TsIdentifier } from "../structures/typings/TsIdentifier";
import { Client } from "../structures/Client";

export default class ClientManager extends CachedManager<Client> {
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

        if (typeof idOrInstance === "number" || typeof idOrInstance === "string") {
            return this.cache.get(idOrInstance) ?? null;
        }

        return null;
    }

    public resolveId(idOrInstance: TsIdentifier | Client): TsIdentifier | null {
        if (idOrInstance instanceof this.holds) {
            return idOrInstance.uniqueId;
        }

        if (typeof idOrInstance === "number" || typeof idOrInstance === "string") {
            return idOrInstance;
        }

        return null;
    }

    public async fetch(clientUniqueId: string | undefined = undefined, options: { [index: string]: any } = { cache: true, force: false }): Promise<Channel | Collection<TsIdentifier, Channel> | undefined> {
        options.cache = options.cache ?? true;
        options.force = options.force ?? false;
        
        // If we aren't forcing the query check try to find it in the cache
        if (!options.force) {
            const existingItem = channelId === undefined ? this.cache.clone() : this.cache.get(channelId);
            if (existingItem !== undefined) return existingItem;
        }
        
        if (channelId === undefined) {
            // Query for the channels
            const channelsData = await this.client.execute<Channel[]>(new ChannelListCommand()).then(data => {
                return data.map(elem => new Channel(this.client, elem));
            });

            // If we are using a cache we might as well update it it now that we have the data
            if (options.cache) {
                channelsData.forEach(elem => this.add(elem));
                return this.cache.clone();
            }
    
            // Return the appropriate data
            const colData = new Collection<number, Channel>();
            channelsData.forEach(elem => colData.set(elem.id, elem));
            return colData;
        } else {
            // Query for the channel
            const channelData = await this.client.execute<Channel>(new ChannelInfoCommand(channelId)).then(data => {
                return new Channel(this.client, data);
            });

            // If we are using a cache we might as well update it it now that we have the data
            if (options.cache) {
                this.add(channelData);
                return this.cache.get(channelId);
            }
    
            // Return the appropriate data
            return channelData;
        }
    }
}