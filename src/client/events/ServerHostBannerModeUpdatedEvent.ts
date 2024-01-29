import { Event } from "./Event";
import { HostBannerMode } from "../../structures/enums/HostBannerMode";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";

// ADD DOCS
export class ServerHostBannerModeUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const newBannerMode = data.virtualserverHostbannerMode as HostBannerMode;

        queryClient.emit(QueryClientEvents.ServerHostBannerModeUpdated, invokingClient, newBannerMode);
    }
}
