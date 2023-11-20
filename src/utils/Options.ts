import { IQueryProtocolOptions } from "websocket/interfaces/IQueryProtocolOptions";
import { ISocketOptions } from "../websocket/interfaces/ISocketOptions";
import { IWebSocketManagerOptions } from "../websocket/interfaces/IWebSocketManagerOptions";
import { QueryProtocol } from "../websocket/enums/QueryProtocol";
import { IClientOptions } from "client/interfaces/IClientOptions";

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
        }
    }
    
    // ADD DOCS
    static buildQueryProtocolOptions(options?: Partial<IQueryProtocolOptions>): IQueryProtocolOptions {
        return {
            protocol: QueryProtocol.RAW,
            serverPort: 9987,
            ...options
        }
    }
    
    // ADD DOCS
    static buildWebSocketManagerOptions(options?: Partial<IWebSocketManagerOptions>): IWebSocketManagerOptions {
        var newOptions = {
            socketOptions: Options.buildSocketOptions(),
            queryProtocolOptions: Options.buildQueryProtocolOptions(),
            autoConnect: true,
            keepAlive: true,
            keepAliveTimeout: 250,
            ...options
        }

        newOptions.socketOptions = Options.buildSocketOptions(newOptions.socketOptions);
        newOptions.queryProtocolOptions = Options.buildQueryProtocolOptions(newOptions.queryProtocolOptions);
        
        return newOptions;
    }
    
    // ADD DOCS
    static buildClientOptions(options?: Partial<IClientOptions>): IClientOptions {
        var newOptions = {
            webSocketManagerOptions: Options.buildWebSocketManagerOptions(),
            ...options
        }

        newOptions.webSocketManagerOptions = Options.buildWebSocketManagerOptions(newOptions.webSocketManagerOptions);
        
        return newOptions;
    }
    
}