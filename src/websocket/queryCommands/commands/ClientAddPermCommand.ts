import { ComplexQueryOptionElem } from "../interfaces/ComplexQueryOptionElem";
import { QueryCommand } from "../QueryCommand";

/**
 * ### ClientAddPerm Command
 *
 * Adds a set of specified permissions to a client. Multiple
 * permissions can be added by providing the three parameters
 * of each permission. A permission can be specified by permid
 * or permsid.
 *
 * Permissions:
 *  - i_group_modify_power
 *  - i_group_needed_modify_power
 *  - i_permission_modify_power
 *
 * Syntax:
 *  - clientaddperm cldbid={clientDBID} [permid={permID}…] [permsid={permName}…] permvalue={permValue}… permskip={1|0}…
 *
 * Example:
 *  - clientaddperm cldbid=16 permid=17276 permvalue=50 permskip=1|permid=21415 permvalue=20 permskip=0
 */
export class ClientAddPermCommand extends QueryCommand {
    private static readonly baseCommand = "clientaddperm";
    private static readonly firstItemAllowedKeys = ["permid", "permsid"];
    private static readonly secondItemAllowedKeys = ["permvalue"];
    private static readonly thirdItemAllowedKeys = ["permskip"];

    // ADD DOCS
    constructor(groupId: number, permissions: ComplexQueryOptionElem[][]) {
        const scannedPerms: ComplexQueryOptionElem[][] = [];

        if (permissions.length < 1) {
            // TODO: Update to tsjs error
            throw new Error("Invalid arguments");
        }

        permissions.forEach(elem => {
            if (elem.length !== 3) {
                if (
                    ClientAddPermCommand.firstItemAllowedKeys.includes(elem[0].key) &&
                    ClientAddPermCommand.secondItemAllowedKeys.includes(elem[1].key) &&
                    ClientAddPermCommand.thirdItemAllowedKeys.includes(elem[2].key)
                ) {
                    scannedPerms.push(elem);
                }
            }
        });

        super(ClientAddPermCommand.baseCommand, { cgid: groupId, __complex: scannedPerms });
    }
}
