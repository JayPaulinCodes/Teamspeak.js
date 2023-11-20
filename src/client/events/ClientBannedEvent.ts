import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ClientBannedEvent extends Event {
    async handle(data) {
        const queryClient = this.queryClient;

        const client = await queryClient.getClientByDbId(this.queryClient.serverDatabaseIdMap[`id_${data.clid}`]);
        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const channel = await queryClient.getChannelById(data.cfid);
        const reason = data.reasonmsg;
        const bantime = data.bantime;

        queryClient.emit(QueryClientEvents.ClientBanned, client, invokingClient, channel, reason, bantime);
    }
}