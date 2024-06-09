import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { flatten } from "@teamspeak.js/utils/CommonFunctions";

export abstract class Base {
    protected readonly _queryClient: QueryClient;

    constructor(queryClient: QueryClient) {
        this._queryClient = queryClient;
    }

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
