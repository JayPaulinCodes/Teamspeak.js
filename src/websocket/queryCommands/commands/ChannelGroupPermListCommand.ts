import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ChannelGroupPermList Command
 *
 * Displays a list of permissions assigned to the channel
 * group specified with cgid. If the -permsid option is specified,
 * the output will contain the permission names instead of the internal IDs.
 *
 * Permissions:
 *  - b_virtualserver_channelgroup_permission_list
 *
 * Syntax:
 *  - channelgrouppermlist cgid={groupID} [-permsid]
 *
 * Example:
 *  - channelgrouppermlist cgid=13
 */
export class ChannelGroupPermListCommand extends QueryCommand {
    private static readonly baseCommand = "channelgrouppermlist";

    // ADD DOCS
    constructor(groupId: number, showPermSid: boolean = false) {
        const flags = [];
        if (showPermSid) {
            flags.push("-permsid");
        }

        super(ChannelGroupPermListCommand.baseCommand, { cgid: groupId }, flags);
    }
}
