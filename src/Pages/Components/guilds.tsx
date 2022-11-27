import { useEffect } from "react"
import { connect } from "react-redux"
import { ready } from "../../../types/ready"

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
    <div>
      {websocket_redux.d?.guilds.map((guild) => {
        return <div key={guild.id}>{guild.properties.name}</div>
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
