import { QueryClient } from "../client/QueryClient";
import { Base } from "./Base";
import { ServerGroup } from "./ServerGroup";

// ADD DOCS
export class Client extends Base {
    uniqueId: string | null;
    databaseId: number | null;
    myTeamspeakId: string | null;
    ip: string | null;

    created: number | null;
    idleTime: number | null;
    lastConnected: number | null;
    totalConnections: number | null;
    connectedTime: number | null;

    nickname: string | null;
    description: string | undefined | null;
    isAway: boolean | null;
    awayMessage: string | undefined | null;
    isTalking: boolean | null;
    inputMuted: boolean | null;
    outputMuted: boolean | null;
    isRecording: boolean | null;
    channelGroupId: number | null;
    serverGroups: ServerGroup[] | number[] | null;
    
    version: string | null;
    platform: string | null;
    cid: number | null;

    private hasResolvedServerGroups = false;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any) {
        super(queryClient)

        this.patch(data);        
    }

    protected patch(data: any) {
        this.uniqueId = ("clientUniqueIdentifier" in data) ? data.clientUniqueIdentifier : null;
        this.databaseId = ("clientDatabaseId" in data) ? data.clientDatabaseId : null;
        this.myTeamspeakId = ("clientMyteamspeakId" in data) ? data.clientMyteamspeakId : null;
        this.ip = ("connectionClientIp" in data) ? data.connectionClientIp : null;
        
        this.created = ("clientCreated" in data) ? data.clientCreated : null;
        this.idleTime = ("clientIdleTime" in data) ? data.clientIdleTime : null;
        this.lastConnected = ("clientLastconnected" in data) ? data.clientLastconnected : null;
        this.totalConnections = ("clientTotalconnections" in data) ? data.clientTotalconnections : null;
        this.connectedTime = ("connectionConnectedTime" in data) ? data.connectionConnectedTime : null;
        
        this.nickname = ("clientNickname" in data) ? data.clientNickname : null;
        this.description = ("clientDescription" in data) ? data.clientDescription : null;
        this.isAway = ("clientAway" in data) ? data.clientAway : null;
        this.awayMessage = ("clientAwayMessage" in data) ? data.clientAwayMessage : null;
        this.isTalking = ("clientIsTalker" in data) ? data.clientIsTalker : null;
        this.inputMuted = ("clientInputMuted" in data) ? data.clientInputMuted : null;
        this.outputMuted = ("clientOutputMuted" in data) ? data.clientOutputMuted : null;
        this.isRecording = ("clientIsRecording" in data) ? data.clientIsRecording : null;
        this.channelGroupId = ("clientChannelGroupId" in data) ? data.clientChannelGroupId : null;
        this.serverGroups = ("clientServergroups" in data) ? data.clientServergroups : null;

        this.version = ("clientVersion" in data) ? data.clientVersion : null;
        this.platform = ("clientPlatform" in data) ? data.clientPlatform : null;
        this.cid = ("cid" in data) ? data.cid : null;

        if ("connectionClientIp" in data) {
            this.ip = data.connectionClientIp;
        } else if ("clientLastip" in data) {
            this.ip = data.clientLastip;
        } else {
            this.ip = null;
        }
    }

    async resolveServerGroups(refresh: boolean = false) {
        if (this.serverGroups === null) { return null; }
        if (this.hasResolvedServerGroups && !refresh) { return this.serverGroups; } 

        var groups: ServerGroup[] | undefined = undefined;
        if (this.serverGroups.length > 0) {
            if (typeof this.serverGroups[0] === "number") {
                groups = await this.queryClient.getServerGroupByIds(<number[]>this.serverGroups);
            } else {
                groups = await this.queryClient.getServerGroupByIds(this.serverGroups.map(group => group.id));
            }
        }
        
        this.serverGroups = groups === undefined ? null : groups;
        this.hasResolvedServerGroups = true;

        return this.serverGroups;
    }
}