import { useState } from "react"
import { connect } from "react-redux"
import { User_Status_Redux_Type } from "../../../reducers/user_status_redux"
import styles from "./LeftTab.module.css"

const UserIcon = ({
  user_status_redux,
  avatar,
  id,
  username,
}: {
  user_status_redux: User_Status_Redux_Type
  avatar: string
  id: string
  username: string
}): any => {
  const [imageFormat, setImageFormat] = useState("webp")

  let statusColor

  const status = user_status_redux[id]

  console.log(user_status_redux)

  if (status === "online") statusColor = "#3ca05c"
  else if (status === "idle") statusColor = "#f5b858"
  else if (status === "dnd") statusColor = "#e84244"
  else statusColor = "#6d7784"
  return (
    <div
      className={styles.userContainer}
      onMouseEnter={() => {
        if (!avatar.startsWith("a_")) return
        setImageFormat("gif")
      }}
      onMouseLeave={() => {
        if (!avatar.startsWith("a_")) return
        setImageFormat("webp")
      }}
    >
      <img
        className={styles.icon}
        src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.${imageFormat}?size=80`}
        title={username.toString()}
        width="48"
        height="48"
        alt=""
      />
      <div
        className={styles.status}
        style={{ backgroundColor: statusColor }}
      ></div>

      <div className={styles.userName}>{username}</div>
    </div>
  )
}

const mapStateToProps = ({
  user_status_redux,
}: {
  user_status_redux: User_Status_Redux_Type
}) => {
  return {
    user_status_redux,
  }
}

export default connect(mapStateToProps)(UserIcon)
