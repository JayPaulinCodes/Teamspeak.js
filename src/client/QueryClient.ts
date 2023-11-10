import EventEmitter from "node:events";
import { IClientOptions } from "./interfaces/IClientOptions";
import { WebSocketManager } from "../websocket/WebSocketManager";
import { WebSocketManagerEvents } from "../utils/enums/WebSocketManagerEvents";
import { QueryProtocol } from "../websocket/enums/QueryProtocol";
import { SelectType } from "./enums/SelectType";
import { Context } from "./typings/Context";
import { QueryCommand } from "../websocket/queryCommands/QueryCommand";
import { LoginCommand } from "../websocket/queryCommands/commands/LoginCommand";
import { UseCommand } from "../websocket/queryCommands/commands/UseCommand";
import { QueryClientEvents } from "../utils/enums/QueryClientEvents";
import { ServerNotifyRegisterCommand } from "../websocket/queryCommands/commands/ServerNotifyRegisterCommand";
import { ServerNotifyUnregisterCommand } from "../websocket/queryCommands/commands/ServerNotifyUnregisterCommand";
import { Options } from "../utils/Options";
import { ServerQueryConnection } from "../structures/ServerQueryConnection";
import { WhoAmICommand } from "../websocket/queryCommands/commands/WhoAmICommand";
import { VersionCommand } from "../websocket/queryCommands/commands/VersionCommand";
import { ServerVersionInformation } from "../structures/ServerVersionInformation";
import { ServerInstance } from "../structures/ServerInstance";
import { HostInfoCommand } from "../websocket/queryCommands/commands/HostInfoCommand";

export class QueryClient extends EventEmitter {
    readonly options: IClientOptions;
    private priorizeNextCommand: boolean = false
    private webSocketManager: WebSocketManager;
    private context: Context = {
        selectType: SelectType.NONE,
        selected: 0,
        events: []
    }

    constructor(options: Partial<IClientOptions>) {
        super({
            captureRejections: true
        });

        this.options = Options.buildClientOptions(options);

        this.webSocketManager = new WebSocketManager(this.options.webSocketManagerOptions);

        this.attachEvents();

        if (this.options.webSocketManagerOptions.autoConnect) { this.connect().catch(() => null); }
    }

