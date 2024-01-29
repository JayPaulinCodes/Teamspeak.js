import { QueryCommand } from "../QueryCommand";

/**
 * ### ClientDbDelete Command
 *
 * Deletes a clients properties from the database.
 *
 * Permissions:
 *  - b_client_delete_dbproperties
 *
 * Syntax:
 *  - clientdbdelete cldbid={clientDBID}
 *
 * Example:
 *  - clientdbdelete cldbid=56
 */
export class ClientDbDeleteCommand extends QueryCommand {
    private static readonly baseCommand = "clientdbdelete";

    // ADD DOCS
    constructor(clientDbId: number) {
        super(ClientDbDeleteCommand.baseCommand, { cldbid: clientDbId });
    }
}
