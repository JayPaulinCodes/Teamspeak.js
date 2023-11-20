import { QueryClient } from "../QueryClient";

// ADD DOCS
export class Event {
    readonly queryClient: QueryClient;

    // ADD DOCS
    constructor(queryClient: QueryClient) {
        this.queryClient = queryClient;
    }

    // ADD DOCS
    handle(data: any): any {
        return data;
    }
}