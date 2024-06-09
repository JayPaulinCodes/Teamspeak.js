import { Collection } from "@discordjs/collection";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { DataManager } from "@teamspeak.js/managers/DataManager";
import { Channel } from "@teamspeak.js/structures/classes/Channel";
import { Client, ClientResolvable } from "@teamspeak.js/structures/classes/Client";
import { TsIdentifier } from "@teamspeak.js/structures/typings/TsIdentifier";

export class ChannelClientManager extends DataManager<Client> {
    private readonly channel: Channel;

    constructor(queryClient: QueryClient, channel: Channel) {
        super(queryClient, Client);
        
        this.channel = channel;
    }

    public override get cache(): Collection<TsIdentifier, Client> {
        return this.queryClient.clients.cache.filter(client => client.currentChannelId === this.channel.id);
    }

    public resolve(idOrInstance: ClientResolvable): Client | null {
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

    public resolveId(idOrInstance: ClientResolvable): string | null {
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

        // Try and fetch from the global manager
        const results: Client | Collection<TsIdentifier, Client> | undefined = await this.queryClient.clients.fetch(clientId, {
            cache: options.cache,
            force: options.force
        });

        if (results === undefined) {
            return undefined;
        }

        if (results instanceof Client) {
            if (results.currentChannelId !== this.channel.id) {
                return undefined;
            } else {
                return results;
            }
        } else {
            const filteredResults = results.filter(client => client.currentChannelId === this.channel.id);
            return filteredResults;
        }
    }
}
