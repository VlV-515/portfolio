# Project Brief

## Resumen

Portfolio personal de Ignacio Tirado. Sitio estatico en Vite con HTML, CSS custom, Tailwind CDN y JavaScript vanilla.

## Objetivo

Presentar experiencia fullstack con especialidad en frontend, IA aplicada, proyectos y contacto con una landing clara y visualmente fuerte, sin mezclar contexto corporativo ajeno.

## Estado actual

- Hosting esperado: GitHub Pages
- URL objetivo: `https://vlv-515.github.io/portfolio/`
- Build output: `dist/`
- Deploy workflow: `.github/workflows/deploy.yml`
- Base Vite obligatoria: `'/portfolio/'`
- Hook local: `.husky/pre-commit`
- Superficie publica destacada: portfolio personal + referencia a `clasecitas-vlv`, `clasecitas-vlv-types` y `clasecitas-vlv-page`

## Superficie editable

- `index.html`: estructura principal
- `main.js`: data de proyectos y skills
- `styles.css`: estilos globales
- `public/`: assets estaticos publicados
- `README.md`: resumen publico del repo
- `AGENTS.md` y `.codex/`: capa repo-native para agentes

## Decisiones activas

- Netlify retirado del repo y de la documentacion
- Links de demos externos removidos hasta tener URLs nuevas
- GitHub Pages usa ruta de proyecto, no dominio raiz
- PDF y preview del CV siguen en `public/` mientras el sitio los enlace
- `clasecitas-vlv` debe presentarse como paquete npm publicado con repo, companion types y cheat sheet publico
- El posicionamiento publico actual debe decir fullstack con especialidad en frontend
- Al hablar de IA aplicada, priorizar agent engineering, harness engineering, loop engineering, SDD y TDD
- No mencionar herramientas concretas de IA en copy publico cuando no aporten valor

## Cuando tocar docs

- Cambio de URL publica
- Cambio de hosting o workflow de deploy
- Alta/baja de proyectos destacados
- Cambio de links publicos de paquetes npm o showcases externos
- Cambio de bio, stack o links de contacto
