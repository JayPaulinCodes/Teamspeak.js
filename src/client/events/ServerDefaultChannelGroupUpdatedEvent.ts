import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ServerDefaultChannelGroupUpdatedEvent extends Event {
    async handle(data) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const newGroupId = data.virtualserverDefaultChannelGroup;

        queryClient.emit(QueryClientEvents.ServerDefaultChannelGroupUpdated, invokingClient, newGroupId);
    }
}