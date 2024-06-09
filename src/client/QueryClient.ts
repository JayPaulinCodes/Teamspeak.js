/* eslint no-fallthrough: "off" */

import { EventEmitter } from "node:events";
import { Context } from "@teamspeak.js/client/typings/Context";
import { EventManager } from "@teamspeak.js/client/events/EventManager";
import { IClientOptions } from "@teamspeak.js/client/interfaces/IClientOptions";
import { SelectType } from "@teamspeak.js/client/enums/SelectType";
import { ChannelManager } from "@teamspeak.js/managers/channel/ChannelManager";
import { ClientManager } from "@teamspeak.js/managers/client/ClientManager";
import { Options } from "@teamspeak.js/utils/Options";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";
import { WebSocketManagerEvents } from "@teamspeak.js/utils/enums/WebSocketManagerEvents";
import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";
import { QueryProtocol } from "@teamspeak.js/websocket/enums/QueryProtocol";
import { WebSocketManager } from "@teamspeak.js/websocket/WebSocketManager";
import { VirtualServer, VirtualServerResolvable } from "@teamspeak.js/structures/classes/VirtualServer";
import { VirtualServerManager } from "@teamspeak.js/managers/virtualServer/VirtualServerManager";
import { ServerGroupManager } from "@teamspeak.js/managers/serverGroup/ServerGroupManager";

// ADD DOCS
export class QueryClient extends EventEmitter {
    // ADD DOCS
    public readonly options: IClientOptions;

    private _eventManager: EventManager;
    private _servers: VirtualServerManager;
    private _serverGroups: ServerGroupManager;
    private _clients: ClientManager;
    private _channels: ChannelManager;
    private _activeVirtualServerId: VirtualServerResolvable = -1;

    private priorizeNextCommand: boolean = false;
    private webSocketManager: WebSocketManager;
    private context: Context = {
        selectType: SelectType.NONE,
        selected: 0,
        events: []
    };

    // ADD DOCS
    constructor(options: Partial<IClientOptions>) {
        super({
            captureRejections: true
        });

        this.options = Options.buildClientOptions(options);

        this._eventManager = new EventManager(this);

        this.webSocketManager = new WebSocketManager(this, this.options.webSocketManagerOptions);

        this._servers = new VirtualServerManager(this);
        this._serverGroups = new ServerGroupManager(this);
        this._clients = new ClientManager(this);
        this._channels = new ChannelManager(this);

        this.attachEvents();

        if (this.options.webSocketManagerOptions.autoConnect) {
            this.connect().catch(() => null);
        }
    }

    // ADD DOCS
    public get eventManager(): EventManager { return this._eventManager; }

    // ADD DOCS
    public get servers(): VirtualServerManager { return this._servers; }

    // ADD DOCS
    public get serverGroups(): ServerGroupManager { return this._serverGroups; }

    // ADD DOCS
    public get clients(): ClientManager { return this._clients; }

    // ADD DOCS
    public get channels(): ChannelManager { return this._channels; }

    // ADD DOCS
    public get activeVirtualServerId(): VirtualServerResolvable { return this._activeVirtualServerId; }

    // ADD DOCS
    public get activeVirtualServer(): VirtualServer | undefined { return this.servers.resolve(this.activeVirtualServerId) ?? undefined; }

