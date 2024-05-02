import { Event } from "@teamspeak.js/client/events/Event";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ClientMovedToChannelEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const movingClient = await queryClient.clients.fetch(data.clid);
        const invokingClient = await queryClient.clients.fetch(data.invokerid);
        const channel = await queryClient.channels.fetch(data.ctid);

        queryClient.emit(QueryClientEvents.ClientMovedToChannel, movingClient, channel, invokingClient);
    }
}
