import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ClientDbList Command
 *
 * Displays a list of client identities known by the server
 * including their database ID, last nickname, etc.
 *
 * Permissions:
 *  - b_virtualserver_client_dblist
 *
 * Syntax:
 *  - clientdblist [start={offset}] [duration={limit}] [-count]
 *
 * Example:
 *  - clientdblist
 */
// TODO: Revisit this and figure out the command's actual params
export class ClientDbListCommand extends QueryCommand {
    private static readonly baseCommand = "clientdblist";

    // ADD DOCS
    constructor(offset?: number) {
        if (offset !== undefined) {
            super(ClientDbListCommand.baseCommand, { start: offset });
        } else {
            super(ClientDbListCommand.baseCommand);
        }
    }
}
