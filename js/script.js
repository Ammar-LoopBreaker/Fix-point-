(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- header scrolled state ---------- */
  const header = document.getElementById('site-header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- mobile nav ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    });
  });

  /* ---------- scroll reveal ---------- */
  const revealTargets = document.querySelectorAll(
    '.how-step, .feature-card, .testimonial-card, .tech-card, .matching-copy'
  );
  if (prefersReducedMotion) {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  } else {
    revealTargets.forEach((el) => el.classList.add('reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealTargets.forEach((el) => observer.observe(el));
  }

  /* ---------- impact counters ---------- */
  const counters = document.querySelectorAll('[data-count-to]');

  const formatNumber = (n) => {
    if (n >= 1000000) return (n / 1000000).toFixed(2) + 'M';
    if (n >= 1000) return Math.round(n).toLocaleString('en-US');
    return String(Math.round(n));
  };

  const animateCounter = (el) => {
    const target = Number(el.dataset.countTo);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';

    if (prefersReducedMotion) {
      el.textContent = prefix + formatNumber(target) + suffix;
      return;
    }

    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      el.textContent = prefix + formatNumber(current) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((el) => counterObserver.observe(el));
})();