# Node Website Customization Questionnaire

This questionnaire will help us set up and customize your ReFi local node website. Please complete each section as thoroughly as possible. Don't worry if you're unsure about some technical details — we'll work through them together.

> **Tip**: Look at existing node websites for inspiration:
> - [ReFi Barcelona](https://refibcn.cat)
> - [ReFi DAO](https://refidao.com)
> - [Regenerant Catalunya](https://regenerant.refibcn.cat)

---

### Getting Started

#### The Process

1. **Fork the repository** — Create your website repo from the template
2. **Add assets & materials** — Upload images, docs, and reference materials to your repo
3. **Answer this questionnaire** — Guide how the website should look and be structured
4. *(Optional)* **Quick call** — Walk through questions together
5. **Website customization** — We'll build based on your inputs
6. **Publish website** 🎉

#### Key Folders in Your Repository

| Folder | Purpose | File Types |
|--------|---------|------------|
| `assets/` | Visual assets (logos, images, photos) | PNG, JPG, SVG |
| `content/` | Actual content published on the website | Markdown (.md) |
| `docs/` | Internal documentation & reference materials | Any format |

> **Start by adding files to these folders** — the more materials you provide (docs, info, images), the better we can customize your website.

---

### How to Use This Questionnaire

**You don't need to complete everything at once!** This questionnaire supports gradual development:

1. **Start with the essentials** (Sections 1-3): Basic info, assets, and branding get you a working site
2. **Add content over time** (Sections 4-6): Fill in navigation, pages, and content drafts as you go
3. **Refine and expand**: Come back to add more content or polish

Each section can be completed independently, allowing you to launch with a minimal site and grow it organically.

---

## 1. Basic Site Information

### 1.1 Site Name
What is the name of your node/organization?

*Example: "ReFi Barcelona", "ReFi Provence", "ReFi Mediterranean"*
```
Your answer: ReFi Mediterranean
```

### 1.2 Tagline (Optional)
A short phrase that appears after your site name in browser tabs and search results.

*Example: "A network society to regenerate the earth"*
*Example: "Regenerative Finance for the Mediterranean"*
```
Your answer: Regenerative Finance for the Mediterranean
```

### 1.3 Domain
What domain will your website use?

> **Tip**: We recommend starting with **GitHub Pages** (free, instant setup) and adding a custom domain later when you're ready. This lets you launch quickly and upgrade when needed.

| Option | Example | Effort | Cost |
|--------|---------|--------|------|
| **A) GitHub Pages** (recommended start) | `refidao.github.io/refi-provence` | None | Free, no domain setup required |
| **B) Subdomain of ReFi DAO** | `provence.refidao.com` | Low | Free, managed by ReFi DAO |
| **C) Custom domain** | `refiprovence.org` | Medium | ~$10-15/year |

```
Your choice for launch:
[ ] A) GitHub Pages — Start here, upgrade later
[x] B) Subdomain of ReFi DAO
[ ] C) Custom domain (I already have one): _______________

```

### 1.4 Contact Information
Primary contact email for the website.

*Example: contact@refiprovence.org, hello@refibcn.cat*
```
Your answer: TODO: choose primary contact email (e.g., hello@refimed.org / refimed@refidao.com / contact@refimed.xyz)
```

### 1.5 GitHub Repository
Where is your website repository hosted?

> **Note**: You should fill this questionnaire **after forking the template**. If you haven't forked yet, do that first: [Fork the template](https://github.com/ReFiDAO/quartz-refi-template) → **Fork** → Create repository.

```
Organization: ReFiDAO (e.g., "ReFiDAO", "refibcn")
Repository name: ReFi-Mediterranean (e.g., "refi-provence-website")
Repository URL: TODO: add actual repo URL once forked (e.g., https://github.com/ReFiDAO/refi-mediterranean)
```

---

## 2. Assets Checklist

Please gather the following assets and upload them to the `assets/` folder in your repository. These will be used throughout the website customization.

### Required Assets

| Asset | Status | Filename |
|-------|--------|----------|
| Logo (header) | [x] Ready  [ ] In progress  [ ] Need help | `Node Logo Olive Gold 2.jpg` (alt: `Node Logo Ocean.png`, `Node Logo Stone Cirlce.png`) |
| Favicon | [ ] Ready  [x] In progress  [ ] Need help | TODO: generate `favicon.png` (32x32/64x64) derived from the circular logo mark |
| Hero image | [x] Ready  [ ] In progress  [ ] Need help | `Social Media Banner Olive Gold.jpg` (alt: `Social Media Banner Ocean.jpg`, `Social Media Banner Stone Circle.jpg`) |

### Recommended Assets

