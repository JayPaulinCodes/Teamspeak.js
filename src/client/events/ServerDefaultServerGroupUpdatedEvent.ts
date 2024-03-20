import { Event } from "./Event";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";

// ADD DOCS
export class ServerDefaultServerGroupUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = queryClient.clients.resolve(data.invokerid);
        const newGroupId = data.virtualserverDefaultServerGroup;

        queryClient.emit(QueryClientEvents.ServerDefaultServerGroupUpdated, invokingClient, newGroupId);
    }
}
