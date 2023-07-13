/* eslint-disable no-undef */
// eslint-disable-next-line
import BaseMenu from './BaseMenu';
import Tabs from './Tabs';
import { KEY_CODES } from '../utils';

const BP_DESKTOP = 1070;
const ACTIVE_CLASS = 'active';

class MegaMenu extends BaseMenu {
  constructor(openButton, closeButton, modalElem) {
    super(openButton, closeButton, modalElem);

    this.menu = modalElem;
    this.searchForm = this.menu.querySelector('.js-mega-menu-search-form');
    this.searchInput = this.menu.querySelector('.js-mega-menu-search-input');

    const tabsWrapper = this.menu.querySelector('.js-mega-menu-tabs');
    new Tabs(tabsWrapper);

    if (window.innerWidth < BP_DESKTOP) {
      this.initMobileMenuAim();
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < BP_DESKTOP) {
        this.initMobileMenuAim();
      }
    });

    // this.searchForm.addEventListener('submit', e => this.onSearchSubmit(e));
    this.searchInput.addEventListener('keydown', e => this.onSearchKeydown(e));
  }
	
  /**
   * Special behavior for mobile
   */
  initMobileMenuAim() {
    function closeParents(target) {
      target.querySelectorAll(".mega-menu__list-item--has-submenu.open").forEach((item) => {
        item.classList.remove("open");
      });
    }

    let localTab = document.querySelector(".mega-menu__panel-local");

    if (localTab) {
      let parents = localTab.querySelectorAll(".mega-menu__list-item--has-submenu");
      if (parents.length > 0) {
        parents.forEach((parent) => {
          parent.querySelector(".mega-menu__list-item-link").addEventListener("click", () => {
            let wasOpen = parent.classList.contains("open");
            closeParents(localTab);
            if (wasOpen == false) {
              parent.classList.add("open");
            } else {
              parent.classList.remove("open");
            }
          });
        });
      }
    }
  }

  /**
   * Perform search based on the search input value
   *
   * @param {SubmitEvent} e Form submit event
   *
   * @returns void
   */
  onSearchSubmit(e) {
    e.preventDefault();
    // For Vanderbilt devs to implement
    window.alert(`Search for: ${this.searchInput.value}`);
  }

  /**
   * Keydown handler for search input
   *
   * @param {KeyboardEvent} e Keyboard event on search input
   *
   * @returns void
   */
  onSearchKeydown(e) {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        this.searchInput.blur();
        break;
      }

      default: {
        break;
      }
    }
  }
}

export default MegaMenu;
