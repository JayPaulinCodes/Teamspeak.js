import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ServerPrioritySpeakerDimModificatorUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const modificator = data.virtualserverPrioritySpeakerDimmModificator;

        queryClient.emit(QueryClientEvents.ServerPrioritySpeakerDimModificatorUpdated, invokingClient, modificator);
    }
}