    // ADD DOCS
    private attachEvents() {
        // Ready event
        this.webSocketManager.on(WebSocketManagerEvents.Ready, () => {
            const executions: Promise<any>[] = [];

            if (this.context.login && this.options.webSocketManagerOptions.queryProtocolOptions.protocol === QueryProtocol.RAW) {
                executions.push(this.prioritize().login(this.context.login.username, this.context.login.password));
            } else if (
                this.options.username &&
                this.options.password &&
                this.options.webSocketManagerOptions.queryProtocolOptions.protocol === QueryProtocol.RAW
            ) {
                executions.push(this.prioritize().login(this.options.username, this.options.password));
            }

            if (this.context.selectType !== SelectType.NONE) {
                if (this.context.selectType === SelectType.PORT) {
                    executions.push(this.prioritize().useByPort(this.context.selected, this.context.clientNickname || this.options.nickname));
                } else if (this.context.selectType === SelectType.SID) {
                    executions.push(this.prioritize().useBySid(this.context.selected, this.context.clientNickname || this.options.nickname));
                }
            } else if (this.options.webSocketManagerOptions.queryProtocolOptions.serverId !== undefined) {
                executions.push(
                    this.prioritize().useBySid(this.options.webSocketManagerOptions.queryProtocolOptions.serverId, this.options.nickname)
                );
            } else if (this.options.webSocketManagerOptions.queryProtocolOptions.serverPort !== undefined) {
                executions.push(
                    this.prioritize().useByPort(this.options.webSocketManagerOptions.queryProtocolOptions.serverPort, this.options.nickname)
                );
            } else {
                throw Error("No server port or id specified");
            }

            executions.push(...this.context.events.map(_event => this.prioritize().registerEvent(_event.event, _event.id)));

            // executions.push(this.prioritize().version())

            this.webSocketManager.pauseQueue(false);

            return Promise.all(executions)
                .then(async () => {
                    await this.servers.fetch(undefined, { cache: true, force: true });
                    await this.serverGroups.fetch(undefined, { cache: true, force: true });
                    await this.clients.fetch(undefined, { cache: true, force: true });
                    
                    if (this.options.preCacheChannels === true) 
                        await this.channels.fetch(undefined, { cache: true, force: true });

                    super.emit(QueryClientEvents.Ready);
                })
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

        this.on("newListener", (event: string) => {
            super.emit(QueryClientEvents.Debug, "newListener", event);
            const commands: Promise<any>[] = [];

            switch (event) {
                // Events emitted through 'notifyserveredited'
                case QueryClientEvents.ServerNameUpdated:
                case QueryClientEvents.ServerNicknameUpdated:
                case QueryClientEvents.ServerIconUpdated:
                case QueryClientEvents.ServerHostBannerGfxUrlUpdated:
                case QueryClientEvents.ServerHostBannerModeUpdated:
                case QueryClientEvents.ServerHostBannerUrlUpdated:
                case QueryClientEvents.ServerHostButtonTooltipUpdated:
                case QueryClientEvents.ServerHostButtonUrlUpdated:
                case QueryClientEvents.ServerHostButtonIconUrlUpdated:
                case QueryClientEvents.ServerCodecEncryptionModeUpdated:
                case QueryClientEvents.ServerDefaultServerGroupUpdated:
                case QueryClientEvents.ServerDefaultChannelGroupUpdated:
                case QueryClientEvents.ServerPrioritySpeakerDimModificatorUpdated:
                case QueryClientEvents.ServerTempChannelDeleteDelayUpdated:
                case QueryClientEvents.ServerPhonecticNameUpdated:

                // Events emitted through 'notifycliententerview'
                case QueryClientEvents.ClientConnected:

                // Events emitted through 'notifyclientleftview'
                case QueryClientEvents.ClientConnectionDropped:
                case QueryClientEvents.ClientKicked:
                case QueryClientEvents.ClientBanned:
                case QueryClientEvents.ClientDisconnected: {
                    if (!this.isSubscribedToEvent("server")) {
                        commands.push(this.registerEvent("server"));
                    }
                    break;
                }

                // Events emitted through 'notifyclientmoved'
                case QueryClientEvents.ClientSwitchedChannels:
                case QueryClientEvents.ClientMovedToChannel:
                case QueryClientEvents.ClientKickedFromChannel:

                // Events emitted through 'notifychannelpasswordchanged'
                case QueryClientEvents.ChannelPasswordChanged:

                // Events emitted through 'notifychanneldescriptionchanged'
                case QueryClientEvents.ChannelDescriptionUpdated:

                // Events emitted through 'notifychanneledited'
                case QueryClientEvents.ChannelIconUpdated:
                case QueryClientEvents.ChannelNameUpdated:
                case QueryClientEvents.ChannelTopicUpdated:
                case QueryClientEvents.ChannelTypeUpdated:
                case QueryClientEvents.DefaultChannelUpdated:
                case QueryClientEvents.ChannelPasswordRemoved:
                case QueryClientEvents.ChannelOrderUpdated:
                case QueryClientEvents.ChannelNeededTalkPowerUpdated:
                case QueryClientEvents.ChannelCodecUpdated:
                case QueryClientEvents.ChannelCodecQualityUpdated:
                case QueryClientEvents.ChannelPhoneticNameUpdated:
                case QueryClientEvents.ChannelCodecEncryptedUpdated:
                case QueryClientEvents.ChannelMaxClientsUpdated:
                case QueryClientEvents.ChannelFamilyMaxClientsUpdated:

                // Events emitted through 'notifychanneldeleted'
                case QueryClientEvents.ChannelDeleted:

                // Events emitted through 'notifychannelcreated'
                case QueryClientEvents.ChannelCreated: {
                    if (!this.isSubscribedToEvent("channel", "0")) {
                        commands.push(this.registerEvent("channel", "0"));
                    }
                    break;
                }

                // Events emitted through 'notifytokenused'
                case QueryClientEvents.PrivilegeKeyUsed: {
                    if (!this.isSubscribedToEvent("tokenused")) {
                        commands.push(this.registerEvent("tokenused"));
                    }
                    break;
                }

                // Events emitted through 'notifytextmessage'
                case QueryClientEvents.TextMessage: {
                    if (!this.isSubscribedToEvent("textserver")) {
                        commands.push(this.registerEvent("textserver"));
                    }
                    if (!this.isSubscribedToEvent("textchannel")) {
                        commands.push(this.registerEvent("textchannel"));
                    }
                    if (!this.isSubscribedToEvent("textprivate")) {
                        commands.push(this.registerEvent("textprivate"));
                    }
                    break;
                }
            }
            Promise.all(commands).catch(e => this.emit("error", e));
        });

        this.webSocketManager.on("clientleftview", data => super.emit(QueryClientEvents.Debug, "clientleftview", data));
        this.webSocketManager.on("tokenused", data => super.emit(QueryClientEvents.Debug, "tokenused", data));
        this.webSocketManager.on("serveredited", data => super.emit(QueryClientEvents.Debug, "serveredited", data));
        this.webSocketManager.on("channeledited", data => super.emit(QueryClientEvents.Debug, "channeledited", data));
        this.webSocketManager.on("channelmoved", data => super.emit(QueryClientEvents.Debug, "channelmoved", data));
        this.webSocketManager.on("channeldeleted", data => super.emit(QueryClientEvents.Debug, "channeldeleted", data));
        this.webSocketManager.on("channelcreated", data => super.emit(QueryClientEvents.Debug, "channelcreated", data));
        this.webSocketManager.on("clientmoved", data => super.emit(QueryClientEvents.Debug, "clientmoved", data));
        this.webSocketManager.on("textmessage", data => super.emit(QueryClientEvents.Debug, "textmessage", data));
    }

    /**
     * Authenticates with the TeamSpeak 3 Server instance using given ServerQuery login credentials.
     * @param username the username which you want to login with
     * @param password the password you want to login with
     */
    // ADD DOCS
    private login(username: string, password: string) {
        return this.execute(new QueryCommand("login", {
            ["client_login_name"]: username,
            ["client_login_password"]: password
        }))
            .then(this.updateContextResolve({ login: { username, password } }))
            .catch(this.updateContextReject({ login: undefined }));
    }

    public debug(type: string, data: any) {
        super.emit(QueryClientEvents.Debug, type, data)
    }

    /**
     * Subscribes to an Event
     * @param event the event on which should be subscribed
     * @param id the channel id, only required when subscribing to the "channel" event
     */
    private registerEvent(event: string, id?: string) {
        const options: { [key: string]: any } = { ["event"]: event };
        if (id !== undefined) {
            options["id"] = id;
        }

        return this.execute(new QueryCommand("servernotifyregister", options)).then(this.updateContextResolve({ events: [{ event, id }] }));
    }

    // ADD DOCS
    private unregisterEvent() {
        return this.execute(new QueryCommand("servernotifyunregister")).then(this.updateContextResolve({ events: [] }));
    }

    /**
     * checks if the server is subscribed to a specific event
     * @param event event name which was subscribed to
     * @param id context to check
     */
    private isSubscribedToEvent(event: string, id?: string) {
        return this.context.events.some(ev => {
            if (ev.event === event) {
                return id ? id === ev.id : true;
            }
            return false;
        });
    }

    /**
     * Priorizes the next command, this commands will be first in execution
     */
    private prioritize() {
        this.priorizeNextCommand = true;
        return this;
    }

    /**
     * Selects the virtual server specified with the port to allow further interaction.
     * @param port the port the server runs on
     * @param clientNickname set nickname when selecting a server
     */
    private useByPort(port: number, clientNickname?: string) {
        return this.execute(new QueryCommand("use", { ["port"]: port }, [ "-virtual" ]))
            .then(
                this.updateContextResolve({
                    selectType: SelectType.PORT,
                    selected: port,
                    clientNickname,
                    events: []
                })
            )
            .catch(this.updateContextReject({ selectType: SelectType.NONE }));
    }
    
    // ADD DOCS
    private useBySid(serverId: number, clientNickname?: string) {
        return this.execute(new QueryCommand("use", { ["sid"]: serverId }, [ "-virtual" ]))
            .then(
                this.updateContextResolve({
                    selectType: SelectType.SID,
                    selected: serverId,
                    clientNickname,
                    events: []
                })
            )
            .catch(this.updateContextReject({ selectType: SelectType.NONE }));
    }

    /**
     * updates the context with new data
     * @param data the data to update the context with
     */
    private updateContext(data: Partial<Context>) {
        if (!Array.isArray(data.events)) {
            data.events = [];
        }
        this.context = {
            ...this.context,
            ...data,
            events: [...this.context.events, ...data.events]
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
            this._activeVirtualServerId = context.selected ?? -1;
            this.updateContext(context);
            return res;
        };
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
        };
    }

    // ADD DOCS
    public connect(): Promise<QueryClient> {
        return new Promise((fulfill, reject) => {
            const removeListeners = () => {
                this.removeListener("ready", readyCallback);
                this.removeListener("error", errorCallback);
                this.removeListener("close", closeCallback);
            };

            const readyCallback = () => {
                removeListeners();
                fulfill(this);
            };
            const errorCallback = (error: Error) => {
                removeListeners();
                this.forceQuit();
                reject(error);
            };
            const closeCallback = (error?: Error) => {
                removeListeners();
                if (error instanceof Error) {
                    return reject(error);
                }
                reject(new Error("TeamSpeak Server prematurely closed the connection"));
            };

            this.once("ready", readyCallback);
            this.once("error", errorCallback);
            this.once("close", closeCallback);

            this.webSocketManager.connect();
        });
    }

    /**
     * Forcefully closes the socket connection
     */
    public forceQuit(): void {
        return this.webSocketManager.forceQuit();
    }

    /**
     * Sends a raw command to the TeamSpeak Server.
     * @param {...any} args the command which should get executed on the teamspeak server
     * @example
     * ts3.execute("clientlist", ["-ip"])
     * ts3.execute("use", [9987], { clientnickname: "test" })
     */
    public execute<T = any>(command: QueryCommand): Promise<T> {
        if (this.priorizeNextCommand) {
            this.priorizeNextCommand = false;
            return <any>this.webSocketManager.execute(command, true);
        } else {
            return <any>this.webSocketManager.execute(command);
        }
    }
}
