class VulBanner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const { shadowRoot } = this;
        let stylesheet = document.querySelector('link[href*="vul-pw-header.css"]').href;
        let division = this.hasAttribute('division') ? this.getAttribute('division') : 'Jean &amp; Alexander Heard Libraries';
        
        const banner = document.createElement('div');
        banner.classList.add('img-banner', 'header-background');

        var html = `
        <div class="img-banner header-background" data-div="${division}">
            <div class="container container--banner">
        `;

        if (this.hasAttribute('graphic-header-title-url')) {
            html += `
                <a href="${this.getAttribute('graphic-header-title-url')}">
                    <h1 class="graphic-header__title livetextheader">
                        <slot name="graphic-header-title">
                            Jean &amp; Alexander Heard <b>Libraries</b>
                        </slot>
                    </h1>
                    <span class="sr-only">Home</span>
                </a>
            `;
        } else {
            html += `
                <h1 class="graphic-header__title livetextheader">
                    <slot name="graphic-header-title">
                        Jean &amp; Alexander Heard <b>Libraries</b>
                    </slot>
                </h1>
            `;
        }

        html += `
            </div>
        </div>
        `;
        
        banner.innerHTML = html;
        shadowRoot.appendChild(banner);

        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', stylesheet);
        shadowRoot.appendChild(link);
    }
}

customElements.define('vul-banner', VulBanner);