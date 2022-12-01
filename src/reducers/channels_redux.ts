import { channel_type } from "../../types/generics/channel"

const initialState: channel_type[] = []

export const channels_redux = (
    state: channel_type[] = initialState,
    action: { type: string; data: channel_type[] }
): channel_type[] => {
    if (action.type === "GUILD_CHANNEL_FETCH") {
        return action.data
    }

    return state
}