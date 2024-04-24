import { Collection } from "@discordjs/collection";
import { DataManager } from "@teamspeak.js/managers/DataManager";
import { Base } from "@teamspeak.js/structures/Base";
import { QueryClient } from "@teamspeak.js/client/QueryClient";
import { TsIdentifier } from "@teamspeak.js/structures/typings/TsIdentifier";

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
