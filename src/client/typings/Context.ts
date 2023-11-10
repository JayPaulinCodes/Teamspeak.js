import { SelectSidContext } from "../interfaces/SelectSidContext";
import { SelectNoneContext } from "../interfaces/SelectNoneContext";
import { SelectPortContext } from "../interfaces/SelectPortContext";

export type Context =
  SelectPortContext |
  SelectSidContext |
  SelectNoneContext