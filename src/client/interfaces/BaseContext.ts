import { LoginInfo } from "./LoginInfo";
import { ActiveEvent } from "./ActiveEvent";
import { SelectType } from "../enums/SelectType";

export interface BaseContext {
    selectType: SelectType;
    events: ActiveEvent[];
    clientNickname?: string;
    login?: LoginInfo;
}