import { user } from "../../../../types/ready";
import styles from "./MiddleTab.module.css"

const Message = ( content: {content: string}, user:user ) => {
     return (
          <div className={styles.message} >
               { content.toString() }
          </div>
     )
}

export default Message;