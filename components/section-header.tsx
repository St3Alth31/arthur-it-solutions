"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

/** Rule-topped section header used across the page: a short label, then the heading. */
export function SectionHeader({
  label,
  title,
  tone = "light",
  children,
}: {
  label: string
  title: string
  tone?: "light" | "dark"
  children?: React.ReactNode
}) {
  const { ref, isVisible } = useScrollReveal(0.1)
  const dark = tone === "dark"

  return (
    <div
      ref={ref}
      className={`mb-14 md:mb-20 pb-6 border-b flex flex-col lg:flex-row lg:items-end justify-between gap-8 transition-all duration-700 ${
        dark ? "border-night-line" : "border-line"
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div className="max-w-4xl">
        <p className={`label mb-4 ${dark ? "text-yellow" : "text-primary"}`}>{label}</p>
        <h2
          className={`font-display font-extrabold text-[clamp(2.6rem,5.6vw,4.75rem)] leading-[0.92] tracking-[-0.005em] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>
      {children}
    </div>
  )
}
