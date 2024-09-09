import { TeamspeakJsError } from "../TeamspeakJsError";

export class MissingArgumentsError extends TeamspeakJsError {
    constructor(requiredArgs: string[]) {
        super("MissingArguments", requiredArgs);
    }
}