(function () {
  'use strict';

  // ----- Theme toggle -----
  var THEME_KEY = 'wadederby-theme';
  var html = document.documentElement;
  var themeToggle = document.getElementById('theme-toggle');

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function setTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      html.setAttribute('data-theme', theme);
      try {
        localStorage.setItem(THEME_KEY, theme);
      } catch (e) {}
    }
  }

  function initTheme() {
    var stored = getStoredTheme();
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    } else {
      setTheme('dark');
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = html.getAttribute('data-theme');
      setTheme(current === 'light' ? 'dark' : 'light');
    });
  }

  initTheme();

  // ----- Header scroll -----
  var header = document.getElementById('site-header');
  if (header) {
    function updateHeader() {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  // ----- Mobile nav toggle -----
  var navToggleBtn = document.getElementById('nav-toggle-btn');
  var navMain = document.getElementById('nav-main');
  if (navToggleBtn && navMain) {
    var navList = navMain.querySelector('.nav-main');
    if (navList) {
      navToggleBtn.addEventListener('click', function () {
        var open = navList.classList.toggle('is-open');
        navToggleBtn.setAttribute('aria-expanded', open);
      });
    }
  }
})();
