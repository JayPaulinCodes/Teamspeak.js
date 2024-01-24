import { TeamspeakJsErrorCodes } from "./TeamspeakJsErrorCodes";

export const TeamspeakJsErrorMessages = {
    // General Errors
    [TeamspeakJsErrorCodes.MissingOption]: (prop: string) => `Missing option for property '${prop}'.`,
    [TeamspeakJsErrorCodes.InvalidOption]: (prop: string, expected: string, given: string) =>
        `Invalid option for property '${prop}'. Expected ${expected}, was given ${given}`,

    // Socket Errors
    [TeamspeakJsErrorCodes.WebSocketTimeout]: "Socket timeout reached.",
    [TeamspeakJsErrorCodes.WebSocketConnectionExists]: "There is already an existing WebSocket connection.",
    [TeamspeakJsErrorCodes.WebSocketNonExistant]: "The websocket was not defined.",

    // Command Errors
    [TeamspeakJsErrorCodes.InstanceEditNotApprovedKey]: (key: string) =>
        `Key '${key}' is not in the approved list of editable keys.`
};
