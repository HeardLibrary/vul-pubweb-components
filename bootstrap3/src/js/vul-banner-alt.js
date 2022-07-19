class VulBannerAlt extends HTMLElement {
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

        if (this.hasAttribute('graphic-header-small-url')) {
            html += `
                <a href="${this.getAttribute('graphic-header-small-url')}" class="graphic-header__small">
                    <small>
                        <slot name="graphic-header-small">
                            Jean &amp; Alexander Heard <b>Libraries</b>
                        </slot>
                    </small>
                    <span class="sr-only">Home</span>
                </a>
            `;
        } else {
            html += `
                <div class="graphic-header__small">
                    <small>
                        <slot name="graphic-header-small">
                            Jean &amp; Alexander Heard <b>Libraries</b>
                        </slot>
                    </small>
                </div>
            `;
        } 
        
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
        }
        else {
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

        if (this.hasAttribute('image')) {
            let style = document.createElement('style');
            style.innerHTML = `
                .header-background {
                    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${this.getAttribute('image')}") top center / cover no-repeat !important;
                }
            `;

            shadowRoot.appendChild(style);
        }

        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', stylesheet);
        shadowRoot.appendChild(link);
    }
}

customElements.define('vul-banner-alt', VulBannerAlt);
