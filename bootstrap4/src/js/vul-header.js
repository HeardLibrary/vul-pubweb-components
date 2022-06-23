class VulHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const { shadowRoot } = this;
        const header = document.createElement('header');
        let stylesheet = 'dist/css/vul-pw-header.css';
        let division = this.hasAttribute('division') ? this.getAttribute('division') : 'Jean &amp; Alexander Heard Libraries';

        header.classList.add('vu-header');
        header.innerHTML = `
            <a class="sr-only sr-only-focusable" href="#maincontent">Skip to main content</a>
            <slot></slot>
            
            <div class="img-banner header-background" data-div="${division}">
                <div class="container container--banner">
                    <a href="https://www.library.vanderbilt.edu/">
                        <h1 class="graphic-header__title livetextheader" aria-label="${division} Home">
                            Jean &amp; Alexander Heard <b>Libraries</b>
                        </h1>
                    </a>
                </div>
            </div>
        `;
        shadowRoot.appendChild(header);

        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', stylesheet);
        shadowRoot.appendChild(link);
    }
}

customElements.define('vul-header', VulHeader);
