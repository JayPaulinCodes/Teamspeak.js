import { BaseContext } from "./BaseContext";
import { SelectType } from "../enums/SelectType";

export interface SelectNoneContext extends BaseContext {
    selectType: SelectType.NONE;
    selected: 0;
}