import { Base } from "@teamspeak.js/structures/Base";
import { PermissionSid } from "@teamspeak.js/structures/enums/PermissionSid";
import { QueryClient } from "@teamspeak.js/client/QueryClient";

// ADD DOCS
export class Permission extends Base {
    sid: PermissionSid | null = null;
    value: number | null = null;
    negated: boolean | null = null;
    skip: boolean | null = null;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any) {
        super(queryClient);

        this._patch(data);
    }

    public _patch(data: any, fromQuery: boolean = true) {
        fromQuery = fromQuery;
        this.sid = "permid" in data ? (data.permid as PermissionSid) : null;
        this.value = "permvalue" in data ? data.permvalue : null;
        this.negated = "permnegated" in data ? data.permnegated : null;
        this.skip = "permskip" in data ? data.permskip : null;
    }

    public override toJSON() {
        return super.toJSON();
    }
}
