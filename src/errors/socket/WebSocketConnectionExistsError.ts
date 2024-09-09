import { TeamspeakJsError } from "../TeamspeakJsError";

export class WebSocketConnectionExistsError extends TeamspeakJsError {
    constructor() {
        super("WebSocketConnectionExists");
    }
}