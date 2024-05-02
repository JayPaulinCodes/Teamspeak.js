import { Event } from "@teamspeak.js/client/events/Event";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ClientSwitchedChannelsEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const movingClient = await queryClient.clients.fetch(data.clid);
        const channel = await queryClient.channels.fetch(data.ctid);

        queryClient.emit(QueryClientEvents.ClientSwitchedChannels, movingClient, channel);
    }
}
