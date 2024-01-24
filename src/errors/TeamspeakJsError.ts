import { TeamspeakJsErrorCodes } from "./TeamspeakJsErrorCodes";
import { TeamspeakJsErrorMessages } from "./TeamspeakJsErrorMessages";

function makeErrorClass(BaseClass: any) {
    return class TeamspeakJsError extends BaseClass {
        code: string;

        constructor(code: string, ...args: any[]) {
            super(TeamspeakJsError.message(code, args));
            this.code = code;
            Error.captureStackTrace?.(this, TeamspeakJsError);
        }

        get name() {
            return `${super.name} [${this.code}]`;
        }

        static message(code: string, args: any[]) {
            if (!(code in TeamspeakJsErrorCodes)) {
                throw new Error("Error code must be a valid TeamspeakJsErrorCodes");
            }

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
    };
}

export const TeamspeakJsError = makeErrorClass(Error);
