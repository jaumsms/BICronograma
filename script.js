// ── Theme ──
function toggleTheme() {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  document.getElementById('theme-icon').textContent = isLight ? '🌙' : '☀';
}

// Apply saved theme on load
(function () {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = '🌙';
  }
})();

// ── Typed effect ──
const words = ['Dados', 'S&OP', 'BI', 'Supply Chain'];
let wi = 0, ci = 0, deleting = false;

function typeEffect() {
  const el = document.getElementById('typed');
  if (!el) return;

  const word = words[wi];

  if (!deleting) {
    el.textContent = word.slice(0, ++ci);
    if (ci === word.length) {
      deleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }
    setTimeout(typeEffect, 90);
  } else {
    el.textContent = word.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      wi = (wi + 1) % words.length;
      setTimeout(typeEffect, 400);
      return;
    }
    setTimeout(typeEffect, 50);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeEffect, 600);
});

// ── Navbar scroll shadow ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.style.boxShadow = window.scrollY > 10
    ? '0 4px 32px rgba(0,0,0,0.3)'
    : 'none';
});

// ── Mobile menu ──
function toggleMenu() {
  const menu = document.getElementById('nav-mobile');
  menu.classList.toggle('open');
}

function closeMenu() {
  document.getElementById('nav-mobile').classList.remove('open');
}

// ── Smooth scroll for anchor links ──
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  e.preventDefault();
  const target = document.querySelector(a.getAttribute('href'));
  if (target) target.scrollIntoView({ behavior: 'smooth' });
});

// ── Fade-in on scroll ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-card, .contact-card, .skill-group, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});
