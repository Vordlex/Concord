import { wsResponse } from "../../types/"
import { guilds } from "../../types/generics/guilds"
import { ready, relationships } from "../../types/ready"
import { READY, READY_SUPPLEMENTAL } from "../actions/websocket_actions"

export type stateType = {
  guilds: guilds[]
  friend_suggestion_count: number
  consents: {
    personalization: {
      consented: boolean
    }
  }
  relationships: relationships[]
  LeftTabEnabled: boolean
  LeftTabContent: "FRIENDS" | "CHANNELS"
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
  LeftTabEnabled: true,
  LeftTabContent: "FRIENDS",
}

export const websocket_redux = (
  state: stateType = initialState,
  action: { type: string; data: wsResponse }
): stateType => {
  switch (action.type) {
    case READY:
      const data = action.data as ready
      return {
        ...state,
        guilds: data.d.guilds,
        friend_suggestion_count: data.d.friend_suggestion_count,
        consents: data.d.consents,
        relationships: data.d.relationships,
      }
    case READY_SUPPLEMENTAL:
      return state
    default:
      return state
  }
}
