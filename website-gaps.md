# CON/FORM Website — Gap Analysis & Improvement Plan
> Based on `website improvement.md` audit. Items already in the codebase are excluded.

---

## ✅ What We Already Have

| Feature | Location |
|---|---|
| Landing / Home page | `app/page.tsx` |
| Hero with Date + CTA | `components/Hero.tsx` |
| Countdown Timer | `components/Countdown.tsx` |
| Artists / Performers page | `app/artists/page.tsx` |
| Tickets / Registration | `app/tickets/page.tsx` & `app/register/page.tsx` |
| FAQ page | `app/faq/page.tsx` |
| Sponsors / Partners page | `app/sponsors/page.tsx` |
| About page | `app/about/page.tsx` |
| Contact page | `app/contact/page.tsx` |
| Experience / Schedule page | `app/experience/page.tsx` |
| Network / Community | `app/network/page.tsx` |
| Partners marquee on homepage | `app/page.tsx` (inline section) |
| Stats section (200+ alumni, 70+ artists, 500+ attendees) | `app/page.tsx` |
| 3 CTAs on homepage (Get Tickets, Register) | `components/Hero.tsx` |
| "Presented by Loom Rooms" footprint | `components/Footer.tsx` |
| Cultural narrative messaging | `components/VisionSection.tsx` |

---

## ❌ What We DON'T Have (Priority Order)

### 1. 🎤 Speakers Page — HIGH PRIORITY
**The suggestion:** Add a dedicated Speakers page.

**What's missing:** There is no `/speakers` route anywhere in the app directory.

**Structure needed:**
- Speaker photo
- Name + Title
- Short bio / "Why they matter"
- Grid layout, similar to the artists page

**File to create:** `app/speakers/page.tsx`

---

### 2. 📰 Newsletter Capture / Email Signup — HIGH PRIORITY
**The suggestion:** Add a newsletter email capture section.

> "Join the CON/FORM community."

**What's missing:** There is no email capture form anywhere on the site (not in the homepage, footer, or any page).

**What to build:**
- A dedicated section on the homepage (before the footer)
- Input field + submit button
- Copy: *"Join the CON/FORM community — get updates, next edition news, and creative opportunities."*
- Connected to a mailing list (Supabase table or external service like Mailchimp/Resend)

**Files to modify/create:**
- `components/NewsletterSection.tsx` (new component)
- `app/page.tsx` (import and place the component)
- `lib/supabase/` or API route for email submission

---

### 3. 💬 Social Proof / Testimonials Section — MEDIUM PRIORITY
**The suggestion:** Add social proof — quotes from creatives, media mentions.

**What's missing:** There are no testimonial or quote cards on the homepage or any page.

**What to build:**
- Section with 3–5 quote cards
- Quote text, name, and title/role of the person
- Can be real or placeholder quotes from collaborators

**Files to modify/create:**
- `components/TestimonialsSection.tsx` (new component)
- `app/page.tsx` (import and place the component)

---

### 4. 📦 Press / Media Kit Section — MEDIUM PRIORITY
**The suggestion:** Add a press / media kit for bloggers and journalists.

**What's missing:** There is no `/media` or `/press` route, and no media kit download link anywhere.

**What to build:**
- A simple page or section with:
  - Event description (downloadable PDF or copyable text block)
  - Logo downloads (PNG/SVG)
  - Press photos (gallery)
  - Media contact name + email
- Could also live as a section on the About page

**Files to create:**
- `app/press/page.tsx`

---

### 5. 🔁 3 Repeated CTAs on Homepage — MEDIUM PRIORITY
**The suggestion:** Homepage should repeat 3 CTAs throughout the scroll:
1. Get Tickets
2. Apply as Artist
3. Partner With Us

**What's missing:** The homepage currently only has "Get Tickets" and "Register Now" in the Hero. There is no **"Apply as Artist"** CTA and no **"Partner With Us"** CTA on the homepage body sections. The CTAs are not repeated throughout the scroll.

**What to build:**
- Add "Apply as Artist" button linking to `/register` (with artist flag)
- Add "Partner With Us" button linking to `/sponsors` or `/contact`
- Repeat CTAs at bottom of major homepage sections

**Files to modify:**
- `app/page.tsx` (add CTAs to Experience and CTA sections)
- `components/Hero.tsx` (optionally add third CTA)

---

### 6. 🗺️ Venue / Location Detail Section — LOW PRIORITY
**The suggestion:** Create a dedicated venue section with map, address, transport info, parking, nearby accomodation.

**What's missing:** Venue (UNILAG • Egbeda Lagos) is mentioned in the Hero text, but there is no expanded venue section or page with a map or practical transport info.

**What to build:**
- Embedded Google Map iframe
- Address block
- Transport + parking notes
- Could be a section on the About page or Experience page

**Files to modify:**
- `app/experience/page.tsx` or `app/about/page.tsx` (add Venue section)

---

### 7. 📖 "Why CON/FORM Exists" Explicit Story Section — LOW PRIORITY
**The suggestion:** Make the cultural origin story explicit on the site.

**What's missing:** The cultural narrative is hinted at in copy across pages, but there is no standalone "Why We Exist" or "The Story" section that tells it clearly (Nigerian creatives, broken systems, building new culture).

**What to build:**
- A rich text section on the About page OR as a homepage section
- Could include timeline, founding story, or manifesto-style layout

**Files to modify:**
- `app/about/page.tsx` (expand with story section)

---

## 📋 Implementation Priority Summary

| # | Feature | Priority | File(s) |
|---|---|---|---|
| 1 | Speakers Page | 🔴 High | `app/speakers/page.tsx` |
| 2 | Newsletter Capture | 🔴 High | `components/NewsletterSection.tsx`, `app/page.tsx` |
| 3 | Social Proof / Testimonials | 🟡 Medium | `components/TestimonialsSection.tsx`, `app/page.tsx` |
| 4 | Press / Media Kit | 🟡 Medium | `app/press/page.tsx` |
| 5 | 3 Repeated CTAs on Homepage | 🟡 Medium | `app/page.tsx`, `components/Hero.tsx` |
| 6 | Venue Detail Section | 🟢 Low | `app/experience/page.tsx` |
| 7 | "Why CON/FORM Exists" Story | 🟢 Low | `app/about/page.tsx` |

---

## 🧭 Suggested Execution Order

1. **Speakers Page** — most impactful for credibility, high visibility
2. **Newsletter Capture** — long-term asset, email list is gold
3. **Testimonials** — social proof boosts ticket conversion
4. **3 CTAs on Homepage** — quick win, improves conversion immediately
5. **Press / Media Kit** — helps with publicity momentum
6. **Venue section** — practical info people look for
7. **"Why CON/FORM Exists"** — deepens brand narrative on About page
