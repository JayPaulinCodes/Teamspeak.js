import { Base } from "@teamspeak.js/structures/classes/Base";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { ChannelClientManager } from "@teamspeak.js/managers/channel/ChannelClientManager";

export type ChannelResolvable = Channel | number;

export class Channel extends Base {
    private _clients: ChannelClientManager;

    private _id: number;
    private _uniqueId?: string;
    private _parentId?: number;
    private _name?: string;
    private _description?: string;
    private _topic?: string;
    private _order?: number;
    private _iconId?: number;
    private _neededTalkPower?: number;
    private _hasPassword?: boolean;
    private _password?: string;
    private _maxClients?: number;
    private _familyMaxClients?: number;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any, fromQuery: boolean = true) {
        super(queryClient);
        
        this._id = data[fromQuery ? "virtualserverId" : "id"];

        this._patch(data, fromQuery);
    
        this._clients = new ChannelClientManager(this._queryClient, this);
    }

    public _patch(data: any, fromQuery: boolean = true, updating: boolean = true) {
        let key = fromQuery ? "channelUniqueIdentifier" : "uniqueId";
        if (key in data) {
            this._uniqueId = data[key];
        }

        key = fromQuery ? "pid" : "parentId";
        if (key in data) {
            this._parentId = data[key];
        } else if (!updating) {
            this._parentId = undefined;
        }

        key = fromQuery ? "channelName" : "name";
        if (key in data) {
            this._name = data[key];
        } else if (!updating) {
            this._name = undefined;
        }

        key = fromQuery ? "channelDescription" : "description";
        if (key in data) {
            this._description = data[key];
        } else if (!updating) {
            this._description = undefined;
        }

        key = fromQuery ? "topic" : "topic";
        if (key in data) {
            this._topic = data[key];
        } else if (!updating) {
            this._topic = undefined;
        }

        key = fromQuery ? "channelOrder" : "order";
        if (key in data) {
            this._order = data[key];
        } else if (!updating) {
            this._order = undefined;
        }

        key = fromQuery ? "channelIconId" : "iconId";
        if (key in data) {
            this._iconId = data[key];
        } else if (!updating) {
            this._iconId = undefined;
        }

        key = fromQuery ? "channelNeededTalkPower" : "neededTalkPower";
        if (key in data) {
            this._neededTalkPower = data[key];
        } else if (!updating) {
            this._neededTalkPower = undefined;
        }

        key = fromQuery ? "channelFlagPassword" : "hasPassword";
        if (key in data) {
            this._hasPassword = data[key];
        } else if (!updating) {
            this._hasPassword = undefined;
        }

        key = fromQuery ? "channelPassword" : "password";
        if (key in data) {
            this._password = data[key];
        } else if (!updating) {
            this._password = undefined;
        }

        key = fromQuery ? "channelMaxclients" : "maxClients";
        if (key in data) {
            this._maxClients = data[key];
        } else if (!updating) {
            this._maxClients = undefined;
        }

        key = fromQuery ? "channelMaxfamilyclients" : "familyMaxClients";
        if (key in data) {
            this._familyMaxClients = data[key];
        } else if (!updating) {
            this._familyMaxClients = undefined;
        }
    }

    // ADD DOCS
    public get clients(): ChannelClientManager { return this._clients; }

    // ADD DOCS
    public get id(): number { return this._id; }

    // ADD DOCS
    public get uniqueId(): string | undefined { return this._uniqueId; }

    // ADD DOCS
    public get parentId(): number | undefined { return this._parentId; }

    // ADD DOCS
    public get name(): string | undefined { return this._name; }

    // ADD DOCS
    public get description(): string | undefined { return this._description; }

    // ADD DOCS
    public get topic(): string | undefined { return this._topic; }

    // ADD DOCS
    public get order(): number | undefined { return this._order; }

    // ADD DOCS
    public get iconId(): number | undefined { return this._iconId; }

    // ADD DOCS
    public get neededTalkPower(): number | undefined { return this._neededTalkPower; }

    // ADD DOCS
    public get hasPassword(): boolean | undefined { return this._hasPassword; }

    // ADD DOCS
    public get password(): string | undefined { return this._password; }

    // ADD DOCS
    public get maxClients(): number | undefined { return this._maxClients; }

    // ADD DOCS
    public get familyMaxClients(): number | undefined { return this._familyMaxClients; }

    // ADD DOCS
    public async setParent(channel: ChannelResolvable): Promise<void> {
        // TODO: Implementation
    }

    // ADD DOCS
    public async setName(name: string): Promise<void> {
        // TODO: Implementation
    }

    // ADD DOCS
    public async setDescription(description: string): Promise<void> {
        // TODO: Implementation
    }

    // ADD DOCS
    public async setTopic(topic: string): Promise<void> {
        // TODO: Implementation
    }

    // ADD DOCS
    public async setOrder(order: number): Promise<void> {
        // TODO: Implementation
    }

    // ADD DOCS
    public async setIconId(iconId: number): Promise<void> {
        // TODO: Implementation
    }

    // ADD DOCS
    public async setNeededTalkPower(neededPower: number): Promise<void> {
        // TODO: Implementation
    }

    // ADD DOCS
    public async setPassword(password: string): Promise<void> {
        // TODO: Implementation
    }

    // ADD DOCS
    public async setMaxClients(maxClients: number): Promise<void> {
        // TODO: Implementation
    }

    // ADD DOCS
    public async setFamilyMaxClients(maxClients: number): Promise<void> {
        // TODO: Implementation
    }
}
