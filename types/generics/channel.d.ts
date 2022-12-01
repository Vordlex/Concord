import { default_reaction_emoji } from './emoji.d';
import { userType } from "./user";

export type channel_type = {
    id: string | number;
    type: typeChannelNumber;
    guild_id?: string | number;
    position?: number;
    permission_overwrites?: typeChannelPermissionOverwrites;
    name?: string;
    topic?: string;
    nsfw?: boolean;
    last_message_id?: string | number;
    bitrate?: number;
    user_limit?: number;
    rate_limite_per_user?: number;
    recipients?: userType[]
    icon?: string;
    owner_id?: string | number
    application_id?: string | number
    parent_id?: string | number
    last_pin_timestamp?: Date;
    rtc_region?: string;
    video_quality_mode?: typeVideoQualityChannel
    message_count?: number; //Numero de messages retirando mensagem inicial ou mensagem deletadas
    member_count?: number;
    thread_metadata?: typeThreadMemberChannel;
    member?: typeThreadMemberChannel;
    default_auto_archive_duration?: number;
    permissions?: string
    flags?: number;
    total_message_sent?: number;
    available_tags?: typeTagForumChannel[];
    applied_tags?: string[] | number[]
    default_react_emoji?: default_reaction_emoji;
    default_thread_rate_limit_per_user?: number;
    default_sort_order?: number
}

export type typeChannelNumber = 0 // text
    | 1 //DM
    | 2 //GUILD VOICE
    | 3 //GROUP DM
    | 4 //GUILD CATEGORY
    | 5 //GUILD ANNOUNCEMENT
    | 10 //a temporary sub channel within a GUILD_ANNOUNCEMENT channel
    | 11 //a temporary sub channel within a GUILD_TEXT or GUILD_FORUM channel
    | 12 //a temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission
    | 13 // a voice channel for hosting events with an audience
    | 14 //the channel in a hub containing the listed servers
    | 15 //Channel that can only contain threads

export type typeChannelPermissionOverwrites = {
    id: string | number
    type: number
    allow: string
    deny: string
}

export type typeVideoQualityChannel = 1 | 2 //1 AUTO 2 FULL

export type typeThreadMemberChannel = {
    id?: string | number;
    user_id?: string | number;
    join_timestamp: Date
    flags: number
}

export type typeThreadMetadataChannel = {
    archived: boolean;
    auto_archive_duration: number;
    archive_timestamp: Date
    locked: boolean;
    invitable?: boolean;
    create_timestamp?: Date
}

export type typeTagForumChannel = {
    id: string | number;
    name: string;
    moderated: boolean;
    emoji_id: string | number;
    emoji_name: string;
}