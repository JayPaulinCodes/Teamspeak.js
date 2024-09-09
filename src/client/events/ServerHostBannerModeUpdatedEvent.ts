import { Event } from "@teamspeak.js/client/events/Event";
import { HostBannerMode } from "@teamspeak.js/structures/enums/HostBannerMode";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ServerHostBannerModeUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.clients.fetch(data.invokerid);
        const newBannerMode = data.virtualserverHostbannerMode as HostBannerMode;

        queryClient.emit(QueryClientEvents.ServerHostBannerModeUpdated, invokingClient, newBannerMode);
    }
}
