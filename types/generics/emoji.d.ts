import { userType } from './user.d';
import { RolesType } from './role.d';
export type emoji = { name: string; id: null | string }

export type default_reaction_emoji = {
    emoji_id: string | number;
    emoji_name: string;
}

export type EmojiType = {
    id: string | number
    name: string;
    roles?: RolesType[]
    user?: userType
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean
}
