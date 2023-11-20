import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ServerHostButtonUrlUpdatedEvent extends Event {
    async handle(data) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const newUrl = data.virtualserverHostbuttonUrl;

        queryClient.emit(QueryClientEvents.ServerHostButtonUrlUpdated, invokingClient, newUrl);
    }
}