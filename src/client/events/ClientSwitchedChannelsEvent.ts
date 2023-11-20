import { CodecEncryptionMode } from "../../structures/enums/CodecEncryptionMode";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ClientSwitchedChannelsEvent extends Event {
    async handle(data) {
        const queryClient = this.queryClient;

        const movingClient = await queryClient.getClientByServerId(data.clid);
        const channel = await queryClient.getChannelById(data.ctid);

        queryClient.emit(QueryClientEvents.ClientSwitchedChannels, movingClient, channel);
    }
}