"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { site } from "@/content/site"
import { useLanguage } from "@/components/language-provider"
import { LanguageToggle } from "@/components/language-toggle"
import { Wordmark } from "@/components/wordmark"

export function Navigation() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const links = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.areas, href: "#areas" },
    { label: t.nav.work, href: "#work" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 60)
      setHidden(currentY > lastScrollY && currentY > 400)
      setLastScrollY(currentY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const solid = scrolled || isOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hidden && !isOpen ? "-translate-y-full" : "translate-y-0"
      } ${solid ? "bg-paper/95 backdrop-blur-md border-b border-line" : "bg-transparent"}`}
    >
      <nav className="flex items-center justify-between gap-6 px-6 py-4 md:px-12 lg:px-20">
        <Link href="/" aria-label={site.name}>
          <Wordmark tone={solid ? "light" : "dark"} />
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`label pb-0.5 border-b border-transparent transition-colors duration-300 ${
                solid ? "text-ink hover:border-ink/40" : "text-white hover:border-white/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageToggle tone={solid ? "light" : "dark"} className="pl-9 border-l border-current/20" />
          <Link
            href="#quote"
            className="label bg-primary text-white px-5 py-2.5 hover:bg-primary-deep transition-colors duration-300"
          >
            {t.nav.quote}
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden transition-colors duration-500 ${solid ? "text-ink" : "text-white"}`}
          aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        } bg-paper border-b border-line`}
      >
        <div className="flex flex-col px-6 py-8 gap-5">
          {[...links, { label: t.nav.quote, href: "#quote" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display font-bold text-4xl leading-none text-ink hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <LanguageToggle tone="light" className="pt-4 mt-2 border-t border-line" />
        </div>
      </div>
    </header>
  )
}
