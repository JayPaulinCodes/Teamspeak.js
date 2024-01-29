import { QueryCommand } from "../QueryCommand";

/**
 * ### ClientPoke Command
 *
 * Sends a poke message to the client specified with clid.
 *
 * Permissions:
 *  - i_client_poke_power
 *  - i_client_needed_poke_power
 *
 * Syntax:
 *  - clientpoke clid={clientID} msg={text}
 *
 * Example:
 *  - clientpoke clid=5 msg=Wake\sup!
 */
export class ClientPokeCommand extends QueryCommand {
    private static readonly baseCommand = "clientpoke";

    // ADD DOCS
    constructor(clientId: number, message: string) {
        super(ClientPokeCommand.baseCommand, { clid: clientId, msg: message });
    }
}
