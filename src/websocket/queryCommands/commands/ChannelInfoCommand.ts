import { QueryCommand } from "../QueryCommand";

/**
 * ### ChannelInfo Command
 *
 * Displays detailed configuration information about a channel including ID,
 * topic, description, etc. For detailed information, see Channel Properties.
 *
 * Permissions:
 *  - b_channel_info_view
 *
 * Syntax:
 *  - channelinfo cid={channelID}
 *
 * Example:
 *  - channelinfo cid=1
 */
export class ChannelInfoCommand extends QueryCommand {
    private static readonly baseCommand = "channelinfo";

    // ADD DOCS
    constructor(channelId: number) {
        super(ChannelInfoCommand.baseCommand, { cid: channelId });
    }
}
