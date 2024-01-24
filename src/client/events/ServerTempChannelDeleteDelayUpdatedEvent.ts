import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ServerTempChannelDeleteDelayUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const newDelay = data.virtualserverChannelTempDeleteDelayDefault;

        queryClient.emit(QueryClientEvents.ServerTempChannelDeleteDelayUpdated, invokingClient, newDelay);
    }
}
