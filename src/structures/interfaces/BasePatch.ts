import { Base } from "@teamspeak.js/structures/classes/Base";

export interface BasePatch<T extends Base> {
    classKey: keyof T;
    dataKey: string;
    defaultValue?: any;
}
