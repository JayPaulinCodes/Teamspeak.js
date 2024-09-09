import { Client } from "@teamspeak.js/structures/classes/Client"
import { Channel } from "@teamspeak.js/structures/classes/Channel";
import { CodecEncryptionMode } from "@teamspeak.js/structures/enums/CodecEncryptionMode";
import { ChannelGroupResolvable } from "@teamspeak.js/structures/classes/ChannelGroup";
import { ServerGroupResolvable } from "@teamspeak.js/structures/classes/ServerGroup";
import { HostBannerMode } from "@teamspeak.js/structures/enums/HostBannerMode";

export type EventFunction = {
    ["error"]: (error: Error) => void;
    ["debug"]: (type?: string, data?: string) => void;
    ["startup"]: (status: string) => void;
    ["ready"]: () => void;
    ["flooding"]: () => void;
    ["close"]: (error?: Error) => void;
    ["serverNameUpdated"]: (invoker: Client, newName: string) => void;
    ["serverNicknameUpdated"]: (invoker: Client, newNickname: string) => void;
    ["serverIconUpdated"]: (invoker: Client, newIconId: number) => void;
    ["serverHostBannerGfxUrlUpdated"]: (invoker: Client, newGfxUrl: string) => void;
    ["serverHostBannerModeUpdated"]: (invoker: Client, newBannerMode: HostBannerMode) => void;
    ["serverHostBannerUrlUpdated"]: (invoker: Client, newUrl: string) => void;
    ["serverHostButtonTooltipUpdated"]: (invoker: Client, newTooltip: string) => void;
    ["serverHostButtonUrlUpdated"]: (invoker: Client, newUrl: string) => void;
    ["serverHostButtonIconUrlUpdated"]: (invoker: Client, newIconUrl: string) => void;
    ["serverCodecEncryptionModeUpdated"]: (invoker: Client, newEncryptionMode: CodecEncryptionMode) => void;
    ["serverDefaultServerGroupUpdated"]: (invoker: Client, newGroupId: ServerGroupResolvable) => void;
    ["serverDefaultChannelGroupUpdated"]: (invoker: Client, newGroupId: ChannelGroupResolvable) => void;
    ["serverPrioritySpeakerDimModificatorUpdated"]: (invoker: Client, newModificator: number) => void;
    ["serverTempChannelDeleteDelayUpdated"]: (invoker: Client, newDelay: number) => void;
    ["serverPhonecticNameUpdated"]: (invoker: Client, newPhoneticName: string) => void;
    ["clientSwitchedChannels"]: (target: Client, channel: Channel) => void;
    ["clientMovedToChannel"]: (target: Client, channel: Channel, invoker: Client) => void;
    ["clientKickedFromChannel"]: (target: Client, invoker: Client, channel: Channel, reson: string) => void;
    ["clientConnected"]: (client: Client, channel: Channel) => void;
    ["clientConnectionDropped"]: (client: Client, channel: Channel, reson: string) => void;
    ["clientKicked"]: (target: Client, invoker: Client, channel: Channel, reson: string) => void;
    ["clientBanned"]: (target: Client, invoker: Client, channel: Channel, reson: string, duration: number) => void;
    ["clientDisconnected"]: (client: Client, channel: Channel, reson: string) => void;
    ["channelIconUpdated"]: (invoker: Client, oldChannel: Channel, newChannel: Channel) => void;
    ["channelNameUpdated"]: (invoker: Client, oldChannel: Channel, newChannel: Channel) => void;
    ["channelTopicUpdated"]: (invoker: Client, oldChannel: Channel, newChannel: Channel) => void;
    ["channelOrderUpdated"]: (invoker: Client, oldChannel: Channel, newChannel: Channel) => void;
    ["channelNeededTalkPowerUpdated"]: (invoker: Client, oldChannel: Channel, newChannel: Channel) => void;
    ["channelCodecUpdated"]: (invoker: Client, oldChannel: Channel, newChannel: Channel) => void;
    ["channelCodecQualityUpdated"]: (invoker: Client, oldChannel: Channel, newChannel: Channel) => void;
    ["channelMaxClientsUpdated"]: (invoker: Client, oldChannel: Channel, newChannel: Channel) => void;
}
