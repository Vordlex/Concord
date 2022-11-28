export type channel_update = {
  d: {
    flags: number
    guild_hashes: {
      channels: {
        hash: string
      }
      metadata: {
        hash: string
      }
      roles: {
        hash: string
      }
      version: number
    }
    guild_id: string
    hashes: {
      channels: {
        hash: string
      }
      metadata: {
        hash: string
      }
      roles: {
        hash: string
      }
      version: number
    }
    id: string
    last_message_id: string
    last_pin_timestamp: Date
    name: string
    nsfw: boolean
    parent_id: string
    permission_overwrites: permission_overwrites[]
    position: number
    rate_limit_per_user: number
    topic: string
    type: number
    version: number
  }
  op: number
  s: number
  t: "CHANNEL_UPDATE"
}

type permission_overwrites = {
  allow: string
  deny: string
  id: number
}
