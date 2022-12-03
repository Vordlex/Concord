import { connect } from "react-redux"
import { Websocket_Reducers_Type } from "../../../reducers/websocket_redux"
import styles from "./LeftTab.module.css"
import UserIcon from "./user/user"
import Channel from "./channel/channel"

const LeftTab = (...props: any) => {
  const {
    websocket_redux,
  }: {
    websocket_redux: Websocket_Reducers_Type
  } = props[0]

  return (
    <div className={styles.main}>
      {
        websocket_redux.LeftTabContent === "FRIENDS" ? websocket_redux.private_channels
            .map((dm) => {
              const user = websocket_redux.users
                .reverse()
                .find((user) => user.id === dm.recipient_ids[0])
              if (user) {
                // if (user.bot === true) return ""
                return (
                  <UserIcon
                    avatar={user.avatar}
                    id={user.id}
                    username={user.username}
                    channel_id={dm.id}
                    key={dm.id}
                  />
                )
              }
              return ""
            })
            .reverse()

        : websocket_redux.selected_guild_channels.map((channel) => {
            return <Channel 
              name={channel.name} 
              type={channel.type}
              key={channel.id}
            />
          })}
    </div>
  )
}

const mapStateToProps = ({
  websocket_redux,
}: {
  websocket_redux: Websocket_Reducers_Type
}) => {
  return {
    websocket_redux,
  }
}

export default connect(mapStateToProps)(LeftTab)
