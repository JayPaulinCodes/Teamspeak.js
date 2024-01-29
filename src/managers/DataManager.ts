import { Collection } from "@discordjs/collection";
import { QueryClient } from "../client/QueryClient";
import BaseManager from "./BaseManager";
import { Base } from "../structures/Base";
import { TsIdentifier } from "../structures/typings/TsIdentifier";

// ADD DOCS
export default abstract class DataManager<HeldType extends Base> extends BaseManager {
    protected readonly holds: new (...args: any) => HeldType;

    constructor(client: QueryClient, holds: new (...args: any) => HeldType) {
        super(client);

        this.holds = holds;
    }

    public get cache(): Collection<TsIdentifier, HeldType> {
        // TODO: Make into tsjs error
        throw new Error("Not Implemented");
    }

    public abstract resolve(idOrInstance: TsIdentifier | Object): HeldType | null;
    
    public abstract resolveId(idOrInstance: TsIdentifier | HeldType): TsIdentifier | null;

    // public resolve(idOrInstance: TsIdentifier | Object): HeldType | null {
    //     if (idOrInstance instanceof this.holds) {
    //         return idOrInstance;
    //     }

    //     if (typeof idOrInstance === "number") {
    //         return this.cache.get(idOrInstance) ?? null;
    //     }

    //     return null;
    // }

    // public resolveId(idOrInstance: TsIdentifier | HeldType): TsIdentifier | null {
    //     if (idOrInstance instanceof this.holds) {
    //         return idOrInstance.uniqueId;
    //     }

    //     if (typeof idOrInstance === "number") {
    //         return idOrInstance;
    //     }

    //     return null;
    // }

}