import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";
import { QueryCommandOptions } from "@teamspeak.js/websocket/queryCommands/typings/QueryCommandOptions";

/**
 * ### BanClient Command
 *
 * Bans the client specified with ID clid from the server.
 * Please note that this will create two separate ban rules
 * for the targeted clients IP address and his unique identifier.
 *
 * Permissions:
 *  - i_client_ban_power
 *  - i_client_needed_ban_power
 *
 * Syntax:
 *  - banclient clid={clientID} [time={timeInSeconds}] [banreason={text}]
 *
 * Example:
 *  - banclient clid=4 time=3600
 */
export class BanClientCommand extends QueryCommand {
    private static readonly baseCommand = "banclient";

    // ADD DOCS
    constructor(serverId: number, reason: string | undefined = undefined, duration: number | undefined = undefined) {
        const args: QueryCommandOptions = {};
        args["clid"] = serverId;
        if (reason !== undefined) {
            args["banreason"] = reason;
        }
        if (duration !== undefined) {
            args["time"] = duration;
        }

        super(BanClientCommand.baseCommand, args);
    }
}
