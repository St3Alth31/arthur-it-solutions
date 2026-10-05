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

Until it is set, the form ends with a **Send on WhatsApp** button that carries the visitor's request summary to +265 881 032 540, so no request is lost or falsely marked as sent.

## Before launch

- The Chichewa text in `content/copy.ts` is a draft. A native speaker needs to check it.
- Replace the brand colour values in `app/globals.css` with the client's exact hex codes.
- Replace the stand-in photos marked below with real ones.

## Branding

The brand mark is text only (`components/wordmark.tsx`). There is no logo file.

## Images

To change a photo, put the file in `public/images/` and set that slot's `src` in `content/site.ts`, for example `src: "/images/hero.jpg"`. A slot with `src: null` shows its brief on a placeholder instead.

**Stand-in** means a placeholder photo, mostly stock, used until a real one is sourced. **Real** means a photo of an Arthur I.T job.

| Section | Brief | Orientation | Ratio | Minimum size | Status |
|---|---|---|---|---|---|
| Hero | Technician mounting camera | Landscape | 16:9 | 2400 × 1350 px | Stand-in |
| Services: CCTV | Wall-mounted dome camera | Landscape | 4:3 | 1600 × 1200 px | Stand-in |
| Services: Access control | Fingerprint reader door | Landscape | 4:3 | 1600 × 1200 px | Stand-in |
| Services: Gate motors | Sliding gate motor | Landscape | 4:3 | 1600 × 1200 px | Stand-in |
| Services: Fire alarms | Ceiling smoke detector | Landscape | 4:3 | 1600 × 1200 px | Stand-in |
| Services: Electric fencing | Wall-top electric fence | Landscape | 4:3 | 1600 × 1200 px | Stand-in |
| Services: Power & solar | Rooftop solar panels | Landscape | 4:3 | 1600 × 1200 px | Stand-in |
| Trust | Arthur team portrait | Portrait | 4:5 | 1200 × 1500 px | Real (only 780 × 1040, needs a larger copy) |
| Recent work 1 | Neat cable runs | Landscape | 4:3 | 1600 × 1200 px | Stand-in |
| Recent work 2 | Finished gate install | Landscape | 4:3 | 1600 × 1200 px | Stand-in |
| Recent work 3 | DVR cabinet wiring | Landscape | 4:3 | 1600 × 1200 px | Stand-in |
| Recent work 4 | Inverter battery rack | Landscape | 4:3 | 1600 × 1200 px | Stand-in (replace first) |
| Recent work 5 | Perimeter fence corner | Landscape | 4:3 | 1600 × 1200 px | Stand-in |
| Recent work 6 | Team on site | Portrait | 3:4 | 1200 × 1600 px | Stand-in (cropped from a landscape photo, 960 × 1280) |

Sourcing notes:

- **Hero:** text sits on the left and bottom of this image, so keep the subject right of centre. On phones it is cropped to a tall, narrow strip, so the subject should hold up when cropped tight.
- **Recent work:** this section is meant for photos of Arthur's own installs. Put the neat cable runs first: a past customer complained about visible cabling, so tidy wiring is what this section most needs to show.
- **Recent work 4:** replace this one first. The meter boxes are labelled for an Indian power utility, and its messy wiring is the opposite of what this section should show.
- **Recent work grid:** it is built for exactly one portrait photo, kept third in the `work` list in `content/site.ts`. Changing the number of portrait photos or their position leaves gaps in the grid.
- **Services:** real install photos are better than stock wherever the client has them.
