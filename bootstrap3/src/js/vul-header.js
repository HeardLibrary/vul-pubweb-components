class VulHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const { shadowRoot } = this;
        const header = document.createElement('header');
        let stylesheet = this.hasAttribute('stylesheet') ? this.getAttribute('stylesheet') : '../css/vul-pw-header.css';
        let division = this.hasAttribute('division') ? this.getAttribute('division') : 'Jean &amp; Alexander Heard Libraries';
        let url = this.hasAttribute('url') ? this.getAttribute('url') : 'https://www.library.vanderbilt.edu';

        header.classList.add('vu-header');
        header.innerHTML = `
            <a class="sr-only sr-only-focusable" href="#maincontent">Skip to main content</a>

            <slot name="before-img"></slot>
            
            <div class="img-banner header-background" data-div="${division}">
                <div class="container container--banner">
                    <a href="${url}">
                        <h1 class="graphic-header__title livetextheader">
                            <slot name="banner-text">
                                Jean &amp; Alexander Heard <b>Libraries</b>
                            </slot>
                        </h1>
                        <span class="sr-only">Home</span>
                    </a>
                </div>
            </div>

            <slot name="after-img"></slot>
        `;
        shadowRoot.appendChild(header);

        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', stylesheet);
        shadowRoot.appendChild(link);
    }
}

customElements.define('vul-header', VulHeader);
