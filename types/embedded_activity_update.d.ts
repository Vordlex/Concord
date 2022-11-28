export type embedded_activity_update = {
  d: {
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
    guild_id: string
    update_code: number
    users: Array<string>
  }
  op: number
  s: number
  t: "EMBEDDED_ACTIVITY_UPDATE"
}
