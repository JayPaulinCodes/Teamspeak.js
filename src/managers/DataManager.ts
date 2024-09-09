import { Collection } from "@discordjs/collection";
import { Base } from "@teamspeak.js/structures/classes/Base";
import { BaseManager } from "@teamspeak.js/managers/BaseManager";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { TsIdentifier } from "@teamspeak.js/structures/typings/TsIdentifier";
import { NotImplementedError } from "@teamspeak.js/errors/client/NotImplementedError";

// ADD DOCS
export abstract class DataManager<HeldType extends Base> extends BaseManager {
    protected readonly holds: new (...args: any) => HeldType;

    constructor(queryClient: QueryClient, holds: new (...args: any) => HeldType) {
        super(queryClient);

        this.holds = holds;
    }

    public get cache(): Collection<TsIdentifier, HeldType> {
        throw new NotImplementedError("DataManager.cache", false);
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
