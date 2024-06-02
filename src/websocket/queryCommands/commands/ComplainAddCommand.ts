import { Client } from "@teamspeak.js/structures/Client";
import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ComplainAdd Command
 *
 * Submits a complaint about a connected client with database ID tcldbid to the server.
 *
 * Permissions:
 *  - i_client_complain_power
 *  - i_client_needed_complain_power
 *
 * Syntax:
 *  - complainadd tcldbid={targetClientDBID} message={text}
 *
 * Example:
 *  - complainadd tcldbid=3 message=Bad\sguy!
 */
export class ComplainAddCommand extends QueryCommand {
    private static readonly baseCommand = "complainadd";

    constructor(target: Client | number, reason: string) {
        // if (typeof target !== "number") { target }
        super(ComplainAddCommand.baseCommand, {
            tcldbid: typeof target === "number" ? target : target?.databaseId ?? -1,
            message: reason
        });
    }
}
