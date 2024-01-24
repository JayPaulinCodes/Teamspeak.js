import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ClientDisconnectedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const client = await queryClient.getClientByDbId(this.queryClient.serverDatabaseIdMap[`id_${data.clid}`]);
        const channel = await queryClient.getChannelById(data.cfid);
        const reason = data.reasonmsg;

        queryClient.emit(QueryClientEvents.ClientDisconnected, client, channel, reason);
    }
}
