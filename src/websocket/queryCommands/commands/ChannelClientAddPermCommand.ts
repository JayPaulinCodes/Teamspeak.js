import { ComplexQueryOptionElem } from "../interfaces/ComplexQueryOptionElem";
import { QueryCommand } from "../QueryCommand";

/**
 * ### ChannelClientAddPerm Command
 *
 * Adds a set of specified permissions to a client in a specific channel.
 * Multiple permissions can be added by providing the three parameters
 * of each permission. A permission can be specified by permid or permsid.
 *
 * Permissions:
 *  - i_group_modify_power
 *  - i_group_needed_modify_power
 *  - i_permission_modify_power
 *
 * Syntax:
 *  - channelclientaddperm cid={channelID} cldbid={clientDBID} [permid={permID}…] [permsid={permName}…] permvalue={permValue}...
 *
 * Example:
 *  - channelclientaddperm cid=12 cldbid=3 permid=17276 permvalue=50|permid=21415 permvalue=20
 */
export class ChannelClientAddPermCommand extends QueryCommand {
    private static readonly baseCommand = "channelclientaddperm";
    private static readonly firstItemAllowedKeys = ["permid", "permsid"];
    private static readonly secondItemAllowedKeys = ["permvalue"];

    // ADD DOCS
    constructor(channelId: number, clientDbId: number, permissions: ComplexQueryOptionElem[][]) {
        const scannedPerms: ComplexQueryOptionElem[][] = [];

        if (permissions.length < 1) {
            // TODO: Update to tsjs error
            throw new Error("Invalid arguments");
        }

        permissions.forEach(elem => {
            if (elem.length !== 2) {
                if (
                    ChannelClientAddPermCommand.firstItemAllowedKeys.includes(elem[0].key) &&
                    ChannelClientAddPermCommand.secondItemAllowedKeys.includes(elem[1].key)
                ) {
                    scannedPerms.push(elem);
                }
            }
        });

        super(ChannelClientAddPermCommand.baseCommand, { cid: channelId, cldbid: clientDbId, __complex: scannedPerms });
    }
}
