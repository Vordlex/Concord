import { connect } from "react-redux"
import { stateType } from "../../../reducers/websocket_reducers"
import styles from "./LeftTab.module.css"
import UserIcon from "./user"

const LeftTab = (...props: any) => {
  const {
    websocket_redux,
  }: {
    websocket_redux: stateType
  } = props[0]

  console.log(websocket_redux)

  return (
    <div className={styles.main}>
      {websocket_redux.private_channels.reverse().map((dm) => {
        const user = websocket_redux.users.find(
          (user) => user.id === dm.recipient_ids[0]
        )
        if (user) {
          if (user.bot === true) return ""
          return (
            <UserIcon
              id={user.id}
              username={user.username}
              avatar={user.avatar}
              bot={user.bot}
              discriminator={user.discriminator}
              public_flags={user.public_flags}
            />
          )
        }
        return ""
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
