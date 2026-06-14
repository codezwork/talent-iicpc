# IICPC — SEO Overhaul Brief
**Prepared for:** Antigravity (Dev Team)
**Scope:** iicpc.com · codefest.iicpc.com · quantfest.iicpc.com · delta.iicpc.com
**Goal:** Rank on Google for competitive programming, quant finance, and recruiting-related searches in India and Southeast Asia.

---

## 1. Current SEO Audit — What's Broken

| Issue | Where | Impact |
|---|---|---|
| Title tags too generic / brand-only | All domains | Low keyword relevance |
| Meta descriptions are marketing slogans, not search-intent copy | All domains | Poor CTR from SERPs |
| `og:url` on codefest.iicpc.com still points to `https://iicpc.com/` | codefest | Canonical confusion |
| No structured data / JSON-LD | All domains | Missing rich results eligibility |
| No `robots.txt` or `sitemap.xml` detectable | iicpc.com | Pages may not be indexed |
| `<h1>` tags missing or overloaded | All domains | Weak keyword signals |
| Images lack descriptive `alt` text | All domains | Missed image search + accessibility |
| No canonical tags on subdomains | All domains | Duplicate content risk |
| Page title on Twitter card for codefest is cut off | codefest | Poor social sharing |
| No LocalBusiness / Organization schema | iicpc.com | Misses knowledge panel eligibility |

---

## 2. Target Keywords by Domain

### 2a. `iicpc.com` (Main / Hub)
**Primary:**
- `IICPC competitive programming India`
- `IIT competitive programming camp`
- `intercollegiate coding competition India`
- `competitive programming certification India`

**Secondary:**
- `coding bootcamp IIT students`
- `competitive programming community India`
- `programming contest IIT Madras`

### 2b. `codefest.iicpc.com`
**Primary:**
- `IICPC Codefest`
- `competitive programming championship India`
- `intercollegiate coding contest IIT`
- `algorithmic programming contest India`

**Secondary:**
- `data structures coding competition India`
- `coding contest for IIT students`
- `tech career competitive programming`

### 2c. `quantfest.iicpc.com`
**Primary:**
- `QuantFest IICPC`
- `quantitative finance competition India`
- `algorithmic trading contest students India`
- `quant competition IIT`

**Secondary:**
- `Jane Street competition India`
- `quant trading challenge students`
- `quantitative research competition India`

### 2d. `delta.iicpc.com`
**Primary:**
- `DELTA IICPC bootcamp`
- `trading bootcamp IIT students`
- `Optiver bootcamp India`
- `quant trading bootcamp IIT 2026`

**Secondary:**
- `Hudson River Trading student program India`
- `algorithmic trading internship IIT`
- `quant finance bootcamp India Singapore`

---

## 3. Meta Tags — Rewrite Specifications

### 3a. `iicpc.com` (Homepage)

```html
<title>IICPC — Competitive Programming & Quant Finance Contests for IIT Students</title>

<meta name="description"
  content="IICPC (InterCollegiate Informatic and Competitive Programming Camp) runs India's top coding and quant contests — Codefest, QuantFest, and the DELTA bootcamp — for students at IITs, IISc, NUS, and beyond." />

<meta name="keywords"
  content="IICPC, competitive programming India, IIT coding contest, Codefest, QuantFest, DELTA bootcamp, algorithmic trading competition, quant finance India" />

<!-- Open Graph -->
<meta property="og:title"        content="IICPC — Competitive Programming & Quant Finance for IIT Students" />
<meta property="og:description"  content="India's premier platform for competitive programming, quantitative finance, and algorithmic trading competitions. Backed by Optiver and Hudson River Trading." />
<meta property="og:url"          content="https://iicpc.com/" />
<meta property="og:type"         content="website" />
<meta property="og:image"        content="https://iicpc.com/IICPC2.png" />

<!-- Twitter Card -->
<meta name="twitter:card"        content="summary_large_image" />
<meta name="twitter:title"       content="IICPC — Competitive Programming & Quant Finance for IIT Students" />
<meta name="twitter:description" content="India's premier platform for competitive programming, quantitative finance, and algorithmic trading competitions." />
<meta name="twitter:image"       content="https://iicpc.com/IICPC2.png" />

<!-- Canonical -->
<link rel="canonical" href="https://iicpc.com/" />
```

---

### 3b. `codefest.iicpc.com` (Homepage)

