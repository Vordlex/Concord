import { useEffect } from "react"
import { connect } from "react-redux"
import { ready } from "../../../types/ready"
import "./guilds.css"

const Guilds = (...props: any) => {
  const {
    dispatch,
    websocket_redux,
  }: {
    dispatch: any
    websocket_redux: ready
  } = props[0]
  useEffect(() => {
    // dispatch({
    //   action: "READY",
    //   values: { d: { guilds: [{ name: "pintoo" }] } },
    // })
  }, [])

  // return <div></div>

  return (
    <div className="guilds">
      {websocket_redux.d?.guilds.map((guild) => {
        return (
          <div key={guild.id}>
            <img
              className="icons"
              src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.properties.icon}.webp?size=240`}
              title={guild.properties.name || ""}
              width="48"
              height="48"
              alt=""
            />
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(Guilds)
