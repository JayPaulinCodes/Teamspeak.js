import { ChannelResolvable } from "@teamspeak.js/structures/classes/Channel";

export const TeamspeakJsErrorMessages = {
    // General Errors
    ["MissingOption"]: (prop: string) => `Missing option for property '${prop}'.`,
    ["InvalidOption"]: (prop: string, expected: string, given: string) => `Invalid option for property '${prop}'. `
        + `Expected ${expected}, was given ${given}`,
    ["StringEmpty"]: (prop: string) => `Proptery '${prop}' cannot be an empty string.`,
    ["NotImplemented"]: (method: string, futurePlan: boolean) => `Method '${method}' ${(futurePlan 
        ? "isn't implemented yet" : "is not implemented")}.`,

    // Client Errors
    ["ClientNotOnline"]: (action: string) => `The '${action}' action cannot be completed while the target client is offline.`,
    ["ClientOnlineWithoutServerId"]: (clientUniqueId: string) => `Client with unique id "${clientUniqueId}" is online but does not have a server id (clid)`,
    ["ClientMissingDatabaseId"]: (action: string) => `The '${action}' action cannot be completed because the target client doesn't have a database id.`,

    // Channel Errors
    ["CannotResolveChannelId"]: (resolveable: ChannelResolvable) => `Value "${resolveable}" cannot be resolved to a channel!`,
    ["NoParentChannel"]: (resolveable: ChannelResolvable) => `Channel "${resolveable}" has no parent channel!`,

    // Socket Errors
    ["WebSocketTimeout"]: "Socket timeout reached.",
    ["WebSocketConnectionExists"]: "There is already an existing WebSocket connection.",
    ["WebSocketNonExistant"]: "The websocket was not defined.",

    // Command Errors
    ["MissingArguments"]: (requiredArgs: string[]) => `Missing arguments, you must specify the following arguments: ${requiredArgs.join(", ")}`,
    ["MissingOptionalArguments"]: (requiredArgs: string[]) => `Missing arguments, you must specify at least one of the `
        + `following arguments: ${requiredArgs.join(", ")}`,
    ["InstanceEditNotApprovedKey"]: (key: string) => `Key '${key}' is not in the approved list of editable keys.`
}

export type TeamspeakJsErrorCode = keyof typeof TeamspeakJsErrorMessages;