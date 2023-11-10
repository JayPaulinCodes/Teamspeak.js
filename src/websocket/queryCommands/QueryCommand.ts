import { QueryCommandTermination } from "./interfaces/QueryCommandTermination";
import { QueryCommandParser } from "./parser/QueryCommandParser";
import { QueryCommandOptions } from "./typings/QueryCommandOptions";

export abstract class QueryCommand {
    private rawCommand: string;
    private options: QueryCommandOptions = {};
    private flags: string[] = [];
    private response?: any;
    private commandTermination: QueryCommandTermination | null = null;

    constructor(rawCommand: string, options?: QueryCommandOptions, flags?: string[]) {
        this.rawCommand = rawCommand;
        this.options = options ?? {};
        this.flags = flags ?? [];
    }

    /** 
     * Initializes the Respone with default values 
     */
    reset(): QueryCommand {
        this.response = undefined;
        this.commandTermination = null;
        return this;
    }

    /**
     * Checks wether there are options used with this command
     */
    hasOptions(): boolean {
        return Object.values(this.options).length > 0;
    }

    /**
     * Checks wether there are options used with this command
     */
    hasMultiOptions(): boolean {
        return Object.values(this.options).length > 0;
    }

    /**
     * Checks wether there are flags used with this command
     */
    hasFlags(): boolean {
        return this.flags.length > 0;
    }

    hasError() {
        return (this.commandTermination !== null && 
            typeof this.commandTermination === "object" &&
            typeof this.commandTermination.id === "string" &&
            this.commandTermination.id !== "0");
    }

    getCommandTermination() {
        if (!this.hasError()) { return null; }
        return this.commandTermination;
    }

    setCommandTermination(data: string) {
        this.commandTermination = <QueryCommandTermination>(QueryCommandParser.parse(data)[0]);
        return this;
    }

    /** 
     * Get the parsed response object which has been received from the TeamSpeak Query 
     */
    getResponse() {
        return this.response;
    }

    /**
     * Set the Line which has been received from the TeamSpeak Query
     * @param line the line which has been received from the teamSpeak query
     */
    setResponse(line: string): QueryCommand {
        this.response = QueryCommandParser.parse(line);
        return this;
    }

    /**
     * builds the query string for options
     * @return the parsed String which is readable by the TeamSpeak Querytt
     */
    buildOptions() {
        return Object.keys(this.options)
            .filter((key) => this.options[key] != null && this.options[key] != undefined)
            // .filter((key) => typeof this.options[key] !== "number" || !isNaN(this.options[key]))
            .map((key) => QueryCommandParser.escapeKeyValue(key, this.options[key]))
            .join(" ");
    }

    /**
     * Builds the query string for flags
     */
    buildFlags(): string {
        return this.flags.map((flag) => QueryCommandParser.escape(flag)).join(" ");
    }

    buildCommand() {
        let newCommand = QueryCommandParser.escape(this.rawCommand);

        if (this.hasFlags()) { newCommand += ` ${this.buildFlags()}`; }
        if (this.hasOptions()) { newCommand += ` ${this.buildOptions()}`; }

        return newCommand;
    }
}