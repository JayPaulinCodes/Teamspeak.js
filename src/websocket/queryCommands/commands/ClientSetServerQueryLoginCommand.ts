import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ClientSetServerQueryLogin Command
 *
 * Updates your own ServerQuery login credentials using a specified username. The password will be auto-generated.
 *
 * Permissions:
 *  - b_client_create_modify_serverquery_login
 *
 * Syntax:
 *  - clientsetserverquerylogin client_login_name={username}
 *
 * Example:
 *  - clientsetserverquerylogin client_login_name=admin
 */
export class ClientSetServerQueryLoginCommand extends QueryCommand {
    private static readonly baseCommand = "clientsetserverquerylogin";

    constructor(username: string) {
        super(ClientSetServerQueryLoginCommand.baseCommand, { username });
    }
}
