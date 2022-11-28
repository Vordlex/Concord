import {
  attachments,
  components,
  embeds,
  member,
  mentions,
} from "./generics/message"

export type message_update = {
  d: {
    attachments: attachments[]
    author: {
      avatar: string
      avatar_decoration: null | string
      bot: boolean
      discriminator: string
      id: string
      public_flags: number
      username: string
    }
    channel_id: string
    components: components[]
    content: string
    edited_timestamp: null | number
    embeds: embeds[]
    flags: number
    guild_id: string | null
    id: string
    member: member
    mention_everyone: boolean
    mention_roles: Array<string>
    mentions: mentions[]
    message_reference: {
      channel_id: string
      guild_id: string | null
      message_id: string
    }
    nonce: string
    pinned: boolean
    referenced_message: message_update | null
    timestamp: Date
    tts: boolean
    type: number
  }
  op: number
  s: number
  t: "MESSAGE_UPDATE"
}
