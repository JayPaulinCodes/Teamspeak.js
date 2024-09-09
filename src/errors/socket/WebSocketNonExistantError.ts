import { TeamspeakJsError } from "../TeamspeakJsError";

export class WebSocketNonExistantError extends TeamspeakJsError {
    constructor() {
        super("WebSocketNonExistant");
    }
}