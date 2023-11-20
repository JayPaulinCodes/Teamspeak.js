import { QueryClient } from "../client/QueryClient";

export abstract class Base {
    queryClient: QueryClient;

    constructor(queryClient: QueryClient) {
        this.queryClient = queryClient;
    }
    
    // ADD DOCS
    clone() {
        return Object.assign(Object.create(this), this);
    }

    // ADD DOCS
    toJSON() {
        return JSON.stringify(this);
    }

    protected patch(data: object) { data = data; };
}