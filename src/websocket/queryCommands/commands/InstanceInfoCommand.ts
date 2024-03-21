import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### InstanceInfo Command
 *
 * Displays the server instance configuration including database
 * revision number, the file transfer port, default group IDs,
 * etc. For detailed information, see Server Instance Properties.
 *
 * Permissions:
 *  - b_serverinstance_info_view
 *
 * Syntax:
 *  - instanceinfo
 *
 * Example:
 *  - instanceinfo
 */
export class InstanceInfoCommand extends QueryCommand {
    private static readonly baseCommand = "instanceinfo";

    constructor() {
        super(InstanceInfoCommand.baseCommand);
    }
}
