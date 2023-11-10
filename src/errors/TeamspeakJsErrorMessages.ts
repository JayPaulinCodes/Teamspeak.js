import { TeamspeakJsErrorCodes } from "./TeamspeakJsErrorCodes";

export const TeamspeakJsErrorMessages = {
    // General Errors
    [TeamspeakJsErrorCodes.MissingOption]: (prop) => `Missing option for property '${prop}'.`,
    [TeamspeakJsErrorCodes.InvalidOption]: (prop, expected, given) => `Invalid option for property '${prop}'. Expected ${expected}, was given ${given}`,

    // Socket Errors
    [TeamspeakJsErrorCodes.WebSocketTimeout]: "Socket timeout reached.",
    [TeamspeakJsErrorCodes.WebSocketConnectionExists]: "There is already an existing WebSocket connection.",

    // Command Errors
    [TeamspeakJsErrorCodes.InstanceEditNotApprovedKey]: (key) => `Key '${key}' is not in the approved list of editable keys.`
}