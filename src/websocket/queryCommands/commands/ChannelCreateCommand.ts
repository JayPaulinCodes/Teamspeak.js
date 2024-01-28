import { QueryCommand } from "../QueryCommand";
import { ComplexQueryOptionElem } from "../interfaces/ComplexQueryOptionElem";

/**
 * ### ChannelCreate Command
 *
 * Creates a new channel using the given properties and displays its ID.
 * Note that this command accepts multiple properties which means that
 * you're able to specifiy all settings of the new channel at once.
 *
 * Permissions:
 *  - i_channel_min_depth
 *  - i_channel_max_depth
 *  - b_channel_create_child
 *  - b_channel_create_permanent
 *  - b_channel_create_semi_permanent
 *  - b_channel_create_temporary
 *  - b_channel_create_with_topic
 *  - b_channel_create_with_description
 *  - b_channel_create_with_password
 *  - i_channel_create_modify_with_codec_maxquality
 *  - i_channel_create_modify_with_codec_latency_factor_min
 *  - b_channel_create_with_maxclients
 *  - b_channel_create_with_maxfamilyclients
 *  - b_channel_create_with_sortorder
 *  - b_channel_create_with_default
 *  - b_channel_create_with_needed_talk_power
 *
 * Syntax:
 *  - channelcreate channel_name={channelName} [channel_properties...]
 *
 * Example:
 *  - channelcreate channel_name=My\sChannel channel_topic=My\sTopic
 */
export class ChannelCreateCommand extends QueryCommand {
    private static readonly baseCommand = "channelcreate";
    private static readonly allowedProperties = [
        "channelTopic",
        "channelDescription",
        "channelPassword",
        "channelFlagPassword",
        "channelCodec",
        "channelCodecQuality",
        "channelMaxclients",
        "channelMaxfamilyclients",
        "channelOrder",
        "channelFlagPermanent",
        "channelFlagSemiPermanent",
        "channelFlagTemporary",
        "channelFlagDefault",
        "channelFlagMaxclientsUnlimited",
        "channelFlagMaxfamilyclientsUnlimited",
        "channelFlagMaxfamilyclientsInherited",
        "channelNeededTalkPower",
        "channelNamePhonetic",
        "channelFilepath",
        "channelForcedSilence",
        "channelIconId",
        "channelCodecIsUnencrypted",
        "cpid"
    ];

    // ADD DOCS
    constructor(channelName: string, properties: { [index: string]: any } = {}) {
        const PARAMS: { [index: string]: any } = {
            channelName: channelName
        };

        for (const key in properties) {
            const value = properties[key];

            if (ChannelCreateCommand.allowedProperties.includes(key)) {
                PARAMS[key] = value;
            }
        }

        super(ChannelCreateCommand.baseCommand, PARAMS);
    }
}
