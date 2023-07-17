import { KEY_CODES } from '../utils';

/**
 * Interactivity for accessible tabs
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
 */
class Tabs {
  constructor(tabsWrapper, orientation = 'horizontal', onTabChange = null) {
    // Any element containing tablist and tabpanels
    this.tabsWrapper = tabsWrapper;
    this.orientation = orientation;
    this.onTabChange = onTabChange;

    this.tabList = this.tabsWrapper.querySelector('[role="tablist"]');
    this.tabs = Array.from(this.tabList.querySelectorAll('[role="tab"]'));
    this.tabPanels = Array.from(this.tabsWrapper.querySelectorAll('[role="tabpanel"]'));

    this.tabFocus = 0;

    this.init();
  }

  /**
   * Add event listeners
   *
   * @returns void
   */
  init() {
    // Enable arrow navigation between tabs in the tab list
    this.tabList.addEventListener('keydown', e => this.handleKeydown(e));

    // Add a click event handler to each tab
    this.tabs.forEach(tab => {
      tab.addEventListener('click', e => this.changeTabs(e));
    });
  }

  /**
   * Increment tab focus index and make active tab focusable
   *
   * @returns void
   */
  incrementTabFocus() {
    this.tabs[this.tabFocus].setAttribute('tabindex', -1);
    this.tabFocus++;
    // If we're at the end, go to the start
    if (this.tabFocus >= this.tabs.length) {
      this.tabFocus = 0;
    }
    this.tabs[this.tabFocus].setAttribute('tabindex', 0);
    this.tabs[this.tabFocus].focus();
  }

  /**
   * Decrement tab focus index and make active tab focusable
   *
   * @returns void
   */
  decrementTabFocus() {
    this.tabs[this.tabFocus].setAttribute('tabindex', -1);
    this.tabFocus--;
    // If we're at the start, move to the end
    if (this.tabFocus < 0) {
      this.tabFocus = this.tabs.length - 1;
    }
    this.tabs[this.tabFocus].setAttribute('tabindex', 0);
    this.tabs[this.tabFocus].focus();
  }

  /**
   * Handle keyboard navigation with arrows
   *
   * @param {KeyboardEvent} e Keyboard event from tablist keyboard event listener
   *
   * @returns void
   */
  handleKeydown(e) {
    switch (e.key) {
      case KEY_CODES.ARROW_LEFT:
      case KEY_CODES.ARROW_LEFT_IE11: {
        e.preventDefault();
        if (this.orientation === 'horizontal') {
          this.decrementTabFocus();
        }
        break;
      }

      case KEY_CODES.ARROW_RIGHT:
      case KEY_CODES.ARROW_RIGHT_IE11: {
        e.preventDefault();
        if (this.orientation === 'horizontal') {
          this.incrementTabFocus();
        }
        break;
      }

      case KEY_CODES.ARROW_UP:
      case KEY_CODES.ARROW_UP_IE11: {
        e.preventDefault();
        if (this.orientation === 'vertical') {
          this.decrementTabFocus();
        }
        break;
      }

      case KEY_CODES.ARROW_DOWN:
      case KEY_CODES.ARROW_DOWN_IE11: {
        e.preventDefault();
        if (this.orientation === 'vertical') {
          this.incrementTabFocus();
        }
        break;
      }

      default: {
        break;
      }
    }
  }

  /**
   * Handle changing tabs when clicking on a tab
   *
   * @param {MouseEvent} e Mouse event from click event listener
   *
   * @returns void
   */
  changeTabs(e) {
    const target = e.target;

    // Remove all current selected tabs
    Array.from(this.tabList.querySelectorAll('[aria-selected="true"]')).forEach(tab =>
      tab.setAttribute('aria-selected', false),
    );

    // Set this tab as selected
    target.setAttribute('aria-selected', true);

    // Mark the selected tab index on the parent (for desktop pill transaition)
    const selectedTabIndex = this.tabs.indexOf(target);
    this.tabList.dataset.selectedTabIndex = selectedTabIndex;

    // Hide all tab panels
    this.tabPanels.forEach(panel => panel.setAttribute('hidden', true));

    // Show the selected panel
    this.tabsWrapper
      .querySelector(`#${target.getAttribute('aria-controls')}`)
      .removeAttribute('hidden');

    // Run an optional function on change
    if (this.onTabChange) {
      this.onTabChange(e);
    }
  }
}

export default Tabs;
