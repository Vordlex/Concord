export type relationship_add = {
  d: {
    id: string
    nickname: null | string
    should_notify: boolean
    since: Date
    type: number
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
  t: "RELATIONSHIP_ADD"
}
