---
name: release-github-pages
description: Maintain GitHub Pages deployment contract for this Vite portfolio.
---

Use when deployment, hosting, workflow, repo URL, branch, or build path changes.

## Checklist

1. Verify `vite.config.js` base
2. Verify `.github/workflows/deploy.yml`
3. Verify absolute public URLs in `AGENTS.md` and `README.md`
4. Run `npm run build`
5. Confirm `dist/` output paths include `/portfolio/`

## Hard checks

- `base` must match repository project path
- Do not switch hosting provider without updating all docs
- Keep CV public URL aligned with Pages URL
