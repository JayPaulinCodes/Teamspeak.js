import { QueryCommand } from "../QueryCommand";

/**
 * ### ChannelFind Command
 *
 * Displays a list of channels matching a given name pattern.
 *
 * Permissions:
 *  - b_virtualserver_channel_search
 *
 * Syntax:
 *  - channelfind pattern={channelName}
 *
 * Example:
 *  - channelfind pattern=default
 */
export class ChannelFindCommand extends QueryCommand {
    private static readonly baseCommand = "channelfind";

    // ADD DOCS
    constructor(channelName: string) {
        super(ChannelFindCommand.baseCommand, { pattern: channelName });
    }
}
