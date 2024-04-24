import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ClientDelPerm Command
 *
 * Removes a set of specified permissions from a client.
 * Multiple permissions can be removed at once. A permission
 * can be specified by permid or permsid.
 *
 * Permissions:
 *  - i_group_modify_power
 *  - i_group_needed_modify_power
 *  - i_permission_modify_power
 *
 * Syntax:
 *  - clientdelperm cldbid={clientDBID} [permid={permID}…] [permsid={permName}…]
 *
 * Example:
 *  - clientdelperm cldbid=16 permid=17276|permid=21415
 */
export class ClientDelPermCommand extends QueryCommand {
    private static readonly baseCommand = "clientdelperm";

    // ADD DOCS
    constructor(clientDbId: number, permissionsId: number[] = [], permissionSid: number[] = []) {
        super(ClientDelPermCommand.baseCommand, { cldbid: clientDbId, permid: permissionsId, permsid: permissionSid });
    }
}
