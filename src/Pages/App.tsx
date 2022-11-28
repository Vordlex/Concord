import { connect } from "react-redux"
import { stateType } from "../reducers/websocket_reducers"
import "./App.css"
import Guilds from "./Components/Guilds/guilds"
import LeftTab from "./Components/LeftTab/LeftTab"

const App = (...props: any) => {
  const {
    websocket_redux,
  }: {
    websocket_redux: stateType
  } = props[0]
  return (
    <div>
      <Guilds />
      {websocket_redux.LeftTabEnabled === true ? <LeftTab /> : ""}
    </div>
  )
}

const mapStateToProps = (state: stateType) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(App)
