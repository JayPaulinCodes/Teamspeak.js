import { QueryCommand } from "../QueryCommand";

/**
 * ### ClientInfo Command
 * 
 * Displays detailed configuration information about a client including unique ID, nickname, client version, etc.
 * 
 * Permissions: 
 *  - b_client_info_view
 * 
 * Syntax:
 *  - clientinfo clid={clientID}
 * 
 * Example:
 *  - clientinfo clid=6
 */
export class ClientInfoCommand extends QueryCommand {
    private static readonly baseCommand = "clientinfo";

    // ADD DOCS
    constructor(clientId: number) {
        super(ClientInfoCommand.baseCommand, { clid: clientId });
    }
}