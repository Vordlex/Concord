export type RolesType = {
    id: string | number;
    name: string;
    color: number;
    hoist: boolean;
    icon?: string //role icon hash https://discord.com/developers/docs/reference#image-formatting
    unicode_emoji?: string;
    position: number;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
    tags?: RolesTagsType
}

export type RolesTagsType = {
    bot_id?: string | number;
    integration_id?: string | number;
    premium_subscriber?: null
}