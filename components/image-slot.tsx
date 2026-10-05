import { ImageIcon } from "lucide-react"

/**
 * Shows the photo when `src` is set; otherwise a placeholder that states the image brief,
 * so whoever supplies photos can see exactly what each slot needs.
 */
export function ImageSlot({
  src,
  brief,
  alt,
  caption,
  tone = "light",
  place = "bottom-left",
  className = "",
  imgClassName = "",
}: {
  src: string | null
  brief: string
  alt: string
  caption: string
  tone?: "light" | "dark"
  /** Where the brief sits; the hero moves it clear of the headline */
  place?: "bottom-left" | "right"
  className?: string
  imgClassName?: string
}) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`w-full h-full object-cover ${imgClassName} ${className}`} />
  }

  const dark = tone === "dark"
  return (
    <div
      role="img"
      aria-label={`${caption}: ${brief}`}
      data-image-brief={brief}
      className={`relative w-full h-full flex flex-col p-5 ${
        place === "right" ? "justify-start items-end text-right pt-44 pr-8 md:pr-16" : "justify-end"
      } ${
        dark ? "bg-night-raised text-white/70" : "bg-mist text-ink-soft"
      } ${className}`}
      style={{
        backgroundImage: `repeating-linear-gradient(135deg, transparent 0 14px, ${
          dark ? "rgba(255,255,255,0.035)" : "rgba(16,27,51,0.045)"
        } 14px 15px)`,
      }}
    >
      <ImageIcon className="h-5 w-5 mb-3 opacity-60" aria-hidden />
      <span className="label text-sm opacity-70">{caption}</span>
      <span className={`label text-lg ${dark ? "text-white" : "text-ink"}`}>{brief}</span>
    </div>
  )
}
