import { ready } from "./ready"
import { ready_supplemental } from "./ready_supplemental"

export type wsResponse = ready | ready_supplemental | { t: "UNDEFINED" }
