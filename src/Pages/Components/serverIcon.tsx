import { useState } from "react"
import styles from "./guilds.module.css"

const ServerIcon = ( props: any ) => {
    
    const [imageFormat, setImageFormat] = useState("webp")

    return (
        <img
            className={styles.icons}
            
            src={`https://cdn.discordapp.com/icons/${props.guild.id}/${props.guild.properties.icon}.${imageFormat}?size=240`}
            title={props.guild.properties.name || ""}
            width="48"
            height="48"
            alt=""
            onMouseEnter={ () => {
            setImageFormat("gif")
            console.log(imageFormat)
            }}
            onMouseLeave={ () => {
            setImageFormat("webp")
            console.log(imageFormat)
            } }
        />
    )

}

export default ServerIcon