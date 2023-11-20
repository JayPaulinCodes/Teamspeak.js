import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ServerPrioritySpeakerDimModificatorUpdatedEvent extends Event {
    async handle(data) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const modificator = data.virtualserverPrioritySpeakerDimmModificator;
        
        queryClient.emit(QueryClientEvents.ServerPrioritySpeakerDimModificatorUpdated, invokingClient, modificator);
    }
}