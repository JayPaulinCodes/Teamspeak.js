import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ServerHostButtonTooltipUpdatedEvent extends Event {
    async handle(data) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const newTooltip = data.virtualserverHostbuttonTooltip;

        queryClient.emit(QueryClientEvents.ServerHostButtonTooltipUpdated, invokingClient, newTooltip);
    }
}