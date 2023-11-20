import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ServerNameUpdatedEvent extends Event {
    async handle(data) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const newName = data.virtualserverName;

        queryClient.emit(QueryClientEvents.ServerNameUpdated, invokingClient, newName);
    }
}