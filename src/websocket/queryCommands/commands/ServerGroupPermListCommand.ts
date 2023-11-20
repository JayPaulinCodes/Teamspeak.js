import { QueryCommand } from "../QueryCommand";

/**
 * ### ServerGroupPermList Command
 * 
 * Displays a list of permissions assigned to the server group specified with sgid. If the -permsid option is specified, the output will contain the permission names instead of the internal IDs.
 * 
 * Permissions: 
 *  - b_virtualserver_servergroup_permission_list
 * 
 * Syntax:
 *  - servergrouppermlist sgid={groupID} [-permsid]
 * 
 * Example:
 *  - servergrouppermlist sgid=13
 */
export class ServerGroupPermListCommand extends QueryCommand {
    private static readonly baseCommand = "servergrouppermlist";

    // ADD DOCS
    constructor(serverGroupId: number, useSid: boolean = false) {
        const flags = useSid ? [ "-permsid" ] : undefined
        super(ServerGroupPermListCommand.baseCommand, { sgid: serverGroupId }, flags);
    }
}