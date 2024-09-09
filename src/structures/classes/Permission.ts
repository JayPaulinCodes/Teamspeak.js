import { Base } from "@teamspeak.js/structures/classes/Base";
import { PermissionIdSidMap, PermissionSid } from "@teamspeak.js/structures/enums/PermissionSid";
import { QueryClient } from "@teamspeak.js/client/QueryClient";

export type PermissionResolvable = Permission | number;

export class Permission extends Base {

    private _id: number;
    private _value?: number;
    private _negated?: boolean;
    private _skip?: boolean;

    constructor(queryClient: QueryClient, data: any, fromQuery: boolean = true) {
        super(queryClient);
        
        this._id = data[fromQuery ? "permid" : "id"];

        this._patch(data, fromQuery);
    }

    public _patch(data: any, fromQuery: boolean = true, updating: boolean = true) {
        let key = fromQuery ? "permvalue" : "value";
        if (key in data) {
            this._value = data[key];
        } else if (!updating) {
            this._value = undefined;
        }
        
        key = fromQuery ? "permnegated" : "negated";
        if (key in data) {
            this._negated = data[key];
        } else if (!updating) {
            this._negated = undefined;
        }

        key = fromQuery ? "permskip" : "skip";
        if (key in data) {
            this._skip = data[key];
        } else if (!updating) {
            this._skip = undefined;
        }
    }

    // ADD DOCS
    public get sid(): PermissionSid { return PermissionIdSidMap[this.id] as PermissionSid; }

    // ADD DOCS
    public get id(): number { return this._id; }

    // ADD DOCS
    public get value(): number | undefined { return this._value; }

    // ADD DOCS
    public get negated(): boolean | undefined { return this._negated; }

    // ADD DOCS
    public get skip(): boolean | undefined { return this._skip; }

    public toQueryJSON(): any {
        return {
            permid: this.id,
            permvalue: this.value,
            permnegated: this.negated ?? false,
            permskip: this.skip ?? false,
        }
    }

    public override toString(): string {
        return `${this.sid} (${this.id})`;
    }
}
