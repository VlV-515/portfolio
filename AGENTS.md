# AGENTS.md

- Always use the local `caveman` skill in `ultra` mode for this project.

## Objetivo del workspace

Este repositorio contiene exclusivamente el portfolio personal de **Jorge Ignacio Tirado Moreno** y los assets publicados del sitio.

## Sitio principal

- URL publica: `https://vlv-515.github.io/portfolio/`
- Hosting: `GitHub Pages` para `VlV-515/portfolio`
- Stack del portfolio: `Vite + vanilla JS + Tailwind CDN + CSS custom`
- Archivo principal: `index.html`

## Comandos base

- `npm run build`: validacion obligatoria antes de cerrar cambios del sitio
- `npm run preview`: revision local del build generado

## Archivos clave

- `index.html`: landing principal del portfolio
- `main.js`: datos renderizados de proyectos y skills
- `styles.css`: estilos globales del portfolio
- `public/`: assets publicados directamente por Vite
- `vite.config.js`: `base` obligatoria para GitHub Pages
- `.github/workflows/deploy.yml`: workflow de despliegue
- `.husky/pre-commit`: hook local que ejecuta `npm run build`

## Flujo de trabajo esperado

1. Modificar `index.html`, `main.js` o `styles.css`
2. Ejecutar `npm run build`
3. Publicar con GitHub Pages mediante `.github/workflows/deploy.yml`

## Documentacion Codex

- `.codex/README.md`: mapa rapido de contexto y arranque
- `.codex/project-brief.md`: resumen funcional del sitio y decisiones activas
- `.codex/rules/project.md`: reglas duras del repo
- `.codex/rules/content.md`: reglas de copy, links y contenido
- `.codex/rules/deploy.md`: contrato de build y GitHub Pages
- `.codex/skills/refresh-portfolio-content/SKILL.md`: skill para cambios de contenido
- `.codex/skills/release-github-pages/SKILL.md`: skill para cambios de despliegue
- `.codex/agents/portfolio-maintainer.md`: rol sugerido para mantenimiento continuo

## Reglas duras

- La URL oficial del portfolio es `https://vlv-515.github.io/portfolio/`
- No reintroducir referencias a Netlify
- Mantener `base: '/portfolio/'` en `vite.config.js`
- Validar cambios visuales o de contenido con `npm run build`
- Si cambian proyectos, skills o URLs, sincronizar `main.js`, `README.md`, `AGENTS.md` y `.codex/`
- No mezclar branding o contexto de Kore/ERP en este repo
- No agregar fuente editable del curriculum; los artefactos publicos del CV pueden vivir en `public/` mientras sigan enlazados

## Activos mostrados

- `Ecommerce Angular 17 Tailwind Stripe`
- `Ecommerce Demo Angular`
- `Motociclistas Angular`
- `Demo Shopping Cart`
- `GIF Search React Vite`
- `Rick and Morty React UseContext`

## Notas

- El curriculum vive ahora en el repositorio privado `curriculum-vitae`.
- Si se reactivan demos en linea, actualizar tambien `main.js` y `README.md`
- Si cambia owner o nombre de repo, recalcular URL Pages y `base`
