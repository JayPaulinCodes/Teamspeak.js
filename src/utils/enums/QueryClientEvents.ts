/* eslint line-comment-position: "off" */

import { IQueryProtocol } from "../../websocket/interfaces/IQueryProtocol";

/**
 * Enum for the events emitted by {@link IQueryProtocol} classes
 */
export enum QueryClientEvents {
    /**
     * Forwarded from the {@link SocketEvents | socket event}
     * @param {Error} error
     */
    Error = "error",

    /**
     * Emited with data for debug purposes
     * @param {string | undefined} type
     * @param {string | undefined} data
     */
    Debug = "debug",

    /**
     * Emited when the client is ready
     */
    Ready = "ready",

    /**
     * Emited Teamspeak server query throws a flooding error
     */
    Flooding = "flooding",

    /**
     * Emited Teamspeak server query throws a flooding error
     */
    Close = "close",

    /**
     * Emited when the current virtual server has it's name updated.
     *
     * Emited through the Teamspeak 'notifyserveredited' notification
     */
    ServerNameUpdated = "serverNameUpdated",

    /**
     * Emited when the current virtual server has it's nickname updated.
     *
     * Emited through the Teamspeak 'notifyserveredited' notification
     */
    ServerNicknameUpdated = "serverNicknameUpdated",

    /**
     * Emited when the current virtual server has it's icon updated.
     *
     * Emited through the Teamspeak 'notifyserveredited' notification
     */
    ServerIconUpdated = "serverIconUpdated",

    // ADD DOCS
    ServerHostBannerGfxUrlUpdated = "serverHostBannerGfxUrlUpdated",

    // ADD DOCS
    ServerHostBannerModeUpdated = "serverHostBannerModeUpdated",

    // ADD DOCS
    ServerHostBannerUrlUpdated = "serverHostBannerUrlUpdated",

    // ADD DOCS
    ServerHostButtonTooltipUpdated = "serverHostButtonTooltipUpdated",

    // ADD DOCS
    ServerHostButtonUrlUpdated = "serverHostButtonUrlUpdated",

    // ADD DOCS
    ServerHostButtonIconUrlUpdated = "serverHostButtonIconUrlUpdated",

    // ADD DOCS
    ServerCodecEncryptionModeUpdated = "serverCodecEncryptionModeUpdated",

    // ADD DOCS
    ServerDefaultServerGroupUpdated = "serverDefaultServerGroupUpdated",

    // ADD DOCS
    ServerDefaultChannelGroupUpdated = "serverDefaultChannelGroupUpdated",

    // ADD DOCS
    ServerPrioritySpeakerDimModificatorUpdated = "serverPrioritySpeakerDimModificatorUpdated",

    // ADD DOCS
    ServerTempChannelDeleteDelayUpdated = "serverTempChannelDeleteDelayUpdated",

    // ADD DOCS
    ServerPhonecticNameUpdated = "serverPhonecticNameUpdated",

    // ADD DOCS
    ClientSwitchedChannels = "clientSwitchedChannels", // reasonid=0

    // ADD DOCS
    ClientMovedToChannel = "clientMovedToChannel", // reasonid=1

    // ADD DOCS
    ClientKickedFromChannel = "clientKickedFromChannel", // reasonid=4

    // ADD DOCS
    ClientConnected = "clientConnected", // reasonid=0

    // [Events emitted through 'clientleftview']
    // ctid = UNKNWON (Seems to always be 0)
    // cfid = The id of the channel the client was in prior to leaving view
    // clid = the server id of the client who left view
    // reasonid =
    //      - 3 = Connection Dropped
    //      - 5 = Kicked
    //      - 6 = Banned
    //      - 8 = Disconnect on own
    // reasonmsg = the disconnect message of the client / kick msg / ban msg
    // invokerid = the server id of the client initiating the move (only when moved by someone else)
    // invokername = the name of the client initiating the move (only when moved by someone else)
    // invokeruid = the unique id of the client initiating the move (only when moved by someone else)
    // bantime = the length of the ban in seconds (Only for reasonid = 5)

    // ADD DOCS
    ClientConnectionDropped = "clientConnectionDropped", // reasonid=3

    // ADD DOCS
    ClientKicked = "clientKicked", // reasonid=5

    // ADD DOCS
    ClientBanned = "clientBanned", // reasonid=6

    // ADD DOCS
    ClientDisconnected = "clientDisconnected", // reasonid=8

