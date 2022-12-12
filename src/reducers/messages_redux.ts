import { messages } from "../../types/messages_type"

const initialState: messages[] = []

// export const messages_redux = (
//   state: messages[] = initialState,
//   action: { type: string; data: messages[] }
// ): messages[] => {
//   if (action.type === "CHANNEL_FETCH") {
//     return action.data
//   }
//   if (action.type === "MESSAGE_CREATE") {
//     if (state.length > 0) {
//       const { d } = action.data as unknown as { d: messages }
//       if (state[0].channel_id === d.channel_id) {
//         return state
//       }
//     }
//   }
//   return state
// }


// ---> Possivel solução

export const messages_redux = (
  state: messages[] = initialState,
  action: { type: string; data: messages[] }
): messages[] => {
  if (action.type === "CHANNEL_FETCH") {
    state = action.data
    return state
  }
  if (action.type === "MESSAGE_CREATE") {
    const message = action.data
    state.push(...message)

    return state
  }
  return state
}
