import { SelectNoneContext } from "../interfaces/SelectNoneContext";
import { SelectPortContext } from "../interfaces/SelectPortContext";
import { SelectSidContext } from "../interfaces/SelectSidContext";

export type Context = SelectPortContext | SelectSidContext | SelectNoneContext;
