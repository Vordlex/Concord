import { emoji } from "./generics/emoji"

type message_reaction_remove = {
  d: {
    burst: boolean
    channel_id: string
    emoji: emoji
    guild_id: string
    message_id: string
    user_id: string
  }
  op: number
  s: number
  t: "MESSAGE_REACTION_REMOVE"
}
