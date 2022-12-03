import styles from "./attachment.module.css"
import { attachments } from "../../../../types/generics/message"

const Atachment = ({
     content_type,
     filename,
     height,
     width,
     id,
     proxy_url,
     size,
     url,
}: attachments) => {
     return (
          <>
               {
                    content_type.startsWith("image") ? (
                         <div>
                              <img src={url} alt={filename} className={styles.image}/>
                         </div>
                    ) : ("")
               }
               {
                    content_type.startsWith("audio") ? (
                         <div>
                              <audio src={url} controls autoPlay key={id}/>
                         </div>
                    ) : ("")
               }
          </>
     ) 
}

export default Atachment