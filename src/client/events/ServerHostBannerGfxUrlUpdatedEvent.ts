import { Event } from "./Event";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";

// ADD DOCS
export class ServerHostBannerGfxUrlUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const newGfxUrl = data.virtualserverHostbannerGfxUrl;

        queryClient.emit(QueryClientEvents.ServerHostBannerGfxUrlUpdated, invokingClient, newGfxUrl);
    }
}
