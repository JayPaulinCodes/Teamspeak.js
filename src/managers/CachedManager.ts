import { Base } from "../structures/Base";
import { Collection } from "@discordjs/collection";
import { DataManager } from "./DataManager";
import { QueryClient } from "../client/QueryClient";
import { TsIdentifier } from "../structures/typings/TsIdentifier";

export abstract class CachedManager<HeldType extends Base> extends DataManager<HeldType> {
    private readonly _cache: Collection<TsIdentifier, HeldType>;

    constructor(client: QueryClient, holds: new (...args: any) => HeldType, prefill: Collection<TsIdentifier, HeldType> | undefined = undefined) {
        super(client, holds);

        this._cache = new Collection<TsIdentifier, HeldType>();

        if (prefill !== undefined) {
            prefill.forEach(item => {
                this.add(item, true);
            });
        }
    }

    public override get cache(): Collection<TsIdentifier, HeldType> {
        return this._cache;
    }

    protected abstract add(data: HeldType, useCache: boolean): HeldType;
}