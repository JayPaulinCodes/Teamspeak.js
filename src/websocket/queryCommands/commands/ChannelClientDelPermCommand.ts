import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ChannelClientDelPerm Command
 *
 * Removes a set of specified permissions from a client in a
 * specific channel. Multiple permissions can be removed at
 * once. A permission can be specified by permid or permsid.
 *
 * Permissions:
 *  - i_group_modify_power
 *  - i_group_needed_modify_power
 *  - i_permission_modify_power
 *
 * Syntax:
 *  - channelclientdelperm cid={channelID} cldbid={clientDBID} [permid={permID}...] [permsid={permName}...]
 *
 * Example:
 *  - channelclientdelperm cid=12 cldbid=3 permid=17276|permid=21415
 */
export class ChannelClientDelPermCommand extends QueryCommand {
    private static readonly baseCommand = "channelclientpermlist";

    // ADD DOCS
    constructor(channelId: number, clientDbId: number, permissionsId: number[] = [], permissionSid: number[] = []) {
        super(ChannelClientDelPermCommand.baseCommand, {
            cid: channelId,
            cldbid: clientDbId,
            permid: permissionsId,
            permsid: permissionSid
        });
    }
}
