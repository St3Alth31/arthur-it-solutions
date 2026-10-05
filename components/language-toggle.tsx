"use client"

import { copy, type Lang } from "@/content/copy"
import { useLanguage } from "@/components/language-provider"

const langs = Object.keys(copy) as Lang[]

/** Two-way switch between English and Chichewa. `tone` matches the surface it sits on. */
export function LanguageToggle({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const { lang, setLang } = useLanguage()
  const idle = tone === "dark" ? "text-white/60 hover:text-white" : "text-ink-soft hover:text-ink"
  const active = tone === "dark" ? "text-white border-primary" : "text-ink border-primary"

  return (
    <div role="group" aria-label="Language" className={`flex items-center gap-5 ${className}`}>
      {langs.map((code) => (
        <button
          key={code}
          type="button"
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className={`label pb-0.5 border-b-2 transition-colors duration-300 ${
            lang === code ? active : `border-transparent ${idle}`
          }`}
        >
          {copy[code].langName}
        </button>
      ))}
    </div>
  )
}
