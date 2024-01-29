import { QueryClient } from "../client/QueryClient";
import { Base } from "./Base";
import BasePatch from "./interfaces/BasePatch";
import { TsIdentifier } from "./typings/TsIdentifier";

// ADD DOCS
export class Channel extends Base {
    /**
     * Primary Identifier
     */
    public id: number;
    public uniqueId: TsIdentifier;
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

        this.id = "id" in data ? data.id : null;
        this.uniqueId = data[fromQuery ? "channelUniqueIdentifier" : "uniqueId"];

        this._patch(data, fromQuery);
    }

    public _patch(data: any, fromQuery: boolean = true) {
        let key = fromQuery ? "channelUniqueIdentifier" : "uniqueId";
        if (key in data) {
            this["uniqueId"] = data[key];
        }
        
        key = fromQuery ? "pid" : "parentId";
        if (key in data) {
            this["parentId"] = data[key];
        }
        
        key = fromQuery ? "channelName" : "name";
        if (key in data) {
            this["name"] = data[key];
        }
        
        key = fromQuery ? "channelDescription" : "description";
        if (key in data) {
            this["description"] = data[key];
        }
        
        key = fromQuery ? "topic" : "topic";
        if (key in data) {
            this["topic"] = data[key];
        }
        
        key = fromQuery ? "channelOrder" : "order";
        if (key in data) {
            this["order"] = data[key];
        }
        
        key = fromQuery ? "channelIconId" : "iconId";
        if (key in data) {
            this["iconId"] = data[key];
        }
        
        key = fromQuery ? "channelNeededTalkPower" : "neededTalkPower";
        if (key in data) {
            this["neededTalkPower"] = data[key];
        }
        
        key = fromQuery ? "channelFlagPassword" : "hasPassword";
        if (key in data) {
            this["hasPassword"] = data[key];
        }
        
        key = fromQuery ? "channelPassword" : "password";
        if (key in data) {
            this["password"] = data[key];
        }
        
        key = fromQuery ? "channelMaxclients" : "maxClients";
        if (key in data) {
            this["maxClients"] = data[key];
        }
        
        key = fromQuery ? "channelMaxfamilyclients" : "familyMaxClients";
        if (key in data) {
            this["familyMaxClients"] = data[key];
        }



        const x = {
            pid: "0",
            channelName: "Default Channe",
            channelTopic: "topicc",
            channelDescription: "This is the default channelssdada",
            channelPassword: "DJ9fLHqwFJP+5VgQhSfLSJtBrtk=",
            channelCodec: 4,
            channelCodecQuality: 6,
            channelMaxclients: -1,
            channelMaxfamilyclients: -1,
            channelOrder: 0,
            channelFlagPermanent: true,
            channelFlagSemiPermanent: false,
            channelFlagDefault: false,
            channelFlagPassword: true,
            channelCodecLatencyFactor: 1,
            channelCodecIsUnencrypted: 0,
            channelSecuritySalt: undefined,
            channelDeleteDelay: 0,
            channelUniqueIdentifier: "7aead8cb-29d7-4f8f-b612-adfdd612555b",
            channelFlagMaxclientsUnlimited: true,
            channelFlagMaxfamilyclientsUnlimited: true,
            channelFlagMaxfamilyclientsInherited: false,
            channelFilepath: "files/virtualserver_1/channel_1",
            channelNeededTalkPower: 1,
            channelForcedSilence: 0,
            channelNamePhonetic: "test",
            channelIconId: 0,
            channelBannerGfxUrl: undefined,
            channelBannerMode: 0,
            secondsEmpty: 6
        };
    }

    public get parent(): Channel | null {
        return this.parentId === null ? null : this.queryClient.channels.resolve(this.parentId);
    }
}