    attachEvents() {
        // Ready event
        this.webSocketManager.on(WebSocketManagerEvents.Ready, () => {
            const executions: Promise<any>[] = [];

            if (this.context.login && this.options.webSocketManagerOptions.queryProtocolOptions.protocol === QueryProtocol.RAW) {
                executions.push(this.prioritize().login(this.context.login.username, this.context.login.password));
            } else if (this.options.username && this.options.password && this.options.webSocketManagerOptions.queryProtocolOptions.protocol === QueryProtocol.RAW) {
                executions.push(this.prioritize().login(this.options.username, this.options.password));
            }

            if (this.context.selectType !== SelectType.NONE) {
                if (this.context.selectType === SelectType.PORT) {
                    executions.push(this.prioritize().useByPort(this.context.selected, this.context.clientNickname || this.options.nickname));
                } else if (this.context.selectType === SelectType.SID) {
                    throw Error("Not currently supported");
                }
            } else if (this.options.webSocketManagerOptions.queryProtocolOptions.serverPort) {
                executions.push(this.prioritize().useByPort(this.options.webSocketManagerOptions.queryProtocolOptions.serverPort, this.options.nickname));
            }

            executions.push(...this.context.events.map(_event => this.prioritize().registerEvent(_event.event, _event.id)));
            this.debug(JSON.stringify(this.context.events));
            // executions.push(this.prioritize().version())
            
            this.webSocketManager.pauseQueue(false);

            return Promise.all(executions)
                .then(() => super.emit(QueryClientEvents.Ready))
                .catch(err => super.emit(QueryClientEvents.Error, err));
        });

        // Debug event
        this.webSocketManager.on(WebSocketManagerEvents.Debug, (type: string, data: string) => {
            super.emit(QueryClientEvents.Debug, type, data);
        });

        // Flooding event
        this.webSocketManager.on(WebSocketManagerEvents.Flooding, () => {
            super.emit(QueryClientEvents.Flooding);
        });

        // Close event
        this.webSocketManager.on(WebSocketManagerEvents.Close, (hadError: boolean, chunk: string) => {
            super.emit(QueryClientEvents.Close, hadError, chunk);
        });

        // Error event
        this.webSocketManager.on(WebSocketManagerEvents.Error, (error: Error) => {
            super.emit(QueryClientEvents.Error, error);
        });

        // this.on("newListener", (event: string) => {
        //     super.emit(Events.Debug, { type: "newListener", data: event });
        //     const commands: Promise<any>[] = []
        //     switch (event) {
        //         case "clientconnect":
        //         case "clientdisconnect":
        //         case "serveredit":
        //             if (this.isSubscribedToEvent("server")) break;
        //             commands.push(this.registerEvent("server"));
        //             break;
        //         case "tokenused":
        //             if (this.isSubscribedToEvent("tokenused")) break;
        //             commands.push(this.registerEvent("tokenused"));
        //             break;
        //         case "channeledit":
        //         case "channelmoved":
        //         case "channeldelete":
        //         case "channelcreate":
        //         case "clientmoved":
        //             if (this.isSubscribedToEvent("channel", "0")) break;
        //             commands.push(this.registerEvent("channel", "0"));
        //             break;
        //         case "textmessage":
        //             if (!this.isSubscribedToEvent("textserver")) commands.push(this.registerEvent("textserver"));
        //             if (!this.isSubscribedToEvent("textchannel")) commands.push(this.registerEvent("textchannel"));
        //             if (!this.isSubscribedToEvent("textprivate")) commands.push(this.registerEvent("textprivate"));
        //     }
        //     Promise.all(commands).catch(e => this.emit("error", e));
        // });

        
        // this.websocketManager.on("cliententerview", (data) => super.emit(Events.Debug, { type: "cliententerview", data }));
        // this.websocketManager.on("clientleftview", (data) => super.emit(Events.Debug, { type: "clientleftview", data }));
        // this.websocketManager.on("tokenused", (data) => super.emit(Events.Debug, { type: "tokenused", data }));
        // this.websocketManager.on("serveredited", (data) => super.emit(Events.Debug, { type: "serveredited", data }));
        // this.websocketManager.on("channeledited", (data) => super.emit(Events.Debug, { type: "channeledited", data }));
        // this.websocketManager.on("channelmoved", (data) => super.emit(Events.Debug, { type: "channelmoved", data }));
        // this.websocketManager.on("channeldeleted", (data) => super.emit(Events.Debug, { type: "channeldeleted", data }));
        // this.websocketManager.on("channelcreated", (data) => super.emit(Events.Debug, { type: "channelcreated", data }));
        // this.websocketManager.on("clientmoved", (data) => super.emit(Events.Debug, { type: "clientmoved", data }));
        // this.websocketManager.on("textmessage", (data) => super.emit(Events.Debug, { type: "textmessage", data }));
    }

    connect(): Promise<QueryClient> {
        return new Promise((fulfill, reject) => {
            const removeListeners = () => {
                this.removeListener("ready", readyCallback);
                this.removeListener("error", errorCallback);
                this.removeListener("close", closeCallback);
            }

            const readyCallback = () => {
                removeListeners();
                fulfill(this);
            }
            const errorCallback = (error: Error) => {
                removeListeners();
                this.forceQuit();
                reject(error);
            }
            const closeCallback = (error?: Error) => {
                removeListeners();
                if (error instanceof Error) { return reject(error); }
                reject(new Error("TeamSpeak Server prematurely closed the connection"));
            }

            this.once("ready", readyCallback);
            this.once("error", errorCallback);
            this.once("close", closeCallback);

            this.webSocketManager.connect();
        });
    }

