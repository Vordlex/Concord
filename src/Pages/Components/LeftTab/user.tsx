import { useState } from "react"
import { users } from "../../../../types/ready"
import styles from "./LeftTab.module.css"
import { status } from "../../../../types/generics/status"

const UserIcon = ({
  avatar,
  bot,
  discriminator,
  id,
  public_flags,
  username,
}: users) => {
  const [imageFormat, setImageFormat] = useState("webp")

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
      <div className={styles.status} ></div>

    <div className={styles.userName} >{username}</div>      
    </div>
  )
}

export default UserIcon
