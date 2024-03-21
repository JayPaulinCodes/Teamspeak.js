import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### WhoAmI Command
 *
 * Displays detailed connection information about the server instance including uptime,
 * number of virtual servers online, traffic information, etc. For detailed information,
 * see Server Instance Properties.
 *
 * Permissions:
 *  - b_serverinstance_info_view
 *
 * Syntax:
 *  - hostinfo
 *
 * Example:
 *  - hostinfo
 */
export class HostInfoCommand extends QueryCommand {
    private static readonly baseCommand = "hostinfo";

    constructor() {
        super(HostInfoCommand.baseCommand);
    }
}
