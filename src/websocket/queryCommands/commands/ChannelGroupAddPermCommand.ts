import { QueryCommand } from "../QueryCommand";
import { ComplexQueryOptionElem } from "../interfaces/ComplexQueryOptionElem";

/**
 * ### ChannelGroupAddPerm Command
 *
 * Adds a set of specified permissions to a channel group.
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
 *  - channelgroupaddperm cgid={groupID} [permid={permID}…] [permsid={permName}…] permvalue={permValue}…
 *
 * Example:
 *  - channelgroupaddperm cgid=13 permid=17276 permvalue=50|permid=21415 permvalue=20
 */
export class ChannelGroupAddPermCommand extends QueryCommand {
    private static readonly baseCommand = "channelgroupaddperm";
    private static readonly firstItemAllowedKeys = ["permid", "permsid"];
    private static readonly secondItemAllowedKeys = ["permvalue"];

    // ADD DOCS
    constructor(groupId: number, permissions: ComplexQueryOptionElem[][]) {
        const scannedPerms: ComplexQueryOptionElem[][] = [];

        if (permissions.length < 1) {
            // TODO: Update to tsjs error
            throw new Error("Invalid arguments");
        }

        permissions.forEach(elem => {
            if (elem.length !== 2) {
                if (
                    ChannelGroupAddPermCommand.firstItemAllowedKeys.includes(elem[0].key) &&
                    ChannelGroupAddPermCommand.secondItemAllowedKeys.includes(elem[1].key)
                ) {
                    scannedPerms.push(elem);
                }
            }
        });

        super(ChannelGroupAddPermCommand.baseCommand, { cgid: groupId, __complex: scannedPerms });
    }
}
