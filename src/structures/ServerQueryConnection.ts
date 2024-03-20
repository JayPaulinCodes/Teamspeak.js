import { Base } from "./Base";
import { QueryClient } from "../client/QueryClient";
import { VirtualServerStatus } from "./enums/VirtualServerStatus";

// ADD DOCS
export class ServerQueryConnection extends Base {
    virtualserverStatus: VirtualServerStatus | null = null;
    virtualserverId: number | null = null;
    virtualserverUniqueIdentifier: string | null = null;
    virtualserverPort: number | null = null;
    clientId: number | null = null;
    clientChannelId: number | null = null;
    clientNickname: string | null = null;
    clientDatabaseId: number | null = null;
    clientLoginName: string | null = null;
    clientUniqueIdentifier: string | null = null;
    clientOriginServerId: number | null = null;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any) {
        super(queryClient);

        this._patch(data);
    }

    public _patch(data: any, fromQuery: boolean = true) {
        fromQuery = fromQuery;
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

    public override toJSON() {
        return super.toJSON();
    }
}
