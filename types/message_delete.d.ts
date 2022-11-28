export type message_delete = {
  d: {
    channel_id: string
    guild_id: string
    id: string
  }
  op: number
  s: number
  t: "MESSAGE_DELETE"
}
