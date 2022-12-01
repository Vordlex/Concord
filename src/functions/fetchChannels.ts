import store from "../store"


export const fetchChannels = async (guildId: string) => {
    try {
        const channels: { code: 50001; message: "Missing Access" } | null = await (
            await fetch(
                `https://discord.com/api/v9/guild/${guildId}/channels`,
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
        if (channels === null) return ""
        if (channels.code === 50001) return ""

        store.dispatch({
            type: "GUILD_CHANNEL_FETCH",
            data: channels
        })
    } catch (error) {
        console.error(error)
    }
}