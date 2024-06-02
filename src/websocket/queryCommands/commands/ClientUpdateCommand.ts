import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ClientUpdate Command
 *
 * Change your ServerQuery clients settings using given properties. For detailed information, see Client Properties.
 *
 * Syntax:
 *  - clientupdate [client_properties…]
 *
 * Example:
 *  - clientupdate client_nickname=ScP\s(query)
 */
export class ClientUpdateCommand extends QueryCommand {
    private static readonly baseCommand = "clientupdate";
    private static readonly allowedProperties = [
        "clientNickname",
        "clientIsTalker",
        "clientDescription",
        "clientIsChannelCommander",
        "clientIconId"
    ];

    constructor(properties: { [index: string]: any } = {}) {
        const PARAMS: { [index: string]: any } = {};

        for (const key in properties) {
            const value = properties[key];

            if (ClientUpdateCommand.allowedProperties.includes(key)) {
                PARAMS[key] = value;
            }
        }

        super(ClientUpdateCommand.baseCommand, PARAMS);
    }
}
