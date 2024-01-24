import { QueryCommand } from "../QueryCommand";

/**
 * ### ClientDbInfo Command
 *
 * Displays detailed database information about a client including unique ID, creation date, etc.
 *
 * Permissions:
 *  - b_virtualserver_client_dbinfo
 *
 * Syntax:
 *  - clientdbinfo cldbid={clientDBID}
 *
 * Example:
 *  - clientdbinfo cldbid=4
 */
export class ClientDbInfoCommand extends QueryCommand {
    private static readonly baseCommand = "clientdbinfo";

    // ADD DOCS
    constructor(clientDbId: number) {
        super(ClientDbInfoCommand.baseCommand, { cldbid: clientDbId });
    }
}
