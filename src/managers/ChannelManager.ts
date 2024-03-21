import { Collection } from "@discordjs/collection";
import { CachedManager } from "@teamspeak.js/managers/CachedManager";
import { Channel } from "@teamspeak.js/structures/Channel";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { TsIdentifier } from "@teamspeak.js/structures/typings/TsIdentifier";
import { ChannelInfoCommand, ChannelListCommand } from "@teamspeak.js/websocket/queryCommands/commands";

export class ChannelManager extends CachedManager<Channel> {
    constructor(client: QueryClient, prefill: Collection<TsIdentifier, Channel> | undefined = undefined) {
        super(client, Channel, prefill);
    }

    protected add(data: Channel, useCache: boolean = true): Channel {
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

        const entry = this.holds ? new this.holds(this.client, data, false) : data;
        if (useCache) {
            this.cache.set(data.id, entry);
        }
        return entry;
    }

    public resolve(idOrInstance: TsIdentifier | Object): Channel | null {
        if (idOrInstance instanceof this.holds) {
            return idOrInstance;
        }

        if (typeof idOrInstance === "number" || typeof idOrInstance === "string") {
            return this.cache.get(idOrInstance) ?? null;
        }

        return null;
    }

    public resolveId(idOrInstance: TsIdentifier | Channel): TsIdentifier | null {
        if (idOrInstance instanceof this.holds) {
            return idOrInstance.id;
        }

        if (typeof idOrInstance === "number" || typeof idOrInstance === "string") {
            return idOrInstance;
        }

        return null;
    }

    public async fetch(channelId: number | undefined = undefined, options: { cache: boolean, force: boolean } = { cache: true, force: false }): Promise<Channel | Collection<TsIdentifier, Channel> | undefined> {
        options.cache = options.cache ?? true;
        options.force = options.force ?? false;
        
        // If we aren't forcing the query check try to find it in the cache
        if (!options.force && channelId !== undefined) {
            const existingItem = this.cache.get(channelId);
            if (existingItem !== undefined) return existingItem;
        }
        
        if (channelId === undefined) {
            // Query for the channels
            const channelsData = await this.client.execute<Channel[]>(new ChannelListCommand()).then(data => {
                return data.map(elem => new Channel(this.client, elem));
            });

            for (let i = 0; i < channelsData.length; i++) {
                const elem = channelsData[i];
                await this.client.execute(new ChannelInfoCommand(elem.id)).then(data => {
                    channelsData[i]._patch(data);
                });
            }

            // If we are using a cache we might as well update it it now that we have the data
            if (options.cache) {
                channelsData.forEach(elem => this.add(elem));
                return this.cache.clone();
            }
    
            // Return the appropriate data
            const colData = new Collection<TsIdentifier, Channel>();
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