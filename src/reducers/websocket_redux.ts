import { wsResponse } from "../../types"
import { channels_type, guilds } from "../../types/generics/guilds"
import {
  private_channels,
  ready,
  relationships,
  users,
} from "../../types/ready"
import { switch_to_friend } from "../../types/switch_to_friend"

import {
  READY,
  READY_SUPPLEMENTAL,
  SWITCH_FRIEND_TO_CHANNEL,
  SWITCH_CHANNEL_TO_FRIEND,
} from "../actions/websocket_actions"

export type Websocket_Reducers_Type = {
  guilds: guilds[]
  friend_suggestion_count: number
  consents: {
    personalization: {
      consented: boolean
    }
  }
  relationships: relationships[]
  private_channels: private_channels[]
  selected_guild_channels: channels_type[]
  users: users[]
  LeftTabEnabled: boolean
  LeftTabContent: "FRIENDS" | "CHANNELS"
}

const initialState: Websocket_Reducers_Type = {
  guilds: [],
  friend_suggestion_count: 0,
  consents: {
    personalization: {
      consented: true,
    },
  },
  relationships: [],
  private_channels: [],
  selected_guild_channels: [],
  users: [],
  LeftTabEnabled: true,
  LeftTabContent: "FRIENDS",
}

export const websocket_redux = (
  state: Websocket_Reducers_Type = initialState,
  action: { type: string; data: wsResponse }
): Websocket_Reducers_Type => {
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
      return state
    }
    case SWITCH_FRIEND_TO_CHANNEL: {
      const data = action.data as switch_to_friend
      const channels = state.selected_guild_channels

      channels.length = 0

      state.guilds.forEach((guild) => {
        guild.channels.forEach((channel) => {
          if (data.d === guild.id) {
            channels.push(channel)
          }
        })
      })

      return {
        ...state,
        LeftTabContent: "CHANNELS",
        selected_guild_channels: channels,
      }
    }
    case SWITCH_CHANNEL_TO_FRIEND: {
      return {
        ...state,
        LeftTabContent: "FRIENDS",
      }
    }
    default:
      return state
  }
}
