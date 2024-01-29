/* eslint line-comment-position: "off" */

import { ComplexQueryOptionElem } from "../interfaces/ComplexQueryOptionElem";

// ADD DOCS
export class QueryCommandParser {
    private static readonly snakeCaseIdentifier = "_";

    /**
     * Converts a string to camel case
     * @param {string} str The string to convert
     * @returns {string} The converted string
     */
    static toCamelCase(str: string): string {
        let nextCharUpperCase = false;

        // Split the string to characters
        const stringChars = str.split("");

        // Convert the characters to their new case
        const convertedChars = stringChars.map((char: string) => {
            if (char === QueryCommandParser.snakeCaseIdentifier) {
                nextCharUpperCase = true;
                return "";
            } else if (nextCharUpperCase) {
                nextCharUpperCase = false;
                return char.toUpperCase();
            } else {
                return char;
            }
        });

        // Build and return the new string
        return convertedChars.join("");
    }

    /**
     * Converts a string to snake case
     * @param {string} str The string to convert
     * @returns {string} The converted string
     */
    static toSnakeCase(str: string): string {
        // Split the string to characters
        const stringChars = str.split("");

        // Convert the characters to their new case
        const convertedChars = stringChars.map(char => {
            const lower = char.toLowerCase();
            if (char !== lower) {
                return `${QueryCommandParser.snakeCaseIdentifier}${lower}`;
            }
            return char;
        });

        // Build and return the new string
        return convertedChars.join("");
    }

    /**
     * Teamspeak has a list of chars that need to be escaped to use,
     * this will take the inputed string and ensure that those chars
     * are escaped
     */
    static escape(str: string): string {
        return String(str)
            .replace(/\\/g, "\\\\")
            .replace(/\//g, "\\/")
            .replace(/\|/g, "\\p")
            .replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/\t/g, "\\t")
            .replace(/\v/g, "\\v")
            .replace(/\f/g, "\\f")
            .replace(/ /g, "\\s");
    }

