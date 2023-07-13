import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { KEY_CODES, getFocusables } from '../utils';

/**
 * Base class for accessible modal menus
 */
class BaseMenu {
  constructor(openButton, closeButton, modalElem) {
    this.openButton = openButton;
    this.closeButton = closeButton;
    this.menu = modalElem;

    this.menuOpen = false;
    this.activeClass = 'open';

    this.init();
  }

  /**
   * @type {HTMLElement[]} an array of all focusable elements within the menu
   */
  get focusableEls() {
    return getFocusables(this.menu);
  }

  /**
   * @type {HTMLElement} the first focusable element in the menu
   */
  get firstFocusableEl() {
    return this.focusableEls[0];
  }

  /**
   * @type {HTMLElement} the last focusable element in the menu
   */
  get lastFocusableEl() {
    return this.focusableEls[this.focusableEls.length - 1];
  }

  /**
   * Add event listeners
   *
   * @returns void
   */
  init() {
    this.openButton.addEventListener('click', this.openMenu.bind(this));
    this.closeButton.addEventListener('click', this.closeMenu.bind(this));
  }

  /**
   * Open menu and add keydown event listener
   *
   * @returns void
   */
  openMenu() {
    this.menuOpen = true;
    this.openButton.setAttribute('aria-expanded', true);
    this.menu.setAttribute('aria-hidden', false);
    this.menu.classList.add(this.activeClass);
    this.closeButton.focus();
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
    disableBodyScroll(this.menu);
  }

  /**
   * Close menu and remove keydown event listener
   *
   * @returns void
   */
  closeMenu() {
    this.menuOpen = false;
    this.closeButton.setAttribute('aria-expanded', false);
    this.menu.setAttribute('aria-hidden', true);
    this.menu.classList.remove(this.activeClass);
    this.openButton.focus();
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
    enableBodyScroll(this.menu);
  }

  /**
   * Handle backward tab keydown event
   *
   * @param {KeyboardEvent} e Keyboard event from the keydown event listener
   *
   * @returns void
   */
  handleBackwardTab(e) {
    if (document.activeElement === this.firstFocusableEl) {
      e.preventDefault();
      this.lastFocusableEl.focus();
    }
  }

  /**
   * Handle forward tab keydown event
   *
   * @param {KeyboardEvent} e Keyboard event from the keydown event listener
   *
   * @returns void
   */
  handleForwardTab(e) {
    if (document.activeElement === this.lastFocusableEl) {
      e.preventDefault();
      this.firstFocusableEl.focus();
    }
  }

  /**
   * Handle keydown events
   *
   * @param {KeyboardEvent} e Keyboard event from the keydown event listener
   *
   * @returns void
   */
  handleKeyDown(e) {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        this.closeMenu();
        break;
      }

      case KEY_CODES.TAB: {
        if (this.focusableEls.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          this.handleBackwardTab(e);
        } else {
          this.handleForwardTab(e);
        }
        break;
      }

      default: {
        break;
      }
    }
  }
}

export default BaseMenu;
