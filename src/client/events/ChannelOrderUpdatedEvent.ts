import { Event } from "@teamspeak.js/client/events/Event";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ChannelOrderUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.clients.fetch(data.invokeruid);
        await queryClient.channels.fetch(undefined, { cache: true, force: true });
        const channel = await queryClient.channels.fetch(data.cid);
        const newOrder = data.channelOrder;

        queryClient.emit(QueryClientEvents.ChannelOrderUpdated, invokingClient, channel, newOrder);
    }
}
