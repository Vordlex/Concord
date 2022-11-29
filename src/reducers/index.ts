import { combineReducers } from "redux"
import { websocket_redux } from "./websocket_reducers"
import { user_status_redux } from "./user_status_redux"

export default combineReducers({
  websocket_redux,
  user_status_redux,
})
