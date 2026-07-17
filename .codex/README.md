# Codex README

## Start here

1. Leer `AGENTS.md`
2. Leer `.codex/project-brief.md`
3. Abrir la regla relevante en `.codex/rules/`
4. Hacer cambios
5. Ejecutar `npm run build`
6. Sincronizar docs si cambian contenido, URLs o despliegue

## Mapa rapido

- `.codex/project-brief.md`: contexto funcional y estado actual
- `.codex/rules/project.md`: restricciones del repo
- `.codex/rules/content.md`: copy, links, CV y proyectos
- `.codex/rules/deploy.md`: Vite + GitHub Pages + validacion
- `.codex/skills/refresh-portfolio-content/SKILL.md`: cambios de portfolio
- `.codex/skills/release-github-pages/SKILL.md`: cambios de release/deploy
- `.codex/agents/portfolio-maintainer.md`: rol operativo sugerido

## Validacion minima

- `npm run build`

## Recordatorios

- Sitio oficial: `https://vlv-515.github.io/portfolio/`
- No reintroducir Netlify
- `vite.config.js` debe conservar `base: '/portfolio/'`
- Hook de Husky ejecuta `npm run build` antes de cada commit
