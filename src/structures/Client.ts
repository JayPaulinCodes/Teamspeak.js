import { Base } from "./Base";
import { QueryClient } from "../client/QueryClient";
import { Channel } from "./Channel";
import { ServerGroupResolvable } from "./typings/ServerGroupResolvable";
// import { ServerGroup } from "./ServerGroup";

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

    
    
    
    // public isAway: boolean | null = null;
    // public awayMessage: string | undefined | null = null;
    // public isTalking: boolean | null = null;
    // public inputMuted: boolean | null = null;
    // public outputMuted: boolean | null = null;
    // public isRecording: boolean | null = null;
    // public totalConnections: number | null = null;
    // public idleTime: number | null = null;
    // public connectedTime: number | null = null;

    // private hasResolvedServerGroups = false;

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

        // this.uniqueId = "clientUniqueIdentifier" in data ? data.clientUniqueIdentifier : null;
        // this.databaseId = "clientDatabaseId" in data ? data.clientDatabaseId : null;
        // this.myTeamspeakId = "clientMyteamspeakId" in data ? data.clientMyteamspeakId : null;
        // this.ip = "connectionClientIp" in data ? data.connectionClientIp : null;
        // this.serverId = "clid" in data ? data.clid : null;

        // this.created = "clientCreated" in data ? data.clientCreated : null;
        // this.idleTime = "clientIdleTime" in data ? data.clientIdleTime : null;
        // this.lastConnected = "clientLastconnected" in data ? data.clientLastconnected : null;
        // this.totalConnections = "clientTotalconnections" in data ? data.clientTotalconnections : null;
        // this.connectedTime = "connectionConnectedTime" in data ? data.connectionConnectedTime : null;

        // this.nickname = "clientNickname" in data ? data.clientNickname : null;
        // this.description = "clientDescription" in data ? data.clientDescription : null;
        // this.isAway = "clientAway" in data ? data.clientAway : null;
        // this.awayMessage = "clientAwayMessage" in data ? data.clientAwayMessage : null;
        // this.isTalking = "clientIsTalker" in data ? data.clientIsTalker : null;
        // this.inputMuted = "clientInputMuted" in data ? data.clientInputMuted : null;
        // this.outputMuted = "clientOutputMuted" in data ? data.clientOutputMuted : null;
        // this.isRecording = "clientIsRecording" in data ? data.clientIsRecording : null;
        // this.channelGroupId = "clientChannelGroupId" in data ? data.clientChannelGroupId : null;
        // this.serverGroups = "clientServergroups" in data ? data.clientServergroups : null;

        // this.version = "clientVersion" in data ? data.clientVersion : null;
        // this.platform = "clientPlatform" in data ? data.clientPlatform : null;
        // this.cid = "cid" in data ? data.cid : null;

        // if ("connectionClientIp" in data) {
        //     this.ip = data.connectionClientIp;
        // } else if ("clientLastip" in data) {
        //     this.ip = data.clientLastip;
        // } else {
        //     this.ip = null;
        // }
    }

    public override toJSON() {
        return {
            ...super.toJSON(),
            currentChannel: this.currentChannel?.toJSON()
        };
    }
}
