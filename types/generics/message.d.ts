import { emoji } from "./emoji"

export type components = {
  components: Array<{
    custom_id: string
    emoji: emoji
    label: string
    style: number
    type: number
  }>
  type: number
}

export type embeds = {
  color: number
  image: {
    height: number
    proxy_url: string
    url: string
    width: number
  }
  type: "rich"
}

export type member = {
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
}

export type mentions = {
  avatar: string
  avatar_decoration: null | string
  bot: boolean
  discriminator: string
  id: string
  member: member
  public_flags: number
  username: string
}

export type attachments = {
  content_type: string
  filename: string
  height: number
  id: string
  proxy_url: string
  size: number
  url: string
  width: number
}
