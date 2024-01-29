/* eslint no-fallthrough: "off" */

import { EventEmitter } from "node:events";
import { IClientOptions } from "./interfaces/IClientOptions";
import { WebSocketManager } from "../websocket/WebSocketManager";
import { WebSocketManagerEvents } from "../utils/enums/WebSocketManagerEvents";
import { QueryProtocol } from "../websocket/enums/QueryProtocol";
import { SelectType } from "./enums/SelectType";
import { Context } from "./typings/Context";
import { Options } from "../utils/Options";
import { ServerQueryConnection } from "../structures/ServerQueryConnection";
import { ServerVersionInformation } from "../structures/ServerVersionInformation";
import { ServerInstance } from "../structures/ServerInstance";
import { EventManager } from "./events/EventManager";
import { Client } from "../structures/Client";
import { Permission } from "../structures/Permission";
import { ServerGroup } from "../structures/ServerGroup";
import { QueryClientEvents } from "../utils/enums/QueryClientEvents";
import { QueryCommand } from "../websocket/queryCommands/QueryCommand";
import { Channel } from "../structures/Channel";
import { ClientListCommandFlags } from "../websocket/enums/ClientListCommandFlags";
import {
    ChannelInfoCommand,
    ClientDbInfoCommand,
    ClientInfoCommand,
    ClientListCommand,
    HostInfoCommand,
    InstanceInfoCommand,
    LoginCommand,
    ServerGroupListCommand,
    ServerGroupPermListCommand,
    ServerNotifyRegisterCommand,
    ServerNotifyUnregisterCommand,
    UseCommand,
    VersionCommand,
    WhoAmICommand
} from "../websocket/queryCommands/commands/index";

// ADD DOCS
export class QueryClient extends EventEmitter {
    
    // ADD DOCS
    readonly options: IClientOptions;
    
    // ADD DOCS
    readonly eventManager: EventManager;
    
    private priorizeNextCommand: boolean = false;
    private webSocketManager: WebSocketManager;
    private serverDatabaseIdMap: Record<string, number> = {};
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

        this.eventManager = new EventManager(this);

        this.webSocketManager = new WebSocketManager(this, this.options.webSocketManagerOptions);

        this.attachEvents();

