import { wsResponse } from "../../types"
import store from "../store"
import asyncTimeout from "./asyncTimeout"

const websocketConnect = (): any => {
  const client = new WebSocket("wss://gateway.discord.gg/?encoding=json&v=9")

  client.onopen = (connection) => {
    client.send(
      JSON.stringify({
        op: 2,
        d: {
          token: process.env.REACT_APP_DISCORD_TOKEN,
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
    client.send(
      JSON.stringify({
        op: 4,
        d: {
          guild_id: null,
          channel_id: null,
          self_mute: true,
          self_deaf: false,
          self_video: false,
        },
      })
    )

    const keepAlive = async (d: number = 6) => {
      console.log(client.readyState, client.CLOSED)

      if (client.CLOSED === client.readyState) {
        websocketConnect()
        return
      }
      await asyncTimeout(1000 * 20)

      // console.log("keep alive")

      client.send(JSON.stringify({ op: 1, d }))

      keepAlive(d + 40)
    }
    keepAlive()
  }
  client.onmessage = async (event) => {
    const data = JSON.parse(event.data) as wsResponse
    console.log(data)
    store.dispatch({ type: data.t, data: data })

    switch (data.t) {
      case "READY_SUPPLEMENTAL": {
        data.d.merged_presences.guilds.forEach((guildsArray) => {
          guildsArray.forEach((guild) => {
            store.dispatch({
              type: "PRESENCE_UPDATE",
              data: {
                d: {
                  status: guild.status,
                  user: {
                    id: guild.user_id,
                  },
                },
              },
            })
          })
        })
        break
      }
      default:
        break
    }
  }
}
export default websocketConnect
