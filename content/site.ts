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
    src: null,
    brief: "Technician mounting camera",
    orientation: "Landscape",
    ratio: "16:9",
    minSize: "2400 × 1350 px",
  },
  services: {
    cctv: { src: null, brief: "Wall-mounted dome camera", ...landscape },
    access: { src: null, brief: "Fingerprint reader door", ...landscape },
    gate: { src: null, brief: "Sliding gate motor", ...landscape },
    fire: { src: null, brief: "Ceiling smoke detector", ...landscape },
    fence: { src: null, brief: "Wall-top electric fence", ...landscape },
    power: { src: null, brief: "Rooftop solar panels", ...landscape },
  } satisfies Record<ServiceKey, ImageSpec>,
  // Real installs only, never stock (spec 2.5). Lead with clean cable management.
  work: [
    { src: null, brief: "Neat cable runs", ...landscape },
    { src: null, brief: "Finished gate install", ...landscape },
    { src: null, brief: "DVR cabinet wiring", ...landscape },
    { src: null, brief: "Inverter battery rack", ...landscape },
    { src: null, brief: "Perimeter fence corner", ...landscape },
    { src: null, brief: "Team on site", ...landscape },
  ] satisfies ImageSpec[],
  team: {
    src: null,
    brief: "Arthur team portrait",
    orientation: "Portrait",
    ratio: "4:5",
    minSize: "1200 × 1500 px",
  },
}
