import { Base } from "@teamspeak.js/structures/Base";

export interface BasePatch<T extends Base> {
    classKey: keyof T;
    dataKey: string;
    defaultValue?: any;
}
