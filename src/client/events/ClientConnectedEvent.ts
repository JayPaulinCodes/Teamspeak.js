import { Event } from "@teamspeak.js/client/events/Event";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ClientConnectedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const client = await queryClient.clients.fetch(data.clientUniqueIdentifier, { force: true });
        const channel = await queryClient.channels.fetch(data.ctid);

        // if (client.databaseId !== null) {
        //     queryClient.updateDatabaseId(data.clid, client.databaseId);
        // }

        queryClient.emit(QueryClientEvents.ClientConnected, client, channel);
    }
}
