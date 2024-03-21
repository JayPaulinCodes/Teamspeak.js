import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ClientDbFind Command
 *
 * Displays a list of client database IDs matching a given pattern. 
 * You can either search for a clients last known nickname or his unique 
 * identity by using the -uid option. The pattern parameter can include 
 * regular characters and SQL wildcard characters (e.g. %).
 *
 * Permissions:
 *  - b_virtualserver_client_dbsearch
 *
 * Syntax:
 *  - clientdbfind pattern={clientName|clientUID} [-uid]
 *
 * Example:
 *  - clientdbfind pattern=%Sven%
 */
export class ClientDbFindCommand extends QueryCommand {
    private static readonly baseCommand = "clientdbfind";

    // ADD DOCS
    constructor(uniqueIdOrName: string, useUniqueId: boolean) {
        const FLAGS = useUniqueId ? [ "-uid" ] : [];
        super(ClientDbFindCommand.baseCommand, { pattern: uniqueIdOrName }, FLAGS);
    }
}
