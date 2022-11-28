import { useState } from "react"
import { users } from "../../../../types/ready"
import styles from "./LeftTab.module.css"

const UserIcon = ({
  avatar,
  bot,
  discriminator,
  id,
  public_flags,
  username,
  status,
}: users) => {
  const [imageFormat, setImageFormat] = useState("webp")

  var statusColor;

  if ( status === "online" ) statusColor = "#3ca05c"
  else if ( status === "idle" ) statusColor = "#f5b858"
  else if ( status === "dnd" ) statusColor = "#e84244"
  else if ( status === "invisible" ) statusColor = "#6d7784"
  else statusColor = "#6d7784"
  
  return (
    <div className={styles.userContainer}
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
      <div className={styles.status} style={{backgroundColor: statusColor}}></div>

    <div className={styles.userName}>{username}</div>      
    </div>
  )
}

export default UserIcon
