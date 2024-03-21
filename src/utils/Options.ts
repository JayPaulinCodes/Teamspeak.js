import { IClientOptions } from "@teamspeak.js/client/interfaces/IClientOptions";
import { IQueryProtocolOptions } from "@teamspeak.js/websocket/interfaces/IQueryProtocolOptions";
import { ISocketOptions } from "@teamspeak.js/websocket/interfaces/ISocketOptions";
import { IWebSocketManagerOptions } from "@teamspeak.js/websocket/interfaces/IWebSocketManagerOptions";
import { QueryProtocol } from "@teamspeak.js/websocket/enums/QueryProtocol";

/**
 * Utility class to aid in the constructing of varrious options
 */
export class Options {
    // ADD DOCS
    static buildSocketOptions(options?: Partial<ISocketOptions>): ISocketOptions {
        return {
            host: "127.0.0.1",
            port: 10011,
            readyTimeout: 10000,
            ...options
        };
    }

    // ADD DOCS
    static buildQueryProtocolOptions(options?: Partial<IQueryProtocolOptions>): IQueryProtocolOptions {
        return {
            protocol: QueryProtocol.RAW,
            serverPort: 9987,
            ...options
        };
    }

    // ADD DOCS
    static buildWebSocketManagerOptions(options?: Partial<IWebSocketManagerOptions>): IWebSocketManagerOptions {
        const newOptions = {
            socketOptions: Options.buildSocketOptions(),
            queryProtocolOptions: Options.buildQueryProtocolOptions(),
            autoConnect: false,
            keepAlive: true,
            keepAliveTimeout: 250,
            ...options
        };

        newOptions.socketOptions = Options.buildSocketOptions(newOptions.socketOptions);
        newOptions.queryProtocolOptions = Options.buildQueryProtocolOptions(newOptions.queryProtocolOptions);

        return newOptions;
    }

    // ADD DOCS
    static buildClientOptions(options?: Partial<IClientOptions>): IClientOptions {
        const newOptions = {
            webSocketManagerOptions: Options.buildWebSocketManagerOptions(),
            ...options
        };

        newOptions.webSocketManagerOptions = Options.buildWebSocketManagerOptions(newOptions.webSocketManagerOptions);

        return newOptions;
    }
}
