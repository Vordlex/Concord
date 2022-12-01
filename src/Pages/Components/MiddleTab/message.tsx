import styles from "./message.module.css";
import { useState } from "react";
import Embed from "../Embed/embed";

const Message = (message: any) => {
  const [imageFormat, setImageFormat] = useState("webp");
     console.log(message)
  return (
    <div
      className={styles.message}
      onMouseEnter={() => {
        if (!message.message.author.avatar.startsWith("a_")) return;
        setImageFormat("gif");
      }}
      onMouseLeave={() => {
        if (!message.message.author.avatar.startsWith("a_")) return;
        setImageFormat("webp");
      }}
    >
      <div>
        <img
          className={styles.icon}
          src={`https://cdn.discordapp.com/avatars/${message.message.author.id}/${message.message.author.avatar}.${imageFormat}?size=80`} //${imageFormat}
          width="48"
          height="48"
          alt=""
        />
      </div>
      <div>
          <div className={styles.author}>
               <span style={{textAlign: "left"}}>{ message.message.author.username }</span>
          </div>
          <div className={styles.content}>
              {message.message.content}
              {
                message.message.embeds.map( (embed:any) => {
                  console.log(embed)
                  return(
                    <Embed></Embed> 
                  )
                })
              }
          </div>
      </div>
      
    </div>
  );
};

export default Message;