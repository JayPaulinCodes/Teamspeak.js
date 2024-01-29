import { QueryClient } from "../client/QueryClient";
import { Base } from "./Base";
import { ServerGroup } from "./ServerGroup";
import { TsIdentifier } from "./typings/TsIdentifier";

// ADD DOCS
export class Client extends Base {
    /**
     * Primary Identifier
     */
    public uniqueId: TsIdentifier;
    public serverId: number | null = null;
    public databaseId?: number;
    public myTeamspeakId?: string;
    public ip?: string;

    public created: number | null = null;
    public idleTime: number | null = null;
    public lastConnected: number | null = null;
    public totalConnections: number | null = null;
    public connectedTime: number | null = null;

    public nickname: string | null = null;
    public description: string | undefined | null = null;
    public isAway: boolean | null = null;
    public awayMessage: string | undefined | null = null;
    public isTalking: boolean | null = null;
    public inputMuted: boolean | null = null;
    public outputMuted: boolean | null = null;
    public isRecording: boolean | null = null;
    public channelGroupId: number | null = null;
    public serverGroups: ServerGroup[] | number[] | null = null;

    public version: string | null = null;
    public platform: string | null = null;
    public cid: number | null = null;

    private hasResolvedServerGroups = false;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any, fromQuery: boolean = true) {
        super(queryClient);

        this.uniqueId = data[fromQuery ? "clientUniqueIdentifier" : "uniqueId"];
        
        this._patch(data, fromQuery);
    }

    public _patch(data: any, fromQuery: boolean = true) {
        this.uniqueId = "clientUniqueIdentifier" in data ? data.clientUniqueIdentifier : null;
        this.databaseId = "clientDatabaseId" in data ? data.clientDatabaseId : null;
        this.myTeamspeakId = "clientMyteamspeakId" in data ? data.clientMyteamspeakId : null;
        this.ip = "connectionClientIp" in data ? data.connectionClientIp : null;
        this.serverId = "clid" in data ? data.clid : null;

        this.created = "clientCreated" in data ? data.clientCreated : null;
        this.idleTime = "clientIdleTime" in data ? data.clientIdleTime : null;
        this.lastConnected = "clientLastconnected" in data ? data.clientLastconnected : null;
        this.totalConnections = "clientTotalconnections" in data ? data.clientTotalconnections : null;
        this.connectedTime = "connectionConnectedTime" in data ? data.connectionConnectedTime : null;

        this.nickname = "clientNickname" in data ? data.clientNickname : null;
        this.description = "clientDescription" in data ? data.clientDescription : null;
        this.isAway = "clientAway" in data ? data.clientAway : null;
        this.awayMessage = "clientAwayMessage" in data ? data.clientAwayMessage : null;
        this.isTalking = "clientIsTalker" in data ? data.clientIsTalker : null;
        this.inputMuted = "clientInputMuted" in data ? data.clientInputMuted : null;
        this.outputMuted = "clientOutputMuted" in data ? data.clientOutputMuted : null;
        this.isRecording = "clientIsRecording" in data ? data.clientIsRecording : null;
        this.channelGroupId = "clientChannelGroupId" in data ? data.clientChannelGroupId : null;
        this.serverGroups = "clientServergroups" in data ? data.clientServergroups : null;

        this.version = "clientVersion" in data ? data.clientVersion : null;
        this.platform = "clientPlatform" in data ? data.clientPlatform : null;
        this.cid = "cid" in data ? data.cid : null;

        if ("connectionClientIp" in data) {
            this.ip = data.connectionClientIp;
        } else if ("clientLastip" in data) {
            this.ip = data.clientLastip;
        } else {
            this.ip = null;
        }
    }

    async resolveServerGroups(refresh: boolean = false) {
        if (this.serverGroups === null) {
            return null;
        }
        if (this.hasResolvedServerGroups && !refresh) {
            return this.serverGroups;
        }

        var groups: ServerGroup[] | undefined = undefined;
        if (this.serverGroups.length > 0) {
            if (typeof this.serverGroups[0] === "number") {
                groups = await this.queryClient.getServerGroupByIds(<number[]>this.serverGroups);
            } else {
                groups = await this.queryClient.getServerGroupByIds(
                    (<ServerGroup[]>this.serverGroups).map(group => group.id ?? -1)
                );
                groups = groups?.filter(group => group.id !== -1);
            }
        }

        this.serverGroups = groups === undefined ? null : groups;
        this.hasResolvedServerGroups = true;

        return this.serverGroups;
    }
}
