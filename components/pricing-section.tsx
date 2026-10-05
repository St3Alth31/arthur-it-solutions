"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

// Answers the most repeated unanswered Facebook question, so the range itself is the heading.
export function PricingSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal(0.1)
  const p = t.pricing

  return (
    <section id="pricing" className="px-6 py-24 md:px-12 lg:px-20 md:py-32 bg-night text-white">
      <div
        ref={ref}
        className={`grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="lg:col-span-7 min-w-0">
          <p className="label text-yellow mb-6">{p.label}</p>
          <h2 className="font-display font-black leading-[0.86] tabular">
            <span className="sr-only">{p.title}</span>
            <span aria-hidden className="block text-[clamp(3.6rem,10vw,8.5rem)] text-yellow">
              {p.from}
            </span>
            <span aria-hidden className="block label text-xl text-white/60 font-semibold my-3 md:my-4 pl-1">
              {p.between}
            </span>
            <span aria-hidden className="block text-[clamp(3.6rem,10vw,8.5rem)] text-yellow">
              {p.to}
            </span>
          </h2>
          <p className="label text-white/60 mt-6">{p.currency}</p>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-end">
          <p className="text-lg leading-[1.6] text-white/80 mb-10 max-w-md">{p.body}</p>

          <ul className="border-t border-night-line">
            {p.drivers.map((driver) => (
              <li key={driver.title} className="py-6 border-b border-night-line">
                <h3 className="font-display font-bold text-2xl leading-tight text-white mb-2">{driver.title}</h3>
                <p className="text-white/65 leading-[1.7] max-w-[46ch]">{driver.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="#quote"
              className="group inline-flex items-center gap-2 bg-primary px-6 py-3.5 label text-lg text-white hover:bg-primary-deep transition-colors duration-300"
            >
              {p.cta}
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
            <span className="label text-white/60">{p.note}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
