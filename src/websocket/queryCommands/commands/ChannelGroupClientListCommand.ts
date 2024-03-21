import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ChannelGroupClientList Command
 *
 * Displays all the client and/or channel IDs currently
 * assigned to channel groups. All three parameters are
 * optional so you're free to choose the most suitable
 * combination for your requirements.
 *
 * Permissions:
 *  - b_virtualserver_channelgroup_client_list
 *
 * Syntax:
 *  - channelgroupclientlist [cid={channelID}] [cldbid={clientDBID}] [cgid={groupID}]
 *
 * Example:
 *  - channelgroupclientlist cid=2 cgid=9
 */
export class ChannelGroupClientListCommand extends QueryCommand {
    private static readonly baseCommand = "channelgroupclientlist";

    // ADD DOCS
    constructor(
        channelId: number | undefined = undefined,
        clientDbId: number | undefined = undefined,
        channelGroupId: number | undefined = undefined
    ) {
        const PARAMS: { [index: string]: any } = {};

        if (channelId === undefined && clientDbId === undefined && channelGroupId === undefined) {
            // TODO: Update to tsjs error
            throw new Error("Invalid arguments");
        }

        if (channelId !== undefined) {
            PARAMS["cid"] = channelId;
        }

        if (clientDbId !== undefined) {
            PARAMS["cldbid"] = clientDbId;
        }

        if (channelGroupId !== undefined) {
            PARAMS["cgid"] = channelGroupId;
        }

        super(ChannelGroupClientListCommand.baseCommand, PARAMS);
    }
}
