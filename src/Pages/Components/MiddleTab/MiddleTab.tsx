import { connect } from "react-redux"
import { messages } from "../../../../types/messages_type"
import styles from "./MiddleTab.module.css"
import Message from "./Message/message"
import InputText from "./Input/InputText"

const MiddleTab = ({ messages_redux }: { messages_redux: messages[] }) => {
  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        {messages_redux.reverse().map((message) => {
          return <Message message={message} key={message.id} />
        })}
      </div>
      {messages_redux.length === 0 ? (
        ""
      ) : (
        <InputText channel={messages_redux[0].channel_id} />
      )}
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
