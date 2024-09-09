import { TeamspeakJsError } from "../TeamspeakJsError";

export class ClientMissingDatabaseIdError extends TeamspeakJsError {
    constructor(action: string) {
        super("ClientMissingDatabaseId", action);
    }
}