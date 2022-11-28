import { emoji } from "./generics/emoji"

export type message_reaction_add = {
  d: {
    burst: boolean
    channel_id: string
    emoji: emoji
    guild_id: string
    member: member
    message_id: string
    user_id: string
  }
  op: number
  s: number
  t: "MESSAGE_REACTION_ADD"
}

type member = {
  avatar: null | string
  communication_disabled_until: null | number
  deaf: boolean
  flags: number
  joined_at: Date
  mute: boolean
  nick: null | string
  pending: boolean
  premium_since: null | Date
  roles: Array<string>
  user: {
    avatar: string
    bot: boolean
    discriminator: string
    id: string
    public_flags: number
    username: string
  }
}
