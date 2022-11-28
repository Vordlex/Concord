export type guild_ban_add = {
  d: {
    guild_id: string
    user: {
      avatar: string
      avatar_decoration: null | string
      discriminator: string
      id: string
      public_flags: number
      username: string
    }
  }
  op: number
  s: number
  t: "GUILD_BAN_ADD"
}