```html
<title>IICPC Codefest — India's Premier Intercollegiate Competitive Programming Championship</title>

<meta name="description"
  content="Codefest by IICPC is the flagship competitive programming championship for IIT and top engineering students. Compete in algorithms, data structures, and problem-solving to unlock career opportunities at leading tech firms." />

<meta name="keywords"
  content="Codefest IICPC, competitive programming championship India, intercollegiate coding contest, IIT coding competition, algorithmic contest India, IICPC Codefest 2026" />

<!-- Open Graph -->
<meta property="og:title"        content="IICPC Codefest — India's Intercollegiate Competitive Programming Championship" />
<meta property="og:description"  content="Compete with the best programmers from IITs and top colleges. Codefest tests algorithms, data structures, and problem-solving at the highest level." />
<meta property="og:url"          content="https://codefest.iicpc.com/" />   <!-- FIX: was incorrectly set to iicpc.com -->
<meta property="og:type"         content="website" />
<meta property="og:image"        content="https://codefest.iicpc.com/IICPC2.png" />

<!-- Twitter Card -->
<meta name="twitter:card"        content="summary_large_image" />
<meta name="twitter:title"       content="IICPC Codefest — Intercollegiate Competitive Programming Championship" />
<meta name="twitter:description" content="India's top intercollegiate competitive programming contest. Backed by IICPC — join IIT students competing at the highest level." />
<meta name="twitter:image"       content="https://codefest.iicpc.com/IICPC2.png" />
<meta name="twitter:url"         content="https://codefest.iicpc.com/" />   <!-- FIX: was incorrectly set to iicpc.com -->

<!-- Canonical -->
<link rel="canonical" href="https://codefest.iicpc.com/" />
```

---

### 3c. `quantfest.iicpc.com` (Homepage)

```html
<title>IICPC QuantFest — National Quantitative Finance & Algorithmic Trading Competition</title>

<meta name="description"
  content="QuantFest by IICPC is India's leading national competition for quantitative research, algorithmic trading, and software systems. Backed by Jane Street and Tower Research Capital. Open to IIT and top engineering students." />

<meta name="keywords"
  content="QuantFest IICPC, quantitative finance competition India, algorithmic trading contest, quant competition IIT, Jane Street India, Tower Research Capital student competition, quant trading India 2025" />

<!-- Open Graph -->
<meta property="og:title"        content="IICPC QuantFest — Quantitative Finance & Algorithmic Trading Competition India" />
<meta property="og:description"  content="India's premier quant competition. Three rigorous stages testing analytical thinking, trading intuition, and problem-solving. Backed by Jane Street and Tower Research Capital." />
<meta property="og:url"          content="https://quantfest.iicpc.com/" />
<meta property="og:type"         content="website" />
<meta property="og:image"        content="https://quantfest.iicpc.com/og-image.png" />

<!-- Twitter Card -->
<meta name="twitter:card"        content="summary_large_image" />
<meta name="twitter:title"       content="IICPC QuantFest — Quant Finance & Algo Trading Competition India" />
<meta name="twitter:description" content="India's top quantitative finance competition for IIT students. Sponsored by Jane Street and Tower Research Capital." />
<meta name="twitter:image"       content="https://quantfest.iicpc.com/og-image.png" />

<!-- Canonical -->
<link rel="canonical" href="https://quantfest.iicpc.com/" />
```

---

### 3d. `delta.iicpc.com` (Homepage)

```html
<title>DELTA — IICPC Trading & Engineering Bootcamp 2026 | Optiver · Hudson River Trading</title>

<meta name="description"
  content="DELTA is a 4-day bootcamp for 2029 graduates from IITs, IISc, NUS, and NTU. Backed by Optiver and Hudson River Trading. Learn trading, algorithmic engineering, and quant problem-solving directly from firm engineers and traders. Aug 14–17, 2026." />

<meta name="keywords"
  content="DELTA IICPC bootcamp, Optiver bootcamp India, Hudson River Trading student program, quant trading bootcamp IIT, trading bootcamp 2026, algo trading bootcamp India Singapore, IICPC DELTA 2026" />

<!-- Open Graph -->
<meta property="og:title"        content="DELTA by IICPC — Trading & Engineering Bootcamp 2026" />
<meta property="og:description"  content="4 days. 30–40 students. Optiver and Hudson River Trading onsite. Hands-on trading and engineering work for IIT, IISc, NUS, and NTU 2029 graduates." />
<meta property="og:url"          content="https://delta.iicpc.com/" />
<meta property="og:type"         content="website" />
<meta property="og:image"        content="https://delta.iicpc.com/og-image.png" />

<!-- Twitter Card -->
<meta name="twitter:card"        content="summary_large_image" />
<meta name="twitter:title"       content="DELTA by IICPC — Trading & Engineering Bootcamp | Optiver · HRT" />
<meta name="twitter:description" content="4-day quant trading and engineering bootcamp backed by Optiver and Hudson River Trading. Open to 2029 graduates from IITs, NUS, NTU, IISc." />
<meta name="twitter:image"       content="https://delta.iicpc.com/og-image.png" />

<!-- Canonical -->
<link rel="canonical" href="https://delta.iicpc.com/" />
```

