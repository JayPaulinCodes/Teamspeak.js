import { Event } from "@teamspeak.js/client/events/Event";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ServerTempChannelDeleteDelayUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.clients.fetch(data.invokerid);
        const newDelay = data.virtualserverChannelTempDeleteDelayDefault;

        queryClient.emit(QueryClientEvents.ServerTempChannelDeleteDelayUpdated, invokingClient, newDelay);
    }
}
