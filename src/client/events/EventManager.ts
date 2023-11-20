import * as Events from "./index";
import { QueryClient } from "../QueryClient";
import { Event } from "./Event";

// ADD DOCS
export class EventManager {
    readonly queryClient: QueryClient;
    private static events: { [key: string]: typeof Event } = {
        "ClientBannedEvent": Events.ClientBannedEvent,
        "ClientConnectedEvent": Events.ClientConnectedEvent,
        "ClientConnectionDroppedEvent": Events.ClientConnectionDroppedEvent,
        "ClientDisconnectedEvent": Events.ClientDisconnectedEvent,
        "ClientKickedEvent": Events.ClientKickedEvent,
        "ClientKickedFromChannelEvent": Events.ClientKickedFromChannelEvent,
        "ClientMovedToChannelEvent": Events.ClientMovedToChannelEvent,
        "ClientSwitchedChannelsEvent": Events.ClientSwitchedChannelsEvent,
        "ServerNameUpdatedEvent": Events.ServerNameUpdatedEvent,
        "ServerNicknameUpdatedEvent": Events.ServerNicknameUpdatedEvent,
        "ServerIconUpdatedEvent": Events.ServerIconUpdatedEvent,
        "ServerHostBannerGfxUrlUpdatedEvent": Events.ServerHostBannerGfxUrlUpdatedEvent,
        "ServerHostBannerModeUpdatedEvent": Events.ServerHostBannerModeUpdatedEvent,
        "ServerHostBannerUrlUpdatedEvent": Events.ServerHostBannerUrlUpdatedEvent,
        "ServerCodecEncryptionModeUpdatedEvent": Events.ServerCodecEncryptionModeUpdatedEvent,
        "ServerDefaultServerGroupUpdatedEvent": Events.ServerDefaultServerGroupUpdatedEvent,
        "ServerDefaultChannelGroupUpdatedEvent": Events.ServerDefaultChannelGroupUpdatedEvent,
        "ServerHostButtonTooltipUpdatedEvent": Events.ServerHostButtonTooltipUpdatedEvent,
        "ServerHostButtonUrlUpdatedEvent": Events.ServerHostButtonUrlUpdatedEvent,
        "ServerHostButtonIconUrlUpdatedEvent": Events.ServerHostButtonIconUrlUpdatedEvent,
        "ServerPhoneticNameUpdatedEvent": Events.ServerPhoneticNameUpdatedEvent,
        "ServerPrioritySpeakerDimModificatorUpdatedEvent": Events.ServerPrioritySpeakerDimModificatorUpdatedEvent,
        "ServerTempChannelDeleteDelayUpdatedEvent": Events.ServerTempChannelDeleteDelayUpdatedEvent,
    }
    
    // ADD DOCS
    constructor(queryClient: QueryClient) {
        this.queryClient = queryClient;

        for (const key in EventManager.events) {
            if (Object.prototype.hasOwnProperty.call(EventManager.events, key)) {
                const value = EventManager.events[key];
                
                this.register(key, value);
            }
        }
    }
    
    // UPDATE: Reduce into constructor
    register(name: string, _Event: typeof Event) {
        // console.log(_Event)
        this[name.replace(/Event$/, '')] = new _Event(this.queryClient);
    }
}