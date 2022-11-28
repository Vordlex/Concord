export type guilds = {
  application_command_counts: application_command_counts
  channels: channels_type[]
  data_mode: string
  id: string
  joined_at: Date
  large: boolean
  lazy: boolean
  member_count: number
  premium_subscription_count: number
  emojis: emojis[]
  guild_scheduled_events: guild_scheduled_events_type[]
  properties: properties
  roles: roles[]
  stage_instances: stage_instances
  stickers: stickers[]
  threads: threads[]
}

type application_command_counts = {
  1: number | null
  2: number | null
  3: number | null
}
type permission_overwrites = {
  allow: string
  deny: string
  id: string
  type: number
}
type channels_type =
  | {
      bitrate: number
      flags: number
      id: string
      last_message_id: string
      name: string
      parent_id: string
      permission_overwrites: permission_overwrites[]
      position: number
      rate_limit_per_user: number
      rtc_region: string
      type: 2
      user_limit: number
    }
  | {
      flags: number
      id: string
      last_message_id: string
      last_pin_timestamp: Date
      name: string
      nsfw: boolean
      parent_id: string
      permission_overwrites: permission_overwrites[]
      position: number
      rate_limit_per_user: number
      topic: string | null
      type: 0
    }
  | {
      flags: number
      id: string
      name: string
      permission_overwrites: permission_overwrites[]
      position: number
      type: 4
    }
  | {
      flags: number
      id: string
      last_message_id: string
      name: string
      nsfw: boolean
      permission_overwrites: permission_overwrites[]
      parent_id: string
      position: number
      rate_limit_per_user: number
      topic: null | string
      type: 5
    }
type emojis = {
  animated: boolean
  available: boolean
  id: string
  managed: boolean
  name: string
  require_colons: boolean
  roles: Array<string>
}
type entity_metadata = {
  location: string | null
  speaker_ids: Array<string> | null
} | null

type guild_scheduled_events_type = {
  channel_id: null | string
  description: string
  entity_id: null
  entity_metadata: entity_metadata
  entity_type: number
  guild_id: string
  id: string
  image: null | string // not the url, it's the image id to fetch (I guess)
  name: string
  privacy_level: number
  scheduled_end_time: Date | null
  scheduled_start_time: Date
  sku_ids: Array<any>
  status: 2
}
type tags = {
  bot_id: string | null
}
type roles = {
  color: number
  flags: number
  hoist: false
  icon: null | string
  id: string
  managed: boolean
  mentionable: boolean
  name: string
  permissions: string
  position: number
  tags: tags
  unicode_emoji: null | string
}
type properties = {
  afk_channel_id: string
  afk_timeout: number
  application_id: null
  banner: null | string
  default_message_notifications: number
  description: null | string
  discovery_splash: null | string
  explicit_content_filter: number
  features: Array<string>
  hub_type: null
  icon: string
  id: string
  max_members: number
  max_stage_video_channel_users: number
  max_video_channel_users: number
  mfa_level: number
  name: string | null
  nsfw: boolean
  nsfw_level: number
  owner_id: string
  preferred_locale: string
  premium_progress_bar_enabled: boolean
  premium_tier: number
  public_updates_channel_id: string
  rules_channel_id: string
  safety_alerts_channel_id: null
  splash: null
  system_channel_flags: number
  system_channel_id: string
  vanity_url_code: null
  verification_level: number
}
type stage_instances = {
  channel_id: string
  discoverable_disabled: boolean
  guild_id: string
  guild_scheduled_event_id: null | string
  id: string
  invite_code: null | string
  privacy_level: number
  topic: string
}
type stickers = {
  asset: string
  available: boolean
  description: null | string
  format_type: 2
  guild_id: string
  id: string
  name: string
  tags: string
  type: 2
}
type thread_metadata = {
  locked: boolean
  create_timestamp: string
  auto_archive_duration: number
  archived: boolean
  archive_timestamp: string
}
type member = {
  muted: boolean
  mute_config: null
  join_timestamp: string
  flags: number
}
type threads = {
  applied_tags: Array<string>
  flags: number
  guild_id: string
  id: string
  last_message_id: string
  member: member
  member_count: number
  member_ids_preview: Array<string>
  message_count: number
  name: string
  owner_id: string
  parent_id: string
  rate_limit_per_user: number
  thread_metadata: thread_metadata
  total_message_sent: number
  type: number
}
