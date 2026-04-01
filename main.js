const projects = [
  {
    title: 'Ecommerce Angular 17 Tailwind Stripe',
    type: 'Angular 17',
    description:
      'Frontend de e-commerce con Angular 17, Tailwind y flujo visual de compra. Muestra estructura moderna, routing y UI enfocada a conversion.',
    demo: 'https://ecommerce-a17-vlv.netlify.app',
    repo: 'https://github.com/VlV-515/ecommerce-angular17-tailwind-stripe',
    tags: ['Angular 17', 'Tailwind', 'TypeScript', 'Stripe UI']
  },
  {
    title: 'Ecommerce Demo Angular',
    type: 'Angular 13',
    description:
      'Demo completa de e-commerce con Angular Material, Bootstrap, carrito y exploracion de productos.',
    demo: 'https://ecommerce-vlv.netlify.app',
    repo: 'https://github.com/VlV-515/ecommerce-demo-angular',
    tags: ['Angular', 'Angular Material', 'Bootstrap', 'Toastr']
  },
  {
    title: 'Motociclistas Angular',
    type: 'Angular 12',
    description:
      'Simulacion de asignacion de recursos por bloques de tiempo de 30 minutos. Resuelve una logica operativa clara con feedback visual.',
    demo: 'https://motociclistas-vlv.netlify.app',
    repo: 'https://github.com/VlV-515/2-Motociclistas-Angular',
    tags: ['Angular', 'Scheduling Logic', 'UI Feedback', 'Responsive']
  },
  {
    title: 'Demo Shopping Cart',
    type: 'Angular 12',
    description:
      'Carrito de compras demo con enfoque en flujo SPA, estado visual y experiencia de compra simplificada.',
    demo: 'https://shopping-cart-vlv.netlify.app',
    repo: 'https://github.com/VlV-515/demo-shoping-cart',
    tags: ['Angular', 'Cart Flow', 'SPA', 'TypeScript']
  },
  {
    title: 'GIF Search React Vite',
    type: 'React',
    description:
      'Buscador de GIFs construido con React y Vite, orientado a consumo de APIs y respuesta rapida en frontend.',
    demo: 'https://gif-search-vlv.netlify.app',
    repo: 'https://github.com/VlV-515/demo-gif-search-react-test-vite',
    tags: ['React', 'Vite', 'API Consumption', 'JavaScript']
  },
  {
    title: 'Rick and Morty React UseContext',
    type: 'React',
    description:
      'Aplicacion React que consume la API de Rick and Morty usando contexto para organizacion de estado y navegacion de datos.',
    demo: 'https://rick-morty-vlv.netlify.app',
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
    title: 'Backend y Flujo de Trabajo',
    description: 'Conocimiento complementario para integración, colaboración y operación del producto.',
    items: ['Node.js', 'MongoDB', 'MySQL', 'PHP', 'Git', 'GitHub', 'Jira', 'SCRUM', 'Netlify']
  },
  {
    title: 'IA y Developer Tooling',
    description: 'Capacidades actuales para acelerar exploración, automatización y ejecución técnica.',
    items: ['IA aplicada', 'AI Agents', 'MCP', 'Claude Code', 'OpenCode', 'Prompting', 'Skills', 'Automation']
  }
];

const projectsGrid = document.querySelector('#projects-grid');
const skillsGrid = document.querySelector('#skills-grid');

projectsGrid.innerHTML = projects
  .map(
    (project) => `
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
          <a class="project-link" href="${project.demo}" target="_blank" rel="noreferrer">Demo</a>
          <a class="project-link" href="${project.repo}" target="_blank" rel="noreferrer">Codigo</a>
        </div>
      </article>
    `
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
