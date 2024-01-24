import { IWebSocketManagerOptions } from "../../websocket/interfaces/IWebSocketManagerOptions";

export interface IClientOptions {
    webSocketManagerOptions: IWebSocketManagerOptions;
    username?: string;
    password?: string;
    nickname?: string;
}
