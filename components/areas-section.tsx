"use client"

import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"
import { site } from "@/content/site"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"

export function AreasSection() {
  const { t } = useLanguage()

  return (
    <section id="areas" className="px-6 py-24 md:px-12 lg:px-20 md:py-32 bg-paper">
      <SectionHeader label={t.areas.label} title={t.areas.title} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
        {site.cities.map((city) => (
          <div key={city} className="bg-paper p-6 md:p-10">
            <MapPin className="h-7 w-7 text-primary mb-6" fill="currentColor" stroke="var(--paper)" aria-hidden />
            <p className="font-display font-black uppercase text-ink leading-[0.85] text-[clamp(3.5rem,8vw,7rem)]">
              {city}
            </p>
            <p className="mt-5 text-ink-soft leading-[1.7] max-w-[36ch]">{t.areas.cityBody}</p>
          </div>
        ))}
      </div>

      <div className="border border-line border-t-0 bg-paper p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-xl">
          <h3 className="font-display font-bold text-2xl text-ink mb-1">{t.areas.elsewhereTitle}</h3>
          <p className="text-ink-soft leading-[1.7]">{t.areas.elsewhereBody}</p>
        </div>
        <Link href="?location=other#quote" className="group inline-flex w-fit items-center gap-2 label text-ink shrink-0">
          <span className="border-b-2 border-primary pb-0.5 group-hover:border-ink transition-colors duration-300">
            {t.areas.elsewhereCta}
          </span>
          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  )
}
