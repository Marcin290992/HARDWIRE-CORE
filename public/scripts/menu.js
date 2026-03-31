(function () {
  function initMenu() {
    if (typeof window === 'undefined') return;

    // Cleanup previous listeners/DOM artifacts when re-initializing after ClientRouter swap.
    if (typeof window.__hwMenuCleanup === 'function') {
      window.__hwMenuCleanup();
      window.__hwMenuCleanup = null;
    }

    const header = document.getElementById('header');
    const menuCheckbox = document.getElementById('menuCheckbox');
    const navbarMenu = document.getElementById('navbarMenu');
    const menuToggle = document.getElementById('menuToggle');

    if (!header || !navbarMenu || !menuToggle) return;

    const cleanups = [];
    let menuOverlay = document.querySelector('.menu-overlay');
    let closeTimer = null;
    let lockedScrollY = 0;
    let delayedNavTimer = null;
    let isNavigatingWithMenu = false;
    const MENU_CLOSE_MS = 560;

    function listen(target, event, handler, options) {
      target.addEventListener(event, handler, options);
      cleanups.push(function () {
        target.removeEventListener(event, handler, options);
      });
    }

    function onScroll() {
      if (window.scrollY > 10) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }

    function closeAllDropdowns() {
      document.querySelectorAll('.navbar__item.active').forEach((el) => {
        el.classList.remove('active');
        const l = el.querySelector('.navbar__link');
        if (l) l.setAttribute('aria-expanded', 'false');
      });
    }

    function unlockBodyScroll() {
      document.body.classList.remove('menu-open');
      header.classList.remove('menu-open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
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
      // Fixed body lock on mobile can shift sticky header/menu icon when opening from mid-page scroll.
      if (window.innerWidth > 992) {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${lockedScrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';
      }

      header.classList.add('menu-open');
      menuToggle.setAttribute('aria-expanded', 'true');
    }

    function closeMenuAnimated(onDone, isNavigating) {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }

      if (menuCheckbox) menuCheckbox.checked = false;
      menuToggle.setAttribute('aria-expanded', 'false');
      closeAllDropdowns();

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          navbarMenu.classList.add('is-closing');
          if (menuOverlay) menuOverlay.classList.remove('active');
        });
      });

      closeTimer = setTimeout(() => {
        navbarMenu.classList.remove('active');
        navbarMenu.classList.remove('is-closing');
        
        // If navigating, keep blur until page transition completes
        if (isNavigating) {
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.left = '';
          document.body.style.right = '';
          document.body.style.width = '';
          // Keep menu-open class for blur effect
          window.scrollTo(0, lockedScrollY);
          closeTimer = null;
          if (typeof onDone === 'function') onDone();
        } else {
          unlockBodyScroll();
          window.scrollTo(0, lockedScrollY);
          closeTimer = null;
          if (typeof onDone === 'function') onDone();
        }
      }, MENU_CLOSE_MS);
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

      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }

      if (delayedNavTimer) {
        clearTimeout(delayedNavTimer);
        delayedNavTimer = null;
      }

      unlockBodyScroll();
      closeAllDropdowns();
    }

    function createOverlayIfMissing() {
      if (menuOverlay) return;
      menuOverlay = document.createElement('div');
      menuOverlay.classList.add('menu-overlay');
      document.body.appendChild(menuOverlay);
    }

    function setupMobileDropdowns() {
      const dropdownItems = document.querySelectorAll('.navbar__item.has-dropdown');

      dropdownItems.forEach((item) => {
        const link = item.querySelector('.navbar__link');
        if (!link) return;

        const handler = function (e) {
          if (window.innerWidth > 992) return;
          if (!item.classList.contains('has-dropdown')) return;

          e.preventDefault();
          dropdownItems.forEach((other) => {
            if (other !== item) other.classList.remove('active');
          });

          item.classList.toggle('active');
          const isOpen = item.classList.contains('active');
          link.setAttribute('aria-expanded', String(isOpen));
        };

        listen(link, 'click', handler);
      });
    }

    function onMobileNavLinkClick(e) {
      if (window.innerWidth > 992) return;
      const link = e.currentTarget;
      const parentItem = link.closest('.navbar__item');
      if (parentItem && parentItem.classList.contains('has-dropdown')) return;

      const href = link.getAttribute('href');
      if (!href || href === '#' || href === '' || href.indexOf('javascript:') === 0) return;
      if (link.hasAttribute('data-contact-modal')) return;

      if (!navbarMenu.classList.contains('active')) return;

      e.preventDefault();
      e.stopPropagation();
      if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();

      if (delayedNavTimer) {
        clearTimeout(delayedNavTimer);
        delayedNavTimer = null;
      }

      // Mobile flow: close with animation first, then navigate with Astro transition.
      isNavigatingWithMenu = true;
      closeMenuAnimated(() => {
        if (typeof window.__hwNavigate === 'function') {
          window.__hwNavigate(href);
          return;
        }
        if (window.Astro && typeof window.Astro.navigate === 'function') {
          window.Astro.navigate(href);
          return;
        }
        window.location.href = href;
      }, true);
    }

    onScroll();

    listen(window, 'scroll', onScroll, { passive: true });

    if (menuCheckbox) {
      createOverlayIfMissing();
      forceCloseInstant();

      listen(menuCheckbox, 'change', function () {
        if (this.checked) openMenu();
        else closeMenuAnimated();
      });

      if (menuOverlay) {
        listen(menuOverlay, 'click', closeMenuAnimated);
      }

      listen(document, 'keydown', function (e) {
        if (e.key === 'Escape' && navbarMenu.classList.contains('active')) {
          closeMenuAnimated();
        }
      });
    }

    setupMobileDropdowns();

    document.querySelectorAll('.navbar__link').forEach((link) => {
      listen(link, 'click', onMobileNavLinkClick, true);
    });

    listen(window, 'resize', function () {
      if (window.innerWidth > 992 && navbarMenu.classList.contains('active')) {
        forceCloseInstant();
      }
    });

    listen(window, 'pageshow', forceCloseInstant);
    listen(window, 'popstate', forceCloseInstant);

    listen(document, 'visibilitychange', function () {
      if (document.visibilityState === 'visible') forceCloseInstant();
    });

    // Ensure menu state is cleared before Astro starts page swap/transition.
    // But if we're navigating from menu, preserve the blur effect until transition ends.
    listen(document, 'astro:before-preparation', () => {
      if (isNavigatingWithMenu) {
        // Close menu DOM but preserve blur (don't call unlockBodyScroll)
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

        if (closeTimer) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }

        if (delayedNavTimer) {
          clearTimeout(delayedNavTimer);
          delayedNavTimer = null;
        }

        closeAllDropdowns();
      } else {
        forceCloseInstant();
      }
    });

    // Remove blur after page transition animation completes
    // PT total: FADE_IN 80 + SCAN 320 + FADE_OUT 240 = 640ms + small margin
    listen(document, 'astro:after-swap', () => {
      setTimeout(() => {
        unlockBodyScroll();
        isNavigatingWithMenu = false;
        // Force remove any leftover blur/opacity on mobile
        document.body.style.filter = '';
        document.body.style.opacity = '';
        const topbar = document.querySelector('.topbar');
        const main = document.querySelector('main');
        if (topbar) { topbar.style.filter = ''; topbar.style.opacity = ''; }
        if (main) { main.style.filter = ''; main.style.opacity = ''; }
      }, 700);
    });

    document.querySelectorAll('a, button, .menu-toggle').forEach((el) => {
      const touchHandler = function () {};
      listen(el, 'touchstart', touchHandler, { passive: true });
    });

    window.__hwMenuCleanup = function () {
      cleanups.forEach((fn) => fn());
      cleanups.length = 0;
      forceCloseInstant();
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenu, { once: true });
  } else {
    initMenu();
  }

  document.addEventListener('astro:page-load', initMenu);
}());
