import { Base } from "@teamspeak.js/structures/classes/Base";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { ServerGroupResolvable } from "@teamspeak.js/structures/classes/ServerGroup";
import { ChannelResolvable } from "@teamspeak.js/structures/classes/Channel";
import { ClientServerGroupManager } from "@teamspeak.js/managers/client/ClientServerGroupManager";
import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";
import { ClientNotOnlineError } from "@teamspeak.js/errors/client/ClientNotOnlineError";
import { ClientOnlineWithoutServerIdError } from "@teamspeak.js/errors/client/ClientOnlineWithoutServerIdError";
import { CannotResolveChannelId } from "@teamspeak.js/errors/channel/CannotResolveChannelId";
import { ClientMissingDatabaseIdError } from "@teamspeak.js/errors/client/ClientMissingDatabaseIdError";

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

        key = fromQuery ? ("clientDatabaseId" in data ? "clientDatabaseId" : "cldbid") : "databaseId";
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
    
    /**
     * A manager for the server groups belonging to this client
     * @type {ClientServerGroupManager}
     */
    public get serverGroups(): ClientServerGroupManager { return this._serverGroups; }

    /**
     * Provides a TeamSpeak formated URL for the client
     * @type {string}
     */
    public get url(): string { return `[URL=client://${this.serverId ?? 99999}/${this.uniqueId}~${encodeURIComponent(this.nickname ?? "")}]${this.nickname}[/URL]`; }

    /**
     * The client's unique id
     * @type {string}
     */
    public get id(): string { return this.uniqueId; }

    /**
     * The client's unique id
     * @type {string}
     */
    public get uniqueId(): string { return this._uniqueId; }

    /**
     * The server identifier assigned to the client, also known as clid (client id).
     * 
     * While the client is offline, undefined is returned.
     * @type {number|undefined}
     */
    public get serverId(): number | undefined { return this._serverId; }
    
    // DOCS: Add better details on when undefined is returned
    /**
     * The database id assigned to the client.
     * 
     * May return undefined in some cases.
     * @type {number|undefined}
     */
    public get databaseId(): number | undefined { return this._databaseId; }
    
    /**
     * The MyTeamSpeak identifier linked to the client.
     * 
     * Returns `undefined` if the client doesn't have a MyTeamSpeak associated
     * @type {string|undefined}
     */
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
    public get isOnline(): boolean { return this.serverId !== undefined; }

    /**
     * Pokes the client with the specified message
     * @param {string} message The message to poke the client with
     */
    public async poke(message: string): Promise<void> {
        if (!this.isOnline) {
            throw new ClientNotOnlineError("clientPoke");
        }

        if (this.serverId === undefined) {
            throw new ClientOnlineWithoutServerIdError(this.id);
        }

        await this._queryClient.execute(new QueryCommand("clientpoke", { clid: this.serverId, msg: message }));
    }

    /**
     * Sets the client as a talker
     * @param {boolean} isTalker Whether the client is or isn't a talker
     */
    public async setIsTalker(isTalker: boolean): Promise<void> {
        if (this.isOnline) {
            if (this.serverId === undefined) {
                throw new ClientOnlineWithoutServerIdError(this.id);
            }

            await this._queryClient.execute(new QueryCommand("clientedit", { clid: this.serverId, clientIsTalker: isTalker }));
            return;
        } else {
            if (this.databaseId === undefined) {
                throw new ClientMissingDatabaseIdError("clientSetIsTalker");
            }

            await this._queryClient.execute(new QueryCommand("clientedit", { cldbid: this.databaseId, clientIsTalker: isTalker }));
            return;
        }
    }

    /**
     * Sets the client's description
     * @param {string} description Description to set on the client
     */
    public async setDescription(description: string): Promise<void> {
        if (this.isOnline) {
            if (this.serverId === undefined) {
                throw new ClientOnlineWithoutServerIdError(this.id);
            }

            await this._queryClient.execute(new QueryCommand("clientedit", { clid: this.serverId, clientDescription: description }));
        } else {
            if (this.databaseId === undefined) {
                throw new ClientMissingDatabaseIdError("clientSetDescription");
            }

            await this._queryClient.execute(new QueryCommand("clientedit", { cldbid: this.databaseId, clientDescription: description }));
        }
    }

    /**
     * Moves the client to the specified channel
     * @param {ChannelResolvable} channel The channel to move to 
     * @param {string|undefined} [password] The password for the channel
     */
    public async move(channel: ChannelResolvable, password?: string): Promise<void> {
        if (!this.isOnline) {
            throw new ClientNotOnlineError("clientMove");
        }

        if (this.serverId === undefined) {
            throw new ClientOnlineWithoutServerIdError(this.id);
        }

        const channelId = this._queryClient.channels.resolveId(channel);
        if (channelId === null) {
            throw new CannotResolveChannelId(channel);
        }

        const params: { clid: number, cid: number, cpw?: string } = { clid: this.serverId, cid: channelId };
        if (password !== undefined) {
            params.cpw = password;
        }

        await this._queryClient.execute(new QueryCommand("clientmove", params));
    }

    /**
     * Kicks the client from the channel
     * @param {string} [reason] Reason for kick 
     */
    public async kickFromChannel(reason?: string): Promise<void> {
        if (!this.isOnline) {
            throw new ClientNotOnlineError("clientKickFromChannel");
        }

        if (this.serverId === undefined) {
            throw new ClientOnlineWithoutServerIdError(this.id);
        }

        if (reason !== undefined && reason.length > 40) {
            reason = reason.substring(0, 40);
        }

        const params: { clid: number, reasonid: 4, reasonmsg?: string } = { clid: this.serverId, reasonid: 4 };
        if (reason !== undefined) {
            params.reasonmsg = reason;
        }

        await this._queryClient.execute(new QueryCommand("clientkick", params));
    }

    /**
     * Kicks the client from the server
     * @param {string} [reason] Reason for kick 
     */
    public async kickFromServer(reason?: string): Promise<void> {
        if (!this.isOnline) {
            throw new ClientNotOnlineError("kickFromServer");
        }

        if (this.serverId === undefined) {
            throw new ClientOnlineWithoutServerIdError(this.id);
        }

        if (reason !== undefined && reason.length > 40) {
            reason = reason.substring(0, 40);
        }

        const params: { clid: number, reasonid: 5, reasonmsg?: string } = { clid: this.serverId, reasonid: 5 };
        if (reason !== undefined) {
            params.reasonmsg = reason;
        }

        await this._queryClient.execute(new QueryCommand("clientkick", params));
    }

    public override toString(): string {
        return `${this.nickname} (${this.uniqueId} | ${this.ip})`;
    }
}