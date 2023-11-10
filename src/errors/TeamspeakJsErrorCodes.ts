const errorKeys = [
    // General Errors
    "MissingOption",
    "InvalidOption",
    
    // Socket Errors
    "WebSocketTimeout",
    "WebSocketConnectionExists",

    // Command Errors
    "InstanceEditNotApprovedKey"
];

// Beacuse the values are always the same as the keys, and I'm too lazy to type 
// the key and value twice, let's use some fancy mapping code instead!
export const TeamspeakJsErrorCodes = Object.fromEntries(errorKeys.map(key => [key, key]));