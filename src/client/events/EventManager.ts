import * as Events from "./index";
import { Event } from "./Event";
import { QueryClient } from "../QueryClient";

// ADD DOCS
export class EventManager {
    readonly queryClient: QueryClient;
    readonly ClientBanned: Event;
    readonly ClientConnected: Event;
    readonly ClientConnectionDropped: Event;
    readonly ClientDisconnected: Event;
    readonly ClientKicked: Event;
    readonly ClientKickedFromChannel: Event;
    readonly ClientMovedToChannel: Event;
    readonly ClientSwitchedChannels: Event;
    readonly ServerNameUpdated: Event;
    readonly ServerNicknameUpdated: Event;
    readonly ServerIconUpdated: Event;
    readonly ServerHostBannerGfxUrlUpdated: Event;
    readonly ServerHostBannerModeUpdated: Event;
    readonly ServerHostBannerUrlUpdated: Event;
    readonly ServerCodecEncryptionModeUpdated: Event;
    readonly ServerDefaultServerGroupUpdated: Event;
    readonly ServerDefaultChannelGroupUpdated: Event;
    readonly ServerHostButtonTooltipUpdated: Event;
    readonly ServerHostButtonUrlUpdated: Event;
    readonly ServerHostButtonIconUrlUpdated: Event;
    readonly ServerPhoneticNameUpdated: Event;
    readonly ServerPrioritySpeakerDimModificatorUpdated: Event;
    readonly ServerTempChannelDeleteDelayUpdated: Event;

    // ADD DOCS
    constructor(queryClient: QueryClient) {
        this.queryClient = queryClient;

        this.ClientBanned = new Events.ClientBannedEvent(this.queryClient);
        this.ClientConnected = new Events.ClientConnectedEvent(this.queryClient);
        this.ClientConnectionDropped = new Events.ClientConnectionDroppedEvent(this.queryClient);
        this.ClientDisconnected = new Events.ClientDisconnectedEvent(this.queryClient);
        this.ClientKicked = new Events.ClientKickedEvent(this.queryClient);
        this.ClientKickedFromChannel = new Events.ClientKickedFromChannelEvent(this.queryClient);
        this.ClientMovedToChannel = new Events.ClientMovedToChannelEvent(this.queryClient);
        this.ClientSwitchedChannels = new Events.ClientSwitchedChannelsEvent(this.queryClient);
        this.ServerNameUpdated = new Events.ServerNameUpdatedEvent(this.queryClient);
        this.ServerNicknameUpdated = new Events.ServerNicknameUpdatedEvent(this.queryClient);
        this.ServerIconUpdated = new Events.ServerIconUpdatedEvent(this.queryClient);
        this.ServerHostBannerGfxUrlUpdated = new Events.ServerHostBannerGfxUrlUpdatedEvent(this.queryClient);
        this.ServerHostBannerModeUpdated = new Events.ServerHostBannerModeUpdatedEvent(this.queryClient);
        this.ServerHostBannerUrlUpdated = new Events.ServerHostBannerUrlUpdatedEvent(this.queryClient);
        this.ServerCodecEncryptionModeUpdated = new Events.ServerCodecEncryptionModeUpdatedEvent(this.queryClient);
        this.ServerDefaultServerGroupUpdated = new Events.ServerDefaultServerGroupUpdatedEvent(this.queryClient);
        this.ServerDefaultChannelGroupUpdated = new Events.ServerDefaultChannelGroupUpdatedEvent(this.queryClient);
        this.ServerHostButtonTooltipUpdated = new Events.ServerHostButtonTooltipUpdatedEvent(this.queryClient);
        this.ServerHostButtonUrlUpdated = new Events.ServerHostButtonUrlUpdatedEvent(this.queryClient);
        this.ServerHostButtonIconUrlUpdated = new Events.ServerHostButtonIconUrlUpdatedEvent(this.queryClient);
        this.ServerPhoneticNameUpdated = new Events.ServerPhoneticNameUpdatedEvent(this.queryClient);
        this.ServerPrioritySpeakerDimModificatorUpdated = new Events.ServerPrioritySpeakerDimModificatorUpdatedEvent(
            this.queryClient
        );
        this.ServerTempChannelDeleteDelayUpdated = new Events.ServerTempChannelDeleteDelayUpdatedEvent(
            this.queryClient
        );
    }
}
