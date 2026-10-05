"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { images } from "@/content/site"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"
import { ImageSlot } from "@/components/image-slot"

// Meant for photos of real installs (spec 2.5); stand-ins are tracked in the README.
// Grid: five landscape photos, one portrait spanning two rows, and a quote tile in the remaining cell.
// Two columns on phones, four on large screens; both fill completely when the portrait sits third.
export function WorkSection() {
  const { t } = useLanguage()

  return (
    <section id="work" className="px-6 py-24 md:px-12 lg:px-20 md:py-32 bg-paper border-t border-line">
      <SectionHeader label={t.work.label} title={t.work.title}>
        <p className="text-ink-soft leading-[1.7] max-w-sm">{t.work.body}</p>
      </SectionHeader>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
        {images.work.map((slot) => {
          const portrait = slot.orientation === "Portrait"
          return (
            <div key={slot.brief} className={`relative bg-paper overflow-hidden ${portrait ? "row-span-2" : "aspect-[4/3]"}`}>
              {/* Filled absolutely so a cell stretched by a taller neighbour shows no gap */}
              <div className="absolute inset-0">
                <ImageSlot src={slot.src} brief={slot.brief} alt={slot.brief} caption={t.work.placeholder} />
              </div>
            </div>
          )
        })}

        <Link
          href="#quote"
          className="group bg-night text-white p-4 md:p-6 flex flex-col justify-between gap-4 hover:bg-night-raised transition-colors duration-300"
        >
          <span className="font-display font-bold text-xl md:text-3xl leading-[1.05]">{t.work.ctaTitle}</span>
          <span className="inline-flex items-center gap-2 label text-yellow">
            <span className="border-b-2 border-yellow pb-0.5">{t.work.ctaLink}</span>
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </span>
        </Link>
      </div>
    </section>
  )
}
