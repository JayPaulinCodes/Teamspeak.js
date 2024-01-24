import { QueryCommand } from "../QueryCommand";

/**
 * ### WhoAmI Command
 *
 * Displays information about your current ServerQuery connection including your loginname, etc.
 *
 * Permissions:
 *  - b_serverinstance_help_view
 *
 * Syntax:
 *  - whoami
 *
 * Example:
 *  - whoami
 */
export class WhoAmICommand extends QueryCommand {
    private static readonly baseCommand = "whoami";

    constructor() {
        super(WhoAmICommand.baseCommand);
    }
}
