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

  const statusColor = () => {
    if (status === "online") return "#3ba55d"
    if (status === "idle") return "#faa81a"
    if (status === "dnd") return "#ed4245"
    return "#747f8d"
  }

  const status = user_status_redux[id]

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
      <div className={styles.imgContainer}>
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
          style={{ backgroundColor: statusColor() }}
        ></div>
      </div>

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
