import { wsResponse } from "../../types"
import { presence_update } from "../../types/presence_update"

export type User_Status_Redux_Type = {
  [key: string]: string
}

const initialState: User_Status_Redux_Type = {}

export const user_status_redux = (
  state: User_Status_Redux_Type = initialState,
  action: { type: string; data: wsResponse }
): User_Status_Redux_Type => {
  if (action.type === "PRESENCE_UPDATE") {
    const data = action.data as presence_update
    return {
      ...state,
      [data.d.user.id]: data.d.status,
    }
  }
  return state
}
