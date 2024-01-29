import { ComplexQueryOptionElem } from "../interfaces/ComplexQueryOptionElem";
import { QueryCommand } from "../QueryCommand";

/**
 * ### ChannelGroupDel Command
 *
 * Deletes a channel group by ID. If force is set to 1, the channel
 * group will be deleted even if there are clients within.
 *
 * Permissions:
 *  - b_virtualserver_channelgroup_delete
 *
 * Syntax:
 *  - channelgroupdel cgid={groupID} force={1|0}
 *
 * Example:
 *  - channelgroupdel cgid=13
 */
export class ChannelGroupDelCommand extends QueryCommand {
    private static readonly baseCommand = "channeldelete";

    // ADD DOCS
    constructor(groupId: number, forceDelete: boolean = false) {
        super(ChannelGroupDelCommand.baseCommand, { cgid: groupId, force: forceDelete });
    }
}
