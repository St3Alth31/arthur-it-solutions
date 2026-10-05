"use client"

import Link from "next/link"
import { site } from "@/content/site"
import { useLanguage } from "@/components/language-provider"
import { Wordmark } from "@/components/wordmark"

export function Footer() {
  const { t } = useLanguage()
  const links = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.areas, href: "#areas" },
    { label: t.nav.work, href: "#work" },
    { label: t.nav.quote, href: "#quote" },
  ]

  return (
    <footer className="px-6 pt-16 pb-10 md:px-12 lg:px-20 bg-paper border-t border-line">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
        <div className="md:col-span-5">
          <Link href="/" className="block w-fit" aria-label={site.name}>
            <Wordmark tone="light" />
          </Link>
          <p className="mt-6 text-ink-soft leading-[1.7] max-w-sm">{t.hero.headline.join(" ")}.</p>
        </div>

        <nav className="md:col-span-3 md:col-start-7 flex flex-col gap-3" aria-label="Footer">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="label text-ink-soft hover:text-ink w-fit pb-0.5 border-b border-transparent hover:border-ink transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:col-span-3 md:col-start-10 flex flex-col gap-2">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-bold text-2xl tabular text-ink hover:text-primary transition-colors w-fit"
          >
            {site.phoneDisplay}
          </a>
          <p className="label text-ink-soft">WhatsApp {site.phoneIntl}</p>
          <p className="label text-ink mt-4">{site.cities.join(", ")}</p>
          <p className="label text-ink-soft">{t.footer.hours}</p>
        </div>
      </div>

      <div className="pt-6 border-t border-line flex flex-col md:flex-row md:items-center justify-between gap-3">
        <p className="text-sm text-ink-soft">
          © {site.year} {site.name}. {t.footer.rights}
        </p>
        <div className="h-1 w-24 flex" aria-hidden>
          <span className="flex-1 bg-primary" />
          <span className="flex-1 bg-yellow" />
          <span className="flex-1 bg-blue" />
        </div>
      </div>
    </footer>
  )
}
