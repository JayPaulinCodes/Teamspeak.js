import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ClientGetNameFromUId Command
 *
 * Displays the database ID and nickname matching the unique identifier specified by cluid.
 *
 * Permissions:
 *  - N/A
 *
 * Syntax:
 *  - clientgetnamefromuid cluid={clientUID}
 *
 * Example:
 *  - clientgetnamefromuid cluid=dyjxkshZP6bz0n3bnwFQ1CkwZOM=
 */
export class ClientGetNameFromUIdCommand extends QueryCommand {
    private static readonly baseCommand = "clientgetnamefromuid";

    // ADD DOCS
    constructor(uniqueId: number) {
        super(ClientGetNameFromUIdCommand.baseCommand, { cluid: uniqueId });
    }
}
