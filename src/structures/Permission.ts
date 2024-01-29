import { Base } from "./Base";
import { PermissionSid } from "./enums/PermissionSid";
import { QueryClient } from "../client/QueryClient";

// ADD DOCS
export class Permission extends Base {
    sid: PermissionSid | null = null;
    value: number | null = null;
    negated: boolean | null = null;
    skip: boolean | null = null;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any) {
        super(queryClient);

        this.patch(data);
    }

    protected override patch(data: any) {
        this.sid = "permid" in data ? (data.permid as PermissionSid) : null;
        this.value = "permvalue" in data ? data.permvalue : null;
        this.negated = "permnegated" in data ? data.permnegated : null;
        this.skip = "permskip" in data ? data.permskip : null;
    }
}
