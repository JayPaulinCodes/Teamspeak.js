import { Client } from "../../structures/Client";
import { Channel } from "../../structures/Channel";
import { Collection } from "@discordjs/collection";
import { Event } from "./Event";
import { TsIdentifier } from "../../structures/typings/TsIdentifier";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";

// ADD DOCS
export class ClientSwitchedChannelsEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const allClients = await queryClient.clients.fetch();
        const allChannels = await queryClient.channels.fetch();

        const movingClient = queryClient.clients.resolve(data.clid) ?? (<Collection<TsIdentifier, Client>>allClients).find(elem => elem.serverId === data.clid);
        const channel = queryClient.channels.resolve(data.ctid) ?? (<Collection<TsIdentifier, Channel>>allChannels).find(elem => elem.id === data.ctid);

        queryClient.emit(QueryClientEvents.ClientSwitchedChannels, movingClient, channel);
    }
}
