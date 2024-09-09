import { ChannelResolvable } from "@teamspeak.js/structures/classes/Channel";
import { TeamspeakJsError } from "../TeamspeakJsError";

export class CannotResolveChannelId extends TeamspeakJsError {
    constructor(resolveable: ChannelResolvable) {
        super("CannotResolveChannelId", resolveable);
    }
}