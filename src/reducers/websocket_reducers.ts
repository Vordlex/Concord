import { wsResponse } from "../../types/"
import { guilds } from "../../types/generics/guilds"
import { ready } from "../../types/ready"
import { READY, READY_SUPPLEMENTAL } from "../actions/websocket_actions"

export type stateType = {
  guilds: guilds[]
  friend_suggestion_count: number
  consents: {
    personalization: {
      consented: boolean
    }
  }
  relationships: Array<{
    id: string
    nickname: null | string
    since?: Date
    type: 1 | 2 | 3 | 4 //1 is friend, 2 I blocked, 3 someone sent me a friend request, 4 I sent friend request
    user_id: string
  }>
}

const initialState: stateType = {
  guilds: [],
  friend_suggestion_count: 0,
  consents: {
    personalization: {
      consented: true,
    },
  },
  relationships: [],
}

export const websocket_redux = (
  state: stateType = initialState,
  action: { type: string; data: wsResponse }
): stateType => {
  switch (action.type) {
    case READY:
      const data = action.data as ready
      return {
        ...data,
        guilds: data.d.guilds,
        friend_suggestion_count: data.d.friend_suggestion_count,
        consents: data.d.consents,
        relationships: [],
      }
    case READY_SUPPLEMENTAL:
      return state
    default:
      return state
  }
}
