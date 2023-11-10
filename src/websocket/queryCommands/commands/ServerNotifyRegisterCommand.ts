import { QueryCommand } from "../QueryCommand";

/**
 * ### ServerNotifyRegister Command
 * 
 * Registers for a specified category of events on a virtual server to receive 
 * notification messages. Depending on the notifications you've registered for, 
 * the server will send you a message on every event in the view of your 
 * ServerQuery client (e.g. clients joining your channel, incoming text messages, 
 * server configuration changes, etc). The event source is declared by the event 
 * parameter while id can be used to limit the notifications to a specific channel.
 * 
 * Permissions: 
 *  - b_virtualserver_notify_register
 * 
 * Syntax:
 *  - servernotifyregister event={server|channel|textserver|textchannel|textprivate} [id={channelID}]
 * 
 * Example:
 *  - servernotifyregister event=server
 *  - servernotifyregister event=channel id=123
 */
export class ServerNotifyRegisterCommand extends QueryCommand {
    private static readonly baseCommand = "servernotifyregister";

    constructor(event: string, id?: number | string) {
        const options = { ["event"]: event }
        if (id !== undefined) { options["id"] = id; }

        super(ServerNotifyRegisterCommand.baseCommand, options);
    }
}