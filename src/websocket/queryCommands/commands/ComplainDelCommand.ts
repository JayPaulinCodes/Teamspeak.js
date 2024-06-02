import { Client } from "@teamspeak.js/structures/Client";
import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ComplainDel Command
 *
 * Deletes the complaint about the client with ID tcldbid submitted by the client with ID fcldbid from the server.
 *
 * Permissions:
 *  - b_client_complain_delete
 *  - b_client_complain_delete_own
 *
 * Syntax:
 *  - complaindel tcldbid={targetClientDBID} fcldbid={fromClientDBID}
 *
 * Example:
 *  - complaindel tcldbid=3 fcldbid=4
 */
export class ComplainDelCommand extends QueryCommand {
    private static readonly baseCommand = "complaindel";

    constructor(target: Client | number, submitter: Client | number) {
        super(ComplainDelCommand.baseCommand, {
            tcldbid: typeof target === "number" ? target : target?.databaseId ?? -1,
            fcldbid: typeof submitter === "number" ? submitter : submitter?.databaseId ?? -1,
        });
    }
}
