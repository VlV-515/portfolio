# AGENTS.md

- Always use the local `caveman` skill in `ultra` mode for this project.

## Objetivo del workspace

Este repositorio contiene exclusivamente el portfolio personal de **Jorge Ignacio Tirado Moreno** y los assets publicados del sitio.

## Sitio principal

- URL publica: `https://vlv-515.github.io/portfolio/`
- Stack del portfolio: `Vite + vanilla JS + Tailwind CDN + CSS custom`
- Archivo principal: `index.html`
- Scripts principales:
  - `npm run build`
  - `npm run preview`

## Estructura relevante

- `index.html`: landing principal del portfolio
- `main.js`: datos de proyectos y skills del portfolio
- `styles.css`: estilos globales del portfolio
- `public/`: assets publicados directamente por Vite

## Flujo de trabajo esperado

1. Modificar `index.html`, `main.js` o `styles.css`
2. Ejecutar `npm run build`
3. Publicar con GitHub Pages mediante `.github/workflows/deploy.yml`

## Reglas de contenido

- La URL oficial del portfolio es `https://vlv-515.github.io/portfolio/`
- Este repositorio no debe incluir fuente, PDF ni preview del curriculum

## Proyectos desplegados usados en el portfolio

- `Ecommerce Angular 17 Tailwind Stripe`
- `Ecommerce Demo Angular`
- `Motociclistas Angular`
- `Demo Shopping Cart`
- `GIF Search React Vite`
- `Rick and Morty React UseContext`

## Notas importantes

- El curriculum vive ahora en el repositorio privado `curriculum-vitae`.
- El sitio se publica como proyecto de GitHub Pages para `VlV-515/portfolio`.
- Si se actualizan demos de proyectos, tambien actualizar `main.js` y los `homepageUrl` de los repositorios en GitHub cuando aplique.

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Rules:
- Drop: articles (a/an/the), filler (just/really/basically), pleasantries, hedging
- Fragments OK. Short synonyms. Technical terms exact. Code unchanged.
- Pattern: [thing] [action] [reason]. [next step].
- Not: "Sure! I'd be happy to help you with that."
- Yes: "Bug in auth middleware. Fix:"

Switch level: /caveman lite|full|ultra|wenyan
Stop: "stop caveman" or "normal mode"

Auto-Clarity: drop caveman for security warnings, irreversible actions, user confused. Resume after.

Boundaries: code/commits/PRs written normal.
