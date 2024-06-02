import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { flatten } from "@teamspeak.js/utils/CommonFunctions";

export abstract class Base {
    protected readonly _queryClient: QueryClient;
    // abstract uniqueId: TsIdentifier;

    constructor(queryClient: QueryClient) {
        this._queryClient = queryClient;
    }

    // public _new(queryClient: QueryClient, data: any): Base {
    //     queryClient = queryClient;
    //     data = data;
    //     throw new Error("Not Implemented");
    // }

    // ADD DOCS
    public toJSON(props: { [x: string]: boolean | string } = {}) {
        return flatten(this, props);
    }

    // ADD DOCS
    public _clone() {
        return Object.assign(Object.create(this), this);
    }

    public abstract _patch(data: object, fromQuery: boolean): void;
}
