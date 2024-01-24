import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ServerIconUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const newIconId = data.virtualserverIconId;

        queryClient.emit(QueryClientEvents.ServerIconUpdated, invokingClient, newIconId);
    }
}
