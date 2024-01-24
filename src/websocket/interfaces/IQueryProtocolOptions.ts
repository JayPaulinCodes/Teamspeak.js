import { QueryProtocol } from "websocket/enums/QueryProtocol";

export interface IQueryProtocolOptions {
    protocol: QueryProtocol;
    serverPort: number;
}
