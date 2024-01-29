
/**
 * Enum for the events emitted by the node {@link Socket} class
 */
export enum SocketEvents {
    /**
     * Emitted once the socket is fully closed. The argument hadError is a boolean
     * which says if the socket was closed due to a transmission error.
     * @param {boolean} hadError true if the socket had a transmission error.
     * @see https://nodejs.org/api/net.html#event-close_1
     */
    Close = "close",

    /**
     * Emitted when a socket connection is successfully established.
     * @see https://nodejs.org/api/net.html#event-connect
     */
    Connect = "connect",

    /**
     * Emitted when data is received. The argument data will be a Buffer or String.
     * Encoding of data is set by socket.setEncoding().
     *
     * The data will be lost if there is no listener when a Socket emits a 'data' event.
     * @param {Buffer | string} data
     * @see https://nodejs.org/api/net.html#event-data
     */
    Data = "data",

    /**
     * Emitted when the write buffer becomes empty. Can be used to throttle uploads.
     * @see https://nodejs.org/api/net.html#event-drain
     */
    Drain = "drain",

    /**
     * Emitted when the other end of the socket signals the end of transmission, thus ending
     * the readable side of the socket.
     *
     * By default (allowHalfOpen is false) the socket will send an end of transmission packet
     * back and destroy its file descriptor once it has written out its pending write queue.
     * However, if allowHalfOpen is set to true, the socket will not automatically end() its
     * writable side, allowing the user to write arbitrary amounts of data. The user must call
     * end() explicitly to close the connection (i.e. sending a FIN packet back).
     * @see https://nodejs.org/api/net.html#event-end
     */
    End = "end",

    /**
     * Emitted when an error occurs. The 'close' event will be called directly following this event.
     * @param {Error} error
     * @see https://nodejs.org/api/net.html#event-error_1
     */
    Error = "error",

    /**
     * Emitted after resolving the host name but before connecting. Not applicable to Unix sockets.
     * @param {Error | null} err The error object
     * @param {string} address The IP address
     * @param {number | null} family The address type
     * @param {string} host The host name
     * @see https://nodejs.org/api/net.html#event-lookup
     */
    Lookup = "lookup",

    /**
     * Emitted when a socket is ready to be used.
     *
     * Triggered immediately after 'connect'.
     * @see https://nodejs.org/api/net.html#event-ready
     */
    Ready = "ready",

    /**
     * Emitted if the socket times out from inactivity. \
     * This is only to notify that the socket has been idle.
     * The user must manually close the connection.
     * @see https://nodejs.org/api/net.html#event-timeout
     */
    Timeout = "timeout"
}
