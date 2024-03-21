import { BaseContext } from "@teamspeak.js/client/interfaces/BaseContext";
import { SelectType } from "@teamspeak.js/client/enums/SelectType";

export interface SelectPortContext extends BaseContext {
    selectType: SelectType.PORT;
    selected: number;
}
