import { connect } from "react-redux"
import { messages } from "../../../../types/messages_type"
import styles from "./MiddleTab.module.css"
import Message from "./message"

const MiddleTab = ({ messages_redux }: { messages_redux: messages[] }) => {
  return (
    <div className={styles.main}>
      {
        messages_redux.reverse().map((message) => {
          return (
            <Message />
          )
        })
      }
    </div>
  )
}

const mapStateToProps = ({
  messages_redux,
}: {
  messages_redux: messages[]
}) => {
  return {
    messages_redux,
  }
}

export default connect(mapStateToProps)(MiddleTab)
