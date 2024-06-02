import { Base } from "@teamspeak.js/structures/classes/Base";
import { Channel } from "@teamspeak.js/structures/classes/Channel";
import { ServerGroupResolvable } from "@teamspeak.js/structures/typings/ServerGroupResolvable";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import {
    BanAddCommand,
    BanClientCommand,
    ClientDbEditCommand,
    ClientEditCommand,
    ClientKickCommand,
    ClientMoveCommand,
    ClientPokeCommand
} from "@teamspeak.js/websocket/queryCommands/commands";
import { TeamspeakJsError } from "@teamspeak.js/errors/TeamspeakJsError";
import { TeamspeakJsErrorCodes } from "@teamspeak.js/errors/TeamspeakJsErrorCodes";
import { TsIdentifier } from "@teamspeak.js/structures/typings/TsIdentifier";

// ADD DOCS
export class Client extends Base {
    /**
     * Primary Identifier
     */
    private _uniqueId: string;
    private _serverId: number | null = null;
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
    private _currentChannelId: number | null = null;
    private _channelGroupId: number | null = null;
    private _serverGroups: ServerGroupResolvable[] = [];
    private _isAway: boolean = false;
    private _awayMessage?: string = undefined;
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
    }

    /**
     * Primary Identifier
     */
    public get uniqueId(): string { return this._uniqueId; }
    public get serverId(): number | null { return this._serverId; }
    public get databaseId(): number | undefined { return this._databaseId; }
    public get myTeamspeakId(): string | undefined { return this._myTeamspeakId; }
    public get ip(): string | undefined { return this._ip; }
    public get createdTimestamp(): number | undefined { return this._createdTimestamp; }
    public get lastConnectedTimestamp(): number | undefined { return this._lastConnectedTimestamp; }
    public get nickname(): string | undefined { return this._nickname; }
    public get description(): string | undefined { return this._description; }
    public get version(): string | undefined { return this._version; }
    public get platform(): string | undefined { return this._platform; }
    public get connected(): boolean { return this._connected; }
    public get currentChannelId(): number | null { return this._currentChannelId; }
    public get channelGroupId(): number | null { return this._channelGroupId; }
    public get serverGroups(): ServerGroupResolvable[] { return this._serverGroups; }
    public get isAway(): boolean { return this._isAway; }
    public get awayMessage(): string | undefined { return this._awayMessage; }
    public get isTalking(): boolean { return this._isTalking; }
    public get inputMuted(): boolean { return this._inputMuted; }
    public get outputMuted(): boolean { return this._outputMuted; }
    public get isRecording(): boolean { return this._isRecording; }
    public get isOnline(): boolean { return this._isOnline; }

    public get currentChannel(): Channel | null {
        return this._currentChannelId === null ? null : this._queryClient.channels.resolve(this._currentChannelId);
    }

    public _patch(data: any, fromQuery: boolean = true, updating: boolean = true) {
        let key = fromQuery ? "clid" : "serverId";
        if (key in data) {
            this._serverId = data[key];
        } else if (!updating) {
            this._serverId = null;
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
            this._currentChannelId = null;
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
            this._channelGroupId = null;
        }

        key = fromQuery ? "clientServergroups" : "serverGroups";
        if (key in data) {
            this._serverGroups = data[key];
        } else if (!updating) {
            this._serverGroups = [];
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

        this._isOnline = this._platform !== undefined && this._ip !== undefined;
    }

    // TODO: Update
    public override toJSON() {
        return {
            ...super.toJSON(),
            currentChannel: this.currentChannel?.toJSON()
        };
    }

    public override toString(): string {
        return `${this._nickname} (${this._uniqueId} | ${this._ip})`;
    }

    /**
     * Bans a client from the server
     * @param options An object containing the reason and duration
     */
    public async ban(reason?: string): Promise<void> {
        if (!this._isOnline || this._serverId === null) {
            await this._queryClient.execute<{ banid: string }>(
                new BanAddCommand({
                    uniqueId: this._uniqueId,
                    reason: reason
                })
            );
        } else {
            await this._queryClient.execute<{ banid: string }>(new BanClientCommand(this._serverId, reason));
        }
    }

    /**
     * Temporarily bans a client from the server
     * @param options An object containing the reason and duration
     */
    public async tempban(duration: number, reason?: string): Promise<void> {
        if (!this._isOnline || this._serverId === null) {
            await this._queryClient.execute<{ banid: string }>(
                new BanAddCommand({
                    uniqueId: this._uniqueId,
                    reason: reason,
                    duration: duration
                })
            );
        } else {
            await this._queryClient.execute<{ banid: string }>(new BanClientCommand(this._serverId, reason, duration));
        }
    }

    /**
     * Kicks a client from the server
     * @param reason (Optional) The reason to kick the client
     */
    public async kickFromServer(reason?: string): Promise<void> {
        if (!this._isOnline || this._serverId === null) {
            throw new TeamspeakJsError(TeamspeakJsErrorCodes.ClientNotOnline, "clientServerKick");
        } else {
            await this._queryClient.execute(new ClientKickCommand(this._serverId, 5, reason));
        }
    }

    /**
     * Kicks a client from their current channel back to the default channel
     * @param reason (Optional) The reason to kick the client
     */
    public async kickFromChannel(reason?: string): Promise<void> {
        if (!this._isOnline || this._serverId === null) {
            throw new TeamspeakJsError(TeamspeakJsErrorCodes.ClientNotOnline, "clientChannelKick");
        } else {
            await this._queryClient.execute(new ClientKickCommand(this._serverId, 4, reason));
        }
    }

    /**
     * Pokes the client
     * @param message The message to poke the client with
     */
    public async poke(message: string): Promise<void> {
        if (!this._isOnline || this._serverId === null) {
            throw new TeamspeakJsError(TeamspeakJsErrorCodes.ClientNotOnline, "clientPoke");
        } else {
            await this._queryClient.execute(new ClientPokeCommand(this._serverId, message));
        }
    }

    /**
     * Set the description of the client
     * @param description The client's description
     */
    public async setDescription(description: string): Promise<void> {
        if (!this._isOnline || this._serverId === null) {
            if (this._databaseId === undefined) throw new TeamspeakJsError(TeamspeakJsErrorCodes.ClientNotOnline, "clientSetDescription");

            await this._queryClient.execute(
                new ClientDbEditCommand(this._databaseId, {
                    clientDescription: description
                })
            );
        } else {
            await this._queryClient.execute(
                new ClientEditCommand(this._serverId, {
                    clientDescription: description
                })
            );
        }
    }

    /**
     * Move the client to a specific channel
     * @param channel The channel to move the client to
     */
    public async move(channel: TsIdentifier | Object): Promise<void> {
        if (!this._isOnline || this._serverId === null) throw new TeamspeakJsError(TeamspeakJsErrorCodes.ClientNotOnline, "clientMove");
        const resolvedChannel = this._queryClient.channels.resolve(channel);

        // TODO: Throw a more meaningful error here
        if (resolvedChannel === null) throw new Error("AHH Cant find the channel from the provided parameter.");

        await this._queryClient.execute(new ClientMoveCommand(this._serverId, resolvedChannel.id));
    }
}
