import { BaseContext } from "./BaseContext";
import { SelectType } from "../enums/SelectType";

export interface SelectPortContext extends BaseContext {
    selectType: SelectType.PORT;
    selected: number;
}