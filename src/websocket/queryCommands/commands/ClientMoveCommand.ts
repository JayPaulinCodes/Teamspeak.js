import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ClientMove Command
 *
 * Moves one or more clients specified with clid to the channel
 * with ID cid. If the target channel has a password, it needs to
 * be specified with cpw. If the channel has no password, the
 * parameter can be omitted.
 *
 * Permissions:
 *  - i_client_move_power
 *  - i_client_needed_move_power
 *
 * Syntax:
 *  - clientmove clid={clientID}… cid={channelID} [cpw={channelPassword}]
 *
 * Example:
 *  - clientmove clid=5|clid=6 cid=3
 */
export class ClientMoveCommand extends QueryCommand {
    private static readonly baseCommand = "clientmove";

    // ADD DOCS
    constructor(clientId: number | number[], channelId: number, channelPassword: string | undefined = undefined) {
        const PARAMS: { [index: string]: any } = {
            clid: clientId,
            cid: channelId
        };

        if (channelPassword !== undefined) {
            PARAMS["cpw"] = channelPassword;
        }

        super(ClientMoveCommand.baseCommand, PARAMS);
    }
}
