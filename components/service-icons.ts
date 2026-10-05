import { ArrowLeftRight, Cctv, Fence, Fingerprint, Flame, Sun, type LucideIcon } from "lucide-react"
import type { ServiceKey } from "@/content/site"

export const serviceIcons: Record<ServiceKey, LucideIcon> = {
  cctv: Cctv,
  access: Fingerprint,
  gate: ArrowLeftRight,
  fire: Flame,
  fence: Fence,
  power: Sun,
}
