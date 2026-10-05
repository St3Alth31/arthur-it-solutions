import { site } from "@/content/site"

/** Text wordmark. This is the brand mark: there is no logo file. */
export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-baseline gap-2 leading-none">
      <span
        className={`font-display font-black uppercase text-[1.9rem] tracking-[0.01em] ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {site.shortName}
      </span>
      <span className="label text-sm text-primary">{site.suffix}</span>
    </span>
  )
}
