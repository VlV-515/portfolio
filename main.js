const projects = [
  {
    title: 'code-kit-vlv',
    type: 'NPM CLI',
    description:
      'CLI publicado en npm para convertir repos nuevos en workspaces AI-ready con guias para Codex, Claude y OpenCode, presets para distintos stacks, Caveman en modo ultra, politicas npm conservadoras y sincronizacion segura de archivos gestionados.',
    links: [
      {
        label: 'npm',
        href: 'https://www.npmjs.com/package/code-kit-vlv'
      },
      {
        label: 'Codigo',
        href: 'https://github.com/VlV-515/code-kit-vlv'
      }
    ],
    tags: ['npm', 'CLI', 'TypeScript', 'AI Agents', 'Codex', 'Claude', 'OpenCode']
  },
  {
    title: 'Paste-vlv',
    type: 'macOS App',
    description:
      'Clipboard manager nativo para macOS, local-first y gratuito. Guarda historial de texto, links, imagenes y archivos en el equipo, ofrece busqueda rapida, pinboards, favoritos, backup JSON de textos agrupados y release publica v1.0.0.',
    links: [
      {
        label: 'Release',
        href: 'https://github.com/VlV-515/paste-vlv/releases/tag/v1.0.0'
      },
      {
        label: 'SourceForge',
        href: 'https://sourceforge.net/projects/paste-vlv/'
      },
      {
        label: 'Codigo',
        href: 'https://github.com/VlV-515/paste-vlv'
      }
    ],
    tags: ['Swift', 'AppKit', 'SwiftUI', 'Core Data', 'macOS', 'Local First']
  },
  {
    title: 'LockApp-vlv',
    type: 'macOS App',
    description:
      'App nativa de menu bar para macOS que pone apps seleccionadas detras de una pantalla de password. Usa Swift, AppKit, SwiftUI, Keychain y preferencias locales, con release publica v1.0.0 y mirror en SourceForge.',
    links: [
      {
        label: 'Release',
        href: 'https://github.com/VlV-515/lockapp-vlv/releases/tag/v1.0.0'
      },
      {
        label: 'SourceForge',
        href: 'https://sourceforge.net/projects/lockapp-vlv/'
      },
      {
        label: 'Codigo',
        href: 'https://github.com/VlV-515/lockapp-vlv'
      }
    ],
    tags: ['Swift', 'AppKit', 'SwiftUI', 'Keychain', 'macOS', 'Privacy Tool']
  },
  {
    title: 'clasecitas-vlv',
    type: 'NPM + CSS Toolkit',
    description:
      'Toolkit CSS utility-first con naming tipo Tailwind y grid estilo Bootstrap 5. Publicado en npm, con paquete companion de types para TypeScript y un cheat sheet publico para explorar clases reales, prefijos responsive y ejemplos.',
    links: [
      {
        label: 'Cheat Sheet',
        href: 'https://vlv-515.github.io/clasecitas-vlv-page/'
      },
      {
        label: 'npm',
        href: 'https://www.npmjs.com/package/clasecitas-vlv'
      },
      {
        label: 'Types',
        href: 'https://www.npmjs.com/package/clasecitas-vlv-types'
      },
      {
        label: 'Codigo',
        href: 'https://github.com/VlV-515/clasecitas-vlv'
      }
    ],
    tags: ['npm', 'CSS Utilities', 'SCSS', 'TypeScript Types', 'Grid System']
  },
  {
    title: 'Ecommerce Angular 17 Tailwind Stripe',
    type: 'Angular 17',
    description:
      'Frontend de e-commerce con Angular 17, Tailwind y flujo visual de compra. Muestra estructura moderna, routing y UI enfocada a conversion.',
    demo: '',
    repo: 'https://github.com/VlV-515/ecommerce-angular17-tailwind-stripe',
    tags: ['Angular 17', 'Tailwind', 'TypeScript', 'Stripe UI']
  },
  {
    title: 'Ecommerce Demo Angular',
    type: 'Angular 13',
    description:
      'Demo completa de e-commerce con Angular Material, Bootstrap, carrito y exploracion de productos.',
    demo: '',
    repo: 'https://github.com/VlV-515/ecommerce-demo-angular',
    tags: ['Angular', 'Angular Material', 'Bootstrap', 'Toastr']
  },
  {
    title: 'Motociclistas Angular',
    type: 'Angular 12',
    description:
      'Simulacion de asignacion de recursos por bloques de tiempo de 30 minutos. Resuelve una logica operativa clara con feedback visual.',
    demo: '',
    repo: 'https://github.com/VlV-515/2-Motociclistas-Angular',
    tags: ['Angular', 'Scheduling Logic', 'UI Feedback', 'Responsive']
  },
  {
    title: 'Demo Shopping Cart',
    type: 'Angular 12',
    description:
      'Carrito de compras demo con enfoque en flujo SPA, estado visual y experiencia de compra simplificada.',
    demo: '',
    repo: 'https://github.com/VlV-515/demo-shoping-cart',
    tags: ['Angular', 'Cart Flow', 'SPA', 'TypeScript']
  },
  {
    title: 'GIF Search React Vite',
    type: 'React',
    description:
      'Buscador de GIFs construido con React y Vite, orientado a consumo de APIs y respuesta rapida en frontend.',
    demo: '',
    repo: 'https://github.com/VlV-515/demo-gif-search-react-test-vite',
    tags: ['React', 'Vite', 'API Consumption', 'JavaScript']
  },
  {
    title: 'Rick and Morty React UseContext',
    type: 'React',
    description:
      'Aplicacion React que consume la API de Rick and Morty usando contexto para organizacion de estado y navegacion de datos.',
    demo: '',
    repo: 'https://github.com/VlV-515/rick-and-morty-react-useContext',
    tags: ['React', 'useContext', 'Axios', 'API Integration']
  }
];