        if (this.options.webSocketManagerOptions.autoConnect) {
            this.connect().catch(() => null);
        }
    }

    // ADD DOCS
    private attachEvents() {
        // Ready event
        this.webSocketManager.on(WebSocketManagerEvents.Ready, () => {
            const executions: Promise<any>[] = [];

            if (
                this.context.login &&
                this.options.webSocketManagerOptions.queryProtocolOptions.protocol === QueryProtocol.RAW
            ) {
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
                    executions.push(
                        this.prioritize().useByPort(
                            this.context.selected,
                            this.context.clientNickname || this.options.nickname
                        )
                    );
                } else if (this.context.selectType === SelectType.SID) {
                    throw Error("Not currently supported");
                }
            } else if (this.options.webSocketManagerOptions.queryProtocolOptions.serverPort) {
                executions.push(
                    this.prioritize().useByPort(
                        this.options.webSocketManagerOptions.queryProtocolOptions.serverPort,
                        this.options.nickname
                    )
                );
            }

            executions.push(
                ...this.context.events.map(_event => this.prioritize().registerEvent(_event.event, _event.id))
            );

            // executions.push(this.prioritize().version())

            this.webSocketManager.pauseQueue(false);

            return Promise.all(executions)
                .then(async () => {
                    // Fill the cache incase the bot is started with users in server
                    const clients = await this.getAllClients();
                    clients.forEach(client => {
                        if (client.serverId !== null && client.databaseId !== null) {
                            this.serverDatabaseIdMap[`id_${client.serverId}`] = client.databaseId;
                        }
                    });

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

        // xTODO: This is just here for debug, remove once done
        // this.webSocketManager.on("cliententerview", data =>
        //     super.emit(QueryClientEvents.Debug, "cliententerview", data)
        // );
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
        return this.execute(new LoginCommand(username, password))
            .then(this.updateContextResolve({ login: { username, password } }))
            .catch(this.updateContextReject({ login: undefined }));
    }

    /**
     * Subscribes to an Event
     * @param event the event on which should be subscribed
     * @param id the channel id, only required when subscribing to the "channel" event
     */
    // ADD DOCS
    private registerEvent(event: string, id?: string) {
        return this.execute(new ServerNotifyRegisterCommand(event, id)).then(
            this.updateContextResolve({ events: [{ event, id }] })
        );
    }

    /**
     * Subscribes to an Event.
     */
    // ADD DOCS
    private unregisterEvent() {
        return this.execute(new ServerNotifyUnregisterCommand()).then(this.updateContextResolve({ events: [] }));
    }

    /**
     * checks if the server is subscribed to a specific event
     * @param event event name which was subscribed to
     * @param id context to check
     */
    // ADD DOCS
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
    // ADD DOCS
    private prioritize() {
        this.priorizeNextCommand = true;
        return this;
    }

    /**
     * Selects the virtual server specified with the port to allow further interaction.
     * @param port the port the server runs on
     * @param clientNickname set nickname when selecting a server
     */
    // ADD DOCS
    private useByPort(port: number, clientNickname?: string) {
        return this.execute(new UseCommand(undefined, port, true))
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

    /**
     * updates the context with new data
     * @param data the data to update the context with
     */
    // ADD DOCS
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
    // ADD DOCS
    private updateContextResolve<T>(context: Partial<Context>) {
        return (res: T) => {
            this.updateContext(context);
            return res;
        };
    }

    /**
     * updates the context when the inner callback gets called
     * and throws the first parameter which is an error
     * @param context context data to update
     */
    // ADD DOCS
    private updateContextReject<T extends Error>(context: Partial<Context>) {
        return (err: T) => {
            this.updateContext(context);
            throw err;
        };
    }

    public tryGetDatabaseId(serverId: number): number | null {
        return this.serverDatabaseIdMap[`id_${serverId}`] ?? null;
    }

    public updateDatabaseId(serverId: number, databaseId: number | null): void {
        if (databaseId === null) { 
            delete this.serverDatabaseIdMap[`id_${serverId}`];
            return;
        }

        this.serverDatabaseIdMap[`id_${serverId}`] = databaseId;
        return;
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
    // ADD DOCS
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
    // ADD DOCS
    public execute<T>(command: QueryCommand): Promise<T> {
        if (this.priorizeNextCommand) {
            this.priorizeNextCommand = false;
            return <any>this.webSocketManager.execute(command, true);
        } else {
            return <any>this.webSocketManager.execute(command);
        }
    }




    // Actual useable stuff now

    // ADD DOCS
    public async getServerQueryConnectionInfo(): Promise<ServerQueryConnection> {
        return this.execute<ServerQueryConnection>(new WhoAmICommand()).then(data => {
            return new ServerQueryConnection(this, data);
        });
    }

    // ADD DOCS
    public async getServerVersionInfo(): Promise<ServerVersionInformation> {
        return this.execute<ServerVersionInformation>(new VersionCommand()).then(data => {
            return new ServerVersionInformation(this, data);
        });
    }

    // ADD DOCS
    public async getServerInstace(): Promise<ServerInstance> {
        // Because Teamspeak is a bitch and has 2 commands to gather server instance info,
        // run them back to back and compile the data
        return this.execute<ServerInstance>(new HostInfoCommand()).then(hostData => {
            return this.execute<ServerInstance>(new InstanceInfoCommand()).then(instanceData => {
                return new ServerInstance(this, { ...hostData, ...instanceData });
            });
        });
    }

    // ADD DOCS
    public async getClientByServerId(clientServerId: number): Promise<Client> {
        return this.execute<Client>(new ClientInfoCommand(clientServerId)).then(data => {
            return new Client(this, data);
        });
    }

    // ADD DOCS
    public async getClientByDbId(clientDbId: number): Promise<Client> {
        return this.execute<Client>(new ClientDbInfoCommand(clientDbId)).then(data => {
            return new Client(this, data);
        });
    }

    // ADD DOCS
    public async getAllClients(flags: ClientListCommandFlags[] = []): Promise<Client[]> {
        return this.execute<Client[]>(new ClientListCommand(flags)).then(data => {
            const result: Client[] = [];
            for (let i = 0; i < data.length; i++) {
                const elem = data[i];
                result.push(new Client(this, elem));
            }
            return result;
        });
    }

    // ADD DOCS
    public async getServerGroups(): Promise<ServerGroup[]> {
        return this.execute<any[]>(new ServerGroupListCommand()).then(data => {
            return data.map(elem => new ServerGroup(this, elem));
        });
    }

    // ADD DOCS
    public async getServerGroupById(serverGroupId: number): Promise<ServerGroup | undefined> {
        const allGroups = await this.getServerGroups();
        return allGroups.find(group => group.id === serverGroupId);
    }

    // ADD DOCS
    public async getServerGroupByIds(serverGroupIds: number[]): Promise<ServerGroup[] | undefined> {
        const allGroups = await this.getServerGroups();
        if (serverGroupIds === undefined) {
            return undefined;
        }
        return allGroups.filter(group => group.id !== null && serverGroupIds.includes(group.id));
    }

    // ADD DOCS
    public async getServerGroupPerms(serverGroupId: number): Promise<Permission[]> {
        return this.execute<any[]>(new ServerGroupPermListCommand(serverGroupId)).then(data => {
            return data.map(elem => new Permission(this, elem));
        });
    }

    // ADD DOCS
    public async getChannelById(channelId: number): Promise<Channel> {
        return this.execute<Channel>(new ChannelInfoCommand(channelId)).then(data => {
            return new Channel(this, { ...data, id: channelId });
        });
    }
}
