"use client"

import { ArrowUpRight } from "lucide-react"
import { site } from "@/content/site"
import { useLanguage } from "@/components/language-provider"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { QuoteForm } from "@/components/quote-form"

export function QuoteSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal(0.1)
  const q = t.quote

  return (
    <section id="quote" className="px-6 py-24 md:px-12 lg:px-20 md:py-32 bg-night text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        <div
          ref={ref}
          className={`lg:col-span-5 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label text-yellow mb-6">{q.label}</p>
          <h2 className="font-display font-extrabold text-[clamp(2.6rem,5.2vw,4.5rem)] leading-[0.92] mb-6">{q.title}</h2>
          <p className="text-lg leading-[1.6] text-white/75 mb-12 max-w-md">{q.body}</p>

          <dl className="border-t border-night-line">
            <div className="py-5 border-b border-night-line">
              <dt className="label text-white/55 mb-1">{q.whatsappLabel}</dt>
              <dd>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-display font-bold text-3xl tabular text-white hover:text-yellow transition-colors"
                >
                  {site.phoneDisplay}
                  <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </dd>
            </div>
            <div className="py-5 border-b border-night-line">
              <dt className="label text-white/55 mb-1">{q.hoursLabel}</dt>
              <dd className="font-display font-bold text-2xl">{q.hours}</dd>
            </div>
            <div className="py-5 border-b border-night-line">
              <dt className="label text-white/55 mb-1">{q.areasLabel}</dt>
              <dd className="font-display font-bold text-2xl">{site.cities.join(", ")}</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7 min-w-0">
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}
