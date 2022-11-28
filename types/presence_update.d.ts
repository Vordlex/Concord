import { activities } from "./generics/activities"
import { status } from "./generics/status"

export type presence_update = {
  d: {
    activities: activities[]
    client_status: client_status
    guild_id: number
    status: status
    user: { id: string }
  }
  op: number
  s: number
  t: "PRESENCE_UPDATE"
}

type client_status = { mobile: status; desktop: status }
