export type message_ack = {
  d: {
    channel_id: string
    message_id: string
    version: number
  }
  op: number
  s: number
  t: "MESSAGE_ACK"
}
