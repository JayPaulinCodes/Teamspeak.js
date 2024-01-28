import { QueryCommand } from "../QueryCommand";
import { ComplexQueryOptionElem } from "../interfaces/ComplexQueryOptionElem";

/**
 * ### ChannelEdit Command
 *
 * Changes a channels configuration using given properties.
 * Note that this command accepts multiple properties which
 * means that you're able to change all settings of the channel
 * specified with cid at once.
 *
 * Permissions:
 *  - i_channel_min_depth
 *  - i_channel_max_depth
 *  - b_channel_modify_parent
 *  - b_channel_modify_make_default
 *  - b_channel_modify_make_permanent
 *  - b_channel_modify_make_semi_permanent
 *  - b_channel_modify_make_temporary
 *  - b_channel_modify_name
 *  - b_channel_modify_topic
 *  - b_channel_modify_description
 *  - b_channel_modify_password
 *  - b_channel_modify_codec
 *  - b_channel_modify_codec_quality
 *  - b_channel_create_modify_with_codec_maxquality
 *  - b_channel_modify_codec_latency_factor
 *  - b_channel_modify_make_codec_encrypted
 *  - b_channel_modify_maxclients
 *  - b_channel_modify_maxfamilyclients
 *  - b_channel_modify_sortorder
 *  - b_channel_modify_needed_talk_power
 *  - i_channel_modify_power
 *  - i_channel_needed_modify_power
 *
 * Syntax:
 *  - channeledit cid={channelID} [channel_properties…]
 *
 * Example:
 *  - channeledit cid=15 channel_codec_quality=3 channel_description=My\sDescription
 */
export class ChannelEditCommand extends QueryCommand {
    private static readonly baseCommand = "channeledit";
    private static readonly allowedProperties = [
        "channelName",
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
    constructor(channelId: number, properties: { [index: string]: any } = {}) {
        const PARAMS: { [index: string]: any } = {
            cid: channelId
        };

        for (const key in properties) {
            const value = properties[key];

            if (ChannelEditCommand.allowedProperties.includes(key)) {
                PARAMS[key] = value;
            }
        }

        super(ChannelEditCommand.baseCommand, PARAMS);
    }
}
