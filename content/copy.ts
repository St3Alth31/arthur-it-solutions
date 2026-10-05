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

const ny: Copy = {
  langName: "Chichewa",
  nav: {
    services: "Ntchito zathu",
    pricing: "Mitengo",
    areas: "Madera",
    work: "Ntchito tachita",
    quote: "Pemphani mtengo",
    openMenu: "Tsegulani menyu",
    closeMenu: "Tsekani menyu",
  },
  hero: {
    headline: ["Zipangizo zachitetezo", "ndi magetsi osungira"],
    body: "Timayika ku Blantyre ndi Lilongwe, m'nyumba ndi m'mabizinesi. Timagwira ntchito masiku 7 pa sabata.",
    primary: "Pemphani mtengo kwaulere",
    whatsapp: "Tilankhuleni pa WhatsApp",
    scroll: "Pitani pansi kuti muone zomwe timayika",
    imageAlt: "Katswiri wa Arthur I.T akuyika kamera yachitetezo",
  },
  services: {
    label: "Zomwe timayika",
    title: "Zipangizo zisanu ndi chimodzi, gulu limodzi loziyika.",
    cta: "Pemphani mtengo wa ichi",
    items: {
      cctv: {
        title: "Makamera a CCTV ndi IP",
        body: "Onani geti, bwalo kapena shopu yanu pa foni, usana ndi usiku, ndipo muthanso kuonera zojambulidwa pambuyo pake.",
      },
      access: {
        title: "Zowongolera kulowa",
        body: "Sankhani amene angalowe pa chitseko kapena geti pogwiritsa ntchito makadi, zala kapena nambala yachinsinsi.",
      },
      gate: {
        title: "Mainjini a geti",
        body: "Tsegulani ndi kutseka geti lotsetsereka kapena lozungulira ndi rimoti, osatuluka m'galimoto.",
      },
      fire: {
        title: "Ma alamu a moto",
        body: "Zipangizo zozindikira utsi ndi kutentha zomwe zimalira msanga m'nyumba, m'maofesi ndi m'nyumba zosungiramo katundu.",
      },
      fence: {
        title: "Mpanda wamagetsi",
        body: "Waya wa magetsi pa khoma kapena malire anu womwe umaopseza akuba ndipo umalira ngati wadulidwa.",
      },
      power: {
        title: "Magetsi osungira ndi a dzuwa",
        body: "Ma inverter, mabatire ndi ma solar omwe amasunga magetsi, WiFi ndi makamera akugwira ntchito pamene magetsi azima.",
      },
    },
  },
  pricing: {
    label: "Mtengo wake",
    title: "Ntchito zambiri zimadula pakati pa K500,000 ndi K2,000,000.",
    from: "K500,000",
    to: "K2,000,000",
    between: "mpaka",
    currency: "Kwacha ya Malawi, kuyika konse",
    body: "Mtengo wa ntchito yanu umadalira kukula kwake. Zinthu zitatu izi ndi zomwe zimasintha mtengo kwambiri.",
    drivers: [
      {
        title: "Chiwerengero cha makamera",
        body: "Makamera ambiri amafuna zipangizo, mawaya ndi malo osungira zojambulidwa ochuluka.",
      },
      {
        title: "Kutalika kwa mpanda ndi nthaka",
        body: "Malire aatali, kapena nthaka ya miyala ndi yotsetsereka, imafuna waya, mitengo ndi antchito ambiri.",
      },
      {
        title: "Zipangizo zophatikiza",
        body: "Kuyika zipangizo zingapo pamalo amodzi, monga mpanda wamagetsi ndi magetsi a dzuwa, kumakweza mtengo wonse.",
      },
    ],
    cta: "Dziwani mtengo weniweni",
    note: "Kupempha mtengo nkwaulere.",
  },
  areas: {
    label: "Komwe timagwira ntchito",
    title: "Timayika ku Blantyre ndi Lilongwe.",
    cityBody: "Nyumba, mashopu, maofesi ndi malo ena mumzinda wonse.",
    elsewhereTitle: "Muli kwina?",
    elsewhereBody: "Tiuzeni dera lanu mu fomu ndipo tikudziwitsani ngati tingathe kufika kumeneko.",
    elsewhereCta: "Funsani za dera lanu",
  },
  work: {
    label: "Ntchito zaposachedwa",
    title: "Kuchokera ku ntchito zaposachedwa.",
    body: "Tikuwonjezera zithunzi pano ntchito zikamatha.",
    placeholder: "Chithunzi chikubwera",
    ctaTitle: "Mukufuna izi pamalo anu?",
    ctaLink: "Pemphani mtengo kwaulere",
  },
  trust: {
    label: "Zomwe makasitomala amanena",
    quote: "Best installer, no regrets.",
    who: "Precious",
    whoNote: "Anabweranso pa ntchito yachiwiri",
    facts: [
      { title: "Gulu laling'ono la kuno", body: "Anthu osapitirira 20, ku Blantyre ndi Lilongwe." },
      { title: "Nyumba ndi mabizinesi", body: "Timayika m'nyumba, m'mashopu, m'maofesi ndi m'malo ena." },
      { title: "Masiku 7 pa sabata", body: "Titumizireni uthenga tsiku lililonse, ngakhale Loweruka ndi Lamlungu." },
    ],
    teamAlt: "Gulu la Arthur I.T Solutions",
  },
  quote: {
    label: "Mtengo kwaulere",
    title: "Tiuzeni zomwe mukufuna. Tikuyankhani pasanathe maola 24.",
    body: "Masitepe anayi achidule. Mukufuna kulankhula? Titumizireni uthenga pa WhatsApp.",
    whatsappLabel: "WhatsApp kapena kuyimba",
    hoursLabel: "Nthawi",
    hours: "Tili otsegula masiku 7 pa sabata",
    areasLabel: "Madera",
  },
  form: {
    steps: ["Ntchito", "Zambiri", "Malo", "Kulumikizana"],
    stepOf: (n: number, total: number) => `Sitepe ${n} mwa ${total}`,
    back: "Bwererani",
    next: "Pitirizani",
    submit: "Tumizani pempho langa",
    sending: "Tikutumiza…",
    services: {
      title: "Mukufuna chiyani?",
      hint: "Sankhani zonse zomwe zikukukhudzani.",
      error: "Sankhani chimodzi kuti mupitirize.",
    },
    scope: {
      title: "Zambiri pang'ono",
      hint: "Simukakamizidwa. Sankhani yankho loyandikira, kapena Sindikudziwa.",
      questions: {
        cctv: {
          q: "Makamera angati pafupifupi?",
          options: [
            { value: "1-2", label: "1–2" },
            { value: "3-4", label: "3–4" },
            { value: "5-8", label: "5–8" },
            { value: "8+", label: "8+" },
            { value: "unsure", label: "Sindikudziwa" },
          ],
        },
        access: {
          q: "Ndi pakhomo lotani?",
          options: [
            { value: "gate", label: "Geti" },
            { value: "door", label: "Chitseko" },
            { value: "boom", label: "Boom gate" },
            { value: "multiple", label: "Zingapo" },
            { value: "unsure", label: "Sindikudziwa" },
          ],
        },
        gate: {
          q: "Ndi geti lotani?",
          options: [
            { value: "sliding", label: "Lotsetsereka" },
            { value: "swing", label: "Lozungulira" },
            { value: "unsure", label: "Sindikudziwa" },
          ],
        },
        fire: {
          q: "Alamu ndi ya malo otani?",
          options: [
            { value: "residential", label: "Nyumba yokhalamo" },
            { value: "commercial", label: "Bizinesi" },
            { value: "industrial", label: "Fakitale" },
            { value: "unsure", label: "Sindikudziwa" },
          ],
        },
        fence: {
          q: "Malire anu ndi aatali bwanji pafupifupi?",
          options: [
            { value: "<50", label: "Pansi pa 50m" },
            { value: "50-150", label: "50–150m" },
            { value: "150+", label: "Kupitirira 150m" },
            { value: "unsure", label: "Sindikudziwa" },
          ],
        },
        power: {
          q: "Mukufuna kusunga magetsi a chiyani?",
          options: [
            { value: "whole", label: "Malo onse" },
            { value: "essentials", label: "Zofunikira zokha (magetsi, WiFi, chitetezo)" },
            { value: "unsure", label: "Sindikudziwa" },
          ],
        },
      },
    },
    property: {
      title: "Za malo anu",
      typeLabel: "Mtundu wa malo",
      types: [
        { value: "residential", label: "Nyumba yokhalamo" },
        { value: "commercial", label: "Bizinesi" },
      ],
      locationLabel: "Malo",
      locations: [
        { value: "blantyre", label: "Blantyre" },
        { value: "lilongwe", label: "Lilongwe" },
        { value: "other", label: "Kwina" },
      ],
      otherLabel: "Tauni kapena dera liti?",
      typeError: "Sankhani mtundu wa malo.",
      locationError: "Sankhani malo.",
      otherError: "Tiuzeni tauni kapena dera.",
    },
    contact: {
      title: "Tikupezeni bwanji?",
      nameLabel: "Dzina lanu",
      phoneLabel: "Nambala ya foni kapena WhatsApp",
      phoneHint: "Tidzagwiritsa ntchito nambalayi kukutumizirani mtengo.",
      methodLabel: "Mundipeze kudzera pa",
      methods: [
        { value: "whatsapp", label: "WhatsApp" },
        { value: "call", label: "Kuyimba foni" },
        { value: "either", label: "Zonse ziwiri" },
      ],
      notesLabel: "Pali china chomwe tiyenera kudziwa? (ngati mukufuna)",
      notesPlaceholder: "Mwachitsanzo: makamera obisika, malo opanda magetsi, kapena tsiku lomaliza.",
      nameError: "Lembani dzina lanu.",
      phoneError: "Lembani nambala ya foni kapena WhatsApp ya manambala osachepera 9.",
      methodError: "Sankhani momwe tikupezereni.",
    },
    sendError:
      "Pempho lanu silinatumizidwe. Onani intaneti yanu ndipo yesaninso, kapena titumizireni pa WhatsApp.",
    done: {
      title: "Talandira pempho lanu.",
      body: "Tikulumikizanani pasanathe maola 24, tsiku lililonse la sabata.",
      handoffTitle: "Sitepe yomaliza.",
      handoffBody: "Titumizireni chidulechi pa WhatsApp ndipo tikuyankhani pasanathe maola 24, tsiku lililonse.",
      handoffCta: "Tumizani pa WhatsApp",
      summaryTitle: "Zomwe mwatiuza",
      fix: "Pali cholakwika? Titumizireni uthenga pa WhatsApp ndipo tikonza.",
      again: "Yambani pempho latsopano",
    },
    summary: {
      services: "Ntchito",
      details: "Zambiri",
      property: "Malo",
      location: "Kumene",
      name: "Dzina",
      phone: "Foni",
      method: "Tikupezeni pa",
      notes: "Zina",
    },
  },
  footer: {
    hours: "Tili otsegula masiku 7 pa sabata",
    rights: "Ufulu wonse ndi wotetezedwa.",
  },
  placeholder: "Chithunzi chikufunika",
}

export const copy = { en, ny }
export type Lang = keyof typeof copy
