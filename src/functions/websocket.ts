import { wsResponse } from "../../types"
import store from "../store"

const websocketConnect = (): any => {
  const client = new WebSocket("wss://gateway.discord.gg/?encoding=json&v=9")

  client.onopen = (connection) => {
    client.send(
      JSON.stringify({
        op: 2,
        d: {
          token: process.env.REACT_APP_TOKEN, //<<< TOKEN HERE
          capabilities: 4093,
          properties: {
            os: "Windows",
            browser: "Chrome",
            device: "",
            system_locale: "pt-BR",
            browser_user_agent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
            browser_version: "107.0.0.0",
            os_version: "10",
            referrer: "",
            referring_domain: "",
            referrer_current: "",
            referring_domain_current: "",
            release_channel: "stable",
            client_build_number: 160645,
            client_event_source: null,
          },
          presence: {
            status: "online",
            since: 0,
            activities: [],
            afk: false,
          },
          compress: false,
          client_state: {
            guild_versions: {},
            highest_last_message_id: "0",
            read_state_version: 0,
            user_guild_settings_version: -1,
            user_settings_version: -1,
            private_channels_version: "0",
            api_code_version: 0,
          },
        },
      })
    )
  }
  client.onmessage = async (event) => {
    const data = JSON.parse(event.data) as wsResponse

    switch (data.t) {
      case "READY": {
        store.dispatch({ type: "READY", data: data })
        break
      }
      case "READY_SUPPLEMENTAL":
        break
      default:
        // console.log(data.t)
        break
    }
  }
}
export default websocketConnect
