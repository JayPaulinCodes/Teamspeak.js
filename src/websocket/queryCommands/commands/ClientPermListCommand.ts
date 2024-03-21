import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ClientPermList Command
 *
 * Displays a list of permissions defined for a client.
 *
 * Permissions:
 *  - b_virtualserver_client_permission_list
 *
 * Syntax:
 *  - clientpermlist cldbid={clientDBID} [-permsid]
 *
 * Example:
 *  - clientpermlist cldbid=2
 */
export class ClientPermListCommand extends QueryCommand {
    private static readonly baseCommand = "clientpermlist";

    // ADD DOCS
    constructor(clientDbId: number, useSid: boolean = false) {
        const flags = useSid ? ["-permsid"] : undefined;
        super(ClientPermListCommand.baseCommand, { cldbid: clientDbId }, flags);
    }
}
