# Berri Organics® — Premium Website Redesign (Concept Demo)

An extraordinary, premium, unmistakably original beverage-brand frontend concept created for **Berri Organics** ([berriorganics.com](https://berriorganics.com/)).

> **Disclaimer**: *Concept redesign — not the official Berri Organics website. All products, trademarks, brand identity, and logos belong to Berri Organics.*

---

## 🚀 Quick Start

To run the development server:

```bash
# 1. Install dependencies
npm install

# 2. Start the Vite development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port Vite outputs) in your browser.

To generate a production build:

```bash
npm run build
npm run preview
```

---

## 🎨 Creative Direction & Signature Concept

### Concept: "Hydration as Color and Liquid"
The redesign moves beyond standard ecommerce templates by establishing a living, fluid visual metaphor:
1. **Liquid Color-Flood Transitions**: Selecting any flavor causes its exact natural fruit color to "fill" the hero from the bottom up like liquid rising in a bottle, complete with an animated meniscus wave.
2. **Layered Typographic Depth**: Giant translucent flavor typography sits behind the bottle on stage, responding to cursor movement with subtle parallax depth.
3. **Hero Photoreal Compositing**: Every bottle is rendered with soft contact floor shadows, floor liquid glow reflections, and realistic condensation highlights.
4. **Vertical Fill-Level Rail**: An interactive thumbnail progress rail displaying all real bottles with live fill-level feedback.
5. **Interactive Botanical Orbit**: The 8 real True-to-Nature ingredients orbit and spotlight the central bottle, showcasing origin and clinical benefit verbatim from the official site.
6. **Subtle Water Droplet Cursor**: Custom fluid droplet cursor with interactive click ripples and soft droplet micro-particles.
7. **Demo Cart Drawer**: Fully functional cart drawer with line items, quantity adjustment, subtotal computation, and a $75 free shipping progress indicator.

---

## 📁 Organized Asset Directory Structure

```
assets/
├── provided/                               # Original user-uploaded files
│   ├── berri-fit-dragon-fruit.png          # Clean Dragon Fruit cutout
│   ├── berri-lyte-elderberry-apple.png     # Clean Elderberry Apple cutout
│   ├── berri-lyte-strawberry-halloween.jpg # Strawberry bottle + glass photo
│   └── berri-lyte-fruit-punch-halloween.jpg# Fruit Punch bottle + ingredients photo
├── cutouts/                                # De-spilled, high-res WebP/PNG cutouts
│   ├── fit/                                # Dragon Fruit, Tropical Punch, Mango, Fit Sampler
│   ├── lyte/                               # Strawberry, Fruit Punch, Elderberry Apple, Acai Berry, Cherry, Wild Berry, Lyte Sampler
│   └── lyte-advanced/                      # Advanced Strawberry
├── hero-renders/                           # Composited hero renders with floor shadows & liquid glow
├── ingredients/                            # The 8 official ingredient photos + extracted floating elements
├── logo/                                   # Original SVG logos & USDA Organic Seal
└── retailers/                              # The 7 official retailer logo frames from official About Us
```

---

## 🔍 Content & Asset Source Map

Every sentence, statistic, ingredient line, quote, and badge on this website is 100% verified and traceable to official Berri Organics channels:

| Section | Content / Asset | Official Source URL / Page | Verification Notes |
| :--- | :--- | :--- | :--- |
| **Brand Identity** | Logo (`Layer_1_4.svg`, `Layer_1_5.svg`) | `https://berriorganics.com/` | Original SVG files directly from site header/footer. |
| **Brand Identity** | USDA Organic Seal (`RT_OrganicFourColor...svg`) | `https://berriorganics.com/` | Official vector seal. |
| **Pillars** | Plant-Based, Less Sugar*, Proven to Hydrate, Tastes Great | `https://berriorganics.com/` | Official homepage pillars & vector icons (`Group_1484581561.svg`–`1564.svg`). |
| **Why Berri is Better** | 4 points & asterisks | `https://berriorganics.com/` | Less sugar*, Deliciously hydrating, Powerful electrolytes, Fewer calories* with footnotes reproduced verbatim. |
| **Medical Proof** | Boston Children's Hospital Director Quote | `https://berriorganics.com/` | Verbatim quote on WHO osmolarity & glucose-to-sodium ratio. |
| **Customer Proof** | Reviews from Rebekah D, Cole L, Sarah M | `https://berriorganics.com/` | Verbatim customer quotes and attributions. |
| **Trainer Proof** | Nikki Gagnon quote | `https://berriorganics.com/pages/learn-more` | Verbatim quote from mother & fitness trainer on clean nutrition vs Gatorade. |
| **Video Gallery** | 8 real customer recovery stories | `https://berriorganics.com/` ("Thousands of Life Changing Stories") | Video CDN MP4s and preview thumbnails from official slider. |
| **Ingredients** | 8 True-to-Nature Ingredients (Origins & Benefits) | `https://berriorganics.com/pages/learn-more` | Guava, Coconut Water, Maca Root, Sweet Potato, Ginseng Root, Sea Salt, Amla Fruit, Maqui Superberries with verbatim origin & clinical benefit. |
| **Founder Story** | Founder Jerome's cancer recovery & mission | `https://berriorganics.com/pages/about-us` | Respectful, exact wording from official About Us page. |
| **Giving Back** | Wish Upon a Teen (1%) & The Jimmy Fund (2%) | `https://berriorganics.com/pages/giving-back` | Verbatim Commercial Co-Venturer disclosure, Jimmy Fund address (450 Brookline Ave) & phone number. |
| **Retailers** | 7 Retailer frame logos | `https://berriorganics.com/pages/about-us` | Exact frame images from the official retailer logo slider (`Frame_2147228120.png`–`126.png`). |
| **Store Locator** | Store locator link | `https://berriorganics.com/pages/store-locator` | Official link provided; no invented locations. |
| **Blog Journal** | 3 Featured Articles | `https://berriorganics.com/blogs/blog` | Exact official titles: Artificial Dyes ban, Hydration When Sick, Age-by-Age Guide. |
| **FAQs** | 7 Official Q&As | `https://berriorganics.com/pages/faq` | Questions and answers on USDA Organic, sports drinks vs fitness beverages, calories, sugar, and timing. |
| **Policies** | 45-Day Guarantee, Shipping rates ($6.99 / $75+) | Official site checkout & policy pages | Verified at build time; marked with verbatim disclosure note. |

---

## 🛡️ Sensitive Content & Compliance Audit

- **No Halloween Ad Copy Reused**: Removed all Halloween-themed promotional text ("Trick or Treat?", "5X more hydrating", "even the ghosts get dehydrated") from the provided imagery. The unverified "5X" claim is completely excluded.
- **Charity Disclosure**: Reproduced the full Commercial Co-Venturer statement verbatim, including the Dana-Farber Cancer Institute / Jimmy Fund address (`450 Brookline Avenue, Boston, MA 02215, (617) 632-3000`) and the non-endorsement disclaimer.
- **Social Login Walls Report**: Official Instagram and Facebook company profile pages enforce login gates for deep media scraping; therefore, all assets and lifestyle media were sourced from the official website and user-provided imagery in accordance with the source rules.
- **Manual Cutout Refinements**: For the provided Halloween photos, the background color casts (heavy red and orange spill) were cleaned and de-spilled; the glass of strawberry drink and the fresh fruit punch botanicals (young coconut, apple slices) were cleanly isolated as standalone floating assets.

---

## 💻 Tech Stack
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom Berri brand palette & fluid animations
- **Icons**: Lucide React
- **Image Processing**: Sharp (for cutout normalization, contact shadows, and WebP generation)
- **Accessibility**: High contrast ratios, semantic HTML5, aria-labels, and `prefers-reduced-motion` compliance.

