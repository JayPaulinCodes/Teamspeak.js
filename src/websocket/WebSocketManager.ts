import { EventEmitter } from "node:events";
import { IWebSocketManagerOptions } from "./interfaces/IWebSocketManagerOptions";
import { ISocketOptions } from "./interfaces/ISocketOptions";
import { IQueryProtocol } from "./interfaces/IQueryProtocol";
import { QueryProtocol } from "./enums/QueryProtocol";
import { TeamspeakJsError } from "../errors/TeamspeakJsError";
import { TeamspeakJsErrorCodes } from "../errors/TeamspeakJsErrorCodes";
import { RawQueryProtocol } from "./RawQueryProtocol";
import { QueryProtocolEvents } from "../utils/enums/QueryProtocolEvents";
import { WebSocketManagerEvents } from "../utils/enums/WebSocketManagerEvents";
import { IQueueItem } from "./interfaces/IQueueItem";
import { QueryCommandOptions } from "./queryCommands/typings/QueryCommandOptions";
import { HelpCommand } from "./queryCommands/commands/HelpCommand";
import { QueryCommand } from "./queryCommands/QueryCommand";

export class WebSocketManager extends EventEmitter {
    private static initialIgnoreLines = 2
    readonly options: IWebSocketManagerOptions;
    private webSocket: IQueryProtocol;
    private connected: boolean = false;
    private ignoreInitLines: number = WebSocketManager.initialIgnoreLines;
    private floodTimeout: NodeJS.Timeout;

    /**
     * A queue of items / commands to be handled
     */
    private queue: IQueueItem[] = [];

    /**
     * The current queue item that is being processed
     */
    private currentQueueItem: IQueueItem | undefined;

    /**
     * Wether or not the processing of queue items should be halted
     */
    private isQueuePaused: boolean = false;

    /**
     * The current timeout for the keep alive function
     */
    private keepAliveTimeout: NodeJS.Timeout;
    
    /**
     * The time the last command was sent to the socket
     */
    private lastCommandTimestamp: number = Date.now();
    
    constructor(options: IWebSocketManagerOptions) {
        super(); 

        this.options = options;

        if (this.options.autoConnect) { this.connect(); }
    }

    static getSocket(options: IWebSocketManagerOptions): IQueryProtocol {
        switch (options.queryProtocolOptions?.protocol) {
            case QueryProtocol.RAW: return new RawQueryProtocol(options.socketOptions, options.queryProtocolOptions);
            default: throw new TeamspeakJsError(TeamspeakJsErrorCodes.InvalidOption, "protocol", "'raw'", options.queryProtocolOptions?.protocol);
        }
    }

    connect() {
        if (this.webSocket) {
            if (this.connected) {
                throw new TeamspeakJsError(TeamspeakJsErrorCodes.WebSocketConnectionExists);
            } else {
                if (this.currentQueueItem) {
                    this.queue.unshift(this.currentQueueItem);
                    this.currentQueueItem = undefined;
                }

                this.webSocket.removeAllListeners();
                this.ignoreInitLines = WebSocketManager.initialIgnoreLines;
            }
        }

        this.webSocket = WebSocketManager.getSocket(this.options);

        this.attachEvents();
    }

