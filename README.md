# OSKY — The Archive

Brutalist/minimal single-page website for OSKY (Oscar Face It), Romanian rapper & producer.

## Design

- **Style:** Brutalist minimal — raw typography, bold, direct
- **Colors:** #0A0A0A (bg) · #FFFFFF (text) · #8B5CF6 (purple accent) · #1A1A1A (cards) · #2A2A2A (borders)
- **Fonts:** Space Grotesk (display) + Inter (body) via Google Fonts

## Sections

1. **Hero** — Massive "OSKY" title + latest release + streaming links
2. **Music** — 2 album cards (SENSURROUND 2025, DEPTHS OF YOUR MIND 2024) with collapsible tracklists + singles row
3. **Merch** — Product card for signed poster+CD (sold out, notify me placeholder)
4. **News** — Release concert + album announcement
5. **Contact** — Social links (Instagram, TikTok, YouTube, X, Facebook) + booking email

## Technical

- Vanilla HTML/CSS/JS — zero dependencies
- No frameworks, no build tools, no GSAP/Lenis/ScrollTrigger
- No smooth scroll libraries, no preloader, no custom cursor, no film grain
- CSS-only hover effects + IntersectionObserver for subtle scroll reveals
- Mobile-first responsive design
- Accessible: focus states, aria attributes, semantic HTML

## Files

| File | Purpose |
|------|---------|
| `index.html` | Structure & content |
| `style.css` | All styles |
| `script.js` | Tracklist toggle, scroll reveal, nav |
| `README.md` | This file |

## Links (all real)

- Spotify: https://open.spotify.com/artist/3svI4OQVW9S1Jd5jZ8yiui
- Apple Music: https://music.apple.com/us/artist/oscar-face-it/1538483257
- Instagram: https://www.instagram.com/oscarfaceit/
- TikTok: https://www.tiktok.com/@oscarfaceit
- YouTube: https://www.youtube.com/@oscarfaceit
- X (Twitter): https://twitter.com/oscarfaceit
- Facebook: https://www.facebook.com/oscarfaceit
- Original site: https://www.oscarfaceit.com/

## Deploy

Just serve the directory — no build step needed. Works on any static host (Netlify, Vercel, GitHub Pages, etc.)

```bash
cd /tmp/oscar-redesign-v2/
python3 -m http.server 8080
```