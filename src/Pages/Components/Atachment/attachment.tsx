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
                         <div className={styles.imageDiv}
                              style={{
                                   maxWidth: width < 400 ? `${width}px` : `400px`,
                                   maxHeight: height < 400 ? `${height}px` : `400px` 
                              }}
                         >
                              <img src={url} alt={filename} className={styles.image}
                                   style={{
                                        maxWidth: width < 400 ? `${width}px` : `400px`,
                                        maxHeight: height < 400 ? `${height}px` : `400px` 
                                   }}
                              />
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