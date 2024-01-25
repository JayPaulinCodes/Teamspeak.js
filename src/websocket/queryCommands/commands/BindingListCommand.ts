import { BindingSubSystem } from "websocket/enums/BindingSubSystem";
import { QueryCommand } from "../QueryCommand";

/**
 * ### BindingList Command
 *
 * Displays a list of IP addresses used by the server 
 * instance on multi-homed machines. If no subsystem is 
 * specified, "voice" is used by default.
 *
 * Permissions:
 *  - b_serverinstance_binding_list
 *
 * Syntax:
 *  - bindinglist [subsystem={voice|query|filetransfer}]
 *
 * Example:
 *  - bindinglist
 */
export class BindingListCommand extends QueryCommand {
    private static readonly baseCommand = "bindinglist";

    // ADD DOCS
    constructor(subsystem: BindingSubSystem = BindingSubSystem.VOICE) {
        let subsystemValue = "voice";
        switch (subsystem) {
            case BindingSubSystem.QUERY:
                subsystemValue = "query";
                break;
            case BindingSubSystem.FILE_TRANSFER:
                subsystemValue = "filetransfer";
                break;
            case BindingSubSystem.VOICE:
            default:
                subsystemValue = "voice";
                break;
        }

        super(BindingListCommand.baseCommand, { subsystem: subsystemValue });
    }
}
