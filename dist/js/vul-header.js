class VulHeader extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const header = document.createElement('header');
        const division = this.division;

        header.classList.add('vu-header');
        header.innerHTML = `
            <a class="sr-only sr-only-focusable" href="#maincontent">Skip to main content</a>
            <slot></slot>
            
            <div class="img-banner header-background" data-div="${this.division}">
                <div class="container container--banner">
                    <a href="https://www.library.vanderbilt.edu/">
                        <h1 class="graphic-header__title livetextheader" aria-label="${this.division} Home">
                        Jean &amp; Alexander Heard <b>Libraries</b>
                        </h1>
                    </a>
                </div>
            </div>
        `;

        shadow.appendChild(header);
    }

    loadStylesheets(shadowRoot) {
        let stylesheets = [
            'dist/css/bootstrap.css',
            'dist/css/vu-main-2019.css',
            'dist/css/vul-header-bs3.css',
        ];

        stylesheets.forEach((stylesheet) => {
            var link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('href', stylesheet);
            shadowRoot.appendChild(link);
        });
    }

    connectedCallback() {
        const { shadowRoot } = this;
        this.loadStylesheets(shadowRoot);
    }

    get division() {
        return this.getAttribute('division') || '';
    }
}

customElements.define('vul-header', VulHeader);
