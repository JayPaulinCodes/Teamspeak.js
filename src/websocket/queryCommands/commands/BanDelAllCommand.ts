import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### BanDelAll Command
 *
 * Deletes all active ban rules from the server.
 *
 * Permissions:
 *  - b_client_ban_delete
 *
 * Syntax:
 *  - bandelall
 *
 * Example:
 *  - bandelall
 */
export class BanDelAllCommand extends QueryCommand {
    private static readonly baseCommand = "bandelall";

    // ADD DOCS
    constructor() {
        super(BanDelAllCommand.baseCommand);
    }
}
