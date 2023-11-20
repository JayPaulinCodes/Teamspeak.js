import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ServerHostBannerGfxUrlUpdatedEvent extends Event {
    async handle(data) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const newGfxUrl = data.virtualserverHostbannerGfxUrl;

        queryClient.emit(QueryClientEvents.ServerHostBannerGfxUrlUpdated, invokingClient, newGfxUrl);
    }
}