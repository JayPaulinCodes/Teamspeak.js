import { ActiveEvent } from "./ActiveEvent";
import { LoginInfo } from "./LoginInfo";
import { SelectType } from "../enums/SelectType";

export interface BaseContext {
    selectType: SelectType;
    events: ActiveEvent[];
    clientNickname?: string;
    login?: LoginInfo;
}
