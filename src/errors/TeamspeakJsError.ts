import { TeamspeakJsErrorCode, TeamspeakJsErrorMessages } from "@teamspeak.js/errors/TeamspeakJsErrorMessages";

export class TeamspeakJsError extends Error {
    public readonly code: string;

    constructor(code: TeamspeakJsErrorCode, ...args: any[]) {
        super(TeamspeakJsError.message(code, args));
        this.code = code;
        Error.captureStackTrace?.(this, TeamspeakJsError);
    }

    public override get name() {
        return `${super.name} [${this.code}]`;
    }

    public static message(code: TeamspeakJsErrorCode, args: any[]) {
        const errorMessage: string | Function | undefined = TeamspeakJsErrorMessages[code];
        if (!errorMessage) {
            throw new Error(`No message associated with error code: ${code}.`);
        }

        if (typeof errorMessage === "function") {
            return errorMessage(...args);
        }

        if (!args?.length) {
            return errorMessage;
        }

        args.unshift(errorMessage);
        return String(...args);
    }
}
