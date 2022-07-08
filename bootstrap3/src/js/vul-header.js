class VulHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const { shadowRoot } = this;
        const header = document.createElement('header');
        let stylesheet = document.querySelector('link[href*="vul-pw-header.css"]').href;

        header.classList.add('vu-header');
        header.innerHTML = `
            <a class="sr-only sr-only-focusable" href="#maincontent">Skip to main content</a>
            <slot></slot>
        `;
        shadowRoot.appendChild(header);

        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', stylesheet);
        shadowRoot.appendChild(link);
    }
}

customElements.define('vul-header', VulHeader);