    /**
     * Authenticates with the TeamSpeak 3 Server instance using given ServerQuery login credentials.
     * @param username the username which you want to login with
     * @param password the password you want to login with
     */
    login(username: string, password: string) {
        return this.execute(new LoginCommand(username, password))
            .then(this.updateContextResolve({ login: { username, password }}))
            .catch(this.updateContextReject({ login: undefined }));
    }

    /**
     * Subscribes to an Event
     * @param event the event on which should be subscribed
     * @param id the channel id, only required when subscribing to the "channel" event
     */
    registerEvent(event: string, id?: string) {
        return this.execute(new ServerNotifyRegisterCommand(event, id))
            .then(this.updateContextResolve({ events: [{ event, id }] }));
    }

    /**
     * Subscribes to an Event.
     */
    unregisterEvent() {
        return this.execute(new ServerNotifyUnregisterCommand())
            .then(this.updateContextResolve({ events: [] }));
    }

    /** 
     * Forcefully closes the socket connection 
     */
    forceQuit() {
        return this.webSocketManager.forceQuit();
    }

    /** 
     * Priorizes the next command, this commands will be first in execution 
     */
    prioritize() {
        this.priorizeNextCommand = true
        return this
    }

    /**
     * Sends a raw command to the TeamSpeak Server.
     * @param {...any} args the command which should get executed on the teamspeak server
     * @example
     * ts3.execute("clientlist", ["-ip"])
     * ts3.execute("use", [9987], { clientnickname: "test" })
     */
    execute<T>(command: QueryCommand): Promise<T> {
        if (this.priorizeNextCommand) {
            this.priorizeNextCommand = false;
            return <any>this.webSocketManager.execute(command, true);
        } else {
            return <any>this.webSocketManager.execute(command);
        }
    }

    /**
     * Selects the virtual server specified with the port to allow further interaction.
     * @param port the port the server runs on
     * @param clientNickname set nickname when selecting a server
     */
    useByPort(port: number, clientNickname?: string) {
        return this.execute(new UseCommand(undefined, port, true))
        .then(this.updateContextResolve({
            selectType: SelectType.PORT,
            selected: port,
            clientNickname,
            events: []
        }))
        .catch(this.updateContextReject({ selectType: SelectType.NONE }));
    }

    /**
     * updates the context with new data
     * @param data the data to update the context with
     */
    private updateContext(data: Partial<Context>) {
        if (!Array.isArray(data.events)) { data.events = []; }
        this.context = {
            ...this.context,
            ...data,
            events: [ ...this.context.events, ...data.events ]
        } as Context;
        return this;
    }

    /**
     * updates the context when the inner callback gets called
     * and returns the first parameter
     * @param context context data to update
     */
    private updateContextResolve<T>(context: Partial<Context>) {
        return (res: T) => {
            this.updateContext(context);
            return res;
        }
    }
  
    /**
     * updates the context when the inner callback gets called
     * and throws the first parameter which is an error
     * @param context context data to update
     */
    private updateContextReject<T extends Error>(context: Partial<Context>) {
        return (err: T) => {
            this.updateContext(context);
            throw err;
        }
    }

    private debug(data: string, type: string = "Client") {
        super.emit(QueryClientEvents.Debug, type, data);
    }






    // Actual useable stuff now
    
    /**
     * Executes the whoami command
     */
    getServerQueryConnectionInfo(): Promise<ServerQueryConnection> {
        return this.execute<ServerQueryConnection>(new WhoAmICommand()).then((data) => {
            return new ServerQueryConnection(this, data);
        });
    }

    getServerVersionInfo(): Promise<ServerVersionInformation> {
        return this.execute<ServerVersionInformation>(new VersionCommand()).then((data) => {
            return new ServerVersionInformation(this, data);
        });
    }

    getServerHostInfo(): Promise<ServerInstance> {
        return this.execute<ServerInstance>(new HostInfoCommand()).then((data) => {
            return new ServerInstance(this, data);
        });
    }
}