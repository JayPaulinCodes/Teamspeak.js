import { QueryCommand } from "../QueryCommand";

/**
 * ### ChannelList Command
 *
 * Displays a list of channels created on a virtual server
 * including their ID, order, name, etc. The output can be
 * modified using several command options.
 *
 * Permissions:
 *  - b_virtualserver_channel_list
 *
 * Syntax:
 *  - channellist [-topic] [-flags] [-voice] [-limits] [-icon] [-secondsempty]
 *
 * Example:
 *  - channellist -topic
 */
export class ChannelListCommand extends QueryCommand {
    private static readonly baseCommand = "channellist";
    private static readonly allowedFlags = ["topic", "flags", "voice", "limits", "icon", "secondsempty"];

    // ADD DOCS
    constructor(flags: string[] = []) {
        const _flags = [];

        for (let i = 0; i < flags.length; i++) {
            const flag = flags[i];

            if (ChannelListCommand.allowedFlags.includes(flag)) {
                _flags.push(`-${flag}`);
            }
        }

        super(ChannelListCommand.baseCommand, undefined, _flags);
    }
}
