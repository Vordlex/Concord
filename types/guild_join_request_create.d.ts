export type guild_join_request_create = {
  d: {
    guild_id: string
    request: {
      application_status: string
      created_at: Date
      guild_id: string
      id: string
      last_seen: null
      rejection_reason: null
      user_id: string
    }
    status: string
  }
  op: number
  s: number
  t: "GUILD_JOIN_REQUEST_CREATE"
}
