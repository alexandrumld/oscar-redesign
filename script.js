/* ============================================
   OSKY — The Archive · script.js
   Vanilla JS · No dependencies
   ============================================ */

(function () {
  'use strict';

  // --- Tracklist Toggle ---
  const toggles = document.querySelectorAll('.tracklist-toggle');

  toggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var targetId = btn.getAttribute('aria-controls');
      var tracklist = document.getElementById(targetId);

      if (expanded) {
        btn.setAttribute('aria-expanded', 'false');
        btn.querySelector('.toggle-text').textContent = 'SHOW TRACKS';
        tracklist.classList.remove('open');
      } else {
        btn.setAttribute('aria-expanded', 'true');
        btn.querySelector('.toggle-text').textContent = 'HIDE TRACKS';
        tracklist.classList.add('open');
      }
    });
  });

  // --- Scroll Reveal (IntersectionObserver) ---
  var revealElements = document.querySelectorAll(
    '.album-card, .merch-card, .news-item, .singles-row'
  );

  revealElements.forEach(function (el) {
    el.classList.add('reveal');
  });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // --- Smooth scroll for nav links (native, no library) ---
  var navLinks = document.querySelectorAll('.hero-nav a[href^="#"]');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    });
  });

  // --- Notify Me button placeholder ---
  var notifyBtn = document.querySelector('.btn-notify');
  if (notifyBtn) {
    notifyBtn.addEventListener('click', function () {
      if (notifyBtn.disabled) return;
      // Placeholder: would integrate with email list / Shopify notification API
      notifyBtn.textContent = 'YOU\'RE ON THE LIST';
      notifyBtn.disabled = true;
    });
  }

})();