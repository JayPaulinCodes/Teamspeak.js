import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ChannelGroupDelPerm Command
 *
 * Removes a set of specified permissions from the channel
 * group. Multiple permissions can be removed at once.
 * A permission can be specified by permid or permsid.
 *
 * Permissions:
 *  - i_group_modify_power
 *  - i_group_needed_modify_power
 *  - i_permission_modify_power
 *
 * Syntax:
 *  - channelgroupdelperm cgid={groupID} [permid={permID}…] [permsid={permName}…]
 *
 * Example:
 *  - channelgroupdelperm cgid=16 permid=17276|permid=21415
 */
export class ChannelGroupDelPermCommand extends QueryCommand {
    private static readonly baseCommand = "channelgroupdelperm";

    // ADD DOCS
    constructor(groupId: number, permissionsId: number[] = [], permissionSid: number[] = []) {
        super(ChannelGroupDelPermCommand.baseCommand, { cgid: groupId, permid: permissionsId, permsid: permissionSid });
    }
}
