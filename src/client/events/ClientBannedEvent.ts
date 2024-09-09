import { Event } from "@teamspeak.js/client/events/Event";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ClientBannedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const client = await queryClient.clients.fetch(data.clid);
        const invokingClient = await queryClient.clients.fetch(data.invokeruid);
        const channel = await queryClient.channels.fetch(data.cfid);
        const reason = data.reasonmsg;
        const bantime = data.bantime;

        queryClient.emit(QueryClientEvents.ClientBanned, client, invokingClient, channel, reason, bantime);
    }
}
