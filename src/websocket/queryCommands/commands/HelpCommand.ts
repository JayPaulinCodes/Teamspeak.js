import { QueryCommand } from "../QueryCommand";

/**
 * ### Help Command
 *
 * Provides information about ServerQuery commands. Used without parameters, help lists and briefly describes every command.
 *
 * Permissions:
 *  - b_serverinstance_help_view
 *
 * Syntax:
 *  - help [{command}]
 *
 * Example:
 *  - help serverinfo
 */
export class HelpCommand extends QueryCommand {
    private static readonly baseCommand = "help";

    // ADD DOCS
    constructor(command: string) {
        super(HelpCommand.baseCommand, undefined, [command]);
    }
}