    // [Events emitted through 'tokenused']
    // clid = client server id
    // cldbid = client db id
    // token = the privilege key
    // tokencustomset = The tokencustomset parameter allows you to specify a set of
    //      custom client properties. This feature can be used when generating tokens
    //      to combine a website account database with a TeamSpeak user. The syntax of
    //      the value needs to be escaped using the ServerQuery escape patterns and has
    //      to follow the general syntax of: ident=ident1 value=value1|ident=ident2
    //      value=value2|ident=ident3 value=value3
    // token1 = Server group id given (0 when not a server group key)
    // token2 = Channel group id given (0 when not a channel group key)

    // ADD DOCS
    PrivilegeKeyUsed = "privilegeKeyUsed",

    // [Events emitted through 'channelpasswordchanged']
    // cid = the channel who's password changed

    // ADD DOCS
    ChannelPasswordChanged = "channelPasswordChanged",

    // [Events emitted through 'channeldescriptionchanged']
    // cid = the id of the channel updated

    // ADD DOCS
    ChannelDescriptionUpdated = "channelDescriptionUpdated_dontUseMeImShit",

    // [Events emitted through 'channeledited']
    // cid = the channel who's edited
    // reasonid = UNKNOWN (Seems to always be 10)
    // invokerid = the server id of the invoking user
    // invokername = the name of the invoking user
    // invokeruid = the unique id of the invoking user

    // ADD DOCS
    ChannelIconUpdated = "channelIconUpdated",

    // ADD DOCS
    ChannelNameUpdated = "channelNameUpdated",

    // ADD DOCS
    ChannelTopicUpdated = "channelTopicUpdated",

    // ADD DOCS
    ChannelTypeUpdated = "channelTypeUpdated",

    // ADD DOCS
    DefaultChannelUpdated = "defaultChannelUpdated",

    // ADD DOCS
    ChannelPasswordRemoved = "channelPasswordRemoved",

    // ADD DOCS
    ChannelOrderUpdated = "channelOrderUpdated",

    // ADD DOCS
    ChannelNeededTalkPowerUpdated = "channelNeededTalkPowerUpdated",

    // ADD DOCS
    ChannelCodecUpdated = "channelCodecUpdated",

    // ADD DOCS
    ChannelCodecQualityUpdated = "channelCodecQualityUpdated",

    // ADD DOCS
    ChannelPhoneticNameUpdated = "channelPhoneticNameUpdated",

    // ADD DOCS
    ChannelCodecEncryptedUpdated = "channelCodecEncryptedUpdated",

    // ADD DOCS
    ChannelMaxClientsUpdated = "channelMaxClientsUpdated",

    // ADD DOCS
    ChannelFamilyMaxClientsUpdated = "channelFamilyMaxClientsUpdated",

    // [Events emitted through 'channeldeleted']

    // ADD DOCS
    ChannelDeleted = "channelDeleted",

    // [Events emitted through 'channelcreated']

    // ADD DOCS
    ChannelCreated = "channelCreated",

    // [Events emitted through 'textmessage']
    // targetmode = UNKNWON FULLY
    //      - 2 = channel message
    //      - 3 = server wide message

    // ADD DOCS
    TextMessage = "textMessage"

