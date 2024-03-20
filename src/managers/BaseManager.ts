import { QueryClient } from "../client/QueryClient";

// ADD DOCS
export  abstract class BaseManager {
    // ADD DOCS
    public readonly client: QueryClient;

    constructor(client: QueryClient) {
        this.client = client;
    }
}