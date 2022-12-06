import { useState } from "react"
import styles from "./InputText.module.css"

const InputText = (...props: Array<{ channel: string }>) => {
  const [value, setValue] = useState("")
  const [cantSend, setCantSend] = useState(true)

  const channel = props[0].channel

  return (
    <div className={styles.main}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault()
          if(!cantSend){
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
            setCantSend(true)
            setValue("")
          }
        }}
      >
        <input
          onChange={(e) => {
            setValue(e.target.value)
            if (e.target.value != ""){ setCantSend(false); return }
            setCantSend(true)
          }}
          value={value}
          className={styles.input}
        />
        <button disabled={cantSend} type="submit" className={styles.send}>
          <svg 
            aria-hidden="true"
            role="img"width="16" 
            height="16" 
            viewBox="0 0 16 16"
          >
            <path 
              d="M8.2738 8.49222L1.99997 9.09877L0.349029 14.3788C0.250591 14.691 0.347154 15.0322 0.595581 15.246C0.843069 15.4597 1.19464 15.5047 1.48903 15.3613L15.2384 8.7032C15.5075 8.57195 15.6781 8.29914 15.6781 8.00007C15.6781 7.70101 15.5074 7.4282 15.2384 7.29694L1.49839 0.634063C1.20401 0.490625 0.852453 0.535625 0.604941 0.749376C0.356493 0.963128 0.259941 1.30344 0.358389 1.61563L2.00932 6.89563L8.27093 7.50312C8.52405 7.52843 8.71718 7.74125 8.71718 7.99531C8.71718 8.24938 8.52406 8.46218 8.27093 8.4875L8.2738 8.49222Z" 
              fill="currentColor"></path>
          </svg>
        </button>
      </form>
    </div>
  )
}

export default InputText
