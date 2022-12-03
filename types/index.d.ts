import { ready } from "./ready"
import { ready_supplemental } from "./ready_supplemental"
import { sessions_replace } from "./sessions_replace"
import { message_create } from "./message_create"
import { presence_update } from "./presence_update"
import { guild_ban_add } from "./guild_ban_add"
import { guilds_integrations_update } from "./guilds_integrations_update"
import { guild_join_request_create } from "./guild_join_request_create"
import { guild_create } from "./guild_create"
import { message_reaction_add } from "./message_reaction_add"
import { message_reaction_remove } from "./message_reaction_remove"
import { message_delete } from "./message_delete"
import { embedded_activity_update } from "./embedded_activity_update"
import { relationship_add } from "./relationship_add"
import { relationship_remove } from "./relationship_remove"
import { channel_update } from "./channel_update"
import { message_ack } from "./message_ack"
import { notification_center_item_create } from "./notification_center_item_create"
import { switch_to_friend } from "./switch_to_friend"

export type wsResponse =
  | ready
  | ready_supplemental
  | sessions_replace
  | message_create
  | presence_update
  | guild_ban_add
  | guilds_integrations_update
  | guild_join_request_create
  | guild_create
  | message_reaction_add
  | message_reaction_remove
  | message_delete
  | embedded_activity_update
  | relationship_add
  | relationship_remove
  | channel_update
  | message_ack
  | notification_center_item_create
  | switch_to_friend
  | { t: "UNDEFINED" }
