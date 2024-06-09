import { Base } from "@teamspeak.js/structures/classes/Base";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { ServerGroupPermissionManager } from "@teamspeak.js/managers/serverGroup/ServerGroupPermissionManager";

export type ServerGroupResolvable = ServerGroup | number;

export class ServerGroup extends Base {
    private _permissions: ServerGroupPermissionManager;

    private _id: number;
    private _name?: string;
    private _iconId?: number;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any, fromQuery: boolean = true) {
        super(queryClient);
        
        this._id = data[fromQuery ? "sgid" : "id"];

        this._patch(data, fromQuery);

        this._permissions = new ServerGroupPermissionManager(this._queryClient, this);
    }

    public _patch(data: any, fromQuery: boolean = true, updating: boolean = true) {
        let key = "name";
        if (key in data) {
            this._name = data[key];
        } else if (!updating) {
            this._name = undefined;
        }

        key = fromQuery ? "iconid" : "iconId";
        if (key in data) {
            this._iconId = data[key];
        } else if (!updating) {
            this._iconId = undefined;
        }
    }

    // ADD DOCS
    public get permissions(): ServerGroupPermissionManager { return this._permissions; }

    // ADD DOCS
    public get id(): number { return this._id; }
    
    // ADD DOCS
    public get name(): string | undefined { return this._name; }
    
    // ADD DOCS
    public get iconId(): number | undefined { return this._iconId; }

    public override toString(): string {
        return `${this.name} (${this.id})`;
    }
}
