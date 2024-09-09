import { TeamspeakJsError } from "../TeamspeakJsError";

export class StringEmptyError extends TeamspeakJsError {
    constructor(prop: string) {
        super("StringEmpty", prop);
    }
}