import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ClientConnectionDroppedEvent extends Event {
    async handle(data) {
        const queryClient = this.queryClient;

        const client = await queryClient.getClientByDbId(this.queryClient.serverDatabaseIdMap[`id_${data.clid}`]);
        const channel = await queryClient.getChannelById(data.cfid);
        const reason = data.reasonmsg;

        queryClient.emit(QueryClientEvents.ClientConnectionDropped, client, channel, reason);
    }
}