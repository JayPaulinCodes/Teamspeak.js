import { QueryCommand } from "../QueryCommand";

/**
 * ### BanList Command
 *
 * Displays a list of active bans on the selected virtual server.
 *
 * Permissions:
 *  - b_client_ban_list
 *
 * Syntax:
 *  - banlist
 *
 * Example:
 *  - banlist
 */
export class BanListCommand extends QueryCommand {
    private static readonly baseCommand = "banlist";

    // ADD DOCS
    constructor() {
        super(BanListCommand.baseCommand);
    }
}
