# OpenGraph Image Configuration - Complete

## Image Details
- **File**: `cdaio_-_forum_og.png`
- **Location**: `/public/cdaio_-_forum_og.png`
- **Format**: PNG
- **Dimensions**: 1200 x 630 pixels (LinkedIn recommended)
- **File Size**: 180KB
- **URL**: `https://cdaio.com/cdaio_-_forum_og.png`

## Pages Configured

All pages now have the full absolute URL configured for OpenGraph images:

### 1. Homepage (/)
- **Title**: CDAIO // DIVISION - Data. Intelligence. Motion.
- **OG Image**: https://cdaio.com/cdaio_-_forum_og.png
- **Twitter Card**: summary_large_image

### 2. Forum Page (/cdaio-forum-austin-march-2026)
- **Title**: CDAIO National Forum - Austin, TX | March 22-24, 2026
- **OG Image**: https://cdaio.com/cdaio_-_forum_og.png
- **Twitter Card**: summary_large_image

### 3. Full Registration (/cdaio-data-ai-forum-full-registration)
- **Title**: Complete Your Forum Registration | CDAIO Forum Austin 2026
- **OG Image**: https://cdaio.com/cdaio_-_forum_og.png
- **Twitter Card**: summary_large_image

### 4. Privacy Policy (/privacy)
- **Title**: Privacy Policy | CDAIO // DIVISION
- **OG Image**: https://cdaio.com/cdaio_-_forum_og.png
- **Twitter Card**: summary_large_image

### 5. Terms of Use (/terms)
- **Title**: Terms of Use | CDAIO // DIVISION
- **OG Image**: https://cdaio.com/cdaio_-_forum_og.png
- **Twitter Card**: summary_large_image

## Meta Tags Configured

Each page includes the following OpenGraph meta tags:

```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:url" content="https://cdaio.com/..." />
<meta property="og:site_name" content="CDAIO // DIVISION" />
<meta property="og:locale" content="en_US" />
<meta property="og:image" content="https://cdaio.com/cdaio_-_forum_og.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="CDAIO Forum - Data and AI Leadership Community" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="https://cdaio.com/cdaio_-_forum_og.png" />
```

## Testing OpenGraph Images

### LinkedIn Post Inspector
1. Visit: https://www.linkedin.com/post-inspector/
2. Enter your URL (e.g., https://cdaio.com)
3. Click "Inspect"
4. The image should appear in the preview

### Facebook Sharing Debugger
1. Visit: https://developers.facebook.com/tools/debug/
2. Enter your URL
3. Click "Debug"
4. Click "Scrape Again" if needed to refresh cache

### Twitter Card Validator
1. Visit: https://cards-dev.twitter.com/validator
2. Enter your URL
3. Preview the card

### Manual Testing
Share a link on:
- LinkedIn (personal post or company page)
- Twitter/X
- Facebook
- Slack (will show preview)
- Discord (will show preview)

## Troubleshooting

If images don't appear immediately:

1. **Clear Social Media Cache**
   - LinkedIn: Use Post Inspector and click "Inspect"
   - Facebook: Use Sharing Debugger and click "Scrape Again"
   - Twitter: Cards are cached for ~7 days

2. **Verify Image Accessibility**
   - Ensure `https://cdaio.com/cdaio_-_forum_og.png` is publicly accessible
   - Check that CORS headers allow social media bots
   - Verify the image file is in the deployed `/public` folder

3. **Check Image Requirements**
   - ✓ Minimum size: 200x200 pixels (Current: 1200x630)
   - ✓ Maximum size: 5MB (Current: 180KB)
   - ✓ Recommended ratio: 1.91:1 (Current: 1.90:1)
   - ✓ Format: PNG, JPG, or GIF (Current: PNG)

## Deployment Checklist

- [x] Image file loaded (180KB PNG)
- [x] Absolute URLs used (https://cdaio.com/cdaio_-_forum_og.png)
- [x] All pages have meta tags
- [x] Image dimensions specified (1200x630)
- [x] Twitter card configured
- [x] Project built successfully
- [ ] Deploy to production
- [ ] Test on LinkedIn Post Inspector
- [ ] Test on Facebook Sharing Debugger
- [ ] Test real social media posts
