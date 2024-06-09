import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { ChannelManager } from "@teamspeak.js/managers/channel/ChannelManager";
import { Base } from "@teamspeak.js/structures/classes/Base";
import { HostMessageMode } from "@teamspeak.js/structures/enums/HostMessageMode";
import { ServerGroupResolvable } from "@teamspeak.js/structures/classes/ServerGroup";
import { ChannelGroupResolvable } from "@teamspeak.js/structures/classes/ChannelGroup";
import { HostBannerMode } from "../enums/HostBannerMode";
import { CodecEncryptionMode } from "../enums/CodecEncryptionMode";

export type VirtualServerResolvable = VirtualServer | number;

export class VirtualServer extends Base {
    private _channels: ChannelManager;

    private _id: number;
    private _name?: string;
    private _welcomeMessage?: string;
    private _maxClients?: number;
    private _password?: string;
    private _createdAt?: string;
    private _uptime?: number;
    private _hostMessage?: string;
    private _hostMessageMode?: HostMessageMode;
    private _defaultServerGroup?: ServerGroupResolvable;
    private _defaultChannelGroup?: ChannelGroupResolvable;
    private _defaultChannelAdminGroup?: ChannelGroupResolvable;
    private _platform?: string;
    private _version?: string;
    private _maxDownloadTotalBandwidth?: number;
    private _maxUploadTotalBandwidth?: number;
    private _hostBannerUrl?: string;
    private _hostBannerGfxUrl?: string;
    private _hostBannerGfxInterval?: number;

    private _complainAutoBanCount?: number;
    private _complainAutoBanTime?: number;
    private _complainRemoveTime?: number;
    private _minClientsInChannelBeforeForcedSilence?: number;
    private _prioritySpeakerDimmModificator?: number;
    private _antiFloodPointsTickReduce?: number;
    private _antiFloodPointsNeededCommandBlock?: number;
    private _antiFloodPointsNeededPluginBlock?: number;
    private _antiFloodPointsNeededIpBlock?: number;
    private _hostBannerMode?: HostBannerMode;

