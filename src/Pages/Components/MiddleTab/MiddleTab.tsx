import { connect } from "react-redux"
import { messages } from "../../../../types/messages_type"
import style from "./MiddleTab.module.css"

const MiddleTab = ({ messages_redux }: { messages_redux: messages[] }) => {
  return (
    <div className={style.main}>
      {messages_redux.reverse().map((message) => {
        return <div className={style.messageStyle}>{message.content}</div>
      })}
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