    /**
     * Teamspeak has a list of chars that need to be escaped to use,
     * this will take revert those escaped chars
     */
    static unescape(str: string): string {
        return String(str)
            .replace(/\\s/g, " ")
            .replace(/\\p/g, "|")
            .replace(/\\n/g, "\n")
            .replace(/\\f/g, "\f")
            .replace(/\\r/g, "\r")
            .replace(/\\t/g, "\t")
            .replace(/\\v/g, "\v")
            .replace(/\\\//g, "/")
            .replace(/\\\\/g, "\\");
    }

    /**
     * Parses a value to the type which the key represents
     * @param k the key which should get looked up
     * @param v the value which should get parsed
     */
    static parseValue(
        key: string,
        value: string | undefined
    ): boolean | string | string[] | number | number[] | undefined {
        if (value === undefined) {
            return undefined;
        }

        if (Object.keys(QueryCommandParser.CommandIdentifiers).includes(key)) {
            return QueryCommandParser.CommandIdentifiers[key](value);
        } else {
            return this.parseString(value);
        }
    }

    /**
     * parses a string value
     * @param value string to parse
     */
    static parseString(value: string) {
        return QueryCommandParser.unescape(value);
    }

    /**
     * parses a string array
     * @param value string to parse
     */
    static parseStringArray(value: string) {
        return value.split(",").map(v => QueryCommandParser.parseString(v));
    }

    /**
     * parses a number
     * @param value string to parse
     */
    static parseNumber(value: string) {
        return parseFloat(value);
    }

    /**
     * parses a number array
     * @param value string to parse
     */
    static parseNumberArray(value: string) {
        return value.split(",").map(v => QueryCommandParser.parseNumber(v));
    }

    /**
     * parses a number
     * @param value string to parse
     */
    static parseBoolean(value: string) {
        return QueryCommandParser.parseNumber(value) === 1;
    }

    static parseRecursive(value: string) {
        return QueryCommandParser.parse(QueryCommandParser.unescape(value));
    }

    /**
     * Parses a query response
     * @param data the query response received
     */
    static parse(raw: string) {
        const resultArray = raw
            .split("|")
            .map(entry => {
                const res: any = {};
                entry.split(" ").forEach(str => {
                    const { key, value } = QueryCommandParser.getKeyValue(str);
                    // res[Symbol(key)] = QueryCommandParser.parseValue(key, value);
                    res[key] = QueryCommandParser.parseValue(key, value);
                });
                return res;
            })
            .map((entry, _, original) => ({ ...original[0], ...entry }));

        if (resultArray.length === 1) {
            return resultArray[0];
        } else {
            return resultArray;
        }
    }

    /**
     * escapes a key value pair
     * @param {string} key the key used
     * @param {string|string[]} value the value or an array of values
     * @return the parsed String which is readable by the TeamSpeak Query
     */
    static origEscapeKeyValue(key: string, value: boolean | string | string[] | number | number[]): string {
        key = QueryCommandParser.toSnakeCase(key);
        if (typeof value === "boolean") {
            value = value ? "1" : "0";
        } else if (typeof value === "number") {
            value = `${value}`;
        }
        if (Array.isArray(value)) {
            return value
                .map(v => `${QueryCommandParser.escape(key)}=${QueryCommandParser.escape(v.toString())}`)
                .join("|");
        } else {
            return `${QueryCommandParser.escape(key)}=${QueryCommandParser.escape(value)}`;
        }
    }

    /**
     * escapes a key value pair
     * @param {string} key the key used
     * @param {string|string[]} value the value or an array of values
     * @return the parsed String which is readable by the TeamSpeak Query
     */
    // HACK: This entire function is basically a hack it feels, there has to be a better way to process this but hey, it works
    static escapeKeyValue(
        key: string,
        value: boolean | string | string[] | number | number[] | ComplexQueryOptionElem[][]
    ): string {
        const valueType = Array.isArray(value)
            ? Array.isArray(value[0])
                ? typeof value[0][0] + "[]"
                : typeof value
            : typeof value;
        key = QueryCommandParser.toSnakeCase(key);

        switch (valueType) {
            case "string":
            case "number":
                value = `${value}`;
                return `${QueryCommandParser.escape(key)}=${QueryCommandParser.escape(value)}`;

            case "boolean":
                value = value ? "1" : "0";
                return `${QueryCommandParser.escape(key)}=${QueryCommandParser.escape(value)}`;

            case "string[]":
                const strValue: string[] = <string[]>value;
                return strValue
                    .map(elem => `${QueryCommandParser.escape(key)}=${QueryCommandParser.escape(elem.toString())}`)
                    .join("|");

            case "number[]":
                const numValue: number[] = <number[]>value;
                return numValue
                    .map(elem => `${QueryCommandParser.escape(key)}=${QueryCommandParser.escape(elem.toString())}`)
                    .join("|");

            case "object[]":
                const objValue: ComplexQueryOptionElem[][] = <ComplexQueryOptionElem[][]>value;
                return objValue
                    .map(elem =>
                        elem
                            .map(
                                _elem =>
                                    `${QueryCommandParser.escape(_elem.key.toString())}=${QueryCommandParser.escape(
                                        _elem.value.toString()
                                    )}`
                            )
                            .join(" ")
                    )
                    .join("|");

            default:
                // TODO: Fix the bellow to use a proper tsjs error
                throw Error("Oh shit, something went horibly wrong...");
        }
    }

    /**
     * retrieves the key value pair from a string
     * @param str the key value pair to unescape eg foo=bar
     */
    static getKeyValue(str: string): { key: string; value: string | undefined } {
        const index = str.indexOf("=");
        if (index === -1) {
            return { key: QueryCommandParser.toCamelCase(str), value: undefined };
        }
        const value = str.substring(index + 1);
        return {
            key: QueryCommandParser.toCamelCase(str.substring(0, index)),
            value: value === "" ? undefined : value
        };
    }

    static readonly CommandIdentifiers: { [key: string]: Function } = {
        sid: QueryCommandParser.parseString,
        serverId: QueryCommandParser.parseString,
        virtualserverNickname: QueryCommandParser.parseString,
        virtualserverUniqueIdentifier: QueryCommandParser.parseString,
        virtualserverName: QueryCommandParser.parseString,
        virtualserverWelcomemessage: QueryCommandParser.parseString,
        virtualserverPlatform: QueryCommandParser.parseString,
        virtualserverVersion: QueryCommandParser.parseString,
        virtualserverMaxclients: QueryCommandParser.parseNumber,
        virtualserverPassword: QueryCommandParser.parseString,
        virtualserverClientsonline: QueryCommandParser.parseNumber,
        virtualserverChannelsonline: QueryCommandParser.parseNumber,
        virtualserverCreated: QueryCommandParser.parseNumber,
        virtualserverUptime: QueryCommandParser.parseNumber,
        virtualserverCodecEncryptionMode: QueryCommandParser.parseNumber,
        virtualserverHostmessage: QueryCommandParser.parseString,
        virtualserverHostmessageMode: QueryCommandParser.parseNumber,
        virtualserverFilebase: QueryCommandParser.parseString,
        virtualserverDefaultServerGroup: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        virtualserverDefaultChannelGroup: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        virtualserverFlagPassword: QueryCommandParser.parseBoolean,
        virtualserverDefaultChannelAdminGroup: QueryCommandParser.parseString,
        virtualserverMaxDownloadTotalBandwidth: QueryCommandParser.parseNumber,
        virtualserverMaxUploadTotalBandwidth: QueryCommandParser.parseNumber,
        virtualserverHostbannerUrl: QueryCommandParser.parseString,
        virtualserverHostbannerGfxUrl: QueryCommandParser.parseString,
        virtualserverHostbannerGfxInterval: QueryCommandParser.parseNumber,
        virtualserverComplainAutobanCount: QueryCommandParser.parseNumber,
        virtualserverComplainAutobanTime: QueryCommandParser.parseNumber,
        virtualserverComplainRemoveTime: QueryCommandParser.parseNumber,
        virtualserverMinClientsInChannelBeforeForcedSilence: QueryCommandParser.parseNumber,
        virtualserverPrioritySpeakerDimmModificator: QueryCommandParser.parseNumber,
        virtualserverId: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        virtualserverAntifloodPointsNeededPluginBlock: QueryCommandParser.parseNumber,
        virtualserverAntifloodPointsTickReduce: QueryCommandParser.parseNumber,
        virtualserverAntifloodPointsNeededCommandBlock: QueryCommandParser.parseNumber,
        virtualserverAntifloodPointsNeededIpBlock: QueryCommandParser.parseNumber,
        virtualserverClientConnections: QueryCommandParser.parseNumber,
        virtualserverQueryClientConnections: QueryCommandParser.parseNumber,
        virtualserverHostbuttonTooltip: QueryCommandParser.parseString,
        virtualserverHostbuttonUrl: QueryCommandParser.parseString,
        virtualserverHostbuttonGfxUrl: QueryCommandParser.parseString,
        virtualserverQueryclientsonline: QueryCommandParser.parseNumber,
        virtualserverDownloadQuota: QueryCommandParser.parseNumber,
        virtualserverUploadQuota: QueryCommandParser.parseNumber,
        virtualserverMonthBytesDownloaded: QueryCommandParser.parseNumber,
        virtualserverMonthBytesUploaded: QueryCommandParser.parseNumber,
        virtualserverTotalBytesDownloaded: QueryCommandParser.parseNumber,
        virtualserverTotalBytesUploaded: QueryCommandParser.parseNumber,
        virtualserverPort: QueryCommandParser.parseNumber,
        virtualserverAutostart: QueryCommandParser.parseNumber,
        virtualserverMachineId: QueryCommandParser.parseString,
        virtualserverNeededIdentitySecurityLevel: QueryCommandParser.parseNumber,
        virtualserverLogClient: QueryCommandParser.parseNumber,
        virtualserverLogQuery: QueryCommandParser.parseNumber,
        virtualserverLogChannel: QueryCommandParser.parseNumber,
        virtualserverLogPermissions: QueryCommandParser.parseNumber,
        virtualserverLogServer: QueryCommandParser.parseNumber,
        virtualserverLogFiletransfer: QueryCommandParser.parseNumber,
        virtualserverMinClientVersion: QueryCommandParser.parseNumber,
        virtualserverNamePhonetic: QueryCommandParser.parseString,
        virtualserverIconId: QueryCommandParser.parseString,
        virtualserverReservedSlots: QueryCommandParser.parseNumber,
        virtualserverTotalPacketlossSpeech: QueryCommandParser.parseNumber,
        virtualserverTotalPacketlossKeepalive: QueryCommandParser.parseNumber,
        virtualserverTotalPacketlossControl: QueryCommandParser.parseNumber,
        virtualserverTotalPacketlossTotal: QueryCommandParser.parseNumber,
        virtualserverTotalPing: QueryCommandParser.parseNumber,
        virtualserverIp: QueryCommandParser.parseStringArray,
        virtualserverWeblistEnabled: QueryCommandParser.parseNumber,
        virtualserverAskForPrivilegekey: QueryCommandParser.parseNumber,
        virtualserverHostbannerMode: QueryCommandParser.parseNumber,
        virtualserverChannelTempDeleteDelayDefault: QueryCommandParser.parseNumber,
        virtualserverMinAndroidVersion: QueryCommandParser.parseNumber,
        virtualserverMinIosVersion: QueryCommandParser.parseNumber,
        virtualserverStatus: QueryCommandParser.parseString,
        connectionFiletransferBandwidthSent: QueryCommandParser.parseNumber,
        connectionFiletransferBandwidthReceived: QueryCommandParser.parseNumber,
        connectionFiletransferBytesSentTotal: QueryCommandParser.parseNumber,
        connectionFiletransferBytesReceivedTotal: QueryCommandParser.parseNumber,
        connectionPacketsSentSpeech: QueryCommandParser.parseNumber,
        connectionBytesSentSpeech: QueryCommandParser.parseNumber,
        connectionPacketsReceivedSpeech: QueryCommandParser.parseNumber,
        connectionBytesReceivedSpeech: QueryCommandParser.parseNumber,
        connectionPacketsSentKeepalive: QueryCommandParser.parseNumber,
        connectionBytesSentKeepalive: QueryCommandParser.parseNumber,
        connectionPacketsReceivedKeepalive: QueryCommandParser.parseNumber,
        connectionBytesReceivedKeepalive: QueryCommandParser.parseNumber,
        connectionPacketsSentControl: QueryCommandParser.parseNumber,
        connectionBytesSentControl: QueryCommandParser.parseNumber,
        connectionPacketsReceivedControl: QueryCommandParser.parseNumber,
        connectionBytesReceivedControl: QueryCommandParser.parseNumber,
        connectionPacketsSentTotal: QueryCommandParser.parseNumber,
        connectionBytesSentTotal: QueryCommandParser.parseNumber,
        connectionPacketsReceivedTotal: QueryCommandParser.parseNumber,
        connectionBytesReceivedTotal: QueryCommandParser.parseNumber,
        connectionBandwidthSentLastSecondTotal: QueryCommandParser.parseNumber,
        connectionBandwidthSentLastMinuteTotal: QueryCommandParser.parseNumber,
        connectionBandwidthReceivedLastSecondTotal: QueryCommandParser.parseNumber,
        connectionBandwidthReceivedLastMinuteTotal: QueryCommandParser.parseNumber,
        connectionPacketlossTotal: QueryCommandParser.parseNumber,
        connectionPing: QueryCommandParser.parseNumber,
        clid: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        clientId: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        cldbid: QueryCommandParser.parseString,
        clientDatabaseId: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        clientChannelId: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        clientOriginServerId: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        clientNickname: QueryCommandParser.parseString,
        clientType: QueryCommandParser.parseNumber,
        clientAway: QueryCommandParser.parseBoolean,
        clientAwayMessage: QueryCommandParser.parseString,
        clientFlagTalking: QueryCommandParser.parseBoolean,
        clientInputMuted: QueryCommandParser.parseBoolean,
        clientOutputMuted: QueryCommandParser.parseBoolean,
        clientInputHardware: QueryCommandParser.parseBoolean,
        clientOutputHardware: QueryCommandParser.parseBoolean,
        clientTalkPower: QueryCommandParser.parseNumber,
        clientIsTalker: QueryCommandParser.parseBoolean,
        clientIsPrioritySpeaker: QueryCommandParser.parseNumber,
        clientIsRecording: QueryCommandParser.parseBoolean,
        clientIsChannelCommander: QueryCommandParser.parseBoolean,
        clientUniqueIdentifier: QueryCommandParser.parseString,
        clientServergroups: QueryCommandParser.parseNumberArray, // Was string array - QueryCommandParser.parseStringArray
        clientChannelGroupId: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        clientChannelGroupInheritedChannelId: QueryCommandParser.parseString,
        clientVersion: QueryCommandParser.parseString,
        clientPlatform: QueryCommandParser.parseString,
        clientIdleTime: QueryCommandParser.parseNumber,
        clientCreated: QueryCommandParser.parseNumber,
        clientLastconnected: QueryCommandParser.parseNumber,
        clientIconId: QueryCommandParser.parseString,
        clientCountry: QueryCommandParser.parseString,
        clientEstimatedLocation: QueryCommandParser.parseString,
        clientOutputonlyMuted: QueryCommandParser.parseNumber,
        clientDefaultChannel: QueryCommandParser.parseString,
        clientMetaData: QueryCommandParser.parseString,
        clientVersionSign: QueryCommandParser.parseString,
        clientSecurityHash: QueryCommandParser.parseString,
        clientLoginName: QueryCommandParser.parseString,
        clientLoginPassword: QueryCommandParser.parseString,
        clientTotalconnections: QueryCommandParser.parseNumber,
        clientFlagAvatar: QueryCommandParser.parseString,
        clientTalkRequest: QueryCommandParser.parseNumber,
        clientTalkRequestMsg: QueryCommandParser.parseString,
        clientMonthBytesUploaded: QueryCommandParser.parseNumber,
        clientMonthBytesDownloaded: QueryCommandParser.parseNumber,
        clientTotalBytesUploaded: QueryCommandParser.parseNumber,
        clientTotalBytesDownloaded: QueryCommandParser.parseNumber,
        clientNicknamePhonetic: QueryCommandParser.parseString,
        clientDefaultToken: QueryCommandParser.parseString,
        clientBadges: QueryCommandParser.parseString,
        clientBase64HashClientUID: QueryCommandParser.parseString,
        connectionConnectedTime: QueryCommandParser.parseNumber,
        connectionClientIp: QueryCommandParser.parseString,
        clientMyteamspeakId: QueryCommandParser.parseString,
        clientIntegrations: QueryCommandParser.parseString,
        clientDescription: QueryCommandParser.parseString,
        clientNeededServerqueryViewPower: QueryCommandParser.parseNumber,
        clientMyteamspeakAvatar: QueryCommandParser.parseString,
        clientSignedBadges: QueryCommandParser.parseString,
        clientLastip: QueryCommandParser.parseString,
        cid: QueryCommandParser.parseString,
        pid: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        cpid: QueryCommandParser.parseString,
        order: QueryCommandParser.parseNumber,
        channelOrder: QueryCommandParser.parseNumber,
        channelName: QueryCommandParser.parseString,
        channelPassword: QueryCommandParser.parseString,
        channelDescription: QueryCommandParser.parseString,
        channelTopic: QueryCommandParser.parseString,
        channelFlagDefault: QueryCommandParser.parseBoolean,
        channelFlagPassword: QueryCommandParser.parseBoolean,
        channelFlagPermanent: QueryCommandParser.parseBoolean,
        channelFlagSemiPermanent: QueryCommandParser.parseBoolean,
        channelFlagTemporary: QueryCommandParser.parseBoolean,
        channelCodec: QueryCommandParser.parseNumber,
        channelCodecQuality: QueryCommandParser.parseNumber,
        channelNeededTalkPower: QueryCommandParser.parseNumber,
        channelIconId: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        totalClientsFamily: QueryCommandParser.parseNumber,
        channelMaxclients: QueryCommandParser.parseNumber,
        channelMaxfamilyclients: QueryCommandParser.parseNumber,
        totalClients: QueryCommandParser.parseNumber,
        channelNeededSubscribePower: QueryCommandParser.parseNumber,
        channelCodecLatencyFactor: QueryCommandParser.parseNumber,
        channelCodecIsUnencrypted: QueryCommandParser.parseNumber,
        channelSecuritySalt: QueryCommandParser.parseString,
        channelDeleteDelay: QueryCommandParser.parseNumber,
        channelFlagMaxclientsUnlimited: QueryCommandParser.parseBoolean,
        channelFlagMaxfamilyclientsUnlimited: QueryCommandParser.parseBoolean,
        channelFlagMaxfamilyclientsInherited: QueryCommandParser.parseBoolean,
        channelFilepath: QueryCommandParser.parseString,
        channelForcedSilence: QueryCommandParser.parseNumber,
        channelNamePhonetic: QueryCommandParser.parseString,
        channelFlagPrivate: QueryCommandParser.parseBoolean,
        channelBannerGfxUrl: QueryCommandParser.parseString,
        channelBannerMode: QueryCommandParser.parseNumber,
        secondsEmpty: QueryCommandParser.parseNumber,
        cgid: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        sgid: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        permid: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        permvalue: QueryCommandParser.parseNumber,
        permnegated: QueryCommandParser.parseBoolean,
        permskip: QueryCommandParser.parseBoolean,
        permsid: QueryCommandParser.parseString,
        t: QueryCommandParser.parseNumber,
        id1: QueryCommandParser.parseString,
        id2: QueryCommandParser.parseString,
        p: QueryCommandParser.parseNumber,
        v: QueryCommandParser.parseNumber,
        n: QueryCommandParser.parseNumber,
        s: QueryCommandParser.parseNumber,
        reasonid: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        reasonmsg: QueryCommandParser.parseString,
        ctid: QueryCommandParser.parseString,
        cfid: QueryCommandParser.parseString,
        targetmode: QueryCommandParser.parseNumber,
        target: QueryCommandParser.parseNumber,
        invokerid: QueryCommandParser.parseString,
        invokername: QueryCommandParser.parseString,
        invokeruid: QueryCommandParser.parseString,
        hash: QueryCommandParser.parseString,
        lastPos: QueryCommandParser.parseNumber,
        fileSize: QueryCommandParser.parseNumber,
        l: QueryCommandParser.parseString,
        path: QueryCommandParser.parseString,
        size: QueryCommandParser.parseNumber,
        clientftfid: QueryCommandParser.parseString,
        serverftfid: QueryCommandParser.parseString,
        currentSpeed: QueryCommandParser.parseNumber,
        averageSpeed: QueryCommandParser.parseNumber,
        runtime: QueryCommandParser.parseNumber,
        sizedone: QueryCommandParser.parseNumber,
        sender: QueryCommandParser.parseNumber,
        status: QueryCommandParser.parseNumber,
        ftkey: QueryCommandParser.parseString,
        port: QueryCommandParser.parseNumber,
        proto: QueryCommandParser.parseNumber,
        datetime: QueryCommandParser.parseNumber,
        hostTimestampUtc: QueryCommandParser.parseNumber,
        instanceUptime: QueryCommandParser.parseNumber,
        virtualserversRunningTotal: QueryCommandParser.parseNumber,
        virtualserversTotalChannelsOnline: QueryCommandParser.parseNumber,
        virtualserversTotalClientsOnline: QueryCommandParser.parseNumber,
        virtualserversTotalMaxclients: QueryCommandParser.parseNumber,
        serverinstanceDatabaseVersion: QueryCommandParser.parseNumber,
        serverinstanceFiletransferPort: QueryCommandParser.parseNumber,
        serverinstanceServerqueryMaxConnectionsPerIp: QueryCommandParser.parseNumber,
        serverinstanceMaxDownloadTotalBandwidth: QueryCommandParser.parseNumber,
        serverinstanceMaxUploadTotalBandwidth: QueryCommandParser.parseNumber,
        serverinstanceGuestServerqueryGroup: QueryCommandParser.parseNumber,
        serverinstancePendingConnectionsPerIp: QueryCommandParser.parseNumber,
        serverinstancePermissionsVersion: QueryCommandParser.parseNumber,
        serverinstanceServerqueryFloodBanTime: QueryCommandParser.parseNumber,
        serverinstanceServerqueryBanTime: QueryCommandParser.parseNumber,
        serverinstanceServerqueryFloodCommands: QueryCommandParser.parseNumber,
        serverinstanceServerqueryFloodTime: QueryCommandParser.parseNumber,
        serverinstanceTemplateChanneladminGroup: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        serverinstanceTemplateChanneldefaultGroup: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        serverinstanceTemplateServeradminGroup: QueryCommandParser.parseNumber,
        serverinstanceTemplateServerdefaultGroup: QueryCommandParser.parseNumber, // Was string - QueryCommandParser.parseString
        msgid: QueryCommandParser.parseString,
        timestamp: QueryCommandParser.parseNumber,
        cluid: QueryCommandParser.parseString,
        subject: QueryCommandParser.parseString,
        message: QueryCommandParser.parseString,
        version: QueryCommandParser.parseString,
        build: QueryCommandParser.parseNumber,
        platform: QueryCommandParser.parseString,
        name: QueryCommandParser.parseString,
        token: QueryCommandParser.parseString,
        tokencustomset: QueryCommandParser.parseRecursive,
        value: QueryCommandParser.parseString,
        banid: QueryCommandParser.parseString,
        id: QueryCommandParser.parseString,
        msg: QueryCommandParser.parseString,
        extraMsg: QueryCommandParser.parseString,
        failedPermid: QueryCommandParser.parseString,
        ident: QueryCommandParser.parseString,
        ip: QueryCommandParser.parseString,
        nickname: QueryCommandParser.parseString,
        uid: QueryCommandParser.parseString,
        desc: QueryCommandParser.parseString,
        pwClear: QueryCommandParser.parseString,
        start: QueryCommandParser.parseNumber,
        end: QueryCommandParser.parseNumber,
        tcid: QueryCommandParser.parseString,
        permname: QueryCommandParser.parseString,
        permdesc: QueryCommandParser.parseString,
        tokenType: QueryCommandParser.parseNumber,
        tokenCustomset: QueryCommandParser.parseRecursive,
        token1: QueryCommandParser.parseString,
        token2: QueryCommandParser.parseString,
        tokenId1: QueryCommandParser.parseString,
        tokenId2: QueryCommandParser.parseString,
        tokenCreated: QueryCommandParser.parseNumber,
        tokenDescription: QueryCommandParser.parseString,
        flagRead: QueryCommandParser.parseBoolean,
        tcldbid: QueryCommandParser.parseString,
        tname: QueryCommandParser.parseString,
        fcldbid: QueryCommandParser.parseString,
        fname: QueryCommandParser.parseString,
        mytsid: QueryCommandParser.parseString,
        lastnickname: QueryCommandParser.parseString,
        created: QueryCommandParser.parseNumber,
        duration: QueryCommandParser.parseNumber,
        invokercldbid: QueryCommandParser.parseString,
        enforcements: QueryCommandParser.parseNumber,
        reason: QueryCommandParser.parseString,
        type: QueryCommandParser.parseNumber,
        iconid: QueryCommandParser.parseString,
        savedb: QueryCommandParser.parseNumber,
        namemode: QueryCommandParser.parseNumber,
        nModifyp: QueryCommandParser.parseNumber,
        nMemberAddp: QueryCommandParser.parseNumber,
        nMemberRemovep: QueryCommandParser.parseNumber,
        sortid: QueryCommandParser.parseString,
        count: QueryCommandParser.parseNumber,
        salt: QueryCommandParser.parseString,
        snapshot: QueryCommandParser.parseString,
        apikey: QueryCommandParser.parseString,
        scope: QueryCommandParser.parseString,
        timeLeft: QueryCommandParser.parseNumber,
        createdAt: QueryCommandParser.parseNumber,
        expiresAt: QueryCommandParser.parseNumber
    };
}
