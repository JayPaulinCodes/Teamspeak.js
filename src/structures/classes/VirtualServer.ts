import { Base } from "@teamspeak.js/structures/classes/Base";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { ChannelManager } from "@teamspeak.js/managers/channel/ChannelManager";

export class VirtualServer extends Base {
    [key: string]: any;
    private _channels: ChannelManager;

    private _id: number;
    private _name?: string;
    private _welcomeMessage?: string;
    private _maxClients?: number;
    private _password?: string;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any, fromQuery: boolean = true) {
        super(queryClient);
        
        this._id = data[fromQuery ? "virtualserverId" : "id"];

        this._patch(data, fromQuery);

        this._channels = new ChannelManager(queryClient);
    }

    public _patch(data: any, fromQuery: boolean = true, updating: boolean = true) {
        const dataMap: [string, string, any][] = [
            ["virtualserverName", "name", undefined],
            ["virtualserverWelcomemessage", "welcomeMessage", undefined],
            ["virtualserverMaxclients", "maxClients", undefined],
            ["virtualserverPassword", "password", undefined],
        ]
        
        for (let i = 0; i < dataMap.length; i++) {
            const entry = dataMap[i];
            const key = fromQuery ? entry[0] : entry[1];
            if (key in data) {
                this[`_${entry[1]}`] = data[key];
            } else if (!updating) {
                this[`_${entry[1]}`] = entry[2];
            }
        }
    }

    /**
     * A manager of channels in the virtual server
     */
    public get channels(): ChannelManager { return this._channels; }

    /**
     * Database ID of the virtual server
     */
    public get id(): number { return this._id; }

    /**
     * Name of the virtual server
     */
    public get name(): string | undefined { return this._name; }

    /**
     * Welcome message of the virtual server
     */
    public get welcomeMessage(): string | undefined { return this._welcomeMessage; }

    /**
     * Number of slots available on the virtual server
     */
    public get maxClients(): number | undefined { return this._maxClients; }

    /**
     * Password of the virtual server
     */
    public get password(): string | undefined { return this._password; }

    /**
     * Set the name of the virtual server
     * @param name The new name to set for the virtual server
     */
    public async setName(name: string): Promise<void> {
        // TODO: Implementation
    }

    /**
     * Set the welcome message of the virtual server
     * @param message The new welcome message to set for the virtual server
     */
    public async setWelcomeMessage(message: string): Promise<void> {
        // TODO: Implementation
    }

    /**
     * Set the number of slots for the virtual server
     * @param maxClients The new number of slots for the virtual server
     */
    public async setMaxClients(maxClients: number): Promise<void> {
        // TODO: Implementation
    }

    /**
     * Set the password for the virtual server
     * @param password The new password for the virtual server
     */
    public async setPassword(password: string): Promise<void> {
        // TODO: Implementation
    }
}