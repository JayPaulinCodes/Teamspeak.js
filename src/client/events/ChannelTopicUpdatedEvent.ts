import { Event } from "@teamspeak.js/client/events/Event";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ChannelTopicUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.clients.fetch(data.invokeruid);
        const channel = await queryClient.channels.fetch(data.cid, { force: true });
        const newTopic = data.channelTopic;

        queryClient.emit(QueryClientEvents.ChannelTopicUpdated, invokingClient, channel, newTopic);
    }
}
