import { Event } from "@teamspeak.js/client/events/Event";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ServerNicknameUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.clients.fetch(data.invokerid);
        const newNickname = data.virtualserverNickname;

        queryClient.emit(QueryClientEvents.ServerNicknameUpdated, invokingClient, newNickname);
    }
}