    attachEvents() {
        // Connect event
        this.webSocket.on(QueryProtocolEvents.Connect, () => {
            this.connected = true;

            // Close event
            this.webSocket.on(QueryProtocolEvents.Close, (hadError: boolean, chunk: string) => {
                clearTimeout(this.keepAliveTimeout);
                this.emit(WebSocketManagerEvents.Close, hadError, chunk);
            });

            this.emit(WebSocketManagerEvents.Connect);
        });

        // Data event
        this.webSocket.on(QueryProtocolEvents.Data, (data: string) => {
            data = data.trim();
            this.debug(data, "WebSocketManager.receive");

            // Now we need to parse the line we received from the socket,
            // with TS server query there are some initial welcome lines that 
            // are sent that need to be ignored
            if (data.startsWith("error")) { 
                // Start by handling any errors that come through, this is also 
                // used when a command is finished running to return to us the result
                this.debug(data, "WebSocketManager.receive.error");

                // Check if we have a active command
                if (!this.currentQueueItem) { return; }

                // Attach the raw data to the command
                this.currentQueueItem.command.setCommandTermination(data);

                // Check if there was an error
                if (this.currentQueueItem.command.hasError()) {
                    const error = this.currentQueueItem.command.getCommandTermination()!;
                    
                    // Check if the error was a flooding error
                    if (error.id === "524") {
                        // Emit the flooding event
                        this.emit(WebSocketManagerEvents.Flooding, this.currentQueueItem.command.getCommandTermination());

                        // Wait the required amount of time specified in the error
                        const match = this.currentQueueItem.command.getCommandTermination()!.extraMsg?.match(/(\d*) second/i);
                        const waitTimeout = match ? parseInt(match[1], 10) : 1;

                        clearTimeout(this.floodTimeout);

                        this.floodTimeout = setTimeout((cmd => (() => {
                            cmd.reset();
                            this.send(cmd.buildCommand());
                        }))(this.currentQueueItem.command), waitTimeout * 1000 + 100);
                
                        return;
                    } else {
                        this.currentQueueItem.reject(this.currentQueueItem.command.getCommandTermination());
                    }
                } else {
                    this.debug(data, "WebSocketManager.fulfill");
                    this.currentQueueItem.fulfill(this.currentQueueItem.command.getResponse());
                }
                
                this.currentQueueItem = undefined;
                this.enqueueItem();
            } else if (this.ignoreInitLines > 0) {
                // Next check if we need to ignore init lines
                this.ignoreInitLines -= 1;
                if (this.ignoreInitLines > 0) { return; }
                
                // Once we have ignored all the needed lines, we know we are ready
                this.emit(WebSocketManagerEvents.Ready);

                this.enqueueItem();
            } else if (data.startsWith("notify")) {
                // Check if the data from the socket is related to a subscribed event
                this.debug(data, "WebSocketManager.receive.notify");
            } else if (this.currentQueueItem && this.currentQueueItem.command) {
                // Check if we have sent a command and are awaiting a response
                this.currentQueueItem.command.setResponse(data);
            }
        });

        // Error event
        this.webSocket.on(QueryProtocolEvents.Error, (error: Error) => {
            this.emit(WebSocketManagerEvents.Error, error);
        });

        // Debug event
        this.webSocket.on(QueryProtocolEvents.Debug, (data) => {
            this.emit(WebSocketManagerEvents.Debug, data);
        });
    }

    /**
     * Executes a command on the socket
     * @param {QueryCommand} command The command to execute
     * @param {boolean} priority If the command should be given priority
     * @returns A promise for the execution of the command
     */
    execute(command: QueryCommand, priority: boolean = false): Promise<any> {
        return new Promise((fulfill, reject) => {
            this.enqueueItem({ command, fulfill, reject, priority });
        });
    }

    /**
     * 
     * @param pause 
     * @returns 
     */
    pauseQueue(pause: boolean) {
        this.isQueuePaused = pause;
        if (!this.isQueuePaused) { this.enqueueItem(); }
        return this
    }

    /** 
     * Forcefully closes the socket connection 
     */
    forceQuit() {
        this.pauseQueue(true)
        return this.webSocket.destroy()
    }

    /**
     * Sends data to the socket
     * @param {string} data Data to send to the socket
     */
    private send(data: string) {
        this.debug(data, "WebSocketManager.send");
        this.lastCommandTimestamp = Date.now();
        this.webSocket.send(data);
        this.initKeepAlive();
    }

    /**
     * Starts the keep alive process
     */
    private initKeepAlive() {
        if (!this.options.keepAlive) { return; }

        clearTimeout(this.keepAliveTimeout);

        // Determine how much longer to wait before we are to send another keep alive
        const delay = (this.options.keepAliveTimeout * 1000) - (Date.now() - this.lastCommandTimestamp);

        this.keepAliveTimeout = setTimeout(() => {
            this.debug("Sent keep alive", "WebSocketManager.keepAlive");
            this.lastCommandTimestamp = Date.now();
            this.webSocket.sendKeepAlive();
            this.initKeepAlive();
        }, delay)
    }

    private enqueueItem(item?: IQueueItem) {
        // Add the item to the queue
        if (item) { this.queue.push(item); }
        
        // If we aren't connected to the socket, are processing a queue item,
        // or have paused the queue, stop here
        if (!this.connected || this.currentQueueItem || this.isQueuePaused) { return; }

        // Fetch the next item in the queue
        this.currentQueueItem = this.nextQueueItem();

        // If the queue is empty stop
        if (!this.currentQueueItem) { return; }

        // Send the next item to the socket
        this.send(this.currentQueueItem.command.buildCommand());
    }

    /**
     * Retrieves the next queue item, respecting priority items
     * @returns {IQueueItem | undefined} Returns a queue item or undefined if the queue is empty
     */
    private nextQueueItem(): IQueueItem | undefined {
        // Try and find a priority item in the queue
        const priorityItem = this.queue.find(queueItem => queueItem.priority);
    
        // If we have a priority item in the queue, re-order the queue placing 
        // priority at the top and then return the priority item
        if (priorityItem) {
            this.queue = this.queue.filter(queueItem => queueItem !== priorityItem);
            return priorityItem;
        }

        // If we don't have a priority item to choose from just return the first item
        return this.queue.shift();
    }

    private debug(data: string, type: string = "WebSocketManager") {
        this.emit(WebSocketManagerEvents.Debug, type, data);
    }
}