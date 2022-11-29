import { connect } from "react-redux"
import { Websocket_Reducers_Type } from "../reducers/websocket_redux"
import "./App.css"
import Guilds from "./Components/Guilds/guilds"
import LeftTab from "./Components/LeftTab/LeftTab"
import MiddleTab from "./Components/MiddleTab/MiddleTab"
const App = (...props: any) => {
  const {
    websocket_redux,
  }: {
    websocket_redux: Websocket_Reducers_Type
  } = props[0]
  return (
    <div>
      <Guilds />
      <div style={{ display: "flex", flexDirection: "row" }}>
        {websocket_redux.LeftTabEnabled === true ? <LeftTab /> : ""}
        <MiddleTab />
      </div>
    </div>
  )
}

const mapStateToProps = (state: Websocket_Reducers_Type) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(App)
