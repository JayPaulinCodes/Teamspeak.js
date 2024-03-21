import { Base } from "@teamspeak.js/structures/Base";
import { QueryClient } from "@teamspeak.js/client/QueryClient";

// ADD DOCS
export class ServerVersionInformation extends Base {
    version: string | null = null;
    build: number | null = null;
    platform: string | null = null;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any) {
        super(queryClient);

        this._patch(data);
    }

    public _patch(data: any, fromQuery: boolean = true) {
        fromQuery = fromQuery;
        this.version = data.version;
        this.build = data.build;
        this.platform = data.platform;
    }

    public override toJSON() {
        return super.toJSON();
    }
}
