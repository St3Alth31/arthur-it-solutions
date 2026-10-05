export const site = {
  name: "Arthur I.T Solutions",
  shortName: "Arthur",
  suffix: "I.T Solutions",
  phoneDisplay: "0881 032 540",
  phoneIntl: "+265 881 032 540",
  phoneHref: "tel:+265881032540",
  whatsapp: "https://wa.me/265881032540",
  cities: ["Blantyre", "Lilongwe"] as const,
  // Submission destination is still an open question (spec 3.6). When this is empty,
  // the form hands the request to WhatsApp instead of claiming it was sent.
  quoteEndpoint: process.env.NEXT_PUBLIC_QUOTE_ENDPOINT ?? "",
  year: 2026,
} as const

/** Builds a wa.me link with a prefilled message. */
export const whatsappLink = (text?: string) =>
  text ? `${site.whatsapp}?text=${encodeURIComponent(text)}` : site.whatsapp

export const serviceKeys = ["cctv", "access", "gate", "fire", "fence", "power"] as const
export type ServiceKey = (typeof serviceKeys)[number]

/**
 * One image slot. `src: null` renders a placeholder showing the brief.
 * `orientation`, `ratio` and `minSize` match how the slot is cropped on the page,
 * so photos can be sourced or shot to fit.
 */
export type ImageSpec = {
  src: string | null
  brief: string
  orientation: "Landscape" | "Portrait"
  ratio: string
  minSize: string
}

const landscape = { orientation: "Landscape", ratio: "4:3", minSize: "1600 × 1200 px" } as const

/** Drop each photo into /public/images and set its `src` to switch it on. */
export const images = {
  // Full-bleed behind the headline: keep the subject right of centre, the left side carries text.
  hero: {
    src: "/images/hero.jpg",
    brief: "Technician mounting camera",
    orientation: "Landscape",
    ratio: "16:9",
    minSize: "2400 × 1350 px",
  },
  services: {
    cctv: { src: "/images/cctv.jpg", brief: "Wall-mounted dome camera", ...landscape },
    access: { src: "/images/access-control.jpg", brief: "Fingerprint reader door", ...landscape },
    gate: { src: "/images/gate-motor.jpg", brief: "Sliding gate motor", ...landscape },
    fire: { src: "/images/fire-alarm.jpg", brief: "Ceiling smoke detector", ...landscape },
    fence: { src: "/images/electric-fence.webp", brief: "Wall-top electric fence", ...landscape },
    power: { src: "/images/solar.jpg", brief: "Rooftop solar panels", ...landscape },
  } satisfies Record<ServiceKey, ImageSpec>,
  // Meant for real installs (spec 2.5); most are stand-ins until sourced, see README. Lead with clean cable management.
  // A portrait slot spans two grid rows; the grid is laid out for exactly one.
  work: [
    { src: "/images/work-1.jpg", brief: "Neat cable runs", ...landscape },
    { src: "/images/work-2.avif", brief: "Finished gate install", ...landscape },
    {
      src: "/images/work-6.jpg",
      brief: "Team on site",
      orientation: "Portrait",
      ratio: "3:4",
      minSize: "1200 × 1600 px",
    },
    { src: "/images/work-3.jpg", brief: "DVR cabinet wiring", ...landscape },
    { src: "/images/work-4.jpg", brief: "Inverter battery rack", ...landscape },
    { src: "/images/work-5.jpg", brief: "Perimeter fence corner", ...landscape },
  ] satisfies ImageSpec[],
  team: {
    src: "/images/team.jpg",
    brief: "Arthur team portrait",
    orientation: "Portrait",
    ratio: "4:5",
    minSize: "1200 × 1500 px",
  },
}
