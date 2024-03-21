import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ClientGetUIdFromClId Command
 *
 * Displays the unique identifier matching the clientID specified by clid.
 *
 * Permissions:
 *  - N/A
 *
 * Syntax:
 *  - clientgetuidfromclid clid={clientID}
 *
 * Example:
 *  - clientgetuidfromclid clid=8
 */
export class ClientGetUIdFromClIdCommand extends QueryCommand {
    private static readonly baseCommand = "clientgetuidfromclid";

    // ADD DOCS
    constructor(clientId: number) {
        super(ClientGetUIdFromClIdCommand.baseCommand, { clid: clientId });
    }
}
