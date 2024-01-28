import { QueryCommand } from "../QueryCommand";

/**
 * ### ChannelGroupList Command
 *
 * Displays a list of channel groups available on the selected virtual server.
 *
 * Permissions:
 *  - b_virtualserver_channelgroup_list
 *  - b_serverinstance_modify_templates
 *
 * Syntax:
 *  - channelgrouplist
 *
 * Example:
 *  - channelgrouplist
 */
export class ChannelGroupListCommand extends QueryCommand {
    private static readonly baseCommand = "channelgrouplist";

    constructor() {
        super(ChannelGroupListCommand.baseCommand);
    }
}
