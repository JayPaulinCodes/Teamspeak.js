import { CodecEncryptionMode } from "../../structures/enums/CodecEncryptionMode";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ClientKickedFromChannelEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const movingClient = await queryClient.getClientByServerId(data.clid);
        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const channel = await queryClient.getChannelById(data.ctid);

        queryClient.emit(
            QueryClientEvents.ClientKickedFromChannel,
            movingClient,
            channel,
            invokingClient,
            data.reasonmsg
        );
    }
}
