import { TeamspeakJsError } from "../TeamspeakJsError";

export class MissingOptionError extends TeamspeakJsError {
    constructor(prop: string) {
        super("MissingOption", prop);
    }
}