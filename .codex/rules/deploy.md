# Deploy Rules

- Validacion local minima: `npm run build`
- `dist/` es artefacto generado, no fuente
- GitHub Pages publica desde `.github/workflows/deploy.yml`
- Si cambia owner o nombre del repo, actualizar:
  - `vite.config.js`
  - `AGENTS.md`
  - `README.md`
  - `.codex/README.md`
  - `.codex/project-brief.md`
- Si cambia URL publica, revisar tambien links absolutos al CV