---

## 4. Structured Data (JSON-LD)

Add the following `<script type="application/ld+json">` blocks to the respective pages. These unlock rich results in Google Search (event cards, organization panels, breadcrumbs, etc.).

### 4a. Organization — add to `iicpc.com`

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IICPC — InterCollegiate Informatic and Competitive Programming Camp",
  "alternateName": "IICPC",
  "url": "https://iicpc.com",
  "logo": "https://iicpc.com/IICPC2.png",
  "sameAs": [
    "https://codefest.iicpc.com",
    "https://quantfest.iicpc.com",
    "https://delta.iicpc.com"
  ],
  "description": "IICPC runs India's premier competitive programming, quantitative finance, and algorithmic trading programs for students from IITs and top institutions.",
  "email": "sponsorship-inquiries@iicpc.com",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Ayush Kumar",
    "affiliation": "IIT Madras"
  }
}
```

### 4b. Event — add to `codefest.iicpc.com`

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "IICPC Codefest 2026",
  "description": "India's premier intercollegiate competitive programming championship for IIT and top engineering students.",
  "url": "https://codefest.iicpc.com",
  "organizer": {
    "@type": "Organization",
    "name": "IICPC",
    "url": "https://iicpc.com"
  },
  "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "image": "https://codefest.iicpc.com/IICPC2.png"
}
```

### 4c. Event — add to `quantfest.iicpc.com`

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "IICPC QuantFest 2025",
  "description": "India's leading national competition for quantitative research, algorithmic trading, and software systems.",
  "url": "https://quantfest.iicpc.com",
  "sponsor": [
    { "@type": "Organization", "name": "Jane Street", "url": "https://www.janestreet.com" },
    { "@type": "Organization", "name": "Tower Research Capital", "url": "https://www.tower-research.com" }
  ],
  "organizer": {
    "@type": "Organization",
    "name": "IICPC",
    "url": "https://iicpc.com"
  },
  "eventStatus": "https://schema.org/EventScheduled",
  "image": "https://quantfest.iicpc.com/og-image.png"
}
```

### 4d. Event — add to `delta.iicpc.com`

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "DELTA — IICPC Trading & Engineering Bootcamp 2026",
  "description": "A 4-day bootcamp for 2029 graduates from IITs, IISc, NUS, and NTU. Backed by Optiver and Hudson River Trading.",
  "startDate": "2026-08-14",
  "endDate": "2026-08-17",
  "url": "https://delta.iicpc.com",
  "sponsor": [
    { "@type": "Organization", "name": "Optiver", "url": "https://optiver.com" },
    { "@type": "Organization", "name": "Hudson River Trading", "url": "https://www.hudsonrivertrading.com" }
  ],
  "organizer": {
    "@type": "Organization",
    "name": "IICPC",
    "url": "https://iicpc.com"
  },
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "image": "https://delta.iicpc.com/og-image.png"
}
```

---

## 5. On-Page Heading Structure

Ensure each page has exactly **one `<h1>`** that contains the primary keyword. Current pages either have missing or brand-only h1s.

| Page | Recommended `<h1>` |
|---|---|
| `iicpc.com` | `IICPC — Competitive Programming & Quant Finance Programs for Top Engineering Students` |
| `codefest.iicpc.com` | `IICPC Codefest: India's Intercollegiate Competitive Programming Championship` |
| `quantfest.iicpc.com` | `IICPC QuantFest: National Quantitative Finance & Algorithmic Trading Competition` |
| `delta.iicpc.com` | `DELTA by IICPC: Trading & Engineering Bootcamp — Optiver & Hudson River Trading` |

