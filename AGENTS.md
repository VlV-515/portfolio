# AGENTS.md

- Always use the local `caveman` skill in `ultra` mode for this project.

## Objetivo del workspace

Este repositorio contiene exclusivamente el portfolio personal de **Jorge Ignacio Tirado** y los assets publicados del sitio.

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
- Kore Ingenieria puede aparecer como empleador y rol; el backend se describe solo como "backend en Go". Sin arquitectura interna, nombres de modulos, endpoints ni codigo del empleador
- No agregar fuente editable del curriculum; los artefactos publicos del CV pueden vivir en `public/` mientras sigan enlazados

## Activos mostrados

Divididos en dos grupos en el sitio (`main.js`): Destacados (grid superior) y Mas proyectos (grid inferior).

Destacados:
- `Dojo Backend Go`
- `Angular Dojo VlV`
- `ngx-mat-datetime-panel`
- `code-kit-vlv`

Mas proyectos:
- `Angular Testing Lab VlV`
- `ClaudioBar VlV`
- `2FA-vlv`
- `Paste-vlv`
- `LockApp-vlv`
- `Caffeine vlv`
- `Tomito vlv`
- `Dont Touch vlv`
- `Screen size vlv`
- `clasecitas-vlv` (incluye `clasecitas-vlv-types` y `clasecitas-vlv-page` como links dentro de la misma tarjeta)

## Notas

- El curriculum vive ahora en el repositorio privado `curriculum-vitae`.
- `clasecitas-vlv` se muestra como paquete npm con repo, companion types y cheat sheet publico.
- `Caffeine vlv` se muestra como app macOS con release GitHub y codigo fuente publicado en SourceForge; no describir SourceForge como descarga binaria hasta verificarla.
- `Tomito vlv` se muestra como app macOS con release GitHub y ZIP macOS publicado en SourceForge.
- `ClaudioBar VlV`, `Dont Touch vlv` y `Screen size vlv` siguen el mismo patron: release GitHub con tag y mirror en SourceForge.
- `Angular Dojo VlV` se muestra como proyecto Angular con CI (Jest y Playwright), sin release ni SourceForge.
- `Angular Testing Lab VlV` es nombre de exhibicion para el repo `angular-19-testing-jest-playwright` (la URL del repo no cambia); se muestra como plataforma de aprendizaje de testing Angular 19 (Jest + Playwright), sin release ni SourceForge.
- Los 6 proyectos de practica/tutorial (Ecommerce Angular 17 Tailwind Stripe, Ecommerce Demo Angular, Motociclistas Angular, Demo Shopping Cart, GIF Search React Vite, Rick and Morty React UseContext) se retiraron del sitio: tenian `demo: ''` sin URL viva y evidencia de reclutamiento indica que proyectos tutorial mezclados con trabajo real bajan el impacto general del portfolio. Sus repos siguen existiendo en GitHub, solo no se listan aqui.
- Si se reactivan demos en linea, actualizar tambien `main.js` y `README.md`
- Si cambia owner o nombre de repo, recalcular URL Pages y `base`
- El copy publico debe posicionar el perfil como Fullstack Developer: Angular, TypeScript y Go.
- Al resumir stack, backend principal `Go`; experiencia adicional en `Python`, `TypeScript/Node.js`, `PHP` y `Java`.
- Copy en espanol es-MX con tildes correctas; nombre publico "Jorge Ignacio Tirado".
- `Dojo Backend Go` es repo publico (`VlV-515/dojo_backend_go`); `dojo_frontend_angular` NO se lista hasta que su repo sea publico (hoy responde 404).
- `2FA-vlv` no tiene proyecto SourceForge publico; solo release GitHub.
- Versiones macOS verificadas 2026-11-07: Paste v1.8.0, LockApp v1.2.0, Tomito v1.1.0, Dont Touch v1.1.1, Screen size v1.2.0, Caffeine v1.0.0, 2FA-vlv v1.0.0.
- En IA aplicada, priorizar `agent engineering`, `harness engineering`, `loop engineering`, `SDD` y `TDD`; evitar mencionar herramientas concretas cuando no aporten valor.
