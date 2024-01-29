import { QueryCommand } from "../QueryCommand";

/**
 * ### ChannelGroupAdd Command
 *
 * Creates a new channel group using a given name and displays its ID.
 * The optional type parameter can be used to create template groups.
 *
 * Permissions:
 *  - b_virtualserver_channelgroup_create
 *
 * Syntax:
 *  - channelgroupadd name={groupName} [type={groupDbType}]
 *
 * Example:
 *  - channelgroupadd name=Channel\sAdmin
 */
export class ChannelGroupAddCommand extends QueryCommand {
    private static readonly baseCommand = "channelgroupadd";

    // ADD DOCS
    constructor(groupName: string, type: string | undefined = undefined) {
        const PARAMS: { [index: string]: any } = {
            name: groupName
        };

        if (type !== undefined) {
            PARAMS["type"] = type;
        }

        super(ChannelGroupAddCommand.baseCommand, PARAMS);
    }
}
