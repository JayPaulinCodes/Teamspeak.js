import { QueryClient } from "../client/QueryClient";
import { TsIdentifier } from "./typings/TsIdentifier";

export abstract class Base {
    public readonly queryClient: QueryClient;
    // abstract uniqueId: TsIdentifier;

    constructor(queryClient: QueryClient) {
        this.queryClient = queryClient;
    }

    // public _new(queryClient: QueryClient, data: any): Base {
    //     queryClient = queryClient;
    //     data = data;
    //     throw new Error("Not Implemented");
    // }

    // ADD DOCS
    toJSON() {
        return JSON.stringify(this);
    }

    // ADD DOCS
    public _clone() {
        return Object.assign(Object.create(this), this);
    }

    public abstract _patch(data: object, fromQuery: boolean): void;
}
