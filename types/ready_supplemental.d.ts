export type ready_supplemental = {
  op: 0
  s: 2
  t: "READY_SUPPLEMENTAL"
  guilds: Array<{
    embedded_activities: Array<{
      channel_id: string
      connections: Array<{
        metadata: {
          is_eligible_host: boolean
        }
        user_id: string
      }>
      embedded_activity: {
        activity_id: string
        application_id: string
        assets: null | string
        created_at: null | Date
        details: null | string
        name: string
        secrets: null | string
        state: null | string
        timestamps: null | Date
        type: null | number
      }
      users: Array<string>
    }>
    id: string
    voice_states: Array<{
      channel_id: string
      deaf: boolean
      mute: boolean
      request_to_speak_timestamp: Date
      self_deaf: boolean
      self_mute: boolean
      self_video: boolean
      session_id: string
      suppress: boolean
      user_id: string
    }>
  }>
}
