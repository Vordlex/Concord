import { combineReducers } from "redux"
import { websocket_redux } from "./websocket_redux"
import { user_status_redux } from "./user_status_redux"
import { messages_redux } from "./messages_redux"

export default combineReducers({
  websocket_redux,
  user_status_redux,
  messages_redux,
})
