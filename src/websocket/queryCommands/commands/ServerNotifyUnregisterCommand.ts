import { QueryCommand } from "../QueryCommand";

/**
 * ### ServerNotifyUnregister Command
 *
 * Unregisters all events previously registered with servernotifyregister
 * so you will no longer receive notification messages.
 *
 * Permissions:
 *  - b_virtualserver_notify_unregister
 *
 * Syntax:
 *  - servernotifyunregister
 *
 * Example:
 *  - servernotifyunregister
 */
export class ServerNotifyUnregisterCommand extends QueryCommand {
    private static readonly baseCommand = "servernotifyunregister";

    constructor() {
        super(ServerNotifyUnregisterCommand.baseCommand);
    }
}
