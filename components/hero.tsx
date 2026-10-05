"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { images, site } from "@/content/site"
import { useLanguage } from "@/components/language-provider"
import { LanguageToggle } from "@/components/language-toggle"
import { ImageSlot } from "@/components/image-slot"

const stampFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Blantyre",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
})

/** Live Blantyre time, as burned into a CCTV recording. Rendered client-side only. */
function useTimestamp() {
  const [stamp, setStamp] = useState("")
  useEffect(() => {
    const tick = () => setStamp(stampFormat.format(new Date()).replace(",", ""))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return stamp
}

/** One corner of the camera viewfinder */
function Corner({ position }: { position: string }) {
  return <span aria-hidden className={`absolute h-7 w-7 border-white/70 ${position}`} />
}

export function Hero() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)
  const stamp = useTimestamp()

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150)
    return () => clearTimeout(timer)
  }, [])

  const reveal = (delay: string) =>
    `transition-all duration-1000 ${delay} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-night pt-36">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className={`w-full h-full transition-transform duration-[2s] ease-out ${visible ? "scale-100" : "scale-105"}`}
        >
          <ImageSlot
            src={images.hero.src}
            brief={images.hero.brief}
            alt={t.hero.imageAlt}
            caption={t.placeholder}
            tone="dark"
            place="right"
          />
        </div>
        <div className="absolute inset-0 bg-night/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
      </div>

      {/* Viewfinder: the page opens like a live camera feed */}
      <div aria-hidden className="pointer-events-none absolute z-10 inset-x-4 md:inset-x-10 top-24 bottom-4 md:bottom-10">
        <Corner position="top-0 left-0 border-t-2 border-l-2" />
        <Corner position="top-0 right-0 border-t-2 border-r-2" />
        <Corner position="bottom-0 left-0 border-b-2 border-l-2" />
        <Corner position="bottom-0 right-0 border-b-2 border-r-2" />

        <div className="absolute top-4 left-5 flex items-center gap-2.5 label text-white">
          <span className="rec-dot h-2.5 w-2.5 rounded-full bg-primary" />
          <span>REC</span>
          <span className="text-white/60 pl-2">CAM 01</span>
        </div>
        <div className="absolute top-4 right-5 text-right label text-white/80 tabular">
          <span className="block">{site.cities[0]}</span>
          <span className="block text-white/60 min-h-[1.3em]">{stamp}</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 px-6 pb-16 md:px-16 lg:px-24 md:pb-24">
        <h1
          className={`font-display font-black uppercase text-white leading-[0.84] tracking-[-0.005em] text-[clamp(3.4rem,10.5vw,10rem)] ${reveal(
            "delay-300",
          )}`}
        >
          {t.hero.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <div className={`mt-8 md:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10 ${reveal("delay-500")}`}>
          <div className="max-w-md">
            <p className="text-lg leading-[1.6] text-white/80">{t.hero.body}</p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link
                href="#quote"
                className="group inline-flex items-center gap-2 bg-primary px-6 py-3.5 label text-lg text-white hover:bg-primary-deep transition-colors duration-300"
              >
                {t.hero.primary}
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 label text-lg text-white"
              >
                <span className="border-b-2 border-yellow pb-0.5 group-hover:border-white transition-colors duration-300">
                  {t.hero.whatsapp}
                </span>
                <span className="text-white/60 tabular">{site.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* The nav carries the toggle on large screens; on smaller ones it lives here in the hero */}
          <LanguageToggle tone="dark" className="lg:hidden" />
        </div>

        <div className={`mt-14 hidden md:flex items-center gap-5 ${reveal("delay-700")}`}>
          <div className="w-10 h-px bg-white/60" />
          <span className="label text-white/70">{t.hero.scroll}</span>
        </div>
      </div>
    </section>
  )
}
