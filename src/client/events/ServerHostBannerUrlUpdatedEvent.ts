import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ServerHostBannerUrlUpdatedEvent extends Event {
    async handle(data) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const newUrl = data.virtualserverHostbannerUrl;

        queryClient.emit(QueryClientEvents.ServerHostBannerUrlUpdated, invokingClient, newUrl);
    }
}