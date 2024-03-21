import { ClientListCommandFlags } from "@teamspeak.js/websocket/enums/ClientListCommandFlags";
import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ClientList Command
 *
 * Displays a list of clients online on a virtual server including their ID,
 * nickname, status flags, etc. The output can be modified using several command options.
 * Please note that the output will only contain clients which are currently in channels
 * you're able to subscribe to.
 *
 * Permissions:
 *  - b_virtualserver_client_list
 *  - i_channel_subscribe_power
 *  - i_channel_needed_subscribe_power
 *
 * Syntax:
 *  - clientlist [-uid] [-away] [-voice] [-times] [-groups] [-info] [-country] [-ip] [-badges]
 *
 * Example:
 *  - clientlist -away
 */
export class ClientListCommand extends QueryCommand {
    private static readonly baseCommand = "clientlist";

    // ADD DOCS
    constructor(flags: ClientListCommandFlags[] = []) {
        const FLAGS = [];
        for (let i = 0; i < flags.length; i++) {
            const flag = flags[i];
            switch (flag) {
                case ClientListCommandFlags.INCLUDE_UNIQUE_ID:
                    FLAGS.push("-uid");
                    break;
                case ClientListCommandFlags.INLCUDE_AWAY_DATA:
                    FLAGS.push("-away");
                    break;
                case ClientListCommandFlags.INCLUED_VOICE_DATA:
                    FLAGS.push("-voice");
                    break;
                case ClientListCommandFlags.INCLUED_TIMES_DATA:
                    FLAGS.push("-times");
                    break;
                case ClientListCommandFlags.INCLUED_GROUPS_DATA:
                    FLAGS.push("-groups");
                    break;
                case ClientListCommandFlags.INCLUED_INFO_DATA:
                    FLAGS.push("-info");
                    break;
                case ClientListCommandFlags.INCLUED_COUNTRY_DATA:
                    FLAGS.push("-country");
                    break;
                case ClientListCommandFlags.INCLUED_IP:
                    FLAGS.push("-ip");
                    break;
                case ClientListCommandFlags.INCLUED_BADGES_DATA:
                    FLAGS.push("-badges");
                    break;
            }
        }

        super(ClientListCommand.baseCommand, undefined, FLAGS);
    }
}
