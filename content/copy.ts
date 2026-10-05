import type { ServiceKey } from "./site"

/*
  All visitor-facing copy, English and Chichewa.
  The Chichewa strings are a working draft: have a native speaker check them before launch.
*/

type Option = { value: string; label: string }

const en = {
  langName: "English",
  nav: {
    services: "Services",
    pricing: "Prices",
    areas: "Areas",
    work: "Our work",
    quote: "Get a free quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    headline: ["Security systems", "and backup power"],
    body: "Installed in Blantyre and Lilongwe for homes and businesses. We work 7 days a week.",
    primary: "Get a free quote",
    whatsapp: "Chat on WhatsApp",
    scroll: "Scroll to see what we install",
    imageAlt: "Arthur I.T technician mounting a security camera",
  },
  services: {
    label: "What we install",
    title: "Six systems, one team to install them.",
    cta: "Get a quote for this",
    items: {
      cctv: {
        title: "CCTV & IP cameras",
        body: "Watch your gate, yard or shop from your phone, day and night, with recordings you can play back.",
      },
      access: {
        title: "Access control",
        body: "Decide who gets through a door or gate, using cards, fingerprints or PIN codes.",
      },
      gate: {
        title: "Gate motors",
        body: "Open and close sliding or swing gates with a remote, without getting out of the car.",
      },
      fire: {
        title: "Fire alarm systems",
        body: "Smoke and heat detectors that raise the alarm early in homes, offices and warehouses.",
      },
      fence: {
        title: "Electric fencing",
        body: "A powered wire along your wall or boundary that deters intruders and sounds an alarm if it is cut.",
      },
      power: {
        title: "Power backup & solar",
        body: "Inverters, batteries and solar panels that keep your lights, WiFi and cameras running through load-shedding.",
      },
    } satisfies Record<ServiceKey, { title: string; body: string }>,
  },
  pricing: {
    label: "What it costs",
    title: "Most jobs cost between K500,000 and K2,000,000.",
    from: "K500,000",
    to: "K2,000,000",
    between: "to",
    currency: "Malawi kwacha, full installation",
    body: "Where your job lands depends on its size. These three things move the price most.",
    drivers: [
      {
        title: "Number of cameras",
        body: "More cameras means more equipment, more cabling and more recording storage.",
      },
      {
        title: "Fence length and ground",
        body: "A longer boundary, or rocky and sloping ground, takes more wire, posts and labour.",
      },
      {
        title: "Systems combined",
        body: "Putting several systems on one site, like an electric fence with solar backup, raises the total.",
      },
    ],
    cta: "Get your exact price",
    note: "Quotes are free.",
  },
  areas: {
    label: "Where we work",
    title: "We install in Blantyre and Lilongwe.",
    cityBody: "Homes, shops, offices and compounds across the city.",
    elsewhereTitle: "Somewhere else?",
    elsewhereBody: "Tell us your area in the quote form and we will let you know if we can reach you.",
    elsewhereCta: "Ask about your area",
  },
  work: {
    label: "Recent work",
    title: "From recent jobs.",
    body: "More photos go up here as jobs are finished.",
    placeholder: "Photo coming soon",
    ctaTitle: "Want this at your property?",
    ctaLink: "Get a free quote",
  },
  trust: {
    label: "What customers say",
    quote: "Best installer, no regrets.",
    who: "Precious",
    whoNote: "Came back for a second job",
    facts: [
      { title: "A small local team", body: "Fewer than 20 people, based in Blantyre and Lilongwe." },
      { title: "Homes and businesses", body: "We install for households, shops, offices and compounds." },
      { title: "7 days a week", body: "Message us any day, weekends included." },
    ],
    teamAlt: "The Arthur I.T Solutions team",
  },
  quote: {
    label: "Free quote",
    title: "Tell us what you need. We reply within 24 hours.",
    body: "Four short steps. Prefer to talk it through? Message us on WhatsApp instead.",
    whatsappLabel: "WhatsApp or call",
    hoursLabel: "Hours",
    hours: "Open 7 days a week",
    areasLabel: "Areas",
  },
  form: {
    steps: ["Services", "Details", "Property", "Contact"],
    stepOf: (n: number, total: number) => `Step ${n} of ${total}`,
    back: "Back",
    next: "Continue",
    submit: "Send my request",
    sending: "Sending…",
    services: {
      title: "What do you need?",
      hint: "Pick everything that applies.",
      error: "Choose at least one service to continue.",
    },
    scope: {
      title: "A few details",
      hint: "Optional. Pick the closest answer, or Not sure.",
      questions: {
        cctv: {
          q: "About how many cameras?",
          options: [
            { value: "1-2", label: "1–2" },
            { value: "3-4", label: "3–4" },
            { value: "5-8", label: "5–8" },
            { value: "8+", label: "8+" },
            { value: "unsure", label: "Not sure" },
          ],
        },
        access: {
          q: "What type of entry point?",
          options: [
            { value: "gate", label: "Gate" },
            { value: "door", label: "Door" },
            { value: "boom", label: "Boom gate" },
            { value: "multiple", label: "Multiple" },
            { value: "unsure", label: "Not sure" },
          ],
        },
        gate: {
          q: "What type of gate?",
          options: [
            { value: "sliding", label: "Sliding" },
            { value: "swing", label: "Swing" },
            { value: "unsure", label: "Not sure" },
          ],
        },
        fire: {
          q: "What kind of property is the alarm for?",
          options: [
            { value: "residential", label: "Residential" },
            { value: "commercial", label: "Commercial" },
            { value: "industrial", label: "Industrial" },
            { value: "unsure", label: "Not sure" },
          ],
        },
        fence: {
          q: "Roughly how long is the boundary?",
          options: [
            { value: "<50", label: "Under 50m" },
            { value: "50-150", label: "50–150m" },
            { value: "150+", label: "150m+" },
            { value: "unsure", label: "Not sure" },
          ],
        },
        power: {
          q: "What do you want to keep running?",
          options: [
            { value: "whole", label: "The whole property" },
            { value: "essentials", label: "Essentials only (lights, WiFi, security)" },
            { value: "unsure", label: "Not sure" },
          ],
        },
      } satisfies Record<ServiceKey, { q: string; options: Option[] }>,
    },
    property: {
      title: "About the property",
      typeLabel: "Property type",
      types: [
        { value: "residential", label: "Residential" },
        { value: "commercial", label: "Commercial" },
      ],
      locationLabel: "Location",
      locations: [
        { value: "blantyre", label: "Blantyre" },
        { value: "lilongwe", label: "Lilongwe" },
        { value: "other", label: "Other" },
      ],
      otherLabel: "Which town or area?",
      typeError: "Choose a property type.",
      locationError: "Choose a location.",
      otherError: "Tell us which town or area.",
    },
    contact: {
      title: "How do we reach you?",
      nameLabel: "Your name",
      phoneLabel: "Phone or WhatsApp number",
      phoneHint: "We will use this to send your quote.",
      methodLabel: "Contact me by",
      methods: [
        { value: "whatsapp", label: "WhatsApp" },
        { value: "call", label: "Phone call" },
        { value: "either", label: "Either" },
      ],
      notesLabel: "Anything else we should know? (optional)",
      notesPlaceholder: "For example: hidden cameras, a site with no power yet, or a deadline.",
      nameError: "Enter your name.",
      phoneError: "Enter a phone or WhatsApp number with at least 9 digits.",
      methodError: "Choose how we should contact you.",
    },
    sendError:
      "Your request did not send. Check your connection and try again, or send it to us on WhatsApp.",
    done: {
      title: "Request received.",
      body: "We will be in touch within 24 hours, any day of the week.",
      handoffTitle: "One last step.",
      handoffBody: "Send this summary to us on WhatsApp and we will reply within 24 hours, any day of the week.",
      handoffCta: "Send on WhatsApp",
      summaryTitle: "What you told us",
      fix: "Something wrong? Message us on WhatsApp and we will correct it.",
      again: "Start a new request",
    },
    summary: {
      services: "Services",
      details: "Details",
      property: "Property",
      location: "Location",
      name: "Name",
      phone: "Phone",
      method: "Contact by",
      notes: "Notes",
    },
  },
  footer: {
    hours: "Open 7 days a week",
    rights: "All rights reserved.",
  },
  placeholder: "Image needed",
}

