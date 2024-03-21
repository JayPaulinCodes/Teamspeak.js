import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ClientGetDbIdFromUId Command
 *
 * Displays the database ID matching the unique identifier specified by cluid.
 *
 * Permissions:
 *  - N/A
 *
 * Syntax:
 *  - clientgetdbidfromuid cluid={clientUID}
 *
 * Example:
 *  - clientgetdbidfromuid cluid=dyjxkshZP6bz0n3bnwFQ1CkwZOM=
 */
export class ClientGetDbIdFromUIdCommand extends QueryCommand {
    private static readonly baseCommand = "clientgetdbidfromuid";

    // ADD DOCS
    constructor(uniqueId: string) {
        super(ClientGetDbIdFromUIdCommand.baseCommand, { cluid: uniqueId });
    }
}