**Sub-headings (`<h2>`, `<h3>`)** should also be descriptive and keyword-rich (not just "About Us" or "Our Team").

---

## 6. Sitemap & Robots.txt

### 6a. Create `sitemap.xml` for each domain

Example for `iicpc.com/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://iicpc.com/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

Repeat for each subdomain with all their crawlable pages (home, about, challenge, regionals, schedule, sponsors, etc.).

### 6b. Create `robots.txt` for each domain

```
User-agent: *
Allow: /
Sitemap: https://iicpc.com/sitemap.xml
```

Update the `Sitemap:` line per domain.

### 6c. Submit to Google Search Console

- Add all four domains (`iicpc.com`, `codefest.iicpc.com`, `quantfest.iicpc.com`, `delta.iicpc.com`) as separate properties in Google Search Console.
- Submit the sitemap for each.
- Request indexing for the homepage of each domain.

---

## 7. Image Alt Text

All images across the four domains must have descriptive `alt` attributes. Current state: most are empty or generic.

Examples:

```html
<!-- Logo -->
<img src="/IICPC2.png" alt="IICPC — InterCollegiate Informatic and Competitive Programming Camp logo" />

<!-- Sponsor logos -->
<img src="/sponsors/optiver.svg" alt="Optiver — Co-title sponsor of DELTA IICPC Bootcamp" />
<img src="/sponsors/hrt.svg"     alt="Hudson River Trading — Diamond sponsor of DELTA IICPC Bootcamp" />

<!-- Team headshots -->
<img src="/ayushk-profile.jpg"   alt="Ayush Kumar, Founder of IICPC, IIT Madras" />
```

Apply this pattern to every `<img>` tag site-wide.

---

## 8. Internal Linking

The four subdomains are currently silos. Add a **consistent cross-navigation footer** to all domains with explicit anchor text:

```html
<a href="https://iicpc.com">IICPC Home</a>
<a href="https://codefest.iicpc.com">Codefest — Coding Competition</a>
<a href="https://quantfest.iicpc.com">QuantFest — Quant Finance Competition</a>
<a href="https://delta.iicpc.com">DELTA — Trading Bootcamp</a>
```

This passes link equity across the ecosystem and helps Google understand the relationship between the properties.

---

## 9. Page Speed & Technical

- **Preload the hero image** on all pages: `<link rel="preload" as="image" href="/IICPC2.png" />`
- **Add `loading="lazy"`** to all below-fold images.
- **Compress images** — the current PNG logos should be served as WebP with fallback.
- **Add `<link rel="preconnect">`** for YouTube embed on delta.iicpc.com to reduce render-blocking:
  ```html
  <link rel="preconnect" href="https://www.youtube-nocookie.com" />
  ```

---

## 10. Content Gaps to Fill (New Pages / Sections)

These are keyword opportunities that currently have no dedicated page:

| Recommended Page | Target Keyword | Domain |
|---|---|---|
| `/about` with rich team + mission copy | `IICPC about`, `IIT competitive programming org` | iicpc.com |
| `/blog` or `/resources` with CP editorial | `competitive programming tips India`, `how to prepare for Codefest` | iicpc.com or codefest |
| `/past-editions` with results & stats | `Codefest 2025 results`, `QuantFest 2024 winners` | Both |
| `/faq` page | `IICPC eligibility`, `who can apply DELTA` | delta.iicpc.com |
| Sponsor landing pages or sponsor section with named firms | `Optiver recruiting India`, `Jane Street India campus` | quantfest, delta |

---

## 11. Quick-Win Checklist

These changes take under an hour each and have immediate impact:

- [ ] Fix `og:url` and `twitter:url` on `codefest.iicpc.com` (currently points to `iicpc.com`)
- [ ] Add `<link rel="canonical">` to every page
- [ ] Add `sitemap.xml` + `robots.txt` to all four domains
- [ ] Rewrite all `<title>` and `<meta name="description">` tags per Section 3
- [ ] Add Organization JSON-LD to `iicpc.com`
- [ ] Add Event JSON-LD to all three event/program subdomains
- [ ] Add `alt` text to all images
- [ ] Submit all four domains to Google Search Console

---

*Document prepared by Claude (Anthropic) based on audit of iicpc.com, codefest.iicpc.com, quantfest.iicpc.com, and delta.iicpc.com — June 2026.*
