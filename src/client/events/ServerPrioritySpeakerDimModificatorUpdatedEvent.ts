import { Event } from "@teamspeak.js/client/events/Event";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ServerPrioritySpeakerDimModificatorUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.clients.fetch(data.invokerid);
        const modificator = data.virtualserverPrioritySpeakerDimmModificator;

        queryClient.emit(QueryClientEvents.ServerPrioritySpeakerDimModificatorUpdated, invokingClient, modificator);
    }
}
