import { TeamspeakJsError } from "../TeamspeakJsError";

export class InvalidOptionError extends TeamspeakJsError {
    constructor(prop: string, expected: string, given: string) {
        super("InvalidOption", prop, expected, given);
    }
}