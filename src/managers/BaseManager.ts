import { QueryClient } from "@teamspeak.js/client/QueryClient";

// ADD DOCS
export abstract class BaseManager {
    // ADD DOCS
    public readonly queryClient: QueryClient;

    constructor(queryClient: QueryClient) {
        this.queryClient = queryClient;
    }
}
