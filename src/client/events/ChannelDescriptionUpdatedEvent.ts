import { Event } from "@teamspeak.js/client/events/Event";
import { Channel } from "@teamspeak.js/structures/classes/Channel";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ChannelDescriptionUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.clients.fetch(data.invokeruid);
        const channel = await queryClient.channels.fetch(data.cid, { force: true });

        queryClient.emit(QueryClientEvents.ChannelDescriptionUpdated, invokingClient, channel, (channel as Channel).description);
    }
}
