/**
 * KeyboardEvent.key values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
 */
export const KEY_CODES = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_LEFT_IE11: 'Left',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_RIGHT_IE11: 'Right',
  ARROW_UP: 'ArrowUp',
  ARROW_UP_IE11: 'Up',
  ARROW_DOWN: 'ArrowDown',
  ARROW_DOWN_IE11: 'Down',
  ESCAPE: 'Escape',
  ESCAPE_IE11: 'Esc',
  TAB: 'Tab',
  SPACE: ' ',
  SPACE_IE11: 'Spacebar',
  ENTER: 'Enter',
};

/**
 * Sets target="_blank" rel="noopener noreferrer" on external links
 *
 * @return void
 */
export const externalLinks = (elem) => {
  const allLinks = Array.from(elem.querySelectorAll('a'));

  if (allLinks.length > 0) {
    allLinks.forEach(link => {
      if (link.host !== window.location.host) {
        link.setAttribute('rel', 'noopener noreferrer');
        link.setAttribute('target', '_blank');
      }
    });
  }
};

export const alertBar = () => {
  // Pulls in the emergency-fv.js file to load Alert Bar statuses
  const vuEmergency = document.createElement('script');
  vuEmergency.type = 'text/javascript';
  vuEmergency.src = 'https://cdn.vanderbilt.edu/vu-www4/brandbar/emergency-fv.js';
  document.body.appendChild(vuEmergency);
};

export const initJumpLinks = () => {
  // Do not init jump links if jquery is not defined
  if (!window.jQuery) {
    return;
  }
  const $jumpLinks = jQuery('.jump-links__list');
  const $headings = jQuery('.details-page__content [data-jumplink=true], .pathway-page__content [data-jumplink=true]');
  const $sections = $headings.map(function(i, e) {
    const $a = buildSectionAnchorElement(i, e);
    $a.prepend('<svg aria-hidden=true focusable=false><use xlink:href=#chevron></use></svg>');
    const $li = jQuery('<li class="jump-links__item">');
    $li.append($a);
    $jumpLinks.append($li);
    return $li;
  });

  function buildSectionAnchorElement(index, heading) {
    const $heading = jQuery(heading);
    const $a = jQuery('<a class="jump-links__link">');
    let $title = $heading.text();
    if (typeof $heading.data('jumptitle') !== 'undefined' && $heading.data('jumptitle') !== '') {
      $title = $heading.data('jumptitle');
    }
    const $name = convertToSlug($title);
    $heading.attr('id', $name);
    $a.attr('href', `#${  $name}`);
    $a.text($title);
    return $a;
  }

  function convertToSlug(slug) {
    return slug
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
    ;
  }
};

export const initPageWrappers = () => {
  // Do not init guide page wrappers if jquery is not defined
  if (!window.jQuery) {
    return;
  }
  const $guideBody = jQuery('.guide-page__section-body');
  const $guideVisual = jQuery('.guide-page__section-visual');
  const $recircBody = jQuery('.recirc__body');
  const $showcaseSection = jQuery('.values-page__section');
  $guideBody.wrapInner('<div class="guide-page__section-body-inner"></div>');
  $guideVisual.wrapInner('<div class="guide-page__section-visual-inner"></div>');
  $recircBody.wrapInner('<div class="recirc__body-inner"></div>');
  $showcaseSection.wrapInner('<div class="values-page__section-inner"><div class="values-page__section-col"></div></div>');
};

export const initShowcaseThemes = () => {
  // Do not init jump links if jquery is not defined
  if (!window.jQuery) {
    return;
  }
  const $showcaseSections = jQuery('.values-page__section');
  const $sections = $showcaseSections.each(function(i, e) {
    const $this = jQuery(this);
    const $theme = $this.find('.showcase-header').data('parent');
    $this.attr('data-theme', $theme);
  });
};

const createHighlighterForElement = (component, highlighterClass) => {
  const { x, y, width, height } = component.getBoundingClientRect();
  const HIGHLIGHT_WIDTH = 1;

  const highlighter = document.createElement('div');
  highlighter.classList.add(highlighterClass);
  highlighter.style.cssText = `
    top: ${y + window.scrollY - HIGHLIGHT_WIDTH}px;
    left: ${x - HIGHLIGHT_WIDTH}px;
    height: ${height}px;
    width: ${width}px;
    border: ${HIGHLIGHT_WIDTH}px solid red;
    position: absolute;
    pointer-events: none;
    z-index: 100;
  `;

  const label = document.createElement('span');
  label.textContent = component.dataset.component;
  label.style.cssText = `
    background: red;
    color: white;
    padding: 0px 8px;
    font-size: 14px;
    position: absolute;
    top: 0;
    left: 0;
  `;

  highlighter.appendChild(label);

  return highlighter;
};

