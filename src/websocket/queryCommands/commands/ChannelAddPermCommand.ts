import { ComplexQueryOptionElem } from "@teamspeak.js/websocket/queryCommands/interfaces/ComplexQueryOptionElem";
import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ChannelAddPerm Command
 *
 * Adds a set of specified permissions to a channel.
 * Multiple permissions can be added by providing the two
 * parameters of each permission. A permission can be specified
 * by permid or permsid.
 *
 * Permissions:
 *  - i_group_modify_power
 *  - i_group_needed_modify_power
 *  - i_permission_modify_power
 *
 * Syntax:
 *  - channeladdperm cid={channelID} [permid={permID}…] [permsid={permName}…] permvalue={permValue}...
 *
 * Example:
 *  - channeladdperm cid=16 permid=17276 permvalue=50|permid=21415 permvalue=20
 */
export class ChannelAddPermCommand extends QueryCommand {
    private static readonly baseCommand = "channeladdperm";
    private static readonly firstItemAllowedKeys = ["permid", "permsid"];
    private static readonly secondItemAllowedKeys = ["permvalue"];

    // ADD DOCS
    constructor(channelId: number, permissions: ComplexQueryOptionElem[][]) {
        const scannedPerms: ComplexQueryOptionElem[][] = [];

        if (permissions.length < 1) {
            // TODO: Update to tsjs error
            throw new Error("Invalid arguments");
        }

        permissions.forEach(elem => {
            if (elem.length !== 2) {
                if (
                    ChannelAddPermCommand.firstItemAllowedKeys.includes(elem[0].key) &&
                    ChannelAddPermCommand.secondItemAllowedKeys.includes(elem[1].key)
                ) {
                    scannedPerms.push(elem);
                }
            }
        });

        super(ChannelAddPermCommand.baseCommand, { cid: channelId, __complex: scannedPerms });
    }
}
