import styles from "./message.module.css";
import { useState } from "react";

const Message = (message: any) => {
  const [imageFormat, setImageFormat] = useState("webp");

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
      <div>{message.message.content}</div>
    </div>
  );
};

export default Message;
