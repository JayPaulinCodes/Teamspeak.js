import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### BanDel Command
 *
 * Deletes the ban rule with ID banid from the server.
 *
 * Permissions:
 *  - b_client_ban_delete
 *  - b_client_ban_delete_own
 *
 * Syntax:
 *  - bandel banid={banID}
 *
 * Example:
 *  - bandel banid=3
 */
export class BanDelCommand extends QueryCommand {
    private static readonly baseCommand = "bandel";

    // ADD DOCS
    constructor(banId: number) {
        super(BanDelCommand.baseCommand, { banID: banId });
    }
}
