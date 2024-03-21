import { Event } from "@teamspeak.js/client/events/Event";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ClientKickedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const client = queryClient.clients.resolve(data.clid);
        const invokingClient = queryClient.clients.resolve(data.invokerid);
        const channel = queryClient.channels.resolve(data.cfid);
        const reason = data.reasonmsg;

        queryClient.emit(QueryClientEvents.ClientKicked, client, invokingClient, channel, reason);
    }
}
