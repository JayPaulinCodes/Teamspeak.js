import { QueryCommand } from "../QueryCommand";

/**
 * ### Use Command
 *
 * Selects the virtual server specified with sid or port to allow further
 * interaction. The ServerQuery client will appear on the virtual server
 * and acts like a real TeamSpeak 3 Client, except it's unable to send or
 * receive voice data. If your database contains multiple virtual servers
 * using the same UDP port, use will select a random virtual server using
 * the specified port.
 *
 * Permissions:
 *  - b_virtualserver_select
 *
 * Syntax:
 *  - use [sid={serverID}] [port={serverPort}] [-virtual]
 *  - use {serverID} [-virtual]
 *
 * Example:
 *  - use sid=1
 */
export class UseCommand extends QueryCommand {
    private static readonly baseCommand = "use";

    // ADD DOCS
    constructor(sid?: number, port?: number, virtual: boolean = false) {
        if (sid !== undefined) {
            super(UseCommand.baseCommand, { ["sid"]: sid }, virtual ? ["-virtual"] : undefined);
        } else if (port !== undefined) {
            super(UseCommand.baseCommand, { ["port"]: port }, virtual ? ["-virtual"] : undefined);
        }
    }
}
