import { connect } from "react-redux"
import { stateType } from "../../../reducers/websocket_reducers"
import styles from "./LeftTab.module.css"

const LeftTab = (...props: any) => {
  const {
    websocket_redux,
  }: {
    websocket_redux: stateType
  } = props[0]

  console.log(websocket_redux)

  return (
    <div className={styles.main}>
      {websocket_redux.relationships.map((relationship) => {
        return <div key={relationship.id}>{relationship.id}</div>
      })}
    </div>
  )
}

const mapStateToProps = (state: stateType) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(LeftTab)
