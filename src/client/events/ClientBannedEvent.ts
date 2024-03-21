import { Event } from "@teamspeak.js/client/events/Event";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ClientBannedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const client = queryClient.clients.resolve(data.clid);
        const invokingClient = queryClient.clients.resolve(data.invokeruid);
        const channel = queryClient.channels.resolve(data.cfid);
        const reason = data.reasonmsg;
        const bantime = data.bantime;

        queryClient.emit(QueryClientEvents.ClientBanned, client, invokingClient, channel, reason, bantime);
    }
}
