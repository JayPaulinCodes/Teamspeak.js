import { BaseContext } from "@teamspeak.js/client/interfaces/BaseContext";
import { SelectType } from "@teamspeak.js/client/enums/SelectType";

export interface SelectNoneContext extends BaseContext {
    selectType: SelectType.NONE;
    selected: 0;
}
