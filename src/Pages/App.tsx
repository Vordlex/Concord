import { connect } from "react-redux"
import { Websocket_Reducers_Type } from "../reducers/websocket_reducers"
import "./App.css"
import Guilds from "./Components/Guilds/guilds"
import LeftTab from "./Components/LeftTab/LeftTab"

const App = (...props: any) => {
  const {
    websocket_redux,
  }: {
    websocket_redux: Websocket_Reducers_Type
  } = props[0]
  return (
    <div>
      <Guilds />
      {websocket_redux.LeftTabEnabled === true ? <LeftTab /> : ""}
    </div>
  )
}

const mapStateToProps = (state: Websocket_Reducers_Type) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(App)
