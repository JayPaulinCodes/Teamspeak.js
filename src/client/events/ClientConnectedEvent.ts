import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ClientConnectedEvent extends Event {
    async handle(data) {
        const queryClient = this.queryClient;

        const client = await queryClient.getClientByServerId(data.clid);
        const channel = await queryClient.getChannelById(data.ctid);

        if (client.databaseId !== null) {
            queryClient.serverDatabaseIdMap[`id_${data.clid}`] = client.databaseId;
        }

        queryClient.emit(QueryClientEvents.ClientConnected, client, channel);
    }
}