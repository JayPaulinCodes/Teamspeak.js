import EventEmitter from "node:events";
import { Socket, connect } from "node:net";
import { IQueryProtocol } from "@teamspeak.js/websocket/interfaces/IQueryProtocol";
import { IQueryProtocolOptions } from "@teamspeak.js/websocket/interfaces/IQueryProtocolOptions";
import { ISocketOptions } from "@teamspeak.js/websocket/interfaces/ISocketOptions";
import { QueryProtocolEvents } from "@teamspeak.js/utils/enums/QueryProtocolEvents";
import { SocketEvents } from "@teamspeak.js/utils/enums/SocketEvents";
import { TeamspeakJsError } from "@teamspeak.js/errors/TeamspeakJsError";
import { WebSocketTimeoutError } from "@teamspeak.js/errors/socket/WebSocketTimeoutError";

export class RawQueryProtocol extends EventEmitter implements IQueryProtocol {
    readonly queryProtocolOptions: IQueryProtocolOptions;
    private socket: Socket;
    chunk: string = "";

    constructor(socketOptions: ISocketOptions, queryProtocolOptions: IQueryProtocolOptions) {
        super();
        this.queryProtocolOptions = queryProtocolOptions;

        // Create the socket connection
        this.socket = connect({
            host: socketOptions.host,
            port: socketOptions.port,
            localAddress: socketOptions.localAddress
        });

        // Configure encoding
        this.socket.setEncoding("utf8");

        // Set the timeout to our ready timeout,
        // this is reset once we receive the ready event
        this.socket.setTimeout(socketOptions.readyTimeout);

        // Register our event handlers
        this.attachEvents();
    }

    /**
     * Sends data to the socket
     * @param {string} str Data to write to the socket
     */
    send(data: string) {
        this.socket.write(`${data}\n`);
    }

    /**
     * Sends a keep alive to the socket
     */
    sendKeepAlive() {
        this.socket.write(" \n");
    }

    /**
     * Destroys the socket
     * @returns The destroyed socket
     */
    destroy() {
        return this.socket.destroy();
    }

    private debug(data: string) {
        this.emit(QueryProtocolEvents.Debug, "RawQueryProtocol", data);
    }

    private attachEvents() {
        // Socket close event
        this.socket.on(SocketEvents.Close, (hadError: boolean) => {
            // Forward the event adding the chunk to it
            this.emit(QueryProtocolEvents.Close, hadError, String(this.chunk));
        });

        // Socket connect event
        this.socket.on(SocketEvents.Connect, () => {
            // Reset the socket timeout to 0
            this.socket.setTimeout(0);

            // Forward the event
            this.emit(QueryProtocolEvents.Connect);
        });

        // Socket data event
        this.socket.on(SocketEvents.Data, (chunk: Buffer | string) => {
            // Update the currently stored chunk
            this.chunk += chunk;

            // Conver the updated chunk to a array and remove the last elem
            const lines = this.chunk.split("\n");
            this.chunk = lines.pop() || "";

            // For each of the lines in the chunk, forward the event
            lines.forEach(line => {
                this.emit(QueryProtocolEvents.Data, line);
            });
        });

        // Socket error event
        this.socket.on(SocketEvents.Error, (error: Error) => {
            // Forward the event
            this.emit(QueryProtocolEvents.Error, error);
        });

        // Socket timeout event
        this.socket.on(SocketEvents.Timeout, () => {
            // Destroy the current socket
            this.destroy();

            // Trigger the error event with a custom error
            this.emit(QueryProtocolEvents.Error, new WebSocketTimeoutError());
        });
    }
}
