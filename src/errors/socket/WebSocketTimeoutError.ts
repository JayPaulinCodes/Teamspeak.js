import { TeamspeakJsError } from "../TeamspeakJsError";

export class WebSocketTimeoutError extends TeamspeakJsError {
    constructor() {
        super("WebSocketTimeout");
    }
}