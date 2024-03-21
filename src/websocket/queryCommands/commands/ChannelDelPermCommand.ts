import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ChannelDelPerm Command
 *
 * Removes a set of specified permissions from a channel.
 * Multiple permissions can be removed at once. A permission
 * can be specified by permid or permsid.
 *
 * Permissions:
 *  - i_group_modify_power
 *  - i_group_needed_modify_power
 *  - i_permission_modify_power
 *
 * Syntax:
 *  - channeldelperm cid=123 [permid={permID}…] [permsid={permName}…]
 *
 * Example:
 *  - channeldelperm cid=16 permid=17276|permid=21415
 */
export class ChannelDelPermCommand extends QueryCommand {
    private static readonly baseCommand = "channeldelete";

    // ADD DOCS
    constructor(channelId: number, permissionsId: number[] = [], permissionSid: number[] = []) {
        super(ChannelDelPermCommand.baseCommand, { cid: channelId, permid: permissionsId, permsid: permissionSid });
    }
}
