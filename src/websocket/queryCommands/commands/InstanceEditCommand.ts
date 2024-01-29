import { QueryCommand } from "../QueryCommand";
import { TeamspeakJsError } from "../../../errors/TeamspeakJsError";
import { TeamspeakJsErrorCodes } from "../../../errors/TeamspeakJsErrorCodes";

/**
 * ### InstanceEdit Command
 *
 * Changes the server instance configuration using given properties.
 * For detailed information, see Server Instance Properties.
 *
 * Permissions:
 *  - b_serverinstance_modify_settings
 *
 * Syntax:
 *  - instanceedit [instance_properties…]
 *
 * Example:
 *  - instanceedit serverinstance_filetransfer_port=1337
 */
export class InstanceEditCommand extends QueryCommand {
    private static readonly baseCommand = "instanceedit";
    private static readonly allowedKeys = [
        "serverinstance_guest_serverquery_group",
        "serverinstance_template_serveradmin_group",
        "serverinstance_filetransfer_port",
        "serverinstance_max_download_total_bandwidth",
        "serverinstance_max_upload_total_bandwidth",
        "serverinstance_template_serverdefault_group",
        "serverinstance_template_channeldefault_group",
        "serverinstance_template_channeladmin_group",
        "serverinstance_serverquery_flood_commands",
        "serverinstance_serverquery_flood_time",
        "serverinstance_serverquery_flood_ban_time"
    ];

    // ADD DOCS
    constructor(key: string, value: number) {
        if (!InstanceEditCommand.allowedKeys.includes(key)) {
            throw new TeamspeakJsError(TeamspeakJsErrorCodes.InstanceEditNotApprovedKey, key);
        }

        super(InstanceEditCommand.baseCommand, { [key]: value });
    }
}
