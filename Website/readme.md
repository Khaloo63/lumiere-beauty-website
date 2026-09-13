# Lumière Beauty Atelier — website

A hand-built static site for **lumierebeautysf.com**. No page builder, no monthly fee,
nothing that can break on its own.

Booking, deposits and payments still run through Square exactly as before — every "Book"
button on this site links straight into the existing Square appointment flow.

```
lumiere-site/
  index.html      Home — hero, about, 6 services, Naz at work, portfolio, studio, FAQ
  services.html   Full menu, all 11 treatments with prices
  care.html       Pre-care, aftercare, contraindications & eligibility
  policy.html     Studio policy
  contact.html    Address, hours, map, WhatsApp
  styles.css      All styling — colours and fonts are at the very top
  site.js         Mobile menu, scroll animations, video handling
  sitemap.xml     Tells Google which pages exist
  robots.txt      Tells Google it's welcome
  favicon.svg     Browser-tab icon
  images/         Naz's photos + the video loop
  social/         The link-preview image (WhatsApp, Facebook, Instagram)
```

Whole site: **1.9 MB across 29 files.** It loads more or less instantly.

---

## Putting it online (free)

1. Go to **https://app.netlify.com/drop**
2. Drag the whole `lumiere-site` folder onto the page
3. Create the free account when prompted, so the site stays permanent
4. **Site configuration → Change site name** → something like `lumiere-beauty-atelier`

To update later: drag the folder onto the same site's **Deploys** tab. That's the entire workflow.

### Connecting the domain

The domain is registered at **Hostinger** (3 years, until ~July 2029).

In Netlify: **Domain management → Add a domain** → enter `lumierebeautysf.com` → Netlify shows
you DNS records → paste those into Hostinger's DNS settings.

HTTPS is issued automatically and free. DNS changes can take a few hours to spread — normal.

> 📅 **Reminder for July 2029:** Hostinger renews .com at about $19.99/yr. Moving the domain to
> Porkbun (~$11/yr) takes five minutes and breaks nothing.

---

## The photos

Every image is Naz's own work — no stock photography anywhere.

| File | What it is |
|---|---|
| `hero.jpg` | Healed powder brows + lip blush — the opening image |
| `card-powder-brows.jpg` | "Brows by Naz" healed result |
| `card-lip-blush.jpg` | Healed lip blush close-up |
| `card-lash-line.jpg` | Lash line detail |
| `card-korean-lash-lift.jpg` | Lash lift, the "after" half of a before/after |
| `card-brow-lamination.jpg` | Laminated and tinted brows |
| `card-brow-sculpt.jpg` | Sculpted brows |
| `artist.mp4` + `artist.jpg` | 8-second silent loop of Naz working, with its still frame |
| `studio.jpg` | Naz with a client in the treatment room |
| `cta.jpg` | The lounge, behind the booking band |
| `gallery-*.jpg` | Portfolio: brows, lips B/A, Korean lash lift B/A, lash detail, lamination |

Originals live in `OneDrive\Desktop\Lumiere images` and were left untouched. The iPhone `.HEIC`
files were converted to `.jpg` because browsers can't display HEIC.

### Swapping a photo later

Replace the file in `images/` keeping the same filename, then re-drag the folder to Netlify.
Nothing in the HTML needs editing.

New photos should be roughly: cards 900×600, portrait sections 1100×1375, portfolio 800×1067.
Keep each under ~250 KB (squoosh.app is free and does this).

---

## Still worth doing

- **Aftercare wording** — Square stores the aftercare instructions as images, so that text
  couldn't be copied across. What's in `care.html` was written from standard practice and
  **still needs Naz to read it and correct anything that differs from what she tells clients.**
  Everything else on the site is her exact wording.
- **Real reviews** — there's deliberately no testimonials section. Invented reviews are both
  dishonest and risky. Once there are 4–6 genuine Google reviews they can be added with names.
- **One page per service** — the biggest remaining SEO win. Competitors ranking for
  "powder brows San Francisco" all have a dedicated page per treatment; this site doesn't yet.
- **Google Search Console** — once live, verify the domain at
  search.google.com/search-console and submit `sitemap.xml`.

---

## Editing

Plain HTML and CSS — open in any text editor.

Colours and fonts are all in the `:root` block at the top of `styles.css`. Change one value
there and it updates everywhere.

The Square booking link used by every button:
`https://book.squareup.com/appointments/tr85sn3fzjhitg/location/L75AJ07R4BMFN/services`

## Previewing locally

Double-click `index.html` — it works straight from the file system. During development it also
runs at `http://localhost:4455` via the `lumiere` entry in `.claude/launch.json`.
