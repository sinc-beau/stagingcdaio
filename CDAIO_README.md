# CDAIO // DIVISION - Data Community Landing Page

## Overview

A production-ready, SEO-friendly single-page landing site for the CDAIO Division data and AI executive community.

## Brand Implementation

### Color Palette
- **Deep Navy** (`#022A4A`) - Primary authority color
- **Executive Blue** (`#007BFF`) - Accent and innovation
- **Neon Cyan** (`#19E3FF`) - Subtle cyber edge highlights
- **Pure White** (`#FFFFFF`) - Clean canvas

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: Medium, Bold
- **Style**: Clean, geometric, professional

### Visual Identity
- Forward slash motif (`//`) represents motion and collaboration
- Underscore element for data integrity
- Minimal layouts with strong grid logic
- Controlled cyberpunk aesthetic (refined, not loud)

## Page Sections

1. **Header Navigation**
   - Fixed header with smooth scroll
   - Responsive mobile menu
   - Clean brand lockup

2. **Hero Section**
   - Large, impactful headline with brand lockup
   - Peer-to-peer ecosystem messaging
   - Clear CTAs for event registration and learning more

3. **Insights Section** (Member Benefits)
   - Quarterly Data Intelligence Briefings
   - Annual Data Leadership Report
   - Strategic edge value propositions

4. **Executive Council Section**
   - Two placeholder council member cards
   - Modal form for guild applications (HubSpot)
   - Professional design with gradient accents

5. **Event Registration Section**
   - Inaugural event details (San Francisco, Feb 25, 2025)
   - Embedded HubSpot form styled to match brand
   - Dark background with cyan accents

6. **Ecosystem Section** (The Protocol)
   - Data Labs (12-15 leaders)
   - Intelligence Circles (35-40 participants)
   - Data Forums (75+ attendees)
   - Dark background with grid pattern overlay

7. **Calendar Section**
   - 2025 event roadmap
   - 5 events across multiple cities
   - Next event highlighted
   - Clean card-based layout

8. **Partner Section** (Vendors)
   - Curated partnership philosophy
   - Partner benefits grid
   - Partnership inquiry modal
   - Quality-focused messaging

9. **Footer**
   - Brand information
   - Quick links navigation
   - Contact information
   - Social media links

## HubSpot Forms

### Guild Application Form
- **Portal ID**: 45377644
- **Form ID**: d9a28f0c-3d13-43a7-9748-8e29c4878c4f
- **Region**: na1
- **Trigger**: Modal opens from Executive Council section

### Event Registration Form
- **Portal ID**: 45377644
- **Form ID**: 938b1140-0ec1-4a33-854e-b16090c4753d
- **Region**: na1
- **Location**: Embedded in Event Section

Both forms are styled to match CDAIO brand guidelines with:
- Custom colors matching brand palette
- Inter font family
- Uppercase labels with tracking
- Smooth transitions and hover effects

## Features

### SEO Optimization
- Semantic HTML structure
- Comprehensive meta tags
- Open Graph protocol support
- Descriptive page title and description
- Keyword optimization for data leadership

### Responsive Design
- Mobile-first approach
- Breakpoints for all device sizes
- Touch-friendly navigation
- Optimized images and content flow

### Accessibility
- ARIA labels on interactive elements
- Keyboard navigation support
- Proper heading hierarchy
- Color contrast compliance

### Performance
- Static generation with Next.js
- Optimized assets
- Minimal JavaScript bundle
- Fast page load times

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## File Structure

```
components/cdaio/
├── header.tsx              # Fixed navigation header
├── hero-section.tsx        # Main hero with brand lockup
├── insights-section.tsx    # Member benefits content
├── executive-council-section.tsx  # Council members
├── event-section.tsx       # Event registration
├── ecosystem-section.tsx   # The Protocol (Labs/Circles/Forums)
├── calendar-section.tsx    # 2025 event calendar
├── partner-section.tsx     # Vendor partnerships
├── footer.tsx              # Site footer
├── guild-modal.tsx         # Council application modal
└── partner-modal.tsx       # Partnership inquiry modal
```

## Brand Guidelines Compliance

✅ Typography-based logo (no icons)
✅ "//" forward slash motif throughout
✅ Color palette strictly adhered to
✅ Minimal, professional design
✅ Controlled cyberpunk aesthetic
✅ Executive-facing tone
✅ Data integrity emphasis
✅ Generous whitespace
✅ Clean hierarchies
✅ Professional imagery treatment

## Production Ready

- ✅ Build completes without errors
- ✅ TypeScript validation passes
- ✅ All sections responsive
- ✅ Forms properly integrated
- ✅ Navigation smooth scrolling
- ✅ SEO metadata complete
- ✅ Brand guidelines followed
