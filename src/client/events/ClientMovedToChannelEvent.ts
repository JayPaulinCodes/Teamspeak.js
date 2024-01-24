import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ClientMovedToChannelEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const movingClient = await queryClient.getClientByServerId(data.clid);
        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const channel = await queryClient.getChannelById(data.ctid);

        queryClient.emit(QueryClientEvents.ClientMovedToChannel, movingClient, channel, invokingClient);
    }
}
