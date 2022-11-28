export type activities = {
  application_id: string
  assets: {
    large_image: string
    large_text: string
    small_image: string
    small_text: string
  }
  buttons: Array<string>
  created_at: number
  details: string
  id: string
  name: string
  session_id: string
  state: string
  timestamps: { start: number | null; end: number | null }
  type: number
}
