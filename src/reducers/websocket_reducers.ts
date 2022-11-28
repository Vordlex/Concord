import { wsResponse } from "../../types/"
import { guilds } from "../../types/generics/guilds"
import {
  private_channels,
  ready,
  relationships,
  users,
} from "../../types/ready"
import {
  guilds as supplementalGuilds,
  ready_supplemental,
} from "../../types/ready_supplemental"
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
  private_channels: private_channels[]
  users: users[]
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
  private_channels: [],
  users: [],
  LeftTabEnabled: true,
  LeftTabContent: "FRIENDS",
}

export const websocket_redux = (
  state: stateType = initialState,
  action: { type: string; data: wsResponse }
): stateType => {
  switch (action.type) {
    case READY: {
      const data = action.data as ready
      return {
        ...state,
        guilds: data.d.guilds,
        friend_suggestion_count: data.d.friend_suggestion_count,
        consents: data.d.consents,
        relationships: data.d.relationships,
        private_channels: data.d.private_channels,
        users: data.d.users,
      }
    }
    case READY_SUPPLEMENTAL: {
      const data = action.data as ready_supplemental

      const users: users[] = []
      state.users.forEach((user) => {
        data.d.merged_presences.guilds.forEach(
          (guilds: supplementalGuilds[]) => {
            guilds.forEach((guild) => {
              if (
                guild.user_id === user.id &&
                users.find((userFind) => userFind.id === user.id) === undefined
              ) {
                users.push({ ...user, status: guild.status })
              }
            })
          }
        )
      })

      return {
        ...state,
        users,
      }
    }
    default:
      return state
  }
}
