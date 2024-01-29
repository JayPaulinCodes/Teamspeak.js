import { QueryCommand } from "../QueryCommand";

/**
 * ### ChannelGroupRename Command
 *
 * Changes the name of a specified channel group.
 *
 * Permissions:
 *  - i_group_modify_power
 *  - i_group_needed_modify_power
 *
 * Syntax:
 *  - channelgrouprename cgid={groupID} name={groupName}
 *
 * Example:
 *  - channelgrouprename cgid=13 name=New\sName
 */
export class ChannelGroupRenameCommand extends QueryCommand {
    private static readonly baseCommand = "channelgrouprename";

    // ADD DOCS
    constructor(groupId: number, name: string) {
        super(ChannelGroupRenameCommand.baseCommand, { cgid: groupId, name: name });
    }
}
