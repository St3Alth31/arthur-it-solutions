"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { images, serviceKeys, type ServiceKey } from "@/content/site"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"
import { ImageSlot } from "@/components/image-slot"
import { serviceIcons } from "@/components/service-icons"

function ServiceTile({ service }: { service: ServiceKey }) {
  const { t } = useLanguage()
  const [hovered, setHovered] = useState(false)
  const item = t.services.items[service]
  const Icon = serviceIcons[service]
  const image = images.services[service]

  return (
    <article
      className="bg-paper flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-hidden aspect-[4/3]">
        <div
          className={`w-full h-full transition-transform duration-[800ms] ease-out ${
            hovered ? "scale-[1.04]" : "scale-100"
          }`}
        >
          <ImageSlot src={image.src} brief={image.brief} alt={item.title} caption={t.placeholder} />
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <Icon className="h-6 w-6 text-primary mb-5" strokeWidth={1.75} aria-hidden />
        <h3 className="font-display font-bold text-[2rem] leading-none text-ink mb-4">{item.title}</h3>
        <p className="text-ink-soft leading-[1.7] mb-8 max-w-[38ch]">{item.body}</p>
        <Link
          href={`?service=${service}#quote`}
          className="group mt-auto inline-flex w-fit items-center gap-2 label text-ink"
        >
          <span className="border-b-2 border-primary pb-0.5 group-hover:border-ink transition-colors duration-300">
            {t.services.cta}
          </span>
          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </Link>
      </div>
    </article>
  )
}

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="px-6 py-24 md:px-12 lg:px-20 md:py-32 bg-paper">
      <SectionHeader label={t.services.label} title={t.services.title} />
      {/* Equal weight for all six: power backup is a primary service, not an add-on */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
        {serviceKeys.map((key) => (
          <ServiceTile key={key} service={key} />
        ))}
      </div>
    </section>
  )
}
