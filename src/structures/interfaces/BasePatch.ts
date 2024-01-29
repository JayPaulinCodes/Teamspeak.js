import { Writeable } from "utils/typings/Writeable";
import { Base } from "../Base";

export default interface BasePatch<T extends Base> {
    classKey: keyof T;
    dataKey: string;
    defaultValue?: any;
}