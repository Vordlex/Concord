import styles from "./MiddleTab.module.css"
import { useState } from "react"

const Message = () => {
     const [imageFormat, setImageFormat] = useState("webp")

     return (
          <div className={styles.message}
               /*
                    onMouseEnter={() => {
                         if (!avatar.startsWith("a_")) return
                         setImageFormat("gif")
                    }}
                    onMouseLeave={() => {
                         if (!avatar.startsWith("a_")) return
                         setImageFormat("webp")
                    }}
               */
          >
               <div>
                    <img
                         className={styles.icon}
                         //src={`https://cdn.discordapp.com/avatars/${authorId}/${avatar}.webp?size=80`} //${imageFormat}
                         width="48"
                         height="48"
                         alt=""
                    />
               </div>
               <div>
                    <div></div>
                    <div></div>
               </div>
          </div>
     )
}

export default Message;