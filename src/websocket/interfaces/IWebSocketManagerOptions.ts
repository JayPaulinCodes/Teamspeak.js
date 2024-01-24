import { IQueryProtocolOptions } from "./IQueryProtocolOptions";
import { ISocketOptions } from "./ISocketOptions";

export interface IWebSocketManagerOptions {
    queryProtocolOptions: IQueryProtocolOptions;
    socketOptions: ISocketOptions;
    autoConnect: boolean;
    keepAlive: boolean;
    keepAliveTimeout: number;
}
