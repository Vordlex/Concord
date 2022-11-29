import { messages } from "../../types/messages_type"
import store from "../store"

const fetchMessages = async (channelId: string) => {
  try {
    const messages: messages[] | null = await (
      await fetch(
        `https://discord.com/api/v9/channels/${channelId}/messages?limit=50`,
        {
          headers: {
            accept: "*/*",
            authorization: process.env.REACT_APP_DISCORD_TOKEN as string,
          },
          referrer: "https://discord.com/channels/@me",
          referrerPolicy: "strict-origin-when-cross-origin",
          body: null,
          method: "GET",
          mode: "cors",
          credentials: "include",
        }
      )
    )
      .json()
      .catch(console.log)

    if (messages === null) {
      return ""
    }

    store.dispatch({
      type: "CHANNEL_FETCH",
      data: messages,
    })
  } catch (error) {
    console.log(error)
  }
}

export default fetchMessages
