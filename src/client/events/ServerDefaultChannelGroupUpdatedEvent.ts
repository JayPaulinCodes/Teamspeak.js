import { Event } from "./Event";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";

// ADD DOCS
export class ServerDefaultChannelGroupUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = queryClient.clients.resolve(data.invokerid);
        const newGroupId = data.virtualserverDefaultChannelGroup;

        queryClient.emit(QueryClientEvents.ServerDefaultChannelGroupUpdated, invokingClient, newGroupId);
    }
}
