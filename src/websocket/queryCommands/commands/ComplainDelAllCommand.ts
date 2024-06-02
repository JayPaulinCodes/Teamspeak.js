import { Client } from "@teamspeak.js/structures/Client";
import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ComplainDelAll Command
 *
 * Deletes all complaints about the client with database ID tcldbid from the server.
 *
 * Permissions:
 *  - b_client_complain_delete
 *
 * Syntax:
 *  - complaindelall tcldbid={targetClientDBID}
 *
 * Example:
 *  - complaindelall tcldbid=3
 */
export class ComplainDelAllCommand extends QueryCommand {
    private static readonly baseCommand = "complaindelall";

    constructor(target: Client | number) {
        super(ComplainDelAllCommand.baseCommand, {
            tcldbid: typeof target === "number" ? target : target?.databaseId ?? -1,
        });
    }
}
