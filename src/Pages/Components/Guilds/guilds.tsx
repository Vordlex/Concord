import { connect } from "react-redux"
import fetchMessages from "../../../functions/fetchMessages"
import { Websocket_Reducers_Type } from "../../../reducers/websocket_redux"
import store from "../../../store"
import styles from "./guilds.module.css"
import ServerIcon from "./serverIcon"

const Guilds = (...props: any) => {
  const {
    websocket_redux,
  }: {
    websocket_redux: Websocket_Reducers_Type
  } = props[0]

  return (
    <div className={styles.guilds}>
      <div
        className={styles.discordIcon}
        onClick={() => {
          store.dispatch({
            type: "SWITCH_CHANNEL_TO_FRIEND",
          })
        }}
      >
        <svg
          aria-hidden="true"
          role="img"
          width="28"
          height="20"
          viewBox="0 0 28 20"
        >
          <path
            fill="currentColor"
            d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"
          ></path>
        </svg>
      </div>
      <div className={styles.dirToGuildsSepatator} />
      <div className={styles.barContent}>
        <div className={styles.guildsContainer}>
          {websocket_redux.guilds.map((guild) => {
            return (
              <div
                key={guild.id}
                onClick={() => {
                  fetchMessages(guild.channels[0].id)
                  store.dispatch({
                    type: "SWITCH_FRIEND_TO_CHANNEL",
                    data: {
                      d: guild.id,
                      t: "SWITCH_FRIEND_TO_CHANNEL",
                    },
                  })
                }}
              >
                <ServerIcon guild={guild} />
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.menuButtonBackground}>
        <div className={styles.menuButton}>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 210 210"
            fill="white"
          >
            <g id="XMLID_16_">
              <path
                id="XMLID_17_"
                d="M195,0h-20c-8.284,0-15,6.716-15,15v20c0,8.284,6.716,15,15,15h20c8.284,0,15-6.716,15-15V15 C210,6.716,203.284,0,195,0z"
              />
              <path
                id="XMLID_18_"
                d="M115,0H95c-8.284,0-15,6.716-15,15v20c0,8.284,6.716,15,15,15h20c8.284,0,15-6.716,15-15V15 C130,6.716,123.284,0,115,0z"
              />
              <path
                id="XMLID_19_"
                d="M35,0H15C6.716,0,0,6.716,0,15v20c0,8.284,6.716,15,15,15h20c8.284,0,15-6.716,15-15V15 C50,6.716,43.284,0,35,0z"
              />
              <path
                id="XMLID_20_"
                d="M195,160h-20c-8.284,0-15,6.716-15,15v20c0,8.284,6.716,15,15,15h20c8.284,0,15-6.716,15-15v-20 C210,166.716,203.284,160,195,160z"
              />
              <path
                id="XMLID_21_"
                d="M115,160H95c-8.284,0-15,6.716-15,15v20c0,8.284,6.716,15,15,15h20c8.284,0,15-6.716,15-15v-20 C130,166.716,123.284,160,115,160z"
              />
              <path
                id="XMLID_22_"
                d="M35,160H15c-8.284,0-15,6.716-15,15v20c0,8.284,6.716,15,15,15h20c8.284,0,15-6.716,15-15v-20 C50,166.716,43.284,160,35,160z"
              />
              <path
                id="XMLID_23_"
                d="M195,80h-20c-8.284,0-15,6.716-15,15v20c0,8.284,6.716,15,15,15h20c8.284,0,15-6.716,15-15V95 C210,86.716,203.284,80,195,80z"
              />
              <path
                id="XMLID_24_"
                d="M115,80H95c-8.284,0-15,6.716-15,15v20c0,8.284,6.716,15,15,15h20c8.284,0,15-6.716,15-15V95 C130,86.716,123.284,80,115,80z"
              />
              <path
                id="XMLID_25_"
                d="M35,80H15C6.716,80,0,86.716,0,95v20c0,8.284,6.716,15,15,15h20c8.284,0,15-6.716,15-15V95 C50,86.716,43.284,80,35,80z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: Websocket_Reducers_Type) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(Guilds)
