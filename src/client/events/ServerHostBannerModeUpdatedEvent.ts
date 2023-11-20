import { HostBannerMode } from "../../structures/enums/HostBannerMode";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ServerHostBannerModeUpdatedEvent extends Event {
    async handle(data) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const newBannerMode = data.virtualserverHostbannerMode as HostBannerMode;

        queryClient.emit(QueryClientEvents.ServerHostBannerModeUpdated, invokingClient, newBannerMode);
    }
}