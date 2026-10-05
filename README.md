# Arthur I.T Solutions website

Landing page and quote form for Arthur I.T Solutions, a security systems and backup power installer in Blantyre and Lilongwe, Malawi.

Built with Next.js 16 and Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where things live

| What | File |
|---|---|
| Contact details, image slots | `content/site.ts` |
| All page copy, English and Chichewa | `content/copy.ts` |
| Brand colours (CSS variables) | `app/globals.css` |
| Quote form | `components/quote-form.tsx` |

## Quote form submissions

Where submissions should go has not been decided yet. Set `NEXT_PUBLIC_QUOTE_ENDPOINT` in `.env.local` to a URL that accepts a JSON POST, such as a Formspree form.

Until it is set, the form ends with a **Send on WhatsApp** button that carries the visitor's request summary to 0881 032 540, so no request is lost or falsely marked as sent.

## Before launch

- The Chichewa text in `content/copy.ts` is a draft. A native speaker needs to check it.
- Replace the brand colour values in `app/globals.css` with the client's exact hex codes.
- Replace the text wordmark (`components/wordmark.tsx`) with the logo file.
- Add the photos listed below.

## Images to source

Until a photo is supplied, its slot shows the brief written on a placeholder. To add one, put the file in `public/images/` and set that slot's `src` in `content/site.ts`, for example `src: "/images/hero.jpg"`.

| Section | Brief | Orientation | Ratio | Minimum size |
|---|---|---|---|---|
| Hero | Technician mounting camera | Landscape | 16:9 | 2400 × 1350 px |
| Services: CCTV | Wall-mounted dome camera | Landscape | 4:3 | 1600 × 1200 px |
| Services: Access control | Fingerprint reader door | Landscape | 4:3 | 1600 × 1200 px |
| Services: Gate motors | Sliding gate motor | Landscape | 4:3 | 1600 × 1200 px |
| Services: Fire alarms | Ceiling smoke detector | Landscape | 4:3 | 1600 × 1200 px |
| Services: Electric fencing | Wall-top electric fence | Landscape | 4:3 | 1600 × 1200 px |
| Services: Power & solar | Rooftop solar panels | Landscape | 4:3 | 1600 × 1200 px |
| Trust | Arthur team portrait | Portrait | 4:5 | 1200 × 1500 px |
| Recent work 1 | Neat cable runs | Landscape | 4:3 | 1600 × 1200 px |
| Recent work 2 | Finished gate install | Landscape | 4:3 | 1600 × 1200 px |
| Recent work 3 | DVR cabinet wiring | Landscape | 4:3 | 1600 × 1200 px |
| Recent work 4 | Inverter battery rack | Landscape | 4:3 | 1600 × 1200 px |
| Recent work 5 | Perimeter fence corner | Landscape | 4:3 | 1600 × 1200 px |
| Recent work 6 | Team on site | Landscape | 4:3 | 1600 × 1200 px |

Sourcing notes:

- **Hero:** text sits on the left and bottom of this image, so keep the subject right of centre. On phones it is cropped to a tall, narrow strip, so the subject should hold up when cropped tight.
- **Recent work:** use photos of the client's own installs only, never stock images. Put the neat cable runs first: a past customer complained about visible cabling, so tidy wiring is what this section most needs to show.
- **Services:** real install photos are better than stock wherever the client has them.