const skillGroups = [
  {
    title: 'Frontend Core',
    description: 'Mi stack principal para construir interfaces mantenibles, escalables y responsivas.',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Frameworks y Ecosistema',
    description: 'Herramientas y librerías que utilizo para entregar productos modernos.',
    items: ['Angular Material', 'Ionic', 'React', 'Vite', 'RxJS', 'Firebase', 'Stripe UI']
  },
  {
    title: 'Testing',
    description: 'Estrategias y herramientas para garantizar calidad en todos los niveles del producto.',
    items: ['Jest', 'Playwright', 'Testing Library', 'Unit Testing', 'Functional Testing', 'E2E Testing']
  },
  {
    title: 'Backend y Flujo de Trabajo',
    description: 'Tecnologías con las que cierro flujos end-to-end, integración y operación del producto.',
    items: ['Python', 'TypeScript', 'Node.js', 'PHP', 'MongoDB', 'MySQL', 'REST APIs', 'Git', 'GitHub', 'Jira', 'SCRUM', 'npm', 'Package Publishing', 'GitHub Releases']
  },
  {
    title: 'Apps nativas macOS',
    description: 'Herramientas personales nativas, locales y publicadas con releases verificables para macOS.',
    items: ['Swift', 'AppKit', 'SwiftUI', 'Core Data', 'NSPasteboard', 'Keychain', 'Menu Bar Apps', 'SourceForge Mirrors']
  },
  {
    title: 'IA aplicada y AI Engineering',
    description: 'Capacidades actuales para diseñar agentes, harnesses y loops guiados por especificación, pruebas y automatización.',
    items: ['AI Agents', 'Agent Engineering', 'Harness Engineering', 'Loop Engineering', 'MCP', 'SDD', 'TDD', 'Prompting', 'Automation']
  }
];

const projectsGrid = document.querySelector('#projects-grid');
const skillsGrid = document.querySelector('#skills-grid');

projectsGrid.innerHTML = projects
  .map(
    (project) => {
      const links = project.links
        ? project.links
        : [
            ...(project.demo ? [{ label: 'Demo', href: project.demo }] : []),
            ...(project.repo ? [{ label: 'Codigo', href: project.repo }] : [])
          ];

      return `
      <article class="project-card reveal">
        <div class="project-header">
          <div>
            <span class="project-badge">${project.type}</span>
            <h3 class="mt-4 text-2xl font-bold text-white">${project.title}</h3>
          </div>
        </div>
        <p class="text-sm leading-7 text-slate-200/78">${project.description}</p>
        <div class="tag-list">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          ${links
            .map(
              (link) =>
                `<a class="project-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
            )
            .join('')}
        </div>
      </article>
    `;
    }
  )
  .join('');

skillsGrid.innerHTML = skillGroups
  .map(
    (group) => `
      <article class="skill-card reveal">
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">${group.title}</p>
        <p class="mt-4 text-base leading-7 text-slate-200/78">${group.description}</p>
        <div class="skill-chip-wrap">
          ${group.items.map((item) => `<span class="skill-chip">${item}</span>`).join('')}
        </div>
      </article>
    `
  )
  .join('');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: '0px 0px -40px 0px'
  }
);

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 40, 220)}ms`;
  observer.observe(element);
});
