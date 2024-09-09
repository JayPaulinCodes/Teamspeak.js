import { ChannelResolvable } from "@teamspeak.js/structures/classes/Channel";
import { TeamspeakJsError } from "../TeamspeakJsError";

export class NoParentChannelError extends TeamspeakJsError {
    constructor(resolveable: ChannelResolvable) {
        super("NoParentChannel", resolveable);
    }
}