import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ClientFind Command
 *
 * Displays a list of clients matching a given name pattern.
 *
 * Permissions:
 *  - b_virtualserver_client_search
 *
 * Syntax:
 *  - clientfind pattern={clientName}
 *
 * Example:
 *  - clientfind pattern=sven
 */
export class ClientFindCommand extends QueryCommand {
    private static readonly baseCommand = "clientfind";

    // ADD DOCS
    constructor(name: string) {
        super(ClientFindCommand.baseCommand, { pattern: name });
    }
}
