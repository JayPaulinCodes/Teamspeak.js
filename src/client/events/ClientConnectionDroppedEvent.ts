import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ClientConnectionDroppedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const dbId: number | null = this.queryClient.tryGetDatabaseId(data.clid);
        if (dbId === null) return;
        const client = await queryClient.getClientByDbId(dbId);
        const channel = await queryClient.getChannelById(data.cfid);
        const reason = data.reasonmsg;

        queryClient.emit(QueryClientEvents.ClientConnectionDropped, client, channel, reason);
    }
}
