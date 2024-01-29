import { Event } from "./Event";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";

// ADD DOCS
export class ClientSwitchedChannelsEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const movingClient = await queryClient.getClientByServerId(data.clid);
        const channel = await queryClient.getChannelById(data.ctid);

        queryClient.emit(QueryClientEvents.ClientSwitchedChannels, movingClient, channel);
    }
}
