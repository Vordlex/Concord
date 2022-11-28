export type voice_state_update = {
  d: {
    channel_id: string
    deaf: boolean
    guild_id: string
    member: {
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
      user: {
        avatar: string
        bot: boolean
        discriminator: string
        id: string
        public_flags: null | number
        username: string
      }
    }
    mute: boolean
    request_to_speak_timestamp: Date
    self_deaf: boolean
    self_mute: boolean
    self_video: boolean
    session_id: string
    suppress: boolean
    user_id: string
  }
  op: number
  s: number
  t: "VOICE_STATE_UPDATE"
}
