import { useState } from "react"

const InputText = (...props: Array<{ channel: string }>) => {
  const [value, setValue] = useState("")

  const channel = props[0].channel

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          fetch(`https://discord.com/api/v9/channels/${channel}/messages`, {
            headers: {
              accept: "*/*",
              "accept-language": "pt-BR",
              authorization: process.env.REACT_APP_DISCORD_TOKEN as string,
              "content-type": "application/json",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
            },
            referrerPolicy: "strict-origin-when-cross-origin",
            body: JSON.stringify({ content: value }),
            method: "POST",
            mode: "cors",
            credentials: "include",
          })
          setValue("")
        }}
      >
        <input
          onChange={(e) => {
            setValue(e.target.value)
          }}
          value={value}
        />
      </form>
    </div>
  )
}

export default InputText
