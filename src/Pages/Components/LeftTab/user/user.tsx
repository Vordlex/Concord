import { useState } from "react"
import { connect } from "react-redux"
import fetchMessages from "../../../../functions/fetchMessages"
import { User_Status_Redux_Type } from "../../../../reducers/user_status_redux"
import styles from "../LeftTab.module.css"

const UserIcon = ({
  user_status_redux,
  avatar,
  id,
  username,
  channel_id,
}: {
  user_status_redux: User_Status_Redux_Type
  avatar: string
  id: string
  username: string
  channel_id: string
}): any => {
  const [imageFormat, setImageFormat] = useState("webp")

  // const statusColor = () => {
  //   if (status === "online") return "#3ba55d"
  //   if (status === "idle") return "#faa81a"
  //   if (status === "dnd") return "#ed4245"
  //   return "#747f8d"
  // }

  const statusIcon = () => {
    if (status === "online") {
      return (
        <svg
          style={{ width: "40px", height: "40px" }}
          id="Camada_1"
          data-name="Camada 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 65.56 65.56"
        >
          <circle fill="#3e9a59" cx="10" cy="10" r="10" />
        </svg>
      )
    }
    if (status === "idle") {
      return (
        <svg
          style={{ width: "40px", height: "40px" }}
          id="Camada_1"
          data-name="Camada 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 65.56 65.56"
          fill="#faa81a"
        >
          <path
            d="M20,10.1c0,5.5-4.5,10-10,10s-10-4.5-10-10c2.7,2.4,6.6,2.6,9.2,0.6c3.1-2.3,3.7-7.2,0.8-10.6
	C15.5,0.1,20,4.6,20,10.1z"
          />
        </svg>
      )
    }
    if (status === "dnd") {
      return (
        <svg
          style={{ width: "40px", height: "40px" }}
          id="Camada_1"
          data-name="Camada 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 65.56 65.56"
        >
          <circle fill="#c5474b" cx="10" cy="10" r="10" />
          <path
            fill="#2f3136"
            d="M5.7,7.9h8.6c1.1,0,2,0.9,2,2v0.2c0,1.1-0.9,2-2,2H5.7c-1.1,0-2-0.9-2-2V9.9C3.7,8.8,4.6,7.9,5.7,7.9z"
          />
        </svg>
      )
    }
    return (
      <svg
        style={{ width: "40px", height: "40px", background: "#2f3136" }}
        version="1.1"
        id="Camada_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 65.56 65.56"
      >
        <style type="text/css"></style>
        <circle fill="#727D8A" cx="10" cy="10" r="10" />
        <circle cx="10" cy="10" r="5" fill="#2f3136"></circle>
      </svg>
    )
  }

  const status = user_status_redux[id]

  return (
    <div
      className={styles.userContainer}
      onClick={() => {
        fetchMessages(channel_id)
      }}
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
        <div className={styles.status}>{statusIcon()}</div>
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
