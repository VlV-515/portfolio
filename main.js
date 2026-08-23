const featuredProjects = [
  {
    title: 'Angular Dojo VlV',
    type: 'Angular 20 + CI',
    description:
      'Plataforma de retos de Angular donde cada branch es una app real ya rota en un tema distinto: routing, signals, forms reactivos, RxJS, zoneless, performance, SSR e hidratacion, accesibilidad. npm run verify certifica si el reto quedo resuelto, con catalogo por cinturones, hints progresivos y CI en GitHub Actions con Jest y Playwright.',
    repo: 'https://github.com/VlV-515/Angular-Dojo-VlV',
    tags: ['Angular 20', 'Zoneless', 'TypeScript', 'Jest', 'Playwright', 'CI/CD']
  },
  {
    title: 'Angular Testing Lab VlV',
    type: 'Angular 19 + Testing',
    description:
      'Plataforma educativa progresiva para testear Angular 19 con Jest y Playwright: guia de migracion desde Karma/Jasmine, 8 categorias de unit testing en dificultad creciente (pipes, validators, services, guards, resolvers, interceptors, directives, componentes) y suite e2e complementaria.',
    repo: 'https://github.com/VlV-515/angular-19-testing-jest-playwright',
    tags: ['Angular 19', 'Jest', 'Playwright', 'Testing Library', 'Testing']
  },
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
    title: 'ClaudioBar VlV',
    type: 'macOS App',
    description:
      'Utilidad nativa de menu bar para macOS que muestra en vivo el porcentaje de uso de la sesion de 5 horas de Claude Code y controla alertas configurables por umbral con sonido y/o accion de shell. Lee estado desde un script Python companion via el hook statusLine; release publica v1.0.0 y mirror en SourceForge.',
    links: [
      {
        label: 'Release',
        href: 'https://github.com/VlV-515/claudio-bar-vlv/releases/tag/v1.0.0'
      },
      {
        label: 'SourceForge',
        href: 'https://sourceforge.net/projects/claudio-bar-vlv/'
      },
      {
        label: 'Codigo',
        href: 'https://github.com/VlV-515/claudio-bar-vlv'
      }
    ],
    tags: ['Swift', 'AppKit', 'SwiftUI', 'Menu Bar', 'Claude Code', 'macOS']
  }
];

const otherProjects = [
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
    title: 'Caffeine vlv',
    type: 'macOS App',
    description:
      'App nativa de menu bar para macOS que mantiene el equipo despierto con modos Full y Medium. Publicada como release v1.0.0 con ZIP y checksum SHA-256 en GitHub; codigo fuente v1.0.0 disponible en SourceForge.',
    links: [
      {
        label: 'Release',
        href: 'https://github.com/VlV-515/caffeine-vlv/releases/tag/v1.0.0'
      },
      {
        label: 'SourceForge',
        href: 'https://sourceforge.net/projects/caffeine-vlv/'
      },
      {
        label: 'Codigo',
        href: 'https://github.com/VlV-515/caffeine-vlv'
      }
    ],
    tags: ['Swift', 'AppKit', 'SwiftUI', 'Menu Bar', 'Power Management', 'macOS']
  },
  {
    title: 'Tomito vlv',
    type: 'macOS App',
    description:
      'Temporizador Pomodoro nativo, local-first y privado para macOS. Incluye sesiones y descansos configurables, controles de menu bar, notificaciones, soporte sleep/wake y UI en ingles y espanol; release v1.0.0 en GitHub y SourceForge.',
    links: [
      {
        label: 'Release',
        href: 'https://github.com/VlV-515/tomito-vlv/releases/tag/v1.0.0'
      },
      {
        label: 'SourceForge',
        href: 'https://sourceforge.net/projects/tomito-vlv/'
      },
      {
        label: 'Codigo',
        href: 'https://github.com/VlV-515/tomito-vlv'
      }
    ],
    tags: ['Swift', 'SwiftUI', 'AppKit', 'Pomodoro', 'Local First', 'macOS']
  },
  {
    title: 'Dont Touch vlv',
    type: 'macOS App',
    description:
      'App nativa de menu bar para macOS que bloquea teclado y mouse via Accessibility API y desbloquea solo con una secuencia propia. Incluye bloqueo automatico por inactividad, atajo global configurable, historial local de actividad y UI en ingles y espanol; release publica v1.0.0 y mirror en SourceForge.',
    links: [
      {
        label: 'Release',
        href: 'https://github.com/VlV-515/dont-touch-vlv/releases/tag/v1.0.0'
      },
      {
        label: 'SourceForge',
        href: 'https://sourceforge.net/projects/dont-touch-vlv/'
      },
      {
        label: 'Codigo',
        href: 'https://github.com/VlV-515/dont-touch-vlv'
      }
    ],
    tags: ['Swift', 'AppKit', 'SwiftUI', 'Accessibility API', 'Input Lock', 'macOS']
  },
  {
    title: 'Screen size vlv',
    type: 'macOS App',
    description:
      'Gestor nativo de ventanas para macOS con atajos globales para mover la ventana activa a mitad izquierda, derecha, centro o pantalla completa util. Incluye overlay visual de confirmacion, atajos personalizables, deteccion por pantalla y UI en ingles y espanol; release publica v1.2.0 y mirror en SourceForge.',
    links: [
      {
        label: 'Release',
        href: 'https://github.com/VlV-515/screen-size-vlv/releases/tag/v1.2.0'
      },
      {
        label: 'SourceForge',
        href: 'https://sourceforge.net/projects/screen-size-vlv/'
      },
      {
        label: 'Codigo',
        href: 'https://github.com/VlV-515/screen-size-vlv'
      }
    ],
    tags: ['Swift', 'AppKit', 'SwiftUI', 'Carbon', 'Window Manager', 'macOS']
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
  }
];

const skillGroups = [
  {
    title: 'Frontend Core',
    description: 'Mi stack principal para construir interfaces mantenibles, escalables y responsivas.',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS', 'Bootstrap', 'Signals', 'SSR']
  },
  {
    title: 'Frameworks y Ecosistema',
    description: 'Herramientas y librerías que utilizo para entregar productos modernos.',
    items: ['Angular Material', 'Ionic', 'React', 'Vite', 'RxJS', 'Firebase']
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
    items: ['Swift', 'AppKit', 'SwiftUI', 'Core Data', 'NSPasteboard', 'Keychain', 'Accessibility API', 'Carbon', 'Menu Bar Apps', 'Window Management', 'SourceForge Mirrors']
  },
  {
    title: 'IA aplicada y AI Engineering',
    description: 'Capacidades actuales para diseñar agentes, harnesses y loops guiados por especificación, pruebas y automatización.',
    items: ['AI Agents', 'Agent Engineering', 'Harness Engineering', 'Loop Engineering', 'MCP', 'SDD', 'TDD', 'Prompting', 'Automation']
  }
];

const featuredProjectsGrid = document.querySelector('#featured-projects-grid');
const projectsGrid = document.querySelector('#projects-grid');
const skillsGrid = document.querySelector('#skills-grid');

function renderProjectCard(project) {
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

featuredProjectsGrid.innerHTML = featuredProjects.map(renderProjectCard).join('');
projectsGrid.innerHTML = otherProjects.map(renderProjectCard).join('');

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
