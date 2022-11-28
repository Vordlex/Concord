import { activities } from "./generics/activities"
import { status } from "./generics/status"
import { client_status } from "./presence_update"

export type ready_supplemental = {
  op: number
  s: number
  t: "READY_SUPPLEMENTAL"
  d: {
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
    merged_presences: {
      friends: friends[]
      guilds: guilds[][]
    }
  }
}

type friends = {
  activities: activities[]
  client_status: client_status
  last_modified: number
  status: status
  user_id: string
}

type guilds = {
  activities: activities[]
  client_status: client_status
  status: status
  user_id: string
}
