import { QueryCommand } from "../QueryCommand";
import { ComplexQueryOptionElem } from "../interfaces/ComplexQueryOptionElem";

/**
 * ### ChannelMove Command
 *
 * Moves a channel to a new parent channel with the ID cpid.
 * If order is specified, the channel will be sorted right
 * under the channel with the specified ID. If order is set
 * to 0, the channel will be sorted right below the new parent.
 *
 * Permissions:
 *  - i_channel_min_depth
 *  - i_channel_max_depth
 *  - b_channel_modify_parent
 *  - b_channel_modify_sortorder
 *
 * Syntax:
 *  - channelmove cid={channelID} cpid={channelParentID} [order={channelSortOrder}]
 *
 * Example:
 *  - channelmove cid=16 cpid=1 order=0
 */
export class ChannelMoveCommand extends QueryCommand {
    private static readonly baseCommand = "channelmove";

    // ADD DOCS
    constructor(channelId: number, parentId: number, order: number | undefined = undefined) {
        const PARAMS: { [index: string]: any } = {
            cid: channelId,
            cpid: parentId
        };

        if (order !== undefined) {
            PARAMS["order"] = order;
        }

        super(ChannelMoveCommand.baseCommand, PARAMS);
    }
}
