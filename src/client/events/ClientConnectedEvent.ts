import { Event } from "./Event";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";

// ADD DOCS
export class ClientConnectedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const client = queryClient.clients.resolve(data.clid);
        const channel = queryClient.channels.resolve(data.ctid);

        // if (client.databaseId !== null) {
        //     queryClient.updateDatabaseId(data.clid, client.databaseId);
        // }

        queryClient.emit(QueryClientEvents.ClientConnected, client, channel);
    }
}
