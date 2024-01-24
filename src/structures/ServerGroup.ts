import { QueryClient } from "../client/QueryClient";
import { Base } from "./Base";
import { Permission } from "./Permission";
import { GroupType } from "./enums/GroupType";

// ADD DOCS
export class ServerGroup extends Base {
    id: number | null = null;
    name: string | null = null;
    type: GroupType | null = null;
    iconId: number | null = null;
    permissions: Permission[] | null = null;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any) {
        super(queryClient);

        this.patch(data);
    }

    protected override patch(data: any) {
        this.id = "sgid" in data ? data.sgid : null;
        this.name = "name" in data ? data.name : null;
        this.type = "type" in data ? (data.type as GroupType) : null;
        this.iconId = "iconId" in data ? data.iconid : null;

        if ("permissions" in data) {
            this.permissions = data.permissions;
        } else if ("fetchPermissions" in data) {
            if (data.fetchPermissions === true) {
                this.fetchPermissions();
            } else {
                this.permissions = null;
            }
        } else {
            this.permissions = null;
        }
    }

    async fetchPermissions(refresh: boolean = false): Promise<Permission[]> {
        if (this.permissions !== null && !refresh) {
            return this.permissions;
        }

        var perms: Permission[] = [];

        if (this.queryClient === null || this.queryClient === undefined) {
            return perms;
        }
        if (this.id === null || this.id === undefined) {
            return perms;
        }

        perms = await this.queryClient.getServerGroupPerms(this.id);

        this.permissions = perms;

        return this.permissions;
    }
}
