class VulNavigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let overlay = document.createElement('div');
            overlay.setAttribute('id', 'overlay')
        document.body.append(overlay);

        const nav = document.createElement('nav');
              nav.classList.add('primary-nav', 'primary-nav--details', 'primary-nav--above', 'js-site-nav');
              nav.setAttribute('data-component', 'Site Navigation');
              nav.setAttribute('data-theme', 'light');

        nav.innerHTML = `
            <svg display="none" width="0" height="0" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <symbol id="x" viewBox="0 0 8 8">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.88911 3.29333L0.707107 0.111328L0 0.818435L3.18201 4.00044L5.27501e-05 7.1824L0.70716 7.8895L3.88911 4.70755L7.07107 7.8895L7.77817 7.1824L4.59622 4.00044L7.77823 0.818435L7.07112 0.111328L3.88911 3.29333Z"></path>
                    </symbol>

                    <symbol id="search" viewBox="0 0 16 16">
                        <circle cx="6.83677" cy="6.83677" r="6.33677"></circle>
                        <path d="M11.7034 11.5294L14.9998 14.826"></path>
                    </symbol>

                    <symbol id="chevron" viewBox="0 0 15 8">
                        <path d="M13.728 0.364014L7.36407 6.72798L1.00012 0.364014"></path>
                    </symbol>

                    <symbol id="vanderbilt-logo-text" viewBox="0 0 125 12">
                        <path d="M5.812 11.595 1.562 2.4C1.112 1.433.866 1.17 0 .817v-.22h5.133v.22c-1.215.38-1.403.703-.998 1.598l3.34 7.39 3.135-6.994c.405-.91.16-1.452-1.764-1.994v-.22h4.453v.22c-.723.352-.968.616-1.42 1.583l-4.248 9.195h-1.82Zm11.002-9.018c.405-.895.217-1.35-1.055-1.76v-.22h3.802l4.25 9.194c.449.968.651 1.232 1.272 1.584v.22h-4.842v-.22c1.214-.382 1.402-.704.997-1.599l-.723-1.598h-5.219l-.535 1.2c-.405.91-.159 1.452 1.764 1.994v.22h-4.453v-.22c.737-.44 1.07-.82 1.532-1.833l3.21-6.962ZM15.73 7.21h4.351l-2.183-4.823L15.73 7.21Zm21.975 4.385H36.2l-7.923-8.843v5.765c0 1.789.274 2.185 2.198 2.86v.22h-4.598v-.22c1.186-.631 1.374-1.071 1.374-2.86v-5.28c0-1.79-.245-2.082-1.518-2.42v-.22h3.773l7.171 8.006V3.676c0-1.789-.274-2.185-2.197-2.86v-.22h4.597v.22c-1.183.63-1.373 1.071-1.373 2.86v7.92Zm2.964 0v-.22c1.272-.337 1.518-.63 1.518-2.42V3.238c0-1.79-.246-2.082-1.518-2.42v-.22h6.23c3.615 0 6.81 2.346 6.81 5.498 0 3.153-3.195 5.5-6.81 5.5h-6.23Zm3.83-.967h2.329c2.5 0 4.279-1.394 4.279-4.532s-1.779-4.53-4.28-4.53H44.5v9.062ZM54.794.597h10.814l.362 3.797h-.218c-1.43-2.565-2.183-2.83-3.585-2.83h-3.54v3.9h2.3c.664 0 .997-.175 2.052-2.081h.216v5.134h-.216c-1.055-1.906-1.388-2.082-2.053-2.082h-2.299v4.194h3.47c1.533 0 2.357-.411 3.832-3.124h.216l-.39 4.092h-10.96v-.22c1.271-.338 1.517-.631 1.517-2.42v-5.72c0-1.79-.246-2.082-1.518-2.42v-.22Zm18.795 10.778v.22h-5.496v-.22c1.272-.338 1.518-.631 1.518-2.42V3.237c0-1.79-.246-2.082-1.518-2.42v-.22h6.26c3.643 0 5.436 1.04 5.436 2.83 0 1.29-1.316 2.229-3.586 2.478 1.518.235 2.198.968 2.82 2.375l.81 1.848c.346.792.505.968 1.182 1.247v.22h-1.648c-1.301 0-1.72-.352-2.14-1.496l-.734-1.995c-.52-1.407-.954-1.7-2.255-1.7h-2.314v2.551c.002 1.804.25 2.082 1.665 2.42ZM77.261 3.5c0-1.38-.983-1.935-3.05-1.935h-2.286v3.87h2.284c2.068 0 3.052-.556 3.052-1.935Zm10.655 8.095h-6.1v-.22c1.243-.338 1.446-.631 1.446-2.42V3.237c0-1.79-.245-2.082-1.518-2.42v-.22h5.957c3.614 0 5.407 1.055 5.407 2.654 0 1.393-1.316 2.288-3.672 2.478 2.674.176 4.206 1.35 4.206 2.83-.002 1.848-1.91 3.036-5.727 3.036h.001Zm-.347-6.218c1.995 0 3.007-.557 3.007-1.906 0-1.349-1.011-1.906-3.007-1.906h-1.996v3.812h1.996Zm.246 5.25c2.198 0 3.224-.63 3.224-2.141 0-1.51-1.026-2.14-3.224-2.14h-2.242v4.281h2.242Zm12.477.968h-5.35v-.22c1.273-.338 1.519-.631 1.519-2.42V3.237c0-1.79-.246-2.082-1.518-2.42v-.22h5.349v.22c-1.272.337-1.518.63-1.518 2.42v5.718c0 1.789.246 2.082 1.518 2.42v.22Zm1.59 0v-.22c1.272-.338 1.518-.631 1.518-2.42V3.237c0-1.79-.246-2.082-1.518-2.42v-.22h5.491v.22c-1.42.337-1.662.63-1.662 2.42v7.39h2.891c1.662 0 2.515-.557 4.004-3.417h.217l-.419 4.385h-10.522ZM113.23.597h11.074l.376 3.944h-.217c-1.431-2.564-2.197-2.976-3.602-2.976h-.939v7.39c0 1.804.246 2.082 1.663 2.42v.22h-5.634v-.22c1.42-.338 1.662-.616 1.662-2.42v-7.39h-.94c-1.402 0-2.168.41-3.599 2.976h-.217l.373-3.944Z"></path>
                    </symbol>

                    <svg id="vanderbilt-logo-text-full" viewBox="0 0 249 12">
                        <path d="M6.399 11.707 2.259 2.75c-.437-.943-.677-1.2-1.522-1.543V.993h5v.214c-1.183.37-1.366.685-.972 1.557l3.254 7.2 3.054-6.814c.395-.886.155-1.414-1.718-1.943V.993h4.338v.214c-.704.343-.944.6-1.383 1.543l-4.138 8.957H6.399Zm10.718-8.785c.394-.872.211-1.314-1.028-1.714V.993h3.704l4.14 8.957c.438.943.635 1.2 1.24 1.542v.215h-4.718v-.215c1.183-.372 1.366-.685.972-1.557l-.704-1.557h-5.085l-.521 1.169c-.394.886-.155 1.414 1.718 1.943v.214h-4.338v-.214c.719-.428 1.042-.8 1.493-1.786l3.127-6.782Zm-1.056 4.514h4.24l-2.127-4.7-2.113 4.7Zm21.407 4.271h-1.465l-7.718-8.615V8.71c0 1.742.267 2.128 2.14 2.785v.215h-4.478v-.215c1.156-.614 1.339-1.043 1.339-2.785V3.565c0-1.743-.24-2.029-1.48-2.357V.993h3.676l6.986 7.8v-4.8c0-1.743-.267-2.129-2.14-2.786V.993h4.478v.214c-1.152.614-1.338 1.043-1.338 2.786v7.714Zm2.888 0v-.214c1.239-.329 1.478-.614 1.478-2.357V3.565c0-1.743-.24-2.029-1.478-2.357V.993h6.07c3.52 0 6.633 2.285 6.633 5.356 0 3.072-3.112 5.358-6.634 5.358h-6.07Zm3.732-.943h2.268c2.436 0 4.168-1.357 4.168-4.414 0-3.057-1.732-4.414-4.168-4.414h-2.268v8.828ZM54.116.993H64.65l.352 3.7h-.211c-1.394-2.5-2.127-2.757-3.493-2.757H57.85v3.8h2.24c.648 0 .972-.172 2-2.03h.21V8.71h-.21c-1.028-1.857-1.352-2.03-2-2.03h-2.24v4.087h3.38c1.494 0 2.297-.4 3.733-3.043h.211l-.38 3.986H54.116v-.215c1.239-.329 1.478-.614 1.478-2.357V3.565c0-1.743-.24-2.029-1.478-2.357V.993Zm18.309 10.5v.214H67.07v-.215c1.24-.328 1.48-.614 1.48-2.357v-5.57c0-1.743-.24-2.029-1.48-2.357V.993h6.099c3.549 0 5.296 1.014 5.296 2.756 0 1.258-1.282 2.172-3.493 2.415 1.479.229 2.14.942 2.746 2.314l.789 1.8c.337.772.492.943 1.152 1.214v.215h-1.605c-1.268 0-1.676-.343-2.085-1.457l-.715-1.943c-.507-1.372-.93-1.658-2.197-1.658h-2.254v2.486c.002 1.758.244 2.029 1.622 2.357Zm3.578-7.672c0-1.344-.958-1.885-2.972-1.885h-2.226v3.77h2.225c2.014 0 2.973-.542 2.973-1.885Zm10.38 7.886h-5.942v-.215c1.21-.328 1.408-.614 1.408-2.357v-5.57c0-1.743-.239-2.029-1.478-2.357V.993h5.802c3.521 0 5.267 1.028 5.267 2.585 0 1.357-1.281 2.229-3.577 2.414 2.606.172 4.098 1.315 4.098 2.758-.002 1.8-1.86 2.957-5.579 2.957h.001Zm-.338-6.057c1.944 0 2.93-.543 2.93-1.857s-.986-1.857-2.93-1.857H84.1V5.65h1.945Zm.24 5.114c2.14 0 3.14-.614 3.14-2.086 0-1.471-1-2.085-3.14-2.085H84.1v4.171h2.185Zm12.154.943h-5.211v-.215c1.24-.328 1.479-.614 1.479-2.357v-5.57c0-1.743-.24-2.029-1.479-2.357V.993h5.211v.214c-1.24.329-1.479.614-1.479 2.357v5.571c0 1.743.24 2.029 1.479 2.357v.215Zm1.55 0v-.215c1.239-.328 1.478-.614 1.478-2.357v-5.57c0-1.743-.239-2.029-1.479-2.357V.993h5.349v.214c-1.383.329-1.619.614-1.619 2.357v7.2h2.816c1.62 0 2.451-.543 3.901-3.329h.212l-.409 4.272h-10.25ZM111.042.993h10.788l.366 3.842h-.211c-1.394-2.498-2.141-2.9-3.509-2.9h-.915v7.2c0 1.758.24 2.029 1.62 2.357v.215h-5.488v-.215c1.383-.328 1.619-.6 1.619-2.357v-7.2h-.915c-1.366 0-2.113.4-3.507 2.9h-.211l.363-3.842ZM137.916 1.136h4.408v.212c-1.126.614-1.268 1.043-1.268 2.785v3.5c0 2.815-1.746 4.358-4.956 4.358-3.141 0-4.943-1.3-4.943-4V3.707c0-1.743-.24-2.029-1.479-2.357v-.214h5.352v.212c-1.38.329-1.62.614-1.62 2.357v4.286c0 2.243 1.253 2.971 3.324 2.971 2.127 0 3.324-1.028 3.324-3.328V4.135c0-1.742-.268-2.128-2.141-2.785l-.001-.214Zm17.549 10.714H154l-7.716-8.614v5.611c0 1.743.267 2.13 2.14 2.786v.214h-4.619v-.21c1.226-.615 1.479-1.044 1.479-2.787V3.706c0-1.742-.211-2.028-1.408-2.357v-.214h3.605l6.986 7.8v-4.8c0-1.742-.267-2.128-2.14-2.785v-.214h4.478v.212c-1.152.614-1.337 1.043-1.337 2.785l-.003 7.717Zm8.097 0h-5.211v-.214c1.24-.328 1.48-.614 1.48-2.357V3.707c0-1.743-.24-2.029-1.48-2.357v-.214h5.141v.212c-1.197.329-1.408.614-1.408 2.357v5.572c0 1.742.239 2.028 1.478 2.357v.216Zm6.155 0-4.14-8.958c-.437-.942-.663-1.199-1.313-1.544v-.214h4.789v.214c-1.183.372-1.366.686-.972 1.557l3.254 7.2 3.055-6.814c.394-.885.154-1.414-1.719-1.943v-.214h4.338v.214c-.704.343-.944.6-1.383 1.543l-4.134 8.959h-1.775Zm7.93-10.714h10.534l.352 3.7h-.211c-1.394-2.5-2.127-2.757-3.493-2.757h-3.448v3.8h2.239c.648 0 .972-.172 2-2.03h.211v5h-.211c-1.028-1.857-1.352-2.028-2-2.028h-2.239v4.086h3.38c1.492 0 2.296-.4 3.732-3.04h.211l-.38 3.985h-10.677v-.216c1.239-.328 1.479-.614 1.479-2.357V3.707c0-1.743-.24-2.029-1.479-2.357v-.214Zm18.309 10.5v.214h-5.354v-.214c1.239-.328 1.478-.614 1.478-2.357V3.707c0-1.743-.239-2.029-1.478-2.357v-.214h6.098c3.549 0 5.295 1.014 5.295 2.757 0 1.257-1.295 2.171-3.492 2.414 1.492.228 2.169.957 2.789 2.314l.83 1.8c.338.729.634.971 1.423 1.215v.214h-1.874c-1.267 0-1.647-.343-2.084-1.457l-.76-1.943c-.536-1.372-.93-1.657-2.197-1.657h-2.294v2.486c0 1.756.242 2.028 1.62 2.357Zm3.578-7.672c0-1.345-.957-1.885-2.972-1.885h-2.226v3.77h2.225c2.014 0 2.973-.542 2.973-1.885Zm15.802 4.628c0 1.93-1.985 3.4-5.323 3.4-1.437 0-2.986-.3-4.183-.857l-.803.786h-.211l-.423-4.343h.213c1.69 2.372 3.775 3.628 5.746 3.628 2.268 0 3.282-.842 3.282-1.713 0-.657-.451-1.258-1.902-1.529l-3.352-.643c-2.593-.5-3.631-1.585-3.631-3.029 0-1.742 1.634-3.3 4.944-3.3 1.225 0 2.521.272 3.804.786l.718-.714h.211l.367 3.916h-.217c-1.761-2.328-3.507-3.2-5.071-3.2-2.226 0-3.141.843-3.141 1.643 0 .714.518 1.286 1.887 1.543l3.45.643c2.592.484 3.634 1.555 3.634 2.983h.001Zm6.549 3.258h-5.211v-.214c1.24-.328 1.479-.614 1.479-2.357V3.707c0-1.743-.239-2.029-1.479-2.357v-.214h5.211v.212c-1.239.329-1.478.614-1.478 2.357v5.572c0 1.742.239 2.028 1.478 2.357v.216Zm1.845-10.714h10.786l.367 3.843h-.212c-1.394-2.5-2.14-2.9-3.506-2.9h-.913v7.2c0 1.756.239 2.028 1.619 2.357v.214h-5.493v-.214c1.383-.328 1.62-.6 1.62-2.357v-7.2h-.916c-1.366 0-2.113.4-3.507 2.9h-.211l.366-3.843Zm15.56 10.714v-.214c1.383-.328 1.619-.6 1.619-2.357V7.764l-3.549-4.872c-.591-.8-1.056-1.185-1.802-1.542v-.214h4.972v.212c-1.113.329-1.141.772-.55 1.557l2.845 3.829 2.526-3.384c.606-.829.465-1.486-1.253-2v-.214h4.422v.212c-.774.372-1.282.814-1.803 1.543l-3.549 4.871v1.515c0 1.756.24 2.028 1.62 2.357v.214l-5.498.002Z"></path>
                    </svg>
                </defs>
            </svg>
        `;

        let stylesheet = document.querySelector('script[src*="vul-pwc-header.js"]')
                        .src
                        .replaceAll('js', 'css');

        let link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('href', stylesheet);
        
        nav.prepend(link);

        nav.innerHTML += `
            <vul-primary-nav></vul-primary-nav>
            <vul-mega-menu></vul-mega-menu>
        `;

        this.appendChild(nav);
    }
}

customElements.define('vul-navigation', VulNavigation);