    private _askForPrivilegeKey?: boolean;
    private _nickname?: string;
    private _uniqueIdentifier?: string;
    private _clientsOnline?: number;
    private _channelsOnline?: number;
    private _codecEncryptionMode?: CodecEncryptionMode;
    private _fileBase?: string;
    private _flagPassword?: boolean;
    private _clientConnections?: number;
    private _queryClientConnections?: number;
    private _hostButtonTooltip?: string;
    private _hostButtonUrl?: string;
    private _hostButtonGfxUrl?: string;
    private _queryClientsOnline?: number;
    private _downloadQuota?: number;
    private _uploadQuota?: number;
    private _monthBytesDownloaded?: number;
    private _monthBytesUploaded?: number;
    private _totalBytesDownloaded?: number;
    private _totalBytesUploaded?: number;
    private _port?: number;
    private _autostart?: string;
    private _machineId?: string;
    private _neededIdentitySecurityLevel?: string;
    private _logClient?: boolean;
    private _logQuery?: boolean;
    private _logChannel?: boolean;
    private _logPermissions?: boolean;
    private _logServer?: boolean;
    private _logFiletransfer?: boolean;
    private _minClientVersion?: string;
    private _namePhonetic?: string;
    private _iconId?: number;
    private _reservedSlots?: number;
    private _totalPacketLossSpeech?: number;
    private _totalPacketLossKeepalive?: number;
    private _totalPacketLossControl?: number;
    private _totalPacketLossTotal?: number;
    private _totalPing?: number;
    private _ip?: string;
    private _weblistEnabled?: boolean;
    private _channelTempDeleteDelayDefault?: number;
    private _minAndroidVersion?: string;
    private _minIosVersion?: string;
    private _status?: string;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any, fromQuery: boolean = true) {
        super(queryClient);
        
        this._id = data[fromQuery ? "virtualserverId" : "id"];

        this._patch(data, fromQuery);

        this._channels = new ChannelManager(queryClient);
    }

    public _patch(data: any, fromQuery: boolean = true, updating: boolean = true) {
        let key = fromQuery ? "virtualserverName" : "name";
        if (key in data) {
            this._name = data[key];
        } else if (!updating) {
            this._name = undefined;
        }
        
        key = fromQuery ? "virtualserverWelcomemessage" : "welcomeMessage";
        if (key in data) {
            this._welcomeMessage = data[key];
        } else if (!updating) {
            this._welcomeMessage = undefined;
        }
        
        key = fromQuery ? "virtualserverMaxclients" : "maxClients";
        if (key in data) {
            this._maxClients = data[key];
        } else if (!updating) {
            this._maxClients = undefined;
        }
        
        key = fromQuery ? "virtualserverPassword" : "password";
        if (key in data) {
            this._password = data[key];
        } else if (!updating) {
            this._password = undefined;
        }
        
        key = fromQuery ? "virtualserverCreated" : "createdAt";
        if (key in data) {
            this._createdAt = data[key];
        } else if (!updating) {
            this._createdAt = undefined;
        }
        
        key = fromQuery ? "virtualserverUptime" : "uptime";
        if (key in data) {
            this._uptime = data[key];
        } else if (!updating) {
            this._uptime = undefined;
        }
        
        key = fromQuery ? "virtualserverHostmessage" : "hostMessage";
        if (key in data) {
            this._hostMessage = data[key];
        } else if (!updating) {
            this._hostMessage = undefined;
        }
        
        key = fromQuery ? "virtualserverHostmessageMode" : "hostMessageMode";
        if (key in data) {
            this._hostMessageMode = data[key];
        } else if (!updating) {
            this._hostMessageMode = undefined;
        }
        
        key = fromQuery ? "virtualserverDefaultServerGroup" : "defaultServerGroup";
        if (key in data) {
            this._defaultServerGroup = data[key];
        } else if (!updating) {
            this._defaultServerGroup = undefined;
        }
        
        key = fromQuery ? "virtualserverDefaultChannelGroup" : "defaultChannelGroup";
        if (key in data) {
            this._defaultChannelGroup = data[key];
        } else if (!updating) {
            this._defaultChannelGroup = undefined;
        }
        
        key = fromQuery ? "virtualserverDefaultChannelAdminGroup" : "defaultChannelAdminGroup";
        if (key in data) {
            this._defaultChannelAdminGroup = data[key];
        } else if (!updating) {
            this._defaultChannelAdminGroup = undefined;
        }
        
        key = fromQuery ? "virtualserverPlatform" : "platform";
        if (key in data) {
            this._platform = data[key];
        } else if (!updating) {
            this._platform = undefined;
        }
        
        key = fromQuery ? "virtualserverVersion" : "version";
        if (key in data) {
            this._version = data[key];
        } else if (!updating) {
            this._version = undefined;
        }
        
        key = fromQuery ? "virtualserverMaxDownloadTotalBandwidth" : "maxDownloadTotalBandwidth";
        if (key in data) {
            this._maxDownloadTotalBandwidth = data[key];
        } else if (!updating) {
            this._maxDownloadTotalBandwidth = undefined;
        }
        
        key = fromQuery ? "virtualserverMaxUploadTotalBandwidth" : "maxUploadTotalBandwidth";
        if (key in data) {
            this._maxUploadTotalBandwidth = data[key];
        } else if (!updating) {
            this._maxUploadTotalBandwidth = undefined;
        }
        
        key = fromQuery ? "virtualserverHostbannerUrl" : "hostBannerUrl";
        if (key in data) {
            this._hostBannerUrl = data[key];
        } else if (!updating) {
            this._hostBannerUrl = undefined;
        }
        
        key = fromQuery ? "virtualserverHostbannerGfxUrl" : "hostBannerGfxUrl";
        if (key in data) {
            this._hostBannerGfxUrl = data[key];
        } else if (!updating) {
            this._hostBannerGfxUrl = undefined;
        }
        
        key = fromQuery ? "virtualserverHostbannerGfxInterval" : "hostBannerGfxInterval";
        if (key in data) {
            this._hostBannerGfxInterval = data[key];
        } else if (!updating) {
            this._hostBannerGfxInterval = undefined;
        }
        
        key = fromQuery ? "virtualservercomplainAutoBanCount" : "complainAutoBanCount";
        if (key in data) {
            this._complainAutoBanCount = data[key];
        } else if (!updating) {
            this._complainAutoBanCount = undefined;
        }
        
        key = fromQuery ? "virtualservercomplainAutoBanTime" : "complainAutoBanTime";
        if (key in data) {
            this._complainAutoBanTime = data[key];
        } else if (!updating) {
            this._complainAutoBanTime = undefined;
        }
        
        key = fromQuery ? "virtualserverComplainRemoveTime" : "complainRemoveTime";
        if (key in data) {
            this._complainRemoveTime = data[key];
        } else if (!updating) {
            this._complainRemoveTime = undefined;
        }
        
        key = fromQuery ? "virtualserverMinClientsInChannelBeforeForcedSilence" : "minClientsInChannelBeforeForcedSilence";
        if (key in data) {
            this._minClientsInChannelBeforeForcedSilence = data[key];
        } else if (!updating) {
            this._minClientsInChannelBeforeForcedSilence = undefined;
        }
        
        key = fromQuery ? "virtualserverPrioritySpeakerDimmModificator" : "prioritySpeakerDimmModificator";
        if (key in data) {
            this._prioritySpeakerDimmModificator = data[key];
        } else if (!updating) {
            this._prioritySpeakerDimmModificator = undefined;
        }
        
        key = fromQuery ? "virtualserverantiFloodPointsTickReduce" : "antiFloodPointsTickReduce";
        if (key in data) {
            this._antiFloodPointsTickReduce = data[key];
        } else if (!updating) {
            this._antiFloodPointsTickReduce = undefined;
        }
        
        key = fromQuery ? "virtualserverantiFloodPointsNeededCommandBlock" : "antiFloodPointsNeededCommandBlock";
        if (key in data) {
            this._antiFloodPointsNeededCommandBlock = data[key];
        } else if (!updating) {
            this._antiFloodPointsNeededCommandBlock = undefined;
        }
        
        key = fromQuery ? "virtualserverantiFloodPointsNeededPluginBlock" : "antiFloodPointsNeededPluginBlock";
        if (key in data) {
            this._antiFloodPointsNeededPluginBlock = data[key];
        } else if (!updating) {
            this._antiFloodPointsNeededPluginBlock = undefined;
        }
        
        key = fromQuery ? "virtualserverantiFloodPointsNeededIpBlock" : "antiFloodPointsNeededIpBlock";
        if (key in data) {
            this._antiFloodPointsNeededIpBlock = data[key];
        } else if (!updating) {
            this._antiFloodPointsNeededIpBlock = undefined;
        }
        
        key = fromQuery ? "virtualserverHostbannerMode" : "hostBannerMode";
        if (key in data) {
            this._hostBannerMode = data[key];
        } else if (!updating) {
            this._hostBannerMode = undefined;
        }
        
        key = fromQuery ? "virtualserveraskForPrivilegeKey" : "askForPrivilegeKey";
        if (key in data) {
            this._askForPrivilegeKey = data[key];
        } else if (!updating) {
            this._askForPrivilegeKey = undefined;
        }
        
        key = fromQuery ? "virtualserverNickname" : "nickname";
        if (key in data) {
            this._nickname = data[key];
        } else if (!updating) {
            this._nickname = undefined;
        }
        
        key = fromQuery ? "virtualserverUniqueIdentifier" : "uniqueIdentifier";
        if (key in data) {
            this._uniqueIdentifier = data[key];
        } else if (!updating) {
            this._uniqueIdentifier = undefined;
        }
        
        key = fromQuery ? "virtualserverClientsonline" : "clientsOnline";
        if (key in data) {
            this._clientsOnline = data[key];
        } else if (!updating) {
            this._clientsOnline = undefined;
        }
        
        key = fromQuery ? "virtualserverChannelsonline" : "channelsOnline";
        if (key in data) {
            this._channelsOnline = data[key];
        } else if (!updating) {
            this._channelsOnline = undefined;
        }
        
        key = fromQuery ? "virtualserverCodecEncryptionMode" : "codecEncryptionMode";
        if (key in data) {
            this._codecEncryptionMode = data[key];
        } else if (!updating) {
            this._codecEncryptionMode = undefined;
        }
        
        key = fromQuery ? "virtualserverFilebase" : "fileBase";
        if (key in data) {
            this._fileBase = data[key];
        } else if (!updating) {
            this._fileBase = undefined;
        }
        
        key = fromQuery ? "virtualserverFlagPassword" : "flagPassword";
        if (key in data) {
            this._flagPassword = data[key];
        } else if (!updating) {
            this._flagPassword = undefined;
        }
        
        key = fromQuery ? "virtualserverClientConnections" : "clientConnections";
        if (key in data) {
            this._clientConnections = data[key];
        } else if (!updating) {
            this._clientConnections = undefined;
        }
        
        key = fromQuery ? "virtualserverQueryClientConnections" : "queryClientConnections";
        if (key in data) {
            this._queryClientConnections = data[key];
        } else if (!updating) {
            this._queryClientConnections = undefined;
        }
        
        key = fromQuery ? "virtualserverHostbuttonTooltip" : "hostButtonTooltip";
        if (key in data) {
            this._hostButtonTooltip = data[key];
        } else if (!updating) {
            this._hostButtonTooltip = undefined;
        }
        
        key = fromQuery ? "virtualserverHostbuttonUrl" : "hostButtonUrl";
        if (key in data) {
            this._hostButtonUrl = data[key];
        } else if (!updating) {
            this._hostButtonUrl = undefined;
        }
        
        key = fromQuery ? "virtualserverHostbuttonGfxUrl" : "hostButtonGfxUrl";
        if (key in data) {
            this._hostButtonGfxUrl = data[key];
        } else if (!updating) {
            this._hostButtonGfxUrl = undefined;
        }
        
        key = fromQuery ? "virtualserverqueryClientsOnline" : "queryClientsOnline";
        if (key in data) {
            this._queryClientsOnline = data[key];
        } else if (!updating) {
            this._queryClientsOnline = undefined;
        }
        
        key = fromQuery ? "virtualserverDownloadQuota" : "downloadQuota";
        if (key in data) {
            this._downloadQuota = data[key];
        } else if (!updating) {
            this._downloadQuota = undefined;
        }
        
        key = fromQuery ? "virtualserverUploadQuota" : "uploadQuota";
        if (key in data) {
            this._uploadQuota = data[key];
        } else if (!updating) {
            this._uploadQuota = undefined;
        }
        
        key = fromQuery ? "virtualserverMonthBytesDownloaded" : "monthBytesDownloaded";
        if (key in data) {
            this._monthBytesDownloaded = data[key];
        } else if (!updating) {
            this._monthBytesDownloaded = undefined;
        }
        
        key = fromQuery ? "virtualserverMonthBytesUploaded" : "monthBytesUploaded";
        if (key in data) {
            this._monthBytesUploaded = data[key];
        } else if (!updating) {
            this._monthBytesUploaded = undefined;
        }
        
        key = fromQuery ? "virtualserverTotalBytesDownloaded" : "totalBytesDownloaded";
        if (key in data) {
            this._totalBytesDownloaded = data[key];
        } else if (!updating) {
            this._totalBytesDownloaded = undefined;
        }
        
        key = fromQuery ? "virtualserverTotalBytesUploaded" : "totalBytesUploaded";
        if (key in data) {
            this._totalBytesUploaded = data[key];
        } else if (!updating) {
            this._totalBytesUploaded = undefined;
        }
        
        key = fromQuery ? "virtualserverPort" : "port";
        if (key in data) {
            this._port = data[key];
        } else if (!updating) {
            this._port = undefined;
        }
        
        key = fromQuery ? "virtualserverAutostart" : "autostart";
        if (key in data) {
            this._autostart = data[key];
        } else if (!updating) {
            this._autostart = undefined;
        }
        
        key = fromQuery ? "virtualserverMachineId" : "machineId";
        if (key in data) {
            this._machineId = data[key];
        } else if (!updating) {
            this._machineId = undefined;
        }
        
        key = fromQuery ? "virtualserverNeededIdentitySecurityLevel" : "neededIdentitySecurityLevel";
        if (key in data) {
            this._neededIdentitySecurityLevel = data[key];
        } else if (!updating) {
            this._neededIdentitySecurityLevel = undefined;
        }
        
        key = fromQuery ? "virtualserverLogClient" : "logClient";
        if (key in data) {
            this._logClient = data[key];
        } else if (!updating) {
            this._logClient = undefined;
        }
        
        key = fromQuery ? "virtualserverLogQuery" : "logQuery";
        if (key in data) {
            this._logQuery = data[key];
        } else if (!updating) {
            this._logQuery = undefined;
        }
        
        key = fromQuery ? "virtualserverLogChannel" : "logChannel";
        if (key in data) {
            this._logChannel = data[key];
        } else if (!updating) {
            this._logChannel = undefined;
        }
        
        key = fromQuery ? "virtualserverLogPermissions" : "logPermissions";
        if (key in data) {
            this._logPermissions = data[key];
        } else if (!updating) {
            this._logPermissions = undefined;
        }
        
        key = fromQuery ? "virtualserverLogServer" : "logServer";
        if (key in data) {
            this._logServer = data[key];
        } else if (!updating) {
            this._logServer = undefined;
        }
        
        key = fromQuery ? "virtualserverLogFiletransfer" : "logFiletransfer";
        if (key in data) {
            this._logFiletransfer = data[key];
        } else if (!updating) {
            this._logFiletransfer = undefined;
        }
        
        key = fromQuery ? "virtualserverMinClientVersion" : "minClientVersion";
        if (key in data) {
            this._minClientVersion = data[key];
        } else if (!updating) {
            this._minClientVersion = undefined;
        }
        
        key = fromQuery ? "virtualserverNamePhonetic" : "namePhonetic";
        if (key in data) {
            this._namePhonetic = data[key];
        } else if (!updating) {
            this._namePhonetic = undefined;
        }
        
        key = fromQuery ? "virtualserverIconId" : "iconId";
        if (key in data) {
            this._iconId = data[key];
        } else if (!updating) {
            this._iconId = undefined;
        }
        
        key = fromQuery ? "virtualserverReservedSlots" : "reservedSlots";
        if (key in data) {
            this._reservedSlots = data[key];
        } else if (!updating) {
            this._reservedSlots = undefined;
        }
        
        key = fromQuery ? "virtualserverTotalPacketLossSpeech" : "totalPacketLossSpeech";
        if (key in data) {
            this._totalPacketLossSpeech = data[key];
        } else if (!updating) {
            this._totalPacketLossSpeech = undefined;
        }
        
        key = fromQuery ? "virtualserverTotalPacketLossKeepalive" : "totalPacketLossKeepalive";
        if (key in data) {
            this._totalPacketLossKeepalive = data[key];
        } else if (!updating) {
            this._totalPacketLossKeepalive = undefined;
        }
        
        key = fromQuery ? "virtualserverTotalPacketLossControl" : "totalPacketLossControl";
        if (key in data) {
            this._totalPacketLossControl = data[key];
        } else if (!updating) {
            this._totalPacketLossControl = undefined;
        }
        
        key = fromQuery ? "virtualserverTotalPacketLossTotal" : "totalPacketLossTotal";
        if (key in data) {
            this._totalPacketLossTotal = data[key];
        } else if (!updating) {
            this._totalPacketLossTotal = undefined;
        }
        
        key = fromQuery ? "virtualserverTotalPing" : "totalPing";
        if (key in data) {
            this._totalPing = data[key];
        } else if (!updating) {
            this._totalPing = undefined;
        }
        
        key = fromQuery ? "virtualserverIp" : "ip";
        if (key in data) {
            this._ip = data[key];
        } else if (!updating) {
            this._ip = undefined;
        }
        
        key = fromQuery ? "virtualserverWeblistEnabled" : "weblistEnabled";
        if (key in data) {
            this._weblistEnabled = data[key];
        } else if (!updating) {
            this._weblistEnabled = undefined;
        }
        
        key = fromQuery ? "virtualserverChannelTempDeleteDelayDefault" : "channelTempDeleteDelayDefault";
        if (key in data) {
            this._channelTempDeleteDelayDefault = data[key];
        } else if (!updating) {
            this._channelTempDeleteDelayDefault = undefined;
        }
        
        key = fromQuery ? "virtualserverMinAndroidVersion" : "minAndroidVersion";
        if (key in data) {
            this._minAndroidVersion = data[key];
        } else if (!updating) {
            this._minAndroidVersion = undefined;
        }
        
        key = fromQuery ? "virtualserverMinIosVersion" : "minIosVersion";
        if (key in data) {
            this._minIosVersion = data[key];
        } else if (!updating) {
            this._minIosVersion = undefined;
        }
        
        key = fromQuery ? "virtualserverStatus" : "status";
        if (key in data) {
            this._status = data[key];
        } else if (!updating) {
            this._status = undefined;
        }
    }

    /**
     * A manager of channels in the virtual server
     */
    public get channels(): ChannelManager { return this._channels; }

    /**
     * Database ID of the virtual server
     */
    public get id(): number { return this._id; }

    /**
     * Name of the virtual server
     */
    public get name(): string | undefined { return this._name; }

    /**
     * Welcome message of the virtual server
     */
    public get welcomeMessage(): string | undefined { return this._welcomeMessage; }

    /**
     * Number of slots available on the virtual server
     */
    public get maxClients(): number | undefined { return this._maxClients; }

    /**
     * Password of the virtual server
     */
    public get password(): string | undefined { return this._password; }

    /**
     * Creation date and time of the virtual server as UTC timestamp
     */
    public get createdAt(): string | undefined { return this._createdAt; }

    /**
     * Uptime in seconds
     */
    // TODO: Make uptime checked via query for accurate results
    public get uptime(): number | undefined { return this._uptime; }

    /**
     * Host message of the virtual server
     */
    public get hostMessage(): string | undefined { return this._hostMessage; }

    /**
     * Host message mode of the virtual server
     */
    public get hostMessageMode(): HostMessageMode | undefined { return this._hostMessageMode; }

    /**
     * Default server group
     */
    public get defaultServerGroup(): ServerGroupResolvable | undefined { return this._defaultServerGroup; }

    /**
     * Default channel group
     */
    public get defaultChannelGroup(): ChannelGroupResolvable | undefined { return this._defaultChannelGroup; }

    /**
     * Default channel administrator group
     */
    public get defaultChannelAdminGroup(): ChannelGroupResolvable | undefined { return this._defaultChannelAdminGroup; }
    
    /**
     * Operating system the server is running on
     */
    public get platform(): string | undefined { return this._platform; }
    
    /**
     * Server version information including build number
     */
    public get version(): string | undefined { return this._version; }
    
    /**
     * Max bandwidth for outgoing file transfers on the virtual server (Bytes/s)
     */
    public get maxDownloadTotalBandwidth(): number | undefined { return this._maxDownloadTotalBandwidth; }
    
    /**
     * Max bandwidth for incoming file transfers on the virtual server (Bytes/s)
     */
    public get maxUploadTotalBandwidth(): number | undefined { return this._maxUploadTotalBandwidth; }
    
    /**
     * Host banner URL opened on click
     */
    public get hostBannerUrl(): string | undefined { return this._hostBannerUrl; }
    
    /**
     * Host banner URL used as image source
     */
    public get hostBannerGfxUrl(): string | undefined { return this._hostBannerGfxUrl; }
    
    /**
     * Interval for reloading the banner on client-side
     */
    public get hostBannerGfxInterval(): number | undefined { return this._hostBannerGfxInterval; }

    /**
     * Number of complaints needed to ban a client automatically
     */
    public get complainAutoBanCount(): number | undefined { return this._complainAutoBanCount; }

    /**
     * Time in seconds used for automatic bans triggered by complaints
     */
    public get complainAutoBanTime(): number | undefined { return this._complainAutoBanTime; }

    /**
     * Time in seconds before a complaint is deleted automatically
     */
    public get complainRemoveTime(): number | undefined { return this._complainRemoveTime; }

    /**
     * Number of clients in the same channel needed to force silence
     */
    public get minClientsInChannelBeforeForcedSilence(): number | undefined { return this._minClientsInChannelBeforeForcedSilence; }

    /**
     * Client volume lowered automatically while a priority speaker is talking
     */
    public get prioritySpeakerDimmModificator(): number | undefined { return this._prioritySpeakerDimmModificator; }

    /**
     * Anti-flood points removed from a client for being good
     */
    public get antiFloodPointsTickReduce(): number | undefined { return this._antiFloodPointsTickReduce; }

    /**
     * Anti-flood points needed to block commands being executed by the client
     */
    public get antiFloodPointsNeededCommandBlock(): number | undefined { return this._antiFloodPointsNeededCommandBlock; }

    /**
     * Anti-flood points needed to block plugin commands from the client
     */
    public get antiFloodPointsNeededPluginBlock(): number | undefined { return this._antiFloodPointsNeededPluginBlock; }

    /**
     * Anti-flood points needed to block incoming connections from the client
     */
    public get antiFloodPointsNeededIpBlock(): number | undefined { return this._antiFloodPointsNeededIpBlock; }

    /**
     * The display mode for the virtual servers hostbanner
     */
    public get hostBannerMode(): HostBannerMode | undefined { return this._hostBannerMode; }

    // DOCUMENT: Add docs
    public get askForPrivilegeKey(): boolean | undefined { return this._askForPrivilegeKey; }

    // DOCUMENT: Add docs
    public get nickname(): string | undefined { return this._nickname; }

    // DOCUMENT: Add docs
    public get uniqueIdentifier(): string | undefined { return this._uniqueIdentifier; }

    // DOCUMENT: Add docs
    public get clientsOnline(): number | undefined { return this._clientsOnline; }

    // DOCUMENT: Add docs
    public get channelsOnline(): number | undefined { return this._channelsOnline; }

    // DOCUMENT: Add docs
    public get codecEncryptionMode(): CodecEncryptionMode | undefined { return this._codecEncryptionMode; }

    // DOCUMENT: Add docs
    public get fileBase(): string | undefined { return this._fileBase; }

    // DOCUMENT: Add docs
    public get flagPassword(): boolean | undefined { return this._flagPassword; }

    // DOCUMENT: Add docs
    public get clientConnections(): number | undefined { return this._clientConnections; }

    // DOCUMENT: Add docs
    public get queryClientConnections(): number | undefined { return this._queryClientConnections; }

    // DOCUMENT: Add docs
    public get hostButtonTooltip(): string | undefined { return this._hostButtonTooltip; }

    // DOCUMENT: Add docs
    public get hostButtonUrl(): string | undefined { return this._hostButtonUrl; }

    // DOCUMENT: Add docs
    public get hostButtonGfxUrl(): string | undefined { return this._hostButtonGfxUrl; }

    // DOCUMENT: Add docs
    public get queryClientsOnline(): number | undefined { return this._queryClientsOnline; }

    // DOCUMENT: Add docs
    public get downloadQuota(): number | undefined { return this._downloadQuota; }

    // DOCUMENT: Add docs
    public get uploadQuota(): number | undefined { return this._uploadQuota; }

    // DOCUMENT: Add docs
    public get monthBytesDownloaded(): number | undefined { return this._monthBytesDownloaded; }

    // DOCUMENT: Add docs
    public get monthBytesUploaded(): number | undefined { return this._monthBytesUploaded; }

    // DOCUMENT: Add docs
    public get totalBytesDownloaded(): number | undefined { return this._totalBytesDownloaded; }

    // DOCUMENT: Add docs
    public get totalBytesUploaded(): number | undefined { return this._totalBytesUploaded; }

    // DOCUMENT: Add docs
    public get port(): number | undefined { return this._port; }

    // DOCUMENT: Add docs
    public get autostart(): string | undefined { return this._autostart; }

    // DOCUMENT: Add docs
    public get machineId(): string | undefined { return this._machineId; }

    // DOCUMENT: Add docs
    public get neededIdentitySecurityLevel(): string | undefined { return this._neededIdentitySecurityLevel; }

    // DOCUMENT: Add docs
    public get logClient(): boolean | undefined { return this._logClient; }

    // DOCUMENT: Add docs
    public get logQuery(): boolean | undefined { return this._logQuery; }

    // DOCUMENT: Add docs
    public get logChannel(): boolean | undefined { return this._logChannel; }

    // DOCUMENT: Add docs
    public get logPermissions(): boolean | undefined { return this._logPermissions; }

    // DOCUMENT: Add docs
    public get logServer(): boolean | undefined { return this._logServer; }

    // DOCUMENT: Add docs
    public get logFiletransfer(): boolean | undefined { return this._logFiletransfer; }

    // DOCUMENT: Add docs
    public get minClientVersion(): string | undefined { return this._minClientVersion; }

    // DOCUMENT: Add docs
    public get namePhonetic(): string | undefined { return this._namePhonetic; }

    // DOCUMENT: Add docs
    public get iconId(): number | undefined { return this._iconId; }

    // DOCUMENT: Add docs
    public get reservedSlots(): number | undefined { return this._reservedSlots; }

    // DOCUMENT: Add docs
    public get totalPacketLossSpeech(): number | undefined { return this._totalPacketLossSpeech; }

    // DOCUMENT: Add docs
    public get totalPacketLossKeepalive(): number | undefined { return this._totalPacketLossKeepalive; }

    // DOCUMENT: Add docs
    public get totalPacketLossControl(): number | undefined { return this._totalPacketLossControl; }

    // DOCUMENT: Add docs
    public get totalPacketLossTotal(): number | undefined { return this._totalPacketLossTotal; }

    // DOCUMENT: Add docs
    public get totalPing(): number | undefined { return this._totalPing; }

    // DOCUMENT: Add docs
    public get ip(): string | undefined { return this._ip; }

    // DOCUMENT: Add docs
    public get weblistEnabled(): boolean | undefined { return this._weblistEnabled; }

    // DOCUMENT: Add docs
    public get channelTempDeleteDelayDefault(): number | undefined { return this._channelTempDeleteDelayDefault; }

    // DOCUMENT: Add docs
    public get minAndroidVersion(): string | undefined { return this._minAndroidVersion; }

    // DOCUMENT: Add docs
    public get minIosVersion(): string | undefined { return this._minIosVersion; }

    // DOCUMENT: Add docs
    public get status(): string | undefined { return this._status; }

    /**
     * Set the name of the virtual server
     * @param name The new name to set for the virtual server
     */
    public async setName(name: string): Promise<void> {
        // TODO: Implementation
    }

    /**
     * Set the welcome message of the virtual server
     * @param message The new welcome message to set for the virtual server
     */
    public async setWelcomeMessage(message: string): Promise<void> {
        // TODO: Implementation
    }

    /**
     * Set the number of slots for the virtual server
     * @param maxClients The new number of slots for the virtual server
     */
    public async setMaxClients(maxClients: number): Promise<void> {
        // TODO: Implementation
    }

    /**
     * Set the password for the virtual server
     * @param password The new password for the virtual server
     */
    public async setPassword(password: string): Promise<void> {
        // TODO: Implementation
    }

    /**
     * Set the host message of the virtual server
     * @param message The new host message of the virtual server
     */
    public async setHostMessage(message: string): Promise<void> {
        // TODO: Implementation
    }

    /**
     * Set the host message mode of the virtual server
     * @param message The new host message mode of the virtual server
     */
    public async setHostMessageMode(mode: HostMessageMode): Promise<void> {
        // TODO: Implementation
    }

    /**
     * Set the default server group of the virtual server
     * @param group The new default server group of the virtual server
     */
    public async setDefaultServerGroup(group: ServerGroupResolvable): Promise<void> {
        // TODO: Implementation
    }

    /**
     * Set the default channel group of the virtual server
     * @param group The new channel server group of the virtual server
     */
    public async setDefaultChannelGroup(group: ChannelGroupResolvable): Promise<void> {
        // TODO: Implementation
    }

    /**
     * Set the default channel admin group of the virtual server
     * @param group The new default channel admin group of the virtual server
     */
    public async setDefaultChannelAdminGroup(group: ChannelGroupResolvable): Promise<void> {
        // TODO: Implementation
    }

    /**
     * Set the max bandwidth for outgoing file transfers on the virtual server
     * @param bytesPerSecond The new max bandwidth for outgoing file transfers on the virtual server
     */
    public async setMaxDownloadTotalBandwidth(bytesPerSecond: number): Promise<void> {
        // TODO: Implementation
    }

    /**
     * Set the max bandwidth for incoming file transfers on the virtual server
     * @param bytesPerSecond The new max bandwidth for incoming file transfers on the virtual server
     */
    public async setMaxUploadTotalBandwidth(bytesPerSecond: number): Promise<void> {
        // TODO: Implementation
    }

    /**
     * Set the host banner URL opened on click for the virtual server
     * @param url The new host banner URL opened on click for the virtual server
     */
    public async setHostBannerUrl(url: string): Promise<void> {
        // TODO: Implementation
    }

    /**
     * Set the host banner URL used as image source for the virtual server
     * @param url The new host banner URL used as image source for the virtual server
     */
    public async setHostBannerGfxUrl(url: string): Promise<void> {
        // TODO: Implementation
    }

    /**
     * Set the interval for reloading the banner on client-side for the virtual server
     * @param interval The new interval for reloading the banner on client-side for the virtual server
     */
    public async setHostBannerGfxInterval(interval: number): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setComplainAutoBanCount(count: number): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setComplainAutoBanTime(time: number): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setComplainRemoveTime(time: number): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setMinClientsInChannelBeforeForcedSilence(count: number): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setPrioritySpeakerDimmModificator(modifier: number): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setAntiFloodPointsTickReduce(points: number): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setAntiFloodPointsNeededCommandBlock(points: number): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setAntiFloodPointsNeededPluginBlock(points: number): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setAntiFloodPointsNeededIpBlock(points: number): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setHostbannerMode(HostBannerMode: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setNickname(nickname: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setCodecEncryptionMode(mode: CodecEncryptionMode): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setHostButtonTooltip(tooltip: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setHostButtonUrl(url: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setHostButtonGfxUrl(url: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setDownloadQuota(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setUploadQuota(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setPort(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setAutostart(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setMachineId(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setNeededIdentitySecurityLevel(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setLogClient(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setLogQuery(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setLogChannel(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setLogPermissions(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setLogServer(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setLogFiletransfer(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setMinClientVersion(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setNamePhonetic(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setIconId(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setReservedSlots(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setWeblistEnabled(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setChannelTempDeleteDelayDefault(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setMinAndroidVersion(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setMinIosVersion(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    // DOCUMENT: Add docs
    public async setStatus(TBD: string): Promise<void> {
        // TODO: Implementation
    }

    public override toString(): string {
        return `${this.name} (${this.id})`;
    }
}
