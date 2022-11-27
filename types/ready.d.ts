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
      consents: {
        personalization: {
          consented: boolean
        }
      }
      experiments: Array<Array<number>>
      geo_ordered_rtc_regions: Array<string>
      guild_experiments: Array<null | null | Array<null | Array<
        Array<Array<Array<number | Array<{ s: number; e: number }>>> | null>
      >>>
      guild_join_requests: Array<{
        application_status: string
        created_at: Date
        guild_id: string
        id: string
        last_seen: null | Date
        rejection_reason: null | string
        user_id: string
      }>
      guilds: Array<{
        application_command_counts: {
          1: number | null
          2: number | null
          3: number | null
        }
        channels: channels_type[]
        data_mode: string
        id: string
        joined_at: Date
        large: boolean
        lazy: boolean
        member_count: number
        premium_subscription_count: number
        emojis: Array<{
          animated: boolean
          available: boolean
          id: string
          managed: boolean
          name: string
          require_colons: boolean
          roles: Array<string>
        }>
        guild_scheduled_events: guild_scheduled_events_type
        properties: {
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
        roles: Array<{
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
          tags: { bot_id: string | null }
          unicode_emoji: null | string
        }>
        stage_instances: Array<{
          channel_id: string
          discoverable_disabled: boolean
          guild_id: string
          guild_scheduled_event_id: null | string
          id: string
          invite_code: null | string
          privacy_level: number
          topic: string
        }>
        stickers: Array<{
          asset: string
          available: boolean
          description: null | string
          format_type: 2
          guild_id: string
          id: string
          name: string
          tags: string
          type: 2
        }>
        threads: Array<{
          applied_tags: Array<string>
          flags: number
          guild_id: string
          id: string
          last_message_id: string
          member: {
            muted: boolean
            mute_config: null
            join_timestamp: string
            flags: number
          }
          member_count: number
          member_ids_preview: Array<string>
          message_count: number
          name: string
          owner_id: string
          parent_id: string
          rate_limit_per_user: number
          thread_metadata: {
            locked: boolean
            create_timestamp: string
            auto_archive_duration: number
            archived: boolean
            archive_timestamp: string
          }
          total_message_sent: number
          type: number
        }>
      }>
      merged_members: Array<{
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
      }>
      private_channels: Array<{
        flags: number
        id: string
        last_message_id: string
        recipient_ids: Array<string>
        type: number
      }>
      read_state: {
        partial: boolean
        version: number
        entries: Array<{
          id: string
          last_message_id: string
          last_pin_timestamp: Date
          mention_count: number
        }>
      }
      relationships: Array<{
        id: string
        nickname: null | string
        type: number
        user_id: string
      }>
      sessions: Array<{
        active: boolean
        activities: Array<{
          application_id: string
          assets: {
            large_image: string
            large_text: string
            small_image: string
            small_text: string
          }
          created_at: 1669497636334
          details: string
          id: string
          name: string
          state: string
          timestamps: { start: number; end: null | number }
          type: number
        }>
        client_info: { version: number; os: string; client: string }
        session_id: string
        status: string
      }>
      user: {
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
      user_guild_settings: {
        partial: boolean
        version: number
        entries: Array<{
          channel_overrides: Array<{
            channel_id: string
            collapsed: boolean
            message_notifications: number
            mute_config: {
              end_time: Date
              selected_time_window: number
            }
            muted: boolean
          }>
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
        }>
      }
      users: Array<{
        avatar: string
        bot: boolean
        discriminator: string
        id: string
        public_flags: number
        username: string
      }>
      _trace: Array<string>
    }
    op: number
    s: number
    t: "READY"
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
  
  type channels_type =
    | {
        bitrate: number
        flags: number
        id: string
        last_message_id: string
        name: string
        parent_id: string
        permission_overwrites: Array<{
          allow: string
          deny: string
          id: string
          type: number
        }>
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
        permission_overwrites: Array<{
          allow: string
          deny: string
          id: string
          type: number
        }>
        position: number
        rate_limit_per_user: number
        topic: string | null
        type: 0
      }
    | {
        flags: number
        id: string
        name: string
        permission_overwrites: Array<{
          allow: string
          deny: string
          id: string
          type: number
        }>
        position: number
        type: 4
      }
    | {
        flags: number
        id: string
        last_message_id: string
        name: string
        nsfw: boolean
        permission_overwrites: Array<{
          allow: string
          deny: string
          id: string
          type: number
        }>
        parent_id: string
        position: number
        rate_limit_per_user: number
        topic: null | string
        type: 5
      }
  
  type guild_scheduled_events_type = {
    channel_id: null | string
    description: string
    entity_id: null
    entity_metadata: {
      location: string | null
      speaker_ids: Array<string> | null
    } | null
    entity_type: number
    guild_id: string
    id: string
    image: null | string // não é o url, é o id pra dar fetch creio eu
    name: string
    privacy_level: number
    scheduled_end_time: Date | null
    scheduled_start_time: Date
    sku_ids: Array<any>
    status: 2
  }
  