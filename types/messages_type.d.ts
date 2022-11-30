import { attachments, components, embeds, mentions } from "./generics/message"

export type messages = {
  id: string
  type: number
  content: string
  channel_id: string
  author: author
  attachments: attachments[]
  embeds: embeds[]
  mentions: mentions[]
  mention_roles: Array<string>
  pinned: boolean
  mention_everyone: boolean
  tts: boolean
  timestamp: Date
  edited_timestamp: null
  flags: number
  components: components[]
}

type author = {
  id: string
  username: string
  avatar: string
  avatar_decoration: null | string
  discriminator: string
  public_flags: number
}