    // [ Here lies the grave of events we could have but TS doesn't let us ]
    // ServerWelcomeMessageUpdated = "serverWelcomeMessageUpdated", [ Not natively supported by TS3 :( ]
    // ServerPasswordUpdated = "serverPasswordUpdated", [ Not natively supported by TS3 :( ]
    // ServerMaxClinetsUpdated = "serverMaxClinetsUpdated", [ Not natively supported by TS3 :( ]
    // ServerReservedSlotsUpdated = "serverMaxClinetsUpdated", [ Not natively supported by TS3 :( ]
    // ServerHostMessageUpdated = "serverHostMessageUpdated", [ Not natively supported by TS3 :( ]
    // ServerHostMessageModeUpdated = "serverHostMessageModeUpdated", [ Not natively supported by TS3 :( ]
    // ServerHostBannerGfxIntervalUpdated = "serverHostBannerGfxIntervalUpdated", [ TBD ]
    // ServerUploadBandwidthLimitUpdated = "serverUploadBandwidthLimitUpdated", [ Not natively supported by TS3 :( ]
    // ServerUploadQuotaUpdated = "serverUploadQuotaUpdated", [ Not natively supported by TS3 :( ]
    // ServerDownloadBandwidthLimitUpdated = "serverDownloadBandwidthLimitUpdated", [ Not natively supported by TS3 :( ]
    // ServerDownloadQuotaUpdated = "serverDownloadQuotaUpdated", [ Not natively supported by TS3 :( ]
    // ServerAntiFloodPointsPerTickUpdated = "serverAntiFloodPointsPerTickUpdated", [ Not natively supported by TS3 :( ]
    // ServerAntiFloodPointsNeededBlockCommandUpdated = "serverAntiFloodPointsPerTickUpdated", [ Not natively supported by TS3 :( ]
    // ServerAntiFloodPointsNeededBlockIpUpdated = "serverAntiFloodPointsPerTickUpdated", [ Not natively supported by TS3 :( ]
    // ServerDefaultChannelAdminGroupUpdated = "serverDefaultChannelAdminGroupUpdated", [ Not natively supported by TS3 - May be able to grab via logs (INFO    |VirtualServer |1  |client 'Jacob P.'(id:3) changed default admin channelgroup to 'Channel Admin'(id:5)) ]
    // ServerMinClientsBeforeSilenceUpadated = "serverMinClientsBeforeSilenceUpdated", [ Not natively supported by TS3 :( ]
    // ServerEnableReportingToServerListUpdated = "serverEnableReportingToServerListUpdated", [ Not natively supported by TS3 :( ]
    // ServerEnableClientsLoggingUpdated = "serverEnableClientsLoggingUpdated", [ Not natively supported by TS3 :( ]
    // ServerEnableChannelsLoggingUpdated = "serverEnableChannelsLoggingUpdated", [ Not natively supported by TS3 :( ]
    // ServerEnableServerLoggingUpdated = "serverEnableServerLoggingUpdated", [ Not natively supported by TS3 :( ]
    // ServerEnableServerQueryLoggingUpdated = "serverEnableServerQueryLoggingUpdated", [ Not natively supported by TS3 :( ]
    // ServerEnablePermissionsLoggingUpdated = "serverEnablePermissionsLoggingUpdated", [ Not natively supported by TS3 :( ]
    // ServerEnableFileTransferLoggingUpdated = "serverEnableFileTransferLoggingUpdated", [ Not natively supported by TS3 :( ]

    // [Events emitted through 'serveredited']
    // I didn't note these props

    // [Events emitted through 'clientmoved']
    // ctid = Channel ID
    // reasonid =
    //      - 0 = self initiated
    //      - 1 = being moved
    //      - 4 = Previous channel deleted / Kicked from channel
    // clid = the server id of the client who moved
    // invokerid = the server id of the client initiating the move (only when moved by someone else)
    // invokername = the name of the client initiating the move (only when moved by someone else)
    // invokeruid = the unique id of the client initiating the move (only when moved by someone else)
    // reasonmsg = When kicked from channel

    // [Events emitted through 'clientmoved']
    // ctid = Channel ID
    // reasonid =
    //      - 0 = self initiated
    //      - 1 = being moved
    //      - 4 = Previous channel deleted / Kicked from channel
    // clid = the server id of the client who moved
    // invokerid = the server id of the client initiating the move (only when moved by someone else)
    // invokername = the name of the client initiating the move (only when moved by someone else)
    // invokeruid = the unique id of the client initiating the move (only when moved by someone else)
    // reasonmsg = When kicked from channel

    // [Events emitted through 'channelmoved']
    // Unknown

    // [Events emitted through 'cliententerview']
    // ctid = The id of the channel the client connected to
    // cfid = UNKNWON (Seems to always be 0)
    // reasonid =
    //      - 0 = Connected to server
    // clid = the server id of the client who connected
    // client_unique_identifier = the unique id of the client who connected
    // client_nickname = the nickname of the client who connected
    // client_input_muted = (0 | 1) if the client's mic is muted
    // client_output_muted = (0 | 1) if the client's speakers are deafened
    // client_outputonly_muted = UNKNOWN (Seems to always be either 0 or 1)
    // client_meta_data = UNKNOWN
    // client_is_recording = (0 | 1) if the client's recording
    // client_database_id = the database id of the connected client
    // client_channel_group_id = Current channel group ID of the client
    // client_servergroups = Current server group IDs of the client separated by a comma
    // client_away = Indicates whether the client is away or not
    // client_away_message = Away message of the client
    // client_type = Indicates whether the client is a ServerQuery client or not
    //      - 0 = not serverquery client
    //      - 1 = is serverquery client
    // client_flag_avatar = Indicates whether the client has set an avatar or not
    // client_talk_power = the clients current talk power
    // client_talk_request = Indicates whether the client is requesting talk power or not
    // client_talk_request_msg = The clients current talk power request message
    // client_description = the clients description
    // client_is_talker = Indicates whether the client is able to talk or not
    // client_is_priority_speaker = Indicates whether the client is a priority speaker or not
    // client_unread_messages = Number of unread offline messages in this clients inbox
    // Others I cant be asked to document right now
}
