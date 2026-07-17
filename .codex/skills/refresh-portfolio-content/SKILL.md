---
name: refresh-portfolio-content
description: Sync portfolio content changes across site files and repo-native docs.
---

Use when bio, projects, skills, contact links, CV links, or public-facing copy change.

## Checklist

1. Edit `index.html`, `main.js`, `styles.css`, or `public/` as needed
2. Sync `README.md`
3. Sync `AGENTS.md`
4. Sync `.codex/project-brief.md` when project inventory or URLs change
5. Run `npm run build`

## Hard checks

- Do not reintroduce Netlify
- Do not add fake demo URLs
- Keep GitHub Pages URL consistent everywhere
