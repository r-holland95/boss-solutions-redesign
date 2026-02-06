/* ═══════════════════════════════════════
   BOSS Solutions — SPA Router
   ═══════════════════════════════════════ */

class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    window.addEventListener('hashchange', () => this.resolve());
    window.addEventListener('load', () => this.resolve());
  }

  on(path, handler) {
    this.routes[path] = handler;
    return this;
  }

  navigate(path) {
    window.location.hash = path;
  }

  resolve() {
    const hash = window.location.hash.slice(1) || '/';
    const route = this.routes[hash] || this.routes['/404'] || this.routes['/'];

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Close mobile menu
    document.querySelector('.mobile-menu')?.classList.remove('active');
    document.querySelector('.hamburger')?.classList.remove('open');
    document.body.style.overflow = '';

    this.currentRoute = hash;
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.className = 'page-enter';

    route();

    // Re-init scroll reveals
    initScrollReveal();
    // Re-init FAQ toggles
    initFAQ();
    // Update active nav
    updateActiveNav(hash);
  }
}

function updateActiveNav(hash) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const map = {
    '/': null,
    '/bossdesk': 'products',
    '/bossdesk-ai': 'products',
    '/boss811': 'products',
    '/boss811-risk': 'products',
    '/pricing': 'products',
    '/services': 'services',
    '/support': 'services',
    '/resources': 'resources',
    '/success-stories': 'resources',
    '/testimonials': 'resources',
    '/webinars': 'resources',
    '/blog': 'news',
    '/events': 'news',
    '/press': 'news',
    '/about': 'about',
    '/contact': 'contact',
    '/demo': 'demo',
    '/partners': 'about',
    '/privacy': null,
    '/terms': null,
  };
  const group = map[hash];
  if (group) {
    document.querySelector(`[data-nav="${group}"]`)?.classList.add('active');
  }
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// Navigation helper used in onclick handlers
function nav(path) {
  window.location.hash = path;
}

const router = new Router();
