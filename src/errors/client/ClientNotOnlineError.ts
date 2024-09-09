import { TeamspeakJsError } from "../TeamspeakJsError";

export class ClientNotOnlineError extends TeamspeakJsError {
    constructor(action: string) {
        super("ClientNotOnline", action);
    }
}