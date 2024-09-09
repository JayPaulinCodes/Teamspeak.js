import { IWebSocketManagerOptions } from "@teamspeak.js/websocket/interfaces/IWebSocketManagerOptions";

export interface IClientOptions {
    webSocketManagerOptions: IWebSocketManagerOptions;
    username?: string;
    password?: string;
    nickname?: string;
    preCacheChannels?: boolean;
}
