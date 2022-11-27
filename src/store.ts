import { applyMiddleware } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./reducers"
import thunk from "redux-thunk"

const store = configureStore({ reducer: rootReducer })

export default store
