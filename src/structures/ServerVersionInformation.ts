import { QueryClient } from "../client/QueryClient";
import { Base } from "./Base";

// ADD DOCS
export class ServerVersionInformation extends Base {
    version: string;
    build: number;
    platform: string;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any) {
        super(queryClient)

        this.patch(data);
    }

    protected patch(data: any) {
        this.version = data.version;
        this.build = data.build;
        this.platform = data.platform;
    }
}