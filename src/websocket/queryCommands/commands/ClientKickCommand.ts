import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ClientKick Command
 *
 * Kicks one or more clients specified with clid from their currently joined
 * channel or from the server, depending on reasonid. The reasonmsg parameter
 * specifies a text message sent to the kicked clients. This parameter is optional
 * and may only have a maximum of 40 characters.
 *
 * Permissions:
 *  - i_client_kick_from_server_power
 *  - i_client_kick_from_channel_power
 *  - i_client_needed_kick_from_server_power
 *  - i_client_needed_kick_from_channel_power
 *
 * Syntax:
 *  - clientkick clid={clientID}… reasonid={4|5} [reasonmsg={text}]
 *
 * Example:
 *  - clientkick clid=5|clid=6 reasonid=4 reasonmsg=Go\saway!
 */
export class ClientKickCommand extends QueryCommand {
    private static readonly baseCommand = "clientkick";

    // ADD DOCS
    constructor(clientId: number | number[], reasonId: 4 | 5, reasonMessage: string | undefined = undefined) {
        const PARAMS: { [index: string]: any } = {
            clid: clientId,
            reasonid: reasonId
        };

        if (reasonMessage !== undefined) {
            const trimedMsg = reasonMessage.trim();
            PARAMS["reasonmsg"] = trimedMsg.length > 40 ? trimedMsg.slice(0, 40) : trimedMsg;
        }

        super(ClientKickCommand.baseCommand, PARAMS);
    }
}
