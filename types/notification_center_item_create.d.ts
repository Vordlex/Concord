export type notification_center_item_create = {
  d: {
    acked: boolean
    body: string //"**Vordlex** aceitou seu pedido de amizade."
    bundle_id: string
    completed: boolean
    deeplink: string //"https://discord.com/users/769618105990643803"
    icon_url: string
    id: string
    item_enum: null
  }
  op: number
  s: number
  t: "NOTIFICATION_CENTER_ITEM_CREATE"
}
