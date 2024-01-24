import { BaseContext } from "./BaseContext";
import { SelectType } from "../enums/SelectType";

export interface SelectSidContext extends BaseContext {
    selectType: SelectType.SID;
    selected: string;
}
