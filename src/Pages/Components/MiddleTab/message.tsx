import styles from "./message.module.css";
import { useState } from "react";
import Embed from "../Embed/embed";
import { embed_create } from "../../../../types/embed_create"
import { attachments } from "../../../../types/generics/message";
import Attachment from "../Atachment/attachment";

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
              <div>
              {
                message.message.embeds.map( (embed: embed_create) => {
                  console.log(embed);
                  
                  return (
                    <Embed
                      key={message.id}
                      author={embed.author}
                      title={embed.title}
                      description={embed.description}
                      thumbnail={embed.thumbnail}
                      image={embed.image}
                      video={embed.video}
                      url={embed.url}
                      type={embed.type}
                      provider={embed.provider}
                      />
                  );
                })
              }
              {
                message.message.attachments.map (( attachment: attachments ) => {
                  return (
                    <Attachment 
                      content_type={attachment.content_type}
                      filename={attachment.filename}
                      height={attachment.height}
                      width={attachment.width}
                      id={attachment.id}
                      proxy_url={attachment.proxy_url}
                      size={attachment.size}
                      url={attachment.url}
                      key={attachment.id}
                    />
                  )
                })  
              }
              </div>
          </div>
      </div>
      
    </div>
  );
};

export default Message;