/**
 * Enum for the events emitted by {@link IQueryProtocol} classes
 */
export enum QueryProtocolEvents {
    /**
     * Forwarded from the {@link SocketEvents | socket event}
     * @param {boolean} hadError true if the socket had a transmission error. [Forwarded from {@link SocketEvents | socket event}]
     * @param {string} chunk the last chunk from the socket
     */
    Close = "close",

    /**
     * Forwarded from the {@link SocketEvents | socket event}
     */
    Connect = "connect",

    /**
     * Forwarded from the {@link SocketEvents | socket event}
     * @param {string} data
     */
    Data = "data",

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
    Debug = "debug"
}