| Asset | Status | Notes |
|-------|--------|-------|
| Team photos | [ ] Ready  [x] In progress  [ ] N/A | TODO: 1:1 headshots for core team (min 400x400px) |
| Partner logos | [ ] Ready  [x] In progress  [ ] N/A | TODO: matching pool donors + partners (PNG with transparent bg) |
| Event photos | [ ] Ready  [x] In progress  [ ] N/A | Use existing social assets for now; TODO add real event photos |
| Project images | [ ] Ready  [x] In progress  [ ] N/A | Use GG23 round graphics for now; TODO add initiatives/projects imagery |

### Image Guidelines

- **Hero images**: Minimum 1200px wide, landscape orientation
- **Team photos**: Square format (1:1), minimum 400x400px
- **Logos**: PNG with transparent background, or SVG
- **Event photos**: Minimum 800px wide

---

## 3. Branding & Visual Identity

### 3.1 Color Scheme

Choose a color scheme that reflects your node's identity. You can either:
- **A)** Select from existing ReFi node color schemes (see examples below)
- **B)** Provide your own brand colors

#### Option A: Select from Existing Schemes

| Scheme | Primary | Description | Best For |
|--------|---------|-------------|----------|
| **Ocean Blue** (ReFi BCN) | Navy (#092045) | Professional, trustworthy, calm | General ReFi nodes |
| **Forest Green** (Regenerant) | Forest (#214033) | Natural, ecological, grounded | Bioregional/environmental focus |
| **Mediterranean** | Teal (#1E7A9F) | Coastal, warm, inviting | Mediterranean/coastal regions |
| **Earth Tones** | Warm brown (#8B4513) | Earthy, organic, rooted | Rural/agricultural focus |
| **Sunset** | Coral (#E67E50) | Energetic, warm, welcoming | Community/social focus |

```
Your choice: [ ] Ocean Blue  [ ] Forest Green  [x] Mediterranean  [ ] Earth Tones  [ ] Sunset  [ ] Custom (see Option B)
```

#### Option B: Custom Colors

If you have existing brand colors, provide them here:

```
Primary color (main brand color): #_______________
Secondary color (links, accents): #_______________
Background color (light mode): #_______________ (or "default warm sand")
```

> **Need help picking colors?** Try [Coolors](https://coolors.co/) or [Adobe Color](https://color.adobe.com/)

### 3.2 Typography Style

What feeling should your typography convey?

| Style | Fonts | Best For |
|-------|-------|----------|
| **Modern & Clean** | Inter, Space Grotesk | Tech-forward nodes |
| **Classic & Professional** | Merriweather, Source Serif | Established organizations |
| **Friendly & Approachable** | Nunito, Poppins | Community-focused nodes |
| **Bold & Expressive** | Outfit, Sora | Creative/activist nodes |

```
Your preference: [ ] Modern  [x] Classic  [ ] Friendly  [ ] Bold  [ ] No preference (use default)
```

### 3.3 Logo & Favicon

Please provide:

| Asset | Format | Size | Required? |
|-------|--------|------|-----------|
| Logo (header) | PNG or SVG | Min 200px wide | Yes |
| Favicon | PNG | 32x32 or 64x64 | Yes |
| Logo (dark mode) | PNG or SVG | Same as header logo | Optional |

```
Do you have a logo ready? [x] Yes  [ ] No, need help creating one
File location/link: `03 Libraries/ReFi-Mediterranean/assets/Node Logo Olive Gold 2.jpg` (alts: `Node Logo Ocean.png`, `Node Logo Stone Cirlce.png`)
```

---

## 4. Navigation Structure

### 4.1 Main Navigation Links

What pages should appear in your main navigation menu? List them in order.

| # | Display Name | Link Type | Destination |
|---|--------------|-----------|-------------|
| 1 | About | [x] Internal page  [ ] External link | `/about` |
| 2 | Vision | [x] Internal page  [ ] External link | `/vision` |
| 3 | Nodes & Partners | [x] Internal page  [ ] External link | `/nodes-and-partners` |
| 4 | Initiatives | [x] Internal page  [ ] External link | `/initiatives` |
| 5 | Get involved | [x] Internal page  [ ] External link | `/get-involved` |
| 6 | Contact | [x] Internal page  [ ] External link | `/contact` |

**Examples from existing nodes:**

*ReFi Barcelona:*
- Regenerant Catalunya → https://regenerant.refibcn.cat/
- Ecosystem Map → https://mapa.refibcn.cat
- Blog → /blog
- Contact → mailto:hola@refibcn.cat

*ReFi DAO:*
- Community → /community
- Resources → /resources-hub
- Media → /media
- About → /about

### 4.2 Footer Links

What links should appear in the footer?

*Example: "GitHub", "Twitter/X", "Discord", "ReFi DAO"*
```
Your links:
- ReFi DAO → https://refidao.com
- Twitter/X → https://x.com/Refi_Med
- GitHub → TODO: add repo URL
- Telegram → TODO: add public group link (or keep private and use “DM us”)
```

### 4.3 Social Media Links

| Platform | URL |
|----------|-----|
| Twitter/X | https://x.com/Refi_Med |
| Discord | TODO |
| Telegram | TODO (contacts mentioned in GG23 doc: @regenavocado, @louizfe) |
| LinkedIn | |
| GitHub | TODO |
| Other | |

---

## 5. Content Structure

### 5.1 Homepage Sections

Which sections would you like on your homepage? Check all that apply:

| Section | Description | Include? | Link/Page |
|---------|-------------|----------|----------|
| **Hero** | Large banner with title, tagline, and CTA | [x] Yes | `/` |
| **What We Do** | Grid of activities/services | [x] Yes | `/about` |
| **Featured Project** | Highlight a key initiative | [x] Yes | `/initiatives` |
| **Past Events** | Showcase previous activities | [x] Yes | `/events` |
| **Team/About Us** | Introduce your core team | [x] Yes | `/about` |
| **Partners** | Display partner/sponsor logos | [x] Yes | `/nodes-and-partners` |
| **Get Involved** | Call to action for participation | [x] Yes | `/get-involved` |
| **What is ReFi?** | Educational section about ReFi | [x] Yes | `/resources` |
| **Member Organizations** | Member organizations: logos + links + short descriptions | [x] Yes | `/nodes-and-partners` |
| **Initiatives** | Past and current initiatives (cards/timeline) | [x] Yes | `/initiatives` |

### 5.2 Additional Pages

What other pages do you need beyond the homepage?

| Page | Purpose | Priority |
|------|---------|----------|
| About | What ReFi Mediterranean is; bioregional framing; who we are;how we work | [x] High  [ ] Medium  [ ] Low |
| Vision | What we want to achieve; our values; our mission | [x] High  [ ] Medium  [ ] Low |
| Nodes & Partners | List of member organizations; their logos; their short descriptions | [x] High  [ ] Medium  [ ] Low |
| Events | List of past and current events; their logos; their short descriptions | [x] High  [ ] Medium  [ ] Low |
| Resources | Shared library of resources (curated + reusable across the network): docs, guides, toolkits, references, media; ideally tagged/categorized and linkable | [x] High  [ ] Medium  [ ] Low |
| Initiatives | List of past and current initiatives; their logos; their short descriptions | [x] High  [ ] Medium  [ ] Low |
| Get involved | Call to action for participation | [x] High  [ ] Medium  [ ] Low |
| Contact | Contact form; contact information; social media links | [x] High  [ ] Medium  [ ] Low |

### 5.3 Multi-Language Support

Does your website need multiple languages?

```
[ ] No, single language only
[x] Yes, multiple languages

If yes, which languages?: English (EN), Spanish (ES), Italian (IT)

Default language: English (EN)
```

---

## 6. Content Drafts

### 6.1 Hero Section

**Main Title** (one impactful sentence):

*Example: "Seeding pathways toward just and resilient economies"*
```
Your title: A bioregional node for holistic regeneration
```

**Description** (2-3 sentences about your node):

*Example: "We connect Catalonia's regenerative movements with global innovations in finance, technology, and governance to accelerate the transition toward a life-centered economy."*
```

Your description:
ReFi Mediterranean is a bioregional coordination node advancing regenerative finance across the Mediterranean.
We connect local regenerators and Web3 public goods communities, and we experiment with impact-driven funding (ImpactQF / Tunable Quadratic Funding) to support real-world ecological, social, and economic impact.
We prioritize transparency and accountability via standardized impact reporting (e.g., Karma GAP activities & outputs).
```

**Call-to-Action Button**:
```
Button text: Get involved
Button link: /#get-involved
```

### 6.2 What We Do

List 3-6 key activities your node focuses on:
```
| Activity | Icon | Short Description |
|----------|------|-------------------|
| 1. Funding rounds | 💸 | Run bioregional funding rounds that reward demonstrated impact (not just proposals). |
| 2. Impact reporting & evaluation | 📊 | Support projects to report activities/outputs and strengthen verification using tools like Karma GAP. |
| 3. Bioregional ecosystem building | 🤝 | Convene local nodes, land-based projects, and partner networks across the Mediterranean. |
| 4. ReFi tools onboarding | 🧰 | Help local regenerators integrate Web3 / ReFi tools where it supports their mission. |
| 5. Public goods partnerships | 🧩 | Collaborate with aligned networks and matching partners to grow shared capacity. |
| 6. Storytelling & communications | 📣 | Communicate learnings, opportunities, and impact to donors and communities. |
```
> **Icon suggestions**: Use emoji or describe what icon you'd like (e.g., "money/funding", "people/community", "plant/nature")

### 6.3 Team Members

| Name | Role | Bio (2-3 sentences) | Photo? | LinkedIn/Twitter |
|------|------|---------------------|--------|------------------|
| Regen Avocado | Round Operator; Steward | Founder Rifai Sicilia, member ReFi Italia, steward ReFi Mediterranean, contributor to Community Success at Karma. Leads bioregional grantmaking experiments for regenerative impact. | [ ] Yes | https://x.com/regenavocado |
| Luiz Fernando | Round Operator; Ops Lead | Founder & lead of ReFi Barcelona; core steward & operations lead at ReFi DAO. Supports coordination, operations, and scaling local nodes and funding mechanisms. | [ ] Yes | https://x.com/louizfe |
| TODO | Steward / Contributor | TODO: add additional core stewards, advisors, and collaborators. | [ ] Yes | TODO |
| TODO | Steward / Contributor | TODO: add additional core stewards, advisors, and collaborators. | [ ] Yes | TODO |

---

## 7. Vision & Requirements

Use this section to share any additional context that will help guide the website development.

### 7.1 Overall Vision

What do you want visitors to feel or understand when they land on your website?

```
We want visitors to quickly understand that ReFi Mediterranean is a bioregional coordination node supporting real-world regeneration.
The site should feel grounded, warm, and Mediterranean—while still rigorous and trustworthy in how we talk about funding, evaluation, and impact.
Visitors should leave knowing what we do, how to participate (as projects/donors/partners), and where to find current opportunities (rounds/events).

The site should help (re)activate conversations about what ReFi Mediterranean is and what we could become—our online presence will shape our identity.
Visitors should quickly see: what we are, who the member organizations are, what initiatives exist (past/current), and how to engage.
```

### 7.2 Key Goals

What are the main goals for this website? (e.g., attract partners, onboard community members, showcase projects, raise awareness)

```
- Create a lightweight public “front door” for ReFi Mediterranean.
- Make member organizations visible (logo + link to their website + short descriptions).
- Present initiatives clearly (past/current), starting with:
  - GG23 / ImpactQF (past initiative / mechanism experimentation)
  - Bioregional reforestation round (current initiative placeholder from Silvi – we are one of the bioregional partners)
- Use the website to catalyze internal alignment: what services/capabilities do we offer as a network?
- Provide simple CTAs: follow, contact, partner, join.
```

### 7.3 Inspirations & References

Are there any websites, designs, or aesthetics you'd like us to draw inspiration from?

```
Brand references (already available in `assets/`):
- Olive-gold circular motif + serif wordmark (“ReFi Mediterranean”): `Node Logo Olive Gold 2.jpg`, `Social Media Banner Olive Gold.jpg`
- Ocean variant: `Node Logo Ocean.png`, `Social Media Banner Ocean.jpg`
- Stone circle variant: `Node Logo Stone Cirlce.png`, `Social Media Banner Stone Circle.jpg`

Website references:
- ReFi DAO: https://refidao.com
- ReFi Barcelona: https://refibcn.cat
```

### 7.4 Specific Requirements or Requests

Any particular features, sections, or functionality you need that weren't covered above?

```

```

### 7.5 Things to Avoid

Anything you specifically don't want on the website?

```
- Avoid overly corporate / sterile visuals; keep it bioregional, warm, and human.
- Avoid walls of text: prefer scannable sections, clear CTAs, and concise explainers.
- Avoid over-promising: claims should link back to reports / evaluation artifacts where possible.
```

### 7.6 Timeline & Priorities

When do you need the website ready? Any key dates or events driving the timeline?

```
TODO: website launch target date.

Reference timeline (GG23 round dates, for archival page):
- Donation dates: April 2 @ noon UTC → April 16 @ 23:59 UTC
- Results announced: April 23
```

---

## Next Steps

After completing this questionnaire:

1. **Upload assets** — Add your images to the `assets/` folder
2. **Add documentation** — Put any reference materials in the `docs/` folder
3. **Share your responses** — Send this completed document
4. **Schedule a call** (optional) — Walk through any questions together
5. **Review draft** — We'll create a first version for your feedback
6. **Launch!** — Deploy your website

---

## Questions?

If you have questions while filling this out, reach out to:
- Email: [your-contact@email.com]
- Discord: [discord-link]

---

*This questionnaire is part of the [Quartz ReFi Template](https://github.com/ReFiDAO/quartz-refi-template) project.*
