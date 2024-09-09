import { TeamspeakJsError } from "../TeamspeakJsError";

export class ClientOnlineWithoutServerIdError extends TeamspeakJsError {
    constructor(clientUniqueId: string) {
        super("ClientOnlineWithoutServerId", clientUniqueId);
    }
}