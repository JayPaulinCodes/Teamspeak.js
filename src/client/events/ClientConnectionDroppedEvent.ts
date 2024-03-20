import { Event } from "./Event";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";

// ADD DOCS
export class ClientConnectionDroppedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const client = queryClient.clients.resolve(data.clid);
        const channel = queryClient.channels.resolve(data.cfid);
        const reason = data.reasonmsg;

        queryClient.emit(QueryClientEvents.ClientConnectionDropped, client, channel, reason);
    }
}
