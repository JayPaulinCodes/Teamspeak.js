import { QueryClient } from "../client/QueryClient";
import { Base } from "./Base";
import { GroupType } from "./enums/GroupType";
import { PermissionSid } from "./enums/PermissionSid";

// ADD DOCS
export class Permission extends Base {
    sid: PermissionSid | null;
    value: number | null;
    negated: boolean | null;
    skip: boolean | null;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any) {
        super(queryClient)

        this.patch(data);        
    }

    protected patch(data: any) {
        this.sid = ("permid" in data) ? data.permid as PermissionSid : null;
        this.value = ("permvalue" in data) ? data.permvalue : null;
        this.negated = ("permnegated" in data) ? data.permnegated : null;
        this.skip = ("permskip" in data) ? data.permskip : null;
    }
}