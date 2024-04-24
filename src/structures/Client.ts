import { Base } from "@teamspeak.js/structures/Base";
import { Channel } from "@teamspeak.js/structures/Channel";
import { ServerGroupResolvable } from "@teamspeak.js/structures/typings/ServerGroupResolvable";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { BanAddCommand, BanClientCommand, ClientDbEditCommand, ClientEditCommand, ClientKickCommand, ClientMoveCommand, ClientPokeCommand } from "@teamspeak.js/websocket/queryCommands/commands";
import { TeamspeakJsError } from "@teamspeak.js/errors/TeamspeakJsError";
import { TeamspeakJsErrorCodes } from "@teamspeak.js/errors/TeamspeakJsErrorCodes";
import { TsIdentifier } from "@teamspeak.js/structures/typings/TsIdentifier";

// ADD DOCS
export class Client extends Base {
    /**
     * Primary Identifier
     */
    public uniqueId: string;
    public serverId: number | null = null;
    public databaseId?: number;
    public myTeamspeakId?: string;
    public ip?: string;
    public createdTimestamp?: number;
    public lastConnectedTimestamp?: number;
    public nickname?: string;
    public description?: string;
    public version?: string;
    public platform?: string;
    public connected: boolean = false;
    public currentChannelId: number | null = null;
    public channelGroupId: number | null = null;
    public serverGroups: ServerGroupResolvable[] = [];
    public isAway: boolean = false;
    public awayMessage?: string = undefined;
    public isTalking: boolean = false;
    public inputMuted: boolean = false;
    public outputMuted: boolean = false;
    public isRecording: boolean = false;
    public isOnline: boolean = false;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any, fromQuery: boolean = true) {
        super(queryClient);

        this.uniqueId = data[fromQuery ? "clientUniqueIdentifier" : "uniqueId"];
        
        this._patch(data, fromQuery);
    }

    public get currentChannel(): Channel | null {
        return this.currentChannelId === null ? null : this._queryClient.channels.resolve(this.currentChannelId);
    }

    public _patch(data: any, fromQuery: boolean = true) {
        let key = fromQuery ? "clid" : "serverId";
        if (key in data) {
            this.serverId = data[key];
        } else {
            this.serverId = null;
        }

        key = fromQuery ? "clientDatabaseId" : "databaseId";
        if (key in data) {
            this.databaseId = data[key];
        } else {
            this.databaseId = undefined;
        }

        key = fromQuery ? "clientMyteamspeakId" : "myTeamspeakId";
        if (key in data) {
            this.myTeamspeakId = data[key];
        } else {
            this.myTeamspeakId = undefined;
        }

        // HACK
        key = fromQuery ? "connectionClientIp" in data ? "connectionClientIp" : "clientLastIp" : "ip";
        if (key in data) {
            this.ip = data[key];
        } else {
            this.ip = undefined;
        }

        key = fromQuery ? "clientCreated" : "createdTimestamp";
        if (key in data) {
            this.createdTimestamp = data[key];
        } else {
            this.createdTimestamp = undefined;
        }

        key = fromQuery ? "clientLastconnected" : "lastConnectedTimestamp";
        if (key in data) {
            this.lastConnectedTimestamp = data[key];
        } else {
            this.lastConnectedTimestamp = undefined;
        }

        key = fromQuery ? "clientNickname" : "nickname";
        if (key in data) {
            this.nickname = data[key];
        } else {
            this.nickname = undefined;
        }

        key = fromQuery ? "clientDescription" : "description";
        if (key in data) {
            this.description = data[key];
        } else {
            this.description = undefined;
        }

        key = fromQuery ? "cid" : "currentChannelId";
        if (key in data) {
            this.currentChannelId = data[key];
        } else {
            this.currentChannelId = null;
        }
        this.connected = this.currentChannelId !== null

        key = fromQuery ? "clientVersion" : "version";
        if (key in data) {
            this.version = data[key];
        } else {
            this.version = undefined;
        }

        key = fromQuery ? "clientPlatform" : "platform";
        if (key in data) {
            this.platform = data[key];
        } else {
            this.platform = undefined;
        }

        key = fromQuery ? "clientChannelGroupId" : "channelGroupId";
        if (key in data) {
            this.channelGroupId = data[key];
        } else {
            this.channelGroupId = null;
        }

        key = fromQuery ? "clientServergroups" : "serverGroups";
        if (key in data) {
            this.serverGroups = data[key];
        } else {
            this.serverGroups = [];
        }

        key = fromQuery ? "clientAway" : "isAway";
        if (key in data) {
            this.isAway = data[key];
        } else {
            this.isAway = false;
        }

        key = fromQuery ? "clientAwayMessage" : "awayMessage";
        if (key in data) {
            this.awayMessage = data[key];
        } else {
            this.awayMessage = undefined;
        }

        key = fromQuery ? "clientIsTalker" : "isTalking";
        if (key in data) {
            this.isTalking = data[key];
        } else {
            this.isTalking = false;
        }

        key = fromQuery ? "clientInputMuted" : "inputMuted";
        if (key in data) {
            this.inputMuted = data[key];
        } else {
            this.inputMuted = false;
        }

        key = fromQuery ? "clientOutputMuted" : "outputMuted";
        if (key in data) {
            this.outputMuted = data[key];
        } else {
            this.outputMuted = false;
        }

        key = fromQuery ? "clientIsRecording" : "isRecording";
        if (key in data) {
            this.isRecording = data[key];
        } else {
            this.isRecording = false;
        }

        this.isOnline = this.platform !== undefined && this.ip !== undefined;
    }

    public override toJSON() {
        return {
            ...super.toJSON(),
            currentChannel: this.currentChannel?.toJSON()
        };
    }

    /**
     * Bans a client from the server
     * @param options An object containing the reason and duration
     */
    public async ban(options?: { reason: string | undefined, duration: number | undefined }): Promise<void> {
        if (!this.isOnline || this.serverId === null) {
            await this._queryClient.execute<{ banid: string }>(new BanAddCommand({
                uniqueId: this.uniqueId,
                reason: options?.reason, 
                duration: options?.duration
            }));
        } else {
            await this._queryClient.execute<{ banid: string }>(new BanClientCommand(this.serverId, options?.reason, options?.duration));
        }
    }

    /**
     * Kicks a client from the server
     * @param reason (Optional) The reason to kick the client
     */
    public async kickFromServer(reason?: string): Promise<void> {
        if (!this.isOnline || this.serverId === null) {
            throw new TeamspeakJsError(TeamspeakJsErrorCodes.ClientNotOnline, "clientServerKick");
        } else {
            await this._queryClient.execute(new ClientKickCommand(this.serverId, 5, reason));
        }
    }

    /**
     * Kicks a client from their current channel back to the default channel
     * @param reason (Optional) The reason to kick the client
     */
    public async kickFromChannel(reason?: string): Promise<void> {
        if (!this.isOnline || this.serverId === null) {
            throw new TeamspeakJsError(TeamspeakJsErrorCodes.ClientNotOnline, "clientChannelKick");
        } else {
            await this._queryClient.execute(new ClientKickCommand(this.serverId, 4, reason));
        }
    }

    /**
     * Pokes the client
     * @param message The message to poke the client with
     */
    public async poke(message: string): Promise<void> {
        if (!this.isOnline || this.serverId === null) {
            throw new TeamspeakJsError(TeamspeakJsErrorCodes.ClientNotOnline, "clientPoke");
        } else {
            await this._queryClient.execute(new ClientPokeCommand(this.serverId, message));
        }
    }

    /**
     * Set the description of the client
     * @param description The client's description
     */
    public async setDescription(description: string): Promise<void> {
        if (!this.isOnline || this.serverId === null) {
            if (this.databaseId === undefined) throw new TeamspeakJsError(TeamspeakJsErrorCodes.ClientNotOnline, "clientSetDescription");
            
            await this._queryClient.execute(new ClientDbEditCommand(this.databaseId, {
                clientDescription: description
            }));
        } else {
            await this._queryClient.execute(new ClientEditCommand(this.serverId, {
                clientDescription: description
            }));
        }
    }

    /**
     * Move the client to a specific channel
     * @param channel The channel to move the client to
     */
    public async move(channel: TsIdentifier | Object): Promise<void> {
        if (!this.isOnline || this.serverId === null) throw new TeamspeakJsError(TeamspeakJsErrorCodes.ClientNotOnline, "clientMove");
        const resolvedChannel = this._queryClient.channels.resolve(channel);

        // TODO: Throw a more meaningful error here
        if (resolvedChannel === null) throw new Error("AHH Cant find the channel from the provided parameter.");
        
        await this._queryClient.execute(new ClientMoveCommand(this.serverId, resolvedChannel.id));
    }
}
