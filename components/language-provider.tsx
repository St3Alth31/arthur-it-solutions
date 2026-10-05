"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { copy, type Copy, type Lang } from "@/content/copy"

const STORAGE_KEY = "arthur-lang"

type LanguageContextValue = { lang: Lang; setLang: (lang: Lang) => void; t: Copy }

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  // Restore the visitor's last choice after hydration so server and client markup match.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === "en" || saved === "ny") setLangState(saved)
    } catch {}
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {}
  }

  return <LanguageContext.Provider value={{ lang, setLang, t: copy[lang] }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider")
  return ctx
}
