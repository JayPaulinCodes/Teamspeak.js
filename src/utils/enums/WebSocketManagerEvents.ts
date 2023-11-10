import { WebSocketManager } from "../../websocket/WebSocketManager";

/**
 * Enum for the events emitted by {@link WebSocketManager} classes
 */
export enum WebSocketManagerEvents {
    /**
     * Forwarded from the {@link QueryProtocolEvents | query protocol event}
     * @param {boolean} hadError true if the socket had a transmission error. [Forwarded from {@link QueryProtocolEvents | query protocol event}]
     * @param {string} chunk the last chunk from the socket
     */
    Close = "close",

    /**
     * Forwarded from the {@link QueryProtocolEvents | query protocol event}
     */
    Connect = "connect",

    /**
     * Forwarded from the {@link QueryProtocolEvents | query protocol event}
     * @param {string} data 
     */
    Data = "data",

    /**
     * Forwarded from the {@link QueryProtocolEvents | query protocol event}
     * @param {Error} error 
     */
    Error = "error",

    /**
     * Emited with data for debug purposes
     * @param {string | undefined} type
     * @param {string | undefined} data
     */
    Debug = "debug",

    /**
     * Emited once the web socket is ready
     */
    Ready = "ready",

    /**
     * Emited when the server query throws a flooding error
     */
    Flooding = "flooding",
}