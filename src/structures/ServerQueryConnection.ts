import { QueryClient } from "../client/QueryClient";
import { Base } from "./Base";
import { VirtualServerStatus } from "./enums/VirtualServerStatus"

export class ServerQueryConnection extends Base {
    virtualserverStatus: VirtualServerStatus;
    virtualserverId: number;
    virtualserverUniqueIdentifier: string;
    virtualserverPort: number;
    clientId: number | null;
    clientChannelId: number | null;
    clientNickname: string;
    clientDatabaseId: number | null;
    clientLoginName: string | null;
    clientUniqueIdentifier: string | null;
    clientOriginServerId: number | null;

    constructor(queryClient: QueryClient, data: any) {
        super(queryClient)

        this.patch(data);
    }

    protected patch(data: any) {
        this.virtualserverStatus = data.virtualserverStatus as VirtualServerStatus;
        this.virtualserverId = data.virtualserverId;
        this.virtualserverUniqueIdentifier = data.virtualserverUniqueIdentifier;
        this.virtualserverPort = data.virtualserverPort;
        this.clientNickname = data.clientNickname;

        if (data.clientId === 0) {
            this.clientId = null;
        } else {
            this.clientId = data.clientId;
        }

        if (data.clientChannelId === 0) {
            this.clientChannelId = null;
        } else {
            this.clientChannelId = data.clientChannelId;
        }

        if (data.clientDatabaseId === 0) {
            this.clientDatabaseId = null;
        } else {
            this.clientDatabaseId = data.clientDatabaseId;
        }

        if (data.clientLoginName === undefined) {
            this.clientLoginName = null;
        } else {
            this.clientLoginName = data.clientLoginName;
        }

        if (data.clientUniqueIdentifier === undefined) {
            this.clientUniqueIdentifier = null;
        } else {
            this.clientUniqueIdentifier = data.clientUniqueIdentifier;
        }

        if (data.clientOriginServerId === 0) {
            this.clientOriginServerId = null;
        } else {
            this.clientOriginServerId = data.clientOriginServerId;
        }
    }
}