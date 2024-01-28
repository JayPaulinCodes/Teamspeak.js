import { QueryCommand } from "../QueryCommand";
import { ComplexQueryOptionElem } from "../interfaces/ComplexQueryOptionElem";

/**
 * ### ChannelPermList Command
 *
 * Displays a list of permissions defined for a channel.
 *
 * Permissions:
 *  - b_virtualserver_channel_permission_list
 *
 * Syntax:
 *  - channelpermlist cid={channelID} [-permsid]
 *
 * Example:
 *  - channelpermlist cid=2
 */
export class ChannelPermListCommand extends QueryCommand {
    private static readonly baseCommand = "channelpermlist";

    // ADD DOCS
    constructor(channelId: number, showPermSid: boolean = false) {
        const flags = [];
        if (showPermSid) {
            flags.push("-permsid");
        }

        super(ChannelPermListCommand.baseCommand, { cid: channelId }, flags);
    }
}