/**
 * Sets up development keyboard shortcuts
 * - Press "0" to toggle the grid overlay
 * - Press "1" to advance through light, dark, and tone themes
 *
 * @returns void
 */
export const devShortcuts = () => {
  const themes = ['light', 'dark', 'tone'];

  document.addEventListener('keydown', e => {
    if (document.querySelector('.site-grid')) {
      // Press 0 to toggle the grid
      if (e.key === '0') {
        document.body.classList.toggle('show-grid');
      }
    }

    // Press 1 to advance through the themes
    if (e.key === '1') {
      const currentTheme = document.body.getAttribute('data-theme') || themes[0];
      const nextIndex = 1 + themes.indexOf(currentTheme);
      const nextTheme = nextIndex < themes.length ? themes[nextIndex] : themes[0];
      document.body.setAttribute('data-theme', nextTheme);
    }

    // Press 2 to highlight components
    if (e.key === '2') {
      const HIGHLIGHT_SELECTOR = '[data-component]';
      const HIGHLIGHT_CLASS = 'js-component-highlighter';
      const components = document.querySelectorAll(HIGHLIGHT_SELECTOR);
      const highlighters = document.querySelectorAll(`.${HIGHLIGHT_CLASS}`);

      if (highlighters.length) {
        highlighters.forEach(h => h.remove());
      } else {
        components.forEach(component => {
          const highlighter = createHighlighterForElement(component, HIGHLIGHT_CLASS);
          document.body.appendChild(highlighter);
        });
      }
    }

    // Press 's' to collapse style guide sidebar
    if (e.key === 's') {
      const menuButton = document.querySelector('.js-styleguide-menu-button');
      if (menuButton) {
        menuButton.click();
      }
    }
  });
};

/**
 * A bit of JS to detect dark mode and change the favicon accordingly
 * @see https://web.dev/prefers-color-scheme/#reacting-on-dark-mode-changes
 *
 * @returns void
 */
export const faviconTheme = () => {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const isDarkModeOn = darkModeMediaQuery.matches;
  const favicons = document.querySelectorAll('link[rel="icon"]');

  if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
    return;
  }

  // Set hrefs of <link rel="icon"> elements depending on dark mode
  const toggleTheme = isDarkMode => {
    favicons.forEach(link => {
      link.href = isDarkMode ? link.dataset.hrefDark : link.dataset.hrefLight;
    });
  };

  toggleTheme(isDarkModeOn);
  darkModeMediaQuery.addEventListener('change', e => toggleTheme(e.matches));
};

/**
 * Gets the focusable elements in a container
 *
 * @param {HTMLElement} container container element
 *
 * @return {Array} array of focusable elements
 */
export const getFocusables = (container = document) => {
  const focusables = ['[href]', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]'];
  const focusablesQuery = focusables.map(e => `${e}:not([tabindex="-1"])`).join(', ');
  const elements = Array.from(container.querySelectorAll(focusablesQuery));
  // Prevent selecting hidden or disabled elements
  return elements.filter(el => el.offsetParent !== null && !el.hasAttribute('disabled'));
};

/**
 * Event listener for when the document is ready. This serves as replacement for
 * JQuery's `$(document).ready()` function.
 *
 * @see http://youmightnotneedjquery.com/#ready
 *
 * @param {Function} callback the function to call when the DOM is ready
 *
 * @return void
 */
export const onDocumentReady = callback => {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
  }
};

/**
 * Sets the given attributes on an HTML element
 *
 * @param {HTMLElement} elem The HTML element to add attributes to
 * @param {Object} attributes A map of attributes and their values to add to the HTML element
 *
 * @returns void
 */
export const setElemAttributes = (elem, attributes) => {
  Object.entries(attributes).forEach(([attr, value]) => {
    elem.setAttribute(attr, value);
  });
};

/**
 * Throttle an event
 *
 * @param {Function} callback A callback function
 * @param {Number} limit Timeout time in milliseconds
 *
 * @returns void
 */
export const throttle = (callback, limit = 100) => {
  let wait = false;
  return function() {
    if (!wait) {
      callback.call();
      wait = true;
      setTimeout(function() {
        wait = false;
      }, limit);
    }
  };
};

/**
 * Checks if two arrays match
 *
 * @param {Array} arr1 array 1
 * @param {Array} arr2 array 2
 *
 * @return {Boolean}
 */
export const arraysMatch = (arr1, arr2) => {
  // Make sure both arrays are defined
  if (!arr1 || !arr2) {
    return false;
  }

  // Check if the arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Check if all items exist and are in the same order
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // Otherwise, return true
  return true;
};
