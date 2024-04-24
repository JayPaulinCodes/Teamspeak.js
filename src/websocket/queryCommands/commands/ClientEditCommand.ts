import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ClientEdit Command
 *
 * Changes a clients settings using given properties.
 *
 * Permissions:
 *  - b_client_modify_description
 *  - b_client_set_talk_power
 *
 * Syntax:
 *  - clientedit clid={clientID} [client_properties…]
 *
 * Example:
 *  - clientedit clid=56 client_description=Best\sguy\sever!
 */
export class ClientEditCommand extends QueryCommand {
    private static readonly baseCommand = "clientedit";
    private static readonly allowedProperties = [
        // "clientDefaultChannel",
        // "clientChannelGroupId",
        // "clientServerGroups",
        // "clientTalkPower",
        // "clientIsPrioritySpeaker",
        "clientDescription"
    ];

    // ADD DOCS
    constructor(clientId: number, properties: { [index: string]: any } = {}) {
        const PARAMS: { [index: string]: any } = {
            clid: clientId
        };

        for (const key in properties) {
            const value = properties[key];

            if (ClientEditCommand.allowedProperties.includes(key)) {
                PARAMS[key] = value;
            }
        }

        super(ClientEditCommand.baseCommand, PARAMS);
    }
}
