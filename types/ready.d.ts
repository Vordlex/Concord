import { activities } from "./generics/activities"
import { guilds } from "./generics/guilds"

export type ready = {
  d: {
    analytics_token: string
    api_code_version: number
    auth_session_id_hash: string
    country_code: string
    friend_suggestion_count: number
    resume_gateway_url: string
    session_id: string
    session_type: string
    tutorial: null
    user_settings_proto: string
    v: number
    connected_accounts: connected_accounts_type[]
    consents: consents
    experiments: Array<Array<number>>
    geo_ordered_rtc_regions: Array<string>
    guild_experiments: guild_experiments
    guild_join_requests: guild_join_requests[]
    guilds: guilds[]
    merged_members: merged_members
    private_channels: private_channels[]
    read_state: read_state
    relationships: relationships[]
    sessions: sessions[]
    user: user
    user_guild_settings: user_guild_settings
    users: users[]
    _trace: Array<string>
  }
  op: number
  s: number
  t: "READY"
}

export type users = {
  avatar: string
  bot: boolean
  discriminator: string
  id: string
  public_flags: number
  username: string
}

type user_guild_settings = {
  partial: boolean
  version: number
  entries: entries[]
}

type mute_config = {
  end_time: Date
  selected_time_window: number
}

type channel_overrides = {
  channel_id: string
  collapsed: boolean
  message_notifications: number
  mute_config: mute_config
  muted: boolean
}
type entries = {
  channel_overrides: channel_overrides[]
  flags: null
  guild_id: null | string
  hide_muted_channels: boolean
  message_notifications: number
  mobile_push: boolean
  mute_config: null
  mute_scheduled_events: boolean
  muted: boolean
  notify_highlights: number
  suppress_everyone: boolean
  suppress_roles: boolean
  version: number
}

type user = {
  accent_color: number
  avatar: string
  avatar_decoration: null | string
  banner: string
  banner_color: string
  bio: string
  desktop: boolean
  discriminator: string
  email: string
  flags: number
  id: string
  mfa_enabled: boolean
  mobile: boolean
  nsfw_allowed: boolean
  phone: string
  premium: boolean
  premium_type: number
  premium_usage_flags: number
  public_flags: number
  purchased_flags: number
  username: string
  verified: boolean
}

type assets = {
  large_image: string
  large_text: string
  small_image: string
  small_text: string
}
type timestamps = { start: number; end: null | number }
type client_info = { version: number; os: string; client: string }
type sessions = {
  active: boolean
  activities: activities[]
  client_info: client_info
  session_id: string
  status: string
}

export type relationships = {
  id: string
  nickname: null | string
  since?: Date
  type: 1 | 2 | 3 | 4 //1 is friend, 2 I blocked, 3 someone sent me a friend request, 4 I sent friend request
  user_id: string
}

type entries_read_state = {
  id: string
  last_message_id: string
  last_pin_timestamp: Date
  mention_count: number
}
type read_state = {
  partial: boolean
  version: number
  entries: entries_read_state
}

export type private_channels = {
  flags: number
  id: string
  last_message_id: string
  recipient_ids: Array<string>
  type: number
}

type merged_members = {
  avatar: null | string
  communication_disabled_until: null | Date
  deaf: boolean
  flags: number
  joined_at: Date
  mute: boolean
  nick: null | string
  pending: boolean
  premium_since: null | Date
  roles: Array<string>
  user_id: string
}

type guild_experiments = Array<null | null | Array<null | Array<
  Array<Array<Array<number | Array<{ s: number; e: number }>>> | null>
>>>

type guild_join_requests = {
  application_status: string
  created_at: Date
  guild_id: string
  id: string
  last_seen: null | Date
  rejection_reason: null | string
  user_id: string
}

type personalization = {
  consented: boolean
}
type consents = {
  personalization: personalization
}

type connected_accounts_type = {
  friend_sync: boolean
  id: string
  metadata_visibility: null
  name: string
  revoked: boolean
  show_activity: boolean
  two_way_link: boolean
  type: string
  verified: boolean
  visibility: number
}
