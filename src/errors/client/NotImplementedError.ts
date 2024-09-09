import { TeamspeakJsError } from "../TeamspeakJsError";

export class NotImplementedError extends TeamspeakJsError {
    constructor(method: string, futurePlan: boolean = false) {
        super("NotImplemented", method, futurePlan);
    }
}