import { CodecEncryptionMode } from "../../structures/enums/CodecEncryptionMode";
import { Event } from "./Event";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";

// ADD DOCS
export class ServerCodecEncryptionModeUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const newEncryptionMode = data.virtualserverCodecEncryptionMode as CodecEncryptionMode;

        queryClient.emit(QueryClientEvents.ServerCodecEncryptionModeUpdated, invokingClient, newEncryptionMode);
    }
}
