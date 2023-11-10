import EventEmitter from "node:events";
import { IQueryProtocolOptions } from "./IQueryProtocolOptions";

export interface IQueryProtocol extends EventEmitter {
    readonly queryProtocolOptions: IQueryProtocolOptions;
    readonly chunk: string;
    sendKeepAlive: () => void;
    send: (data: string) => void;
    destroy: () => void;
}