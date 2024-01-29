import { QueryCommand } from "../QueryCommand";

/**
 * ### ChannelDelete Command
 *
 * Deletes an existing channel by ID. If force is set to 1,
 * the channel will be deleted even if there are clients within.
 * The clients will be kicked to the default channel with an appropriate
 * reason message.
 *
 * Permissions:
 *  - b_channel_delete_permanent
 *  - b_channel_delete_semi_permanent
 *  - b_channel_delete_temporary
 *  - b_channel_delete_flag_force
 *
 * Syntax:
 *  - channeldelete cid={channelID} force={1|0}
 *
 * Example:
 *  - channeldelete cid=16 force=1
 */
export class ChannelDeleteCommand extends QueryCommand {
    private static readonly baseCommand = "channeldelete";

    // ADD DOCS
    constructor(channelId: number, forceDelete: boolean = false) {
        super(ChannelDeleteCommand.baseCommand, { cid: channelId, force: forceDelete });
    }
}
