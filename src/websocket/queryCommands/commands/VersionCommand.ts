import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### Version Command
 *
 * Displays the servers version information including platform and build number.
 *
 * Permissions:
 *  - b_serverinstance_version_view
 *
 * Syntax:
 *  - version
 *
 * Example:
 *  - version
 */
export class VersionCommand extends QueryCommand {
    private static readonly baseCommand = "version";

    constructor() {
        super(VersionCommand.baseCommand);
    }
}
