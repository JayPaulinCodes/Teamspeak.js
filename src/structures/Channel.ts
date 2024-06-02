import { Base } from "@teamspeak.js/structures/Base";
import { QueryClient } from "@teamspeak.js/client/QueryClient";

// ADD DOCS
export class Channel extends Base {
    /**
     * Primary Identifier
     */
    public id: number;
    public uniqueId?: string;
    public parentId: number | null = null;
    public name?: string;
    public description?: string;
    public topic?: string;
    public order?: number;
    public iconId?: number;
    public neededTalkPower?: number;
    public hasPassword?: boolean;
    public password?: string;
    public maxClients?: number;
    public familyMaxClients?: number;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any, fromQuery: boolean = true) {
        super(queryClient);

        this.id = data[fromQuery ? "cid" : "id"];

        this._patch(data, fromQuery, false);
    }

    public get parent(): Channel | null {
        return this.parentId === null ? null : this._queryClient.channels.resolve(this.parentId);
    }

    public _patch(data: any, fromQuery: boolean = true, updating: boolean = true) {
        let key = fromQuery ? "channelUniqueIdentifier" : "uniqueId";
        if (key in data) {
            this["uniqueId"] = data[key];
        }

        key = fromQuery ? "pid" : "parentId";
        if (key in data) {
            this["parentId"] = data[key];
        } else if (!updating) {
            this["parentId"] = null;
        }

        key = fromQuery ? "channelName" : "name";
        if (key in data) {
            this["name"] = data[key];
        } else if (!updating) {
            this["name"] = undefined;
        }

        key = fromQuery ? "channelDescription" : "description";
        if (key in data) {
            this["description"] = data[key];
        } else if (!updating) {
            this["description"] = undefined;
        }

        key = fromQuery ? "topic" : "topic";
        if (key in data) {
            this["topic"] = data[key];
        } else if (!updating) {
            this["topic"] = undefined;
        }

        key = fromQuery ? "channelOrder" : "order";
        if (key in data) {
            this["order"] = data[key];
        } else if (!updating) {
            this["order"] = undefined;
        }

        key = fromQuery ? "channelIconId" : "iconId";
        if (key in data) {
            this["iconId"] = data[key];
        } else if (!updating) {
            this["iconId"] = undefined;
        }

        key = fromQuery ? "channelNeededTalkPower" : "neededTalkPower";
        if (key in data) {
            this["neededTalkPower"] = data[key];
        } else if (!updating) {
            this["neededTalkPower"] = undefined;
        }

        key = fromQuery ? "channelFlagPassword" : "hasPassword";
        if (key in data) {
            this["hasPassword"] = data[key];
        } else if (!updating) {
            this["hasPassword"] = undefined;
        }

        key = fromQuery ? "channelPassword" : "password";
        if (key in data) {
            this["password"] = data[key];
        } else if (!updating) {
            this["password"] = undefined;
        }

        key = fromQuery ? "channelMaxclients" : "maxClients";
        if (key in data) {
            this["maxClients"] = data[key];
        } else if (!updating) {
            this["maxClients"] = undefined;
        }

        key = fromQuery ? "channelMaxfamilyclients" : "familyMaxClients";
        if (key in data) {
            this["familyMaxClients"] = data[key];
        } else if (!updating) {
            this["familyMaxClients"] = undefined;
        }

        // const x = {
        //     pid: "0",
        //     channelName: "Default Channe",
        //     channelTopic: "topicc",
        //     channelDescription: "This is the default channelssdada",
        //     channelPassword: "DJ9fLHqwFJP+5VgQhSfLSJtBrtk=",
        //     channelCodec: 4,
        //     channelCodecQuality: 6,
        //     channelMaxclients: -1,
        //     channelMaxfamilyclients: -1,
        //     channelOrder: 0,
        //     channelFlagPermanent: true,
        //     channelFlagSemiPermanent: false,
        //     channelFlagDefault: false,
        //     channelFlagPassword: true,
        //     channelCodecLatencyFactor: 1,
        //     channelCodecIsUnencrypted: 0,
        //     channelSecuritySalt: undefined,
        //     channelDeleteDelay: 0,
        //     channelUniqueIdentifier: "7aead8cb-29d7-4f8f-b612-adfdd612555b",
        //     channelFlagMaxclientsUnlimited: true,
        //     channelFlagMaxfamilyclientsUnlimited: true,
        //     channelFlagMaxfamilyclientsInherited: false,
        //     channelFilepath: "files/virtualserver_1/channel_1",
        //     channelNeededTalkPower: 1,
        //     channelForcedSilence: 0,
        //     channelNamePhonetic: "test",
        //     channelIconId: 0,
        //     channelBannerGfxUrl: undefined,
        //     channelBannerMode: 0,
        //     secondsEmpty: 6
        // };
    }

    public override toJSON() {
        return super.toJSON();
    }

    public override toString(): string {
        return `'${this.name}' (${this.id})`;
    }
}
