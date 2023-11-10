import { QueryCommand } from "websocket/queryCommands/QueryCommand";

export interface IQueueItem {
    fulfill: (data: any) => void;
    reject: (data: any) => void;
    command: QueryCommand;
    priority: boolean;
}