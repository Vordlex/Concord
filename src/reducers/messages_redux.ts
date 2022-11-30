import { messages } from "../../types/messages_type"

const initialState: messages[] = []

export const messages_redux = (
  state: messages[] = initialState,
  action: { type: string; data: messages[] }
): messages[] => {
  if (action.type === "CHANNEL_FETCH") {
    return action.data
  }
  return state
}
