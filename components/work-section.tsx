"use client"

import { images } from "@/content/site"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"
import { ImageSlot } from "@/components/image-slot"

// Honest placeholders until real install photos arrive. Never substitute stock imagery here (spec 2.5).
export function WorkSection() {
  const { t } = useLanguage()

  return (
    <section id="work" className="px-6 py-24 md:px-12 lg:px-20 md:py-32 bg-paper border-t border-line">
      <SectionHeader label={t.work.label} title={t.work.title}>
        <p className="text-ink-soft leading-[1.7] max-w-sm">{t.work.body}</p>
      </SectionHeader>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
        {images.work.map((slot) => (
          <div key={slot.brief} className="aspect-[4/3] bg-paper">
            <ImageSlot src={slot.src} brief={slot.brief} alt={slot.brief} caption={t.work.placeholder} />
          </div>
        ))}
      </div>
    </section>
  )
}
