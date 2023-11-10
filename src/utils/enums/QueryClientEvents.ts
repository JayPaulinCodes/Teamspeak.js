import { IQueryProtocol } from "../../websocket/interfaces/IQueryProtocol";

/**
 * Enum for the events emitted by {@link IQueryProtocol} classes
 */
export enum QueryClientEvents {
    /**
     * Forwarded from the {@link SocketEvents | socket event}
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
     * Emited when the client is ready
     */
    Ready = "ready",

    /**
     * Emited Teamspeak server query throws a flooding error
     */
    Flooding = "flooding",

    /**
     * Emited Teamspeak server query throws a flooding error
     */
    Close = "close",
}