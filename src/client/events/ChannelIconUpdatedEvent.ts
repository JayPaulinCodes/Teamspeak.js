import { Event } from "@teamspeak.js/client/events/Event";
import { Channel } from "@teamspeak.js/structures/classes/Channel";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ChannelIconUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.clients.fetch(data.invokeruid);
        const oldChannel = (await queryClient.channels.fetch(data.cid, { force: false }) as Channel | undefined)?._clone() ?? undefined;
        const newChannel = await queryClient.channels.fetch(data.cid, { force: true });

        queryClient.emit(QueryClientEvents.ChannelIconUpdated, invokingClient, oldChannel, newChannel);
    }
}
