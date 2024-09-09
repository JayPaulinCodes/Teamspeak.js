import { ActiveEvent } from "@teamspeak.js/client/interfaces/ActiveEvent";
import { LoginInfo } from "@teamspeak.js/client/interfaces/LoginInfo";
import { SelectType } from "@teamspeak.js/client/enums/SelectType";

export interface BaseContext {
    selectType: SelectType;
    events: ActiveEvent[];
    clientNickname?: string;
    login?: LoginInfo;
}
