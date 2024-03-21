import { BaseContext } from "@teamspeak.js/client/interfaces/BaseContext";
import { SelectType } from "@teamspeak.js/client/enums/SelectType";

export interface SelectSidContext extends BaseContext {
    selectType: SelectType.SID;
    selected: string;
}
