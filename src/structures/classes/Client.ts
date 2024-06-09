import { Base } from "@teamspeak.js/structures/classes/Base";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { ServerGroupResolvable } from "@teamspeak.js/structures/classes/ServerGroup";
import { ClientServerGroupManager } from "@teamspeak.js/managers/client/ClientServerGroupManager";

export type ClientResolvable = Client | string;

export class Client extends Base {
    private _serverGroups: ClientServerGroupManager;

    private _uniqueId: string;
    private _serverId?: number;
    private _databaseId?: number;
    private _myTeamspeakId?: string;
    private _ip?: string;
    private _createdTimestamp?: number;
    private _lastConnectedTimestamp?: number;
    private _nickname?: string;
    private _description?: string;
    private _version?: string;
    private _platform?: string;
    private _connected: boolean = false;
    private _currentChannelId?: number;
    private _channelGroupId?: number;
    private _serverGroupIds: ServerGroupResolvable[] = [];
    private _isAway: boolean = false;
    private _awayMessage?: string;
    private _isTalking: boolean = false;
    private _inputMuted: boolean = false;
    private _outputMuted: boolean = false;
    private _isRecording: boolean = false;
    private _isOnline: boolean = false;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any, fromQuery: boolean = true) {
        super(queryClient);
        
        this._uniqueId = data[fromQuery ? "clientUniqueIdentifier" : "uniqueId"];

        this._patch(data, fromQuery);

        this._serverGroups = new ClientServerGroupManager(queryClient, this);
    }

    public _patch(data: any, fromQuery: boolean = true, updating: boolean = true) {
        let key = fromQuery ? "clid" : "serverId";
        if (key in data) {
            this._serverId = data[key];
        } else if (!updating) {
            this._serverId = undefined;
        }

        key = fromQuery ? "clientDatabaseId" : "databaseId";
        if (key in data) {
            this._databaseId = data[key];
        } else if (!updating) {
            this._databaseId = undefined;
        }

        key = fromQuery ? "clientMyteamspeakId" : "myTeamspeakId";
        if (key in data) {
            this._myTeamspeakId = data[key];
        } else if (!updating) {
            this._myTeamspeakId = undefined;
        }

        key = fromQuery ? ("connectionClientIp" in data ? "connectionClientIp" : "clientLastIp") : "ip";
        if (key in data) {
            this._ip = data[key];
        } else if (!updating) {
            this._ip = undefined;
        }

        key = fromQuery ? "clientCreated" : "createdTimestamp";
        if (key in data) {
            this._createdTimestamp = data[key];
        } else if (!updating) {
            this._createdTimestamp = undefined;
        }

        key = fromQuery ? "clientLastconnected" : "lastConnectedTimestamp";
        if (key in data) {
            this._lastConnectedTimestamp = data[key];
        } else if (!updating) {
            this._lastConnectedTimestamp = undefined;
        }

        key = fromQuery ? "clientNickname" : "nickname";
        if (key in data) {
            this._nickname = data[key];
        } else if (!updating) {
            this._nickname = undefined;
        }

        key = fromQuery ? "clientDescription" : "description";
        if (key in data) {
            this._description = data[key];
        } else if (!updating) {
            this._description = undefined;
        }

        key = fromQuery ? "cid" : "currentChannelId";
        if (key in data) {
            this._currentChannelId = data[key];
        } else if (!updating) {
            this._currentChannelId = undefined;
        }
        this._connected = this._currentChannelId !== null;

        key = fromQuery ? "clientVersion" : "version";
        if (key in data) {
            this._version = data[key];
        } else if (!updating) {
            this._version = undefined;
        }

        key = fromQuery ? "clientPlatform" : "platform";
        if (key in data) {
            this._platform = data[key];
        } else if (!updating) {
            this._platform = undefined;
        }

        key = fromQuery ? "clientChannelGroupId" : "channelGroupId";
        if (key in data) {
            this._channelGroupId = data[key];
        } else if (!updating) {
            this._channelGroupId = undefined;
        }

        key = fromQuery ? "clientServergroups" : "serverGroupIds";
        if (key in data) {
            this._serverGroupIds = data[key];
        } else if (!updating) {
            this._serverGroupIds = [];
        }

        key = fromQuery ? "clientAway" : "isAway";
        if (key in data) {
            this._isAway = data[key];
        } else if (!updating) {
            this._isAway = false;
        }

        key = fromQuery ? "clientAwayMessage" : "awayMessage";
        if (key in data) {
            this._awayMessage = data[key];
        } else if (!updating) {
            this._awayMessage = undefined;
        }

        key = fromQuery ? "clientIsTalker" : "isTalking";
        if (key in data) {
            this._isTalking = data[key];
        } else if (!updating) {
            this._isTalking = false;
        }

        key = fromQuery ? "clientInputMuted" : "inputMuted";
        if (key in data) {
            this._inputMuted = data[key];
        } else if (!updating) {
            this._inputMuted = false;
        }

        key = fromQuery ? "clientOutputMuted" : "outputMuted";
        if (key in data) {
            this._outputMuted = data[key];
        } else if (!updating) {
            this._outputMuted = false;
        }

        key = fromQuery ? "clientIsRecording" : "isRecording";
        if (key in data) {
            this._isRecording = data[key];
        } else if (!updating) {
            this._isRecording = false;
        }
    }
    
    // ADD DOCS
    public get serverGroups(): ClientServerGroupManager { return this._serverGroups; }

    // ADD DOCS
    public get id(): string { return this.uniqueId; }

    // ADD DOCS
    public get uniqueId(): string { return this._uniqueId; }

    // ADD DOCS
    public get serverId(): number | undefined { return this._serverId; }
    
    // ADD DOCS
    public get databaseId(): number | undefined { return this._databaseId; }
    
    // ADD DOCS
    public get myTeamspeakId(): string | undefined { return this._myTeamspeakId; }
    
    // ADD DOCS
    public get ip(): string | undefined { return this._ip; }
    
    // ADD DOCS
    public get createdTimestamp(): number | undefined { return this._createdTimestamp; }
    
    // ADD DOCS
    public get lastConnectedTimestamp(): number | undefined { return this._lastConnectedTimestamp; }
    
    // ADD DOCS
    public get nickname(): string | undefined { return this._nickname; }
    
    // ADD DOCS
    public get description(): string | undefined { return this._description; }
    
    // ADD DOCS
    public get version(): string | undefined { return this._version; }
    
    // ADD DOCS
    public get platform(): string | undefined { return this._platform; }
    
    // ADD DOCS
    public get connected(): boolean { return this._connected; }
    
    // ADD DOCS
    public get currentChannelId(): number | undefined { return this._currentChannelId; }
    
    // ADD DOCS
    public get channelGroupId(): number | undefined { return this._channelGroupId; }
    
    // ADD DOCS
    public get serverGroupIds(): ServerGroupResolvable[] { return this._serverGroupIds; }
    
    // ADD DOCS
    public get isAway(): boolean { return this._isAway; }
    
    // ADD DOCS
    public get awayMessage(): string | undefined { return this._awayMessage; }
    
    // ADD DOCS
    public get isTalking(): boolean { return this._isTalking; }
    
    // ADD DOCS
    public get inputMuted(): boolean { return this._inputMuted; }
    
    // ADD DOCS
    public get outputMuted(): boolean { return this._outputMuted; }
    
    // ADD DOCS
    public get isRecording(): boolean { return this._isRecording; }
    
    // ADD DOCS
    public get isOnline(): boolean { return this._isOnline; }

    // ADD DOCS
    public async setNickname(nickname: string): Promise<void> {
        // TODO: Implementation
    }

    // ADD DOCS
    public async setIsTalker(isTalker: boolean): Promise<void> {
        // TODO: Implementation
    }

    // ADD DOCS
    public async setDescription(description: string): Promise<void> {
        // TODO: Implementation
    }

    // ADD DOCS
    public async setIsChannelCommander(isTalker: boolean): Promise<void> {
        // TODO: Implementation
    }

    // ADD DOCS
    public async setIconId(iconId: number): Promise<void> {
        // TODO: Implementation
    }
}