document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('header');
  const menuCheckbox = document.getElementById('menuCheckbox');
  const navbarMenu = document.getElementById('navbarMenu');
  const menuToggle = document.getElementById('menuToggle');
  let menuOverlay = null;
  let closeTimer = null;
  let lockedScrollY = 0;

  if (!header || !navbarMenu || !menuToggle) return;

  function onScroll() {
    if (window.scrollY > 10) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }

  function closeAllDropdowns() {
    document.querySelectorAll('.navbar__item.active').forEach((el) => {
      el.classList.remove('active');
      const t = el.querySelector('.dropdown-toggle');
      const l = el.querySelector('.navbar__link');
      if (t) t.setAttribute('aria-expanded', 'false');
      if (l) l.setAttribute('aria-expanded', 'false');
    });
  }

  function openMenu() {
    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }

    navbarMenu.classList.remove('is-closing');
    navbarMenu.classList.add('active');
    if (menuOverlay) menuOverlay.classList.add('active');

    lockedScrollY = window.scrollY;
    document.body.classList.add('menu-open');
    document.body.style.position = 'fixed';
    document.body.style.top = `-${lockedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';

    header.classList.add('menu-open');
    menuToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenuAnimated() {
    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }

    navbarMenu.classList.add('is-closing');
    navbarMenu.classList.remove('active');
    if (menuCheckbox) menuCheckbox.checked = false;
    menuToggle.setAttribute('aria-expanded', 'false');
    closeAllDropdowns();

    closeTimer = setTimeout(() => {
      navbarMenu.classList.remove('is-closing');
      if (menuOverlay) menuOverlay.classList.remove('active');
      document.body.classList.remove('menu-open');
      header.classList.remove('menu-open');

      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      window.scrollTo(0, lockedScrollY);

      closeTimer = null;
    }, 420);
  }

  function forceCloseInstant() {
    navbarMenu.style.transition = 'none';
    navbarMenu.classList.remove('active');
    setTimeout(() => {
      navbarMenu.style.transition = '';
    }, 50);

    if (menuOverlay) {
      menuOverlay.style.transition = 'none';
      menuOverlay.classList.remove('active');
      setTimeout(() => {
        menuOverlay.style.transition = '';
      }, 50);
    }

    if (menuCheckbox) menuCheckbox.checked = false;
    navbarMenu.classList.remove('is-closing');
    document.body.classList.remove('menu-open');
    header.classList.remove('menu-open');

    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    closeAllDropdowns();
  }

  function createOverlay() {
    menuOverlay = document.createElement('div');
    menuOverlay.classList.add('menu-overlay');
    document.body.appendChild(menuOverlay);
    menuOverlay.addEventListener('click', closeMenuAnimated);
  }

  function setupMobileDropdowns() {
    const dropdownItems = document.querySelectorAll('.navbar__item.has-dropdown');

    dropdownItems.forEach((item) => {
      const toggle = item.querySelector('.dropdown-toggle');
      const link = item.querySelector('.navbar__link');

      if (toggle) {
        toggle.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          if (window.innerWidth > 992) return;

          dropdownItems.forEach((other) => {
            if (other !== item) other.classList.remove('active');
          });

          item.classList.toggle('active');
          const isOpen = item.classList.contains('active');
          toggle.setAttribute('aria-expanded', String(isOpen));
          if (link) link.setAttribute('aria-expanded', String(isOpen));
        });
      }

      if (link) {
        link.addEventListener('click', function (e) {
          if (window.innerWidth > 992) return;
          if (!item.classList.contains('has-dropdown')) return;

          e.preventDefault();
          dropdownItems.forEach((other) => {
            if (other !== item) other.classList.remove('active');
          });

          item.classList.toggle('active');
          const isOpen = item.classList.contains('active');
          if (toggle) toggle.setAttribute('aria-expanded', String(isOpen));
          link.setAttribute('aria-expanded', String(isOpen));
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (menuCheckbox) {
    createOverlay();
    forceCloseInstant();

    menuCheckbox.addEventListener('change', function () {
      if (this.checked) openMenu();
      else closeMenuAnimated();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navbarMenu.classList.contains('active')) {
        closeMenuAnimated();
      }
    });
  }

  setupMobileDropdowns();

  document.querySelectorAll('.navbar__link').forEach((link) => {
    link.addEventListener('click', function (e) {
      if (window.innerWidth > 992) return;
      const parentItem = this.closest('.navbar__item');
      if (parentItem && parentItem.classList.contains('has-dropdown')) return;

      const href = this.getAttribute('href');
      if (!href || href === '#' || href === '') return;

      e.preventDefault();
      closeMenuAnimated();
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });

  document.querySelectorAll('.mega-col a, .mega-featured__btn').forEach((link) => {
    link.addEventListener('click', function (e) {
      if (window.innerWidth > 992) return;
      const href = this.getAttribute('href');
      if (!href || href === '#' || href === '') return;

      e.preventDefault();
      closeMenuAnimated();
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 992 && navbarMenu.classList.contains('active')) {
      closeMenuAnimated();
    }
  });

  window.addEventListener('pageshow', forceCloseInstant);
  window.addEventListener('popstate', forceCloseInstant);

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') forceCloseInstant();
  });

  document.querySelectorAll('a, button, .menu-toggle, .dropdown-toggle').forEach((el) => {
    el.addEventListener(
      'touchstart',
      function () {},
      { passive: true }
    );
  });
});
