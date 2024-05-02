import { QueryProtocol } from "@teamspeak.js/websocket/enums/QueryProtocol";

export interface IQueryProtocolOptions {
    protocol: QueryProtocol;
    serverPort?: number;
    serverId?: number;
}
