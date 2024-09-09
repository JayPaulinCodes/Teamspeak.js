import { IQueryProtocolOptions } from "@teamspeak.js/websocket/interfaces/IQueryProtocolOptions";
import { ISocketOptions } from "@teamspeak.js/websocket/interfaces/ISocketOptions";

export interface IWebSocketManagerOptions {
    queryProtocolOptions: IQueryProtocolOptions;
    socketOptions: ISocketOptions;
    autoConnect: boolean;
    keepAlive: boolean;
    keepAliveTimeout: number;
}
