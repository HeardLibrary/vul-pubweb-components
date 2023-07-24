import { vulNavigationSvgs, attachPwcStyle } from '../../pwc/utils';

class VulNavigation extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        attachPwcStyle(shadow);
        shadow.innerHTML += vulNavigationSvgs();

        const nav = document.createElement('nav');
              nav.classList.add('primary-nav', 'primary-nav--details', 'primary-nav--above', 'js-site-nav');
              nav.setAttribute('data-component', 'Site Navigation');
              nav.setAttribute('data-theme', 'light');

              nav.innerHTML += `
                  <vul-primary-nav></vul-primary-nav>
                  <vul-mega-menu></vul-mega-menu>
              `;

        shadow.append(nav);

        this.overlay();
    }

    overlay() {
        this.setAttribute('data-theme', 'light');

        let overlay = document.createElement('div');
            overlay.setAttribute('id', 'overlay');

        this.shadowRoot.append(overlay);
    }
}

customElements.define('vul-navigation', VulNavigation);
