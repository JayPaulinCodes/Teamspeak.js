import { QueryCommand } from "../QueryCommand";

/**
 * ### Login Command
 * 
 * Authenticates with the TeamSpeak 3 Server instance using given ServerQuery login credentials.
 * 
 * Permissions: 
 *  - b_serverquery_login
 * 
 * Syntax:
 *  - login client_login_name={username} client_login_password={password}
 *  - login {username} {password}
 * 
 * Example:
 *  - login client_login_name=xyz client_login_password=xyz
 */
export class LoginCommand extends QueryCommand {
    private static readonly baseCommand = "login";

    // ADD DOCS
    constructor(username: string, password: string) {
        super(LoginCommand.baseCommand, {
            ["client_login_name"]: username,
            ["client_login_password"]: password
        });
    }
}