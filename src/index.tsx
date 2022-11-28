import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./Pages/App"
import reportWebVitals from "./reportWebVitals"

import { Provider } from "react-redux"
import store from "./store"
import websocketConnect from "./functions/websocket"

const root = ReactDOM.createRoot(document.getElementById("root")!)

websocketConnect()

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
