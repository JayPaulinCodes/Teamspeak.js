import { Event } from "./Event";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";

// ADD DOCS
export class ClientKickedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const dbId: number | null = queryClient.tryGetDatabaseId(data.clid);
        if (dbId === null) return;
        const client = await queryClient.getClientByDbId(dbId);
        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const channel = await queryClient.getChannelById(data.cfid);
        const reason = data.reasonmsg;

        queryClient.emit(QueryClientEvents.ClientKicked, client, invokingClient, channel, reason);
    }
}
