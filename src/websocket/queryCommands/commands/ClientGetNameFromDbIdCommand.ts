import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ClientGetNameFromDbId Command
 *
 * Displays the unique identifier and nickname matching the database ID specified by cldbid.
 *
 * Permissions:
 *  - N/A
 *
 * Syntax:
 *  - clientgetnamefromdbid cldbid={clientDBID}
 *
 * Example:
 *  - clientgetnamefromdbid cldbid=32
 */
export class ClientGetNameFromDbIdCommand extends QueryCommand {
    private static readonly baseCommand = "clientgetnamefromdbid";

    // ADD DOCS
    constructor(clientDbId: number) {
        super(ClientGetNameFromDbIdCommand.baseCommand, { cldbid: clientDbId });
    }
}
