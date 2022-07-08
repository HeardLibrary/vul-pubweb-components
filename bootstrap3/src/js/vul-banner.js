class VulBanner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const { shadowRoot } = this;
        let stylesheet = document.querySelector('link[href*="vul-pw-header.css"]').href;
        let division = this.hasAttribute('division') ? this.getAttribute('division') : 'Jean &amp; Alexander Heard Libraries';
        let url = this.hasAttribute('url') ? this.getAttribute('url') : 'https://www.library.vanderbilt.edu';
        
        const banner = document.createElement('div');
        banner.classList.add('img-banner', 'header-background');
        banner.innerHTML = `
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
        `;
        shadowRoot.appendChild(banner);

        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', stylesheet);
        shadowRoot.appendChild(link);
    }
}

customElements.define('vul-banner', VulBanner);
