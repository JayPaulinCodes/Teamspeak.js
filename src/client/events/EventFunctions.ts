import { Client } from "@teamspeak.js/structures/classes/Client"
import { Channel } from "@teamspeak.js/structures/classes/Channel";
import { CodecEncryptionMode } from "@teamspeak.js/structures/enums/CodecEncryptionMode";
import { ChannelGroupResolvable } from "@teamspeak.js/structures/classes/ChannelGroup";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents"
import { ServerGroupResolvable } from "@teamspeak.js/structures/classes/ServerGroup";
import { HostBannerMode } from "@teamspeak.js/structures/enums/HostBannerMode";

export type EventFunction = {
    [QueryClientEvents.Ready]: () => void;
    [QueryClientEvents.Error]: (error: Error) => void;
    [QueryClientEvents.Close]: (error?: Error) => void;
    [QueryClientEvents.ClientBanned]: (target: Client, invoker: Client, channel: Channel, reson: string, duration: number) => void;
    [QueryClientEvents.ClientConnected]: (client: Client, channel: Channel) => void;
    [QueryClientEvents.ClientConnectionDropped]: (client: Client, channel: Channel, reson: string) => void;
    [QueryClientEvents.ClientDisconnected]: (client: Client, channel: Channel, reson: string) => void;
    [QueryClientEvents.ClientKicked]: (target: Client, invoker: Client, channel: Channel, reson: string) => void;
    [QueryClientEvents.ClientKickedFromChannel]: (target: Client, invoker: Client, channel: Channel, reson: string) => void;
    [QueryClientEvents.ClientMovedToChannel]: (target: Client, channel: Channel, invoker: Client) => void;
    [QueryClientEvents.ClientSwitchedChannels]: (target: Client, channel: Channel) => void;
    [QueryClientEvents.ServerCodecEncryptionModeUpdated]: (invoker: Client, newEncryptionMode: CodecEncryptionMode) => void;
    [QueryClientEvents.ServerDefaultChannelGroupUpdated]: (invoker: Client, newGroupId: ChannelGroupResolvable) => void;
    [QueryClientEvents.ServerDefaultServerGroupUpdated]: (invoker: Client, newGroupId: ServerGroupResolvable) => void;
    [QueryClientEvents.ServerHostBannerGfxUrlUpdated]: (invoker: Client, newGfxUrl: string) => void;
    [QueryClientEvents.ServerHostBannerModeUpdated]: (invoker: Client, newBannerMode: HostBannerMode) => void;
    [QueryClientEvents.ServerHostBannerUrlUpdated]: (invoker: Client, newUrl: string) => void;
    [QueryClientEvents.ServerHostBannerUrlUpdated]: (invoker: Client, newUrl: string) => void;
    [QueryClientEvents.ServerHostButtonIconUrlUpdated]: (invoker: Client, newIconUrl: string) => void;
    [QueryClientEvents.ServerHostButtonTooltipUpdated]: (invoker: Client, newTooltip: string) => void;
    [QueryClientEvents.ServerHostButtonUrlUpdated]: (invoker: Client, newUrl: string) => void;
    [QueryClientEvents.ServerIconUpdated]: (invoker: Client, newIconId: number) => void;
    [QueryClientEvents.ServerNameUpdated]: (invoker: Client, newName: string) => void;
    [QueryClientEvents.ServerNicknameUpdated]: (invoker: Client, newNickname: string) => void;
    [QueryClientEvents.ServerPhonecticNameUpdated]: (invoker: Client, newPhoneticName: string) => void;
    [QueryClientEvents.ServerPrioritySpeakerDimModificatorUpdated]: (invoker: Client, newModificator: number) => void;
    [QueryClientEvents.ServerTempChannelDeleteDelayUpdated]: (invoker: Client, newDelay: number) => void;
}