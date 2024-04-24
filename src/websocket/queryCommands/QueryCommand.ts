import { QueryCommandOptions } from "@teamspeak.js/websocket/queryCommands/typings/QueryCommandOptions";
import { QueryCommandParser } from "@teamspeak.js/websocket/queryCommands/parser/QueryCommandParser";
import { QueryCommandTermination } from "@teamspeak.js/websocket/queryCommands/interfaces/QueryCommandTermination";

// ADD DOCS
export abstract class QueryCommand {
    private rawCommand: string;
    private options: QueryCommandOptions = {};
    private flags: string[] = [];
    private response?: any;
    private commandTermination: QueryCommandTermination | null = null;

    // ADD DOCS
    constructor(rawCommand: string, options?: QueryCommandOptions, flags?: string[]) {
        this.rawCommand = rawCommand;
        this.options = options ?? {};
        this.flags = flags ?? [];
    }

    /**
     * Initializes the Respone with default values
     */
    // ADD DOCS
    reset(): QueryCommand {
        this.response = undefined;
        this.commandTermination = null;
        return this;
    }

    /**
     * Checks wether there are options used with this command
     */
    // ADD DOCS
    hasOptions(): boolean {
        return Object.values(this.options).length > 0;
    }

    /**
     * Checks wether there are options used with this command
     */
    // ADD DOCS
    hasMultiOptions(): boolean {
        return Object.values(this.options).length > 0;
    }

    /**
     * Checks wether there are flags used with this command
     */
    // ADD DOCS
    hasFlags(): boolean {
        return this.flags.length > 0;
    }

    // ADD DOCS
    hasError() {
        return (
            this.commandTermination !== null &&
            typeof this.commandTermination === "object" &&
            typeof this.commandTermination.id === "string" &&
            this.commandTermination.id !== "0"
        );
    }

    // ADD DOCS
    getCommandTermination() {
        if (!this.hasError()) {
            return null;
        }
        return this.commandTermination;
    }

    // ADD DOCS
    setCommandTermination(data: string) {
        const parsedData = QueryCommandParser.parse(data);
        this.commandTermination = Array.isArray(parsedData) 
            ? <QueryCommandTermination>parsedData[0]
            : <QueryCommandTermination>parsedData;
        return this;
    }

    /**
     * Get the parsed response object which has been received from the TeamSpeak Query
     */
    // ADD DOCS
    getResponse() {
        return this.response;
    }

    /**
     * Set the Line which has been received from the TeamSpeak Query
     * @param line the line which has been received from the teamSpeak query
     */
    // ADD DOCS
    setResponse(line: string): QueryCommand {
        this.response = QueryCommandParser.parse(line);
        return this;
    }

    /**
     * builds the query string for options
     * @return the parsed String which is readable by the TeamSpeak Querytt
     */
    // ADD DOCS
    buildOptions() {
        return (
            Object.keys(this.options)
                .filter(key => this.options[key] !== null && this.options[key] !== undefined)
                // .filter((key) => typeof this.options[key] !== "number" || !isNaN(this.options[key]))
                .map(key => QueryCommandParser.escapeKeyValue(key, this.options[key]))
                .join(" ")
        );
    }

    /**
     * Builds the query string for flags
     */
    buildFlags(): string {
        return this.flags.map(flag => QueryCommandParser.escape(flag)).join(" ");
    }

    // ADD DOCS
    buildCommand() {
        let newCommand = QueryCommandParser.escape(this.rawCommand);

        if (this.hasFlags()) {
            newCommand += ` ${this.buildFlags()}`;
        }
        if (this.hasOptions()) {
            newCommand += ` ${this.buildOptions()}`;
        }

        return newCommand;
    }
}
