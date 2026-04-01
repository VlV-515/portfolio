# AGENTS.md

## Objetivo del workspace

Este repositorio contiene exclusivamente el portfolio personal de **Jorge Ignacio Tirado Moreno** y los assets publicados para Netlify.

## Sitio principal

- URL publica: `https://ignacio-tirado-portfolio.netlify.app`
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
3. Publicar con `netlify deploy --prod --dir="dist" --no-build`

## Reglas de contenido

- La URL oficial del portfolio es `https://ignacio-tirado-portfolio.netlify.app`
- Este repositorio no debe incluir fuente, PDF ni preview del curriculum

## Proyectos desplegados usados en el portfolio

- `https://ecommerce-a17-vlv.netlify.app`
- `https://ecommerce-vlv.netlify.app`
- `https://motociclistas-vlv.netlify.app`
- `https://shopping-cart-vlv.netlify.app`
- `https://gif-search-vlv.netlify.app`
- `https://rick-morty-vlv.netlify.app`

## Notas importantes

- El curriculum vive ahora en el repositorio privado `curriculum-vitae`.
- El nombre del sitio en Netlify es `ignacio-tirado-portfolio`.
- Si se actualizan demos de proyectos, tambien actualizar `main.js` y los `homepageUrl` de los repositorios en GitHub cuando aplique.
