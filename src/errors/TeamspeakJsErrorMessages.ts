import { TeamspeakJsErrorCodes } from "./TeamspeakJsErrorCodes";

export const TeamspeakJsErrorMessages = {
    // General Errors
    [TeamspeakJsErrorCodes.MissingOption]: (prop: string) => `Missing option for property '${prop}'.`,
    [TeamspeakJsErrorCodes.InvalidOption]: (prop: string, expected: string, given: string) =>
        `Invalid option for property '${prop}'. Expected ${expected}, was given ${given}`,
    [TeamspeakJsErrorCodes.ClientNotOnline]: (action: string) => `The '${action}' action cannot be completed while the target client is offline.`,

    // Socket Errors
    [TeamspeakJsErrorCodes.WebSocketTimeout]: "Socket timeout reached.",
    [TeamspeakJsErrorCodes.WebSocketConnectionExists]: "There is already an existing WebSocket connection.",
    [TeamspeakJsErrorCodes.WebSocketNonExistant]: "The websocket was not defined.",

    // Command Errors
    [TeamspeakJsErrorCodes.MissingArguments]: (requiredArgs: string[]) =>
        `Missing arguments, you must specify the following arguments: ${requiredArgs.join(", ")}`,
    [TeamspeakJsErrorCodes.MissingOptionalArguments]: (requiredArgs: string[]) =>
        `Missing arguments, you must specify at least one of the following arguments: ${requiredArgs.join(", ")}`,
    [TeamspeakJsErrorCodes.InstanceEditNotApprovedKey]: (key: string) =>
        `Key '${key}' is not in the approved list of editable keys.`
};
