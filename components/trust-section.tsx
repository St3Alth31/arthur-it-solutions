"use client"

import { images } from "@/content/site"
import { useLanguage } from "@/components/language-provider"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { ImageSlot } from "@/components/image-slot"

// One real testimonial so far. Add more to copy.ts as the client collects them (spec 2.6).
export function TrustSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="trust" className="px-6 py-24 md:px-12 lg:px-20 md:py-32 bg-paper border-t border-line">
      <div
        ref={ref}
        className={`grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-6 items-start transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="lg:col-span-4">
          <div className="aspect-[4/5] max-w-sm border border-line">
            <ImageSlot src={images.team.src} brief={images.team.brief} alt={t.trust.teamAlt} caption={t.placeholder} />
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <h2 className="label text-primary mb-16">{t.trust.label}</h2>
          <figure>
            <blockquote className="relative">
              <span
                aria-hidden
                className="absolute -top-10 -left-1 font-display font-black text-primary text-[7rem] leading-none select-none"
              >
                &ldquo;
              </span>
              <p className="relative font-display font-black uppercase text-ink leading-[0.86] text-[clamp(3.2rem,7.5vw,7rem)] pt-8">
                {t.trust.quote}
              </p>
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-display font-bold text-2xl text-ink">{t.trust.who}</span>
              <span className="label text-ink-soft">{t.trust.whoNote}</span>
            </figcaption>
          </figure>

          <ul className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line">
            {t.trust.facts.map((fact) => (
              <li key={fact.title} className="bg-paper p-6">
                <h3 className="font-display font-bold text-xl leading-tight text-ink mb-2">{fact.title}</h3>
                <p className="text-ink-soft text-[0.95rem] leading-[1.65]">{fact.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
