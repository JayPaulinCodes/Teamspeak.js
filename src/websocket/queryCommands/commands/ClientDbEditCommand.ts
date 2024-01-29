import { QueryCommand } from "../QueryCommand";

/**
 * ### ClientDbEdit Command
 *
 * Changes a clients settings using given properties.
 *
 * Permissions:
 *  - b_client_modify_dbproperties
 *  - b_client_modify_description
 *  - b_client_set_talk_power
 *
 * Syntax:
 *  - clientdbedit cldbid={clientDBID} [client_properties…]
 *
 * Example:
 *  - clientdbedit cldbid=56 client_description=Best\sguy\sever!
 */
export class ClientDbEditCommand extends QueryCommand {
    private static readonly baseCommand = "clientdbedit";
    private static readonly allowedProperties = [
        "clientNickname",
        "clientDefaultChannel",
        "clientChannelGroupId",
        "clientServerGroups",
        "clientTalkPower",
        "clientIsPrioritySpeaker",
        "clientDescription"
    ];

    // ADD DOCS
    constructor(clientDbId: number, properties: { [index: string]: any } = {}) {
        const PARAMS: { [index: string]: any } = {
            cldbid: clientDbId
        };

        for (const key in properties) {
            const value = properties[key];

            if (ClientDbEditCommand.allowedProperties.includes(key)) {
                PARAMS[key] = value;
            }
        }

        super(ClientDbEditCommand.baseCommand, PARAMS);
    }
}
