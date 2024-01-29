import { Base } from "./Base";
import { QueryClient } from "../client/QueryClient";
import { ServerGroup } from "./ServerGroup";

// ADD DOCS
export class Client extends Base {
    uniqueId: string | null = null;
    databaseId: number | null = null;
    myTeamspeakId: string | null = null;
    ip: string | null = null;
    serverId: number | null = null;

    created: number | null = null;
    idleTime: number | null = null;
    lastConnected: number | null = null;
    totalConnections: number | null = null;
    connectedTime: number | null = null;

    nickname: string | null = null;
    description: string | undefined | null = null;
    isAway: boolean | null = null;
    awayMessage: string | undefined | null = null;
    isTalking: boolean | null = null;
    inputMuted: boolean | null = null;
    outputMuted: boolean | null = null;
    isRecording: boolean | null = null;
    channelGroupId: number | null = null;
    serverGroups: ServerGroup[] | number[] | null = null;

    version: string | null = null;
    platform: string | null = null;
    cid: number | null = null;

    private hasResolvedServerGroups = false;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any) {
        super(queryClient);

        this.patch(data);
    }

    protected override patch(data: any) {
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

        let groups: ServerGroup[] | undefined = undefined;
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
