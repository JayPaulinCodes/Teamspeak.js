import { Event } from "@teamspeak.js/client/events/Event";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ServerDefaultServerGroupUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.clients.fetch(data.invokerid);
        const newGroupId = data.virtualserverDefaultServerGroup;

        queryClient.emit(QueryClientEvents.ServerDefaultServerGroupUpdated, invokingClient, newGroupId);
    }
}
