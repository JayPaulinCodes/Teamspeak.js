import { Event } from "./Event";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";

// ADD DOCS
export class ClientKickedFromChannelEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const movingClient = queryClient.clients.resolve(data.clid);
        const invokingClient = queryClient.clients.resolve(data.invokerid);
        const channel = queryClient.channels.resolve(data.ctid);

        queryClient.emit(
            QueryClientEvents.ClientKickedFromChannel,
            movingClient,
            channel,
            invokingClient,
            data.reasonmsg
        );
    }
}
