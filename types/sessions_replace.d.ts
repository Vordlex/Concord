import { activities } from "./generics/activities"
import { status } from "./generics/status"

export type sessions_replace = {
  d: {
    activities: activities[]
    client_info: client_info
    session_id: string
    status: status
  }
  op: number
  s: number
  t: "SESSIONS_REPLACE"
}

type client_info = { client: string; os: string; version: number }
