import { Event } from "@teamspeak.js/client/events/Event";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ChannelCodecUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.clients.fetch(data.invokeruid);
        const channel = await queryClient.channels.fetch(data.cid, { force: true });
        const newCodec = data.channelCodec;

        queryClient.emit(QueryClientEvents.ChannelCodecUpdated, invokingClient, channel, newCodec);
    }
}
