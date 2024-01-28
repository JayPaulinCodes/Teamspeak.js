import { QueryCommand } from "../QueryCommand";
import { ComplexQueryOptionElem } from "../interfaces/ComplexQueryOptionElem";

/**
 * ### ChannelClientPermList Command
 *
 * Displays a list of permissions defined for a client in a specific channel.
 *
 * Permissions:
 *  - b_virtualserver_channelclient_permission_list
 *
 * Syntax:
 *  - channelclientpermlist cid={channelID} cldbid={clientDBID} [-permsid]
 *
 * Example:
 *  - channelclientpermlist cid=12 cldbid=3
 */
export class ChannelClientPermListCommand extends QueryCommand {
    private static readonly baseCommand = "channelclientpermlist";

    // ADD DOCS
    constructor(channelId: number, clientDbId: number, showPermSid: boolean = false) {
        const flags = [];
        if (showPermSid) {
            flags.push("-permsid");
        }

        super(ChannelClientPermListCommand.baseCommand, { cid: channelId, cldbid: clientDbId }, flags);
    }
}
