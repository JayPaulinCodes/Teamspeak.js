import { Event } from "@teamspeak.js/client/events/Event";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ServerHostBannerGfxUrlUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = queryClient.clients.resolve(data.invokerid);
        const newGfxUrl = data.virtualserverHostbannerGfxUrl;

        queryClient.emit(QueryClientEvents.ServerHostBannerGfxUrlUpdated, invokingClient, newGfxUrl);
    }
}
