import { SelectNoneContext } from "@teamspeak.js/client/interfaces/SelectNoneContext";
import { SelectPortContext } from "@teamspeak.js/client/interfaces/SelectPortContext";
import { SelectSidContext } from "@teamspeak.js/client/interfaces/SelectSidContext";

export type Context = SelectPortContext | SelectSidContext | SelectNoneContext;
