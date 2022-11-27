import { wsResponse } from "../../types/"
import { ready } from "../../types/ready"
import { READY, READY_SUPPLEMENTAL } from "../actions/websocket_actions"

const initialState = {}

export const websocket_redux = (
  state: any = initialState,
  action: { type: string; data: wsResponse }
) => {
  switch (action.type) {
    case READY:
      const data = action.data as ready
      return {
        ...data,
      }
    case READY_SUPPLEMENTAL:
      return {}
    default:
      return state
  }
}
