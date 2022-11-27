import websocketConnect from "../functions/websocket"
import logo from "../logo.svg"
import "./App.css"
import Guilds from "./Components/guilds"

const App = () => {
  websocketConnect()

  return <Guilds />
}

export default App
