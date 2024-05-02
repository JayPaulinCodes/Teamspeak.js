import { Event } from "@teamspeak.js/client/events/Event";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ClientDisconnectedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const client = await queryClient.clients.fetch(data.clid);
        const channel = await queryClient.channels.fetch(data.cfid);
        const reason = data.reasonmsg;

        queryClient.emit(QueryClientEvents.ClientDisconnected, client, channel, reason);
    }
}