export type Copy = typeof en

// Chichewa as it is spoken day to day: short headings, service names and tech terms stay in English,
// sentences mix in English nouns, and numbers are written as digits.
const ny: Copy = {
  langName: "Chichewa",
  nav: {
    services: "Services",
    pricing: "Prices",
    areas: "Areas",
    work: "Our work",
    quote: "Pezani free quote",
    openMenu: "Tsegulani menu",
    closeMenu: "Tsekani menu",
  },
  hero: {
    headline: ["Security systems", "ndi backup power"],
    body: "Timaika ku Blantyre ndi Lilongwe, m'nyumba ndi ku ma business. Timagwira ntchito masiku 7 pa sabata.",
    primary: "Pezani free quote",
    whatsapp: "Tichezeni pa WhatsApp",
    scroll: "Scrollani muone zomwe timaika",
    imageAlt: "Technician wa Arthur I.T akugwira ntchito",
  },
  services: {
    label: "What we install",
    title: "6 systems, team imodzi yoziika.",
    cta: "Pezani quote ya ichi",
    items: {
      cctv: {
        title: "CCTV & IP cameras",
        body: "Onani geti, bwalo kapena shop yanu pa phone, usana ndi usiku, ndipo mutha kuonera ma recording pambuyo pake.",
      },
      access: {
        title: "Access control",
        body: "Sankhani amene angalowe pa chitseko kapena geti pogwiritsa ntchito ma card, fingerprint kapena PIN code.",
      },
      gate: {
        title: "Gate motors",
        body: "Tsegulani ndi kutseka sliding kapena swing gate ndi remote, osatuluka m'galimoto.",
      },
      fire: {
        title: "Fire alarm systems",
        body: "Ma smoke ndi heat detector omwe amalira msanga m'nyumba, ma office ndi ma warehouse.",
      },
      fence: {
        title: "Electric fencing",
        body: "Waya wa magetsi pa khoma kapena malire anu, womwe umaopseza akuba ndipo alarm imalira ukadulidwa.",
      },
      power: {
        title: "Power backup & solar",
        body: "Ma inverter, ma battery ndi ma solar panel omwe amasunga magetsi, WiFi ndi ma camera akugwira ntchito nthawi ya load-shedding.",
      },
    },
  },
  pricing: {
    label: "What it costs",
    title: "Ntchito zambiri zimadula pakati pa K500,000 ndi K2,000,000.",
    from: "K500,000",
    to: "K2,000,000",
    between: "mpaka",
    currency: "Malawi kwacha, installation yonse",
    body: "Mtengo wa ntchito yanu umadalira kukula kwake. Zinthu 3 izi ndi zomwe zimasintha mtengo kwambiri.",
    drivers: [
      {
        title: "Ma camera angati",
        body: "Ma camera ambiri amafuna equipment, ma cable ndi storage ya ma recording yochuluka.",
      },
      {
        title: "Kutalika kwa fence ndi nthaka",
        body: "Malire aatali, kapena nthaka ya miyala ndi yotsetsereka, imafuna waya, ma pole ndi antchito ambiri.",
      },
      {
        title: "Ma system ophatikiza",
        body: "Kuika ma system angapo pamalo amodzi, monga electric fence ndi solar backup, kumakweza mtengo wonse.",
      },
    ],
    cta: "Dziwani mtengo weniweni",
    note: "Quote ndi yaulere.",
  },
  areas: {
    label: "Where we work",
    title: "Timaika ku Blantyre ndi Lilongwe.",
    cityBody: "Nyumba, ma shop, ma office ndi ma compound mumzinda wonse.",
    elsewhereTitle: "Muli kwina?",
    elsewhereBody: "Tiuzeni dera lanu mu quote form ndipo tikudziwitsani ngati tingafike kumeneko.",
    elsewhereCta: "Funsani za dera lanu",
  },
  work: {
    label: "Recent work",
    title: "Kuchokera ku ntchito zaposachedwa.",
    body: "Tikuwonjezera ma photo pano ntchito zikamatha.",
    placeholder: "Photo ikubwera",
    ctaTitle: "Mukufuna izi pamalo anu?",
    ctaLink: "Pezani free quote",
  },
  trust: {
    label: "What customers say",
    quote: "Best installer, no regrets.",
    who: "Precious",
    whoNote: "Anabweranso pa ntchito ya 2",
    facts: [
      { title: "Team yaing'ono ya kuno", body: "Anthu osapitirira 20, ku Blantyre ndi Lilongwe." },
      { title: "Nyumba ndi ma business", body: "Timaika m'nyumba, ma shop, ma office ndi ma compound." },
      { title: "Masiku 7 pa sabata", body: "Titumizireni message tsiku lililonse, ngakhale pa weekend." },
    ],
    teamAlt: "Team ya Arthur I.T Solutions",
  },
  quote: {
    label: "Free quote",
    title: "Tiuzeni zomwe mukufuna. Tikuyankhani pasanathe maola 24.",
    body: "Masitepe 4 okha. Mukufuna kulankhula? Titumizireni message pa WhatsApp.",
    whatsappLabel: "WhatsApp kapena call",
    hoursLabel: "Hours",
    hours: "Open masiku 7 pa sabata",
    areasLabel: "Areas",
  },
  form: {
    steps: ["Services", "Details", "Property", "Contact"],
    stepOf: (n: number, total: number) => `Step ${n} mwa ${total}`,
    back: "Bwererani",
    next: "Pitirizani",
    submit: "Tumizani request yanga",
    sending: "Tikutumiza…",
    services: {
      title: "Mukufuna chiyani?",
      hint: "Sankhani zonse zomwe zikukukhudzani.",
      error: "Sankhani service imodzi kuti mupitirize.",
    },
    scope: {
      title: "Details pang'ono",
      hint: "Simukakamizidwa. Sankhani yankho loyandikira, kapena Sindikudziwa.",
      questions: {
        cctv: {
          q: "Ma camera angati pafupifupi?",
          options: [
            { value: "1-2", label: "1–2" },
            { value: "3-4", label: "3–4" },
            { value: "5-8", label: "5–8" },
            { value: "8+", label: "8+" },
            { value: "unsure", label: "Sindikudziwa" },
          ],
        },
        access: {
          q: "Ndi entry point yotani?",
          options: [
            { value: "gate", label: "Gate" },
            { value: "door", label: "Door" },
            { value: "boom", label: "Boom gate" },
            { value: "multiple", label: "Zingapo" },
            { value: "unsure", label: "Sindikudziwa" },
          ],
        },
        gate: {
          q: "Ndi gate yotani?",
          options: [
            { value: "sliding", label: "Sliding" },
            { value: "swing", label: "Swing" },
            { value: "unsure", label: "Sindikudziwa" },
          ],
        },
        fire: {
          q: "Alarm ndi ya property yotani?",
          options: [
            { value: "residential", label: "Residential" },
            { value: "commercial", label: "Commercial" },
            { value: "industrial", label: "Industrial" },
            { value: "unsure", label: "Sindikudziwa" },
          ],
        },
        fence: {
          q: "Malire anu ndi aatali bwanji pafupifupi?",
          options: [
            { value: "<50", label: "Pansi pa 50m" },
            { value: "50-150", label: "50–150m" },
            { value: "150+", label: "150m+" },
            { value: "unsure", label: "Sindikudziwa" },
          ],
        },
        power: {
          q: "Mukufuna backup ya chiyani?",
          options: [
            { value: "whole", label: "Property yonse" },
            { value: "essentials", label: "Zofunikira zokha (magetsi, WiFi, security)" },
            { value: "unsure", label: "Sindikudziwa" },
          ],
        },
      },
    },
    property: {
      title: "Za property yanu",
      typeLabel: "Property type",
      types: [
        { value: "residential", label: "Residential" },
        { value: "commercial", label: "Commercial" },
      ],
      locationLabel: "Location",
      locations: [
        { value: "blantyre", label: "Blantyre" },
        { value: "lilongwe", label: "Lilongwe" },
        { value: "other", label: "Kwina" },
      ],
      otherLabel: "Tauni kapena dera liti?",
      typeError: "Sankhani property type.",
      locationError: "Sankhani location.",
      otherError: "Tiuzeni tauni kapena dera.",
    },
    contact: {
      title: "Tikupezeni bwanji?",
      nameLabel: "Dzina lanu",
      phoneLabel: "Phone kapena WhatsApp number",
      phoneHint: "Tidzagwiritsa ntchito number iyi kukutumizirani quote.",
      methodLabel: "Tikupezeni pa",
      methods: [
        { value: "whatsapp", label: "WhatsApp" },
        { value: "call", label: "Phone call" },
        { value: "either", label: "Zonse 2" },
      ],
      notesLabel: "Pali china chomwe tiyenera kudziwa? (optional)",
      notesPlaceholder: "Mwachitsanzo: hidden cameras, malo opanda magetsi, kapena deadline.",
      nameError: "Lembani dzina lanu.",
      phoneError: "Lembani phone kapena WhatsApp number ya manambala osachepera 9.",
      methodError: "Sankhani momwe tikupezereni.",
    },
    sendError:
      "Request yanu sinatumizidwe. Onani internet yanu ndipo yesaninso, kapena titumizireni pa WhatsApp.",
    done: {
      title: "Talandira request yanu.",
      body: "Tikulumikizanani pasanathe maola 24, tsiku lililonse.",
      handoffTitle: "Step yomaliza.",
      handoffBody: "Titumizireni summary iyi pa WhatsApp ndipo tikuyankhani pasanathe maola 24, tsiku lililonse.",
      handoffCta: "Tumizani pa WhatsApp",
      summaryTitle: "Zomwe mwatiuza",
      fix: "Pali cholakwika? Titumizireni message pa WhatsApp ndipo tikonza.",
      again: "Yambani request yatsopano",
    },
    summary: {
      services: "Services",
      details: "Details",
      property: "Property",
      location: "Location",
      name: "Dzina",
      phone: "Phone",
      method: "Tikupezeni pa",
      notes: "Notes",
    },
  },
  footer: {
    hours: "Open masiku 7 pa sabata",
    rights: "All rights reserved.",
  },
  placeholder: "Photo ikufunika",
}

export const copy = { en, ny }
export type Lang = keyof typeof copy
