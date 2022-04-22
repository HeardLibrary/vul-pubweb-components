class VulNavigation extends HTMLElement {
    connectedCallback() {
        const template = document.getElementById('vul-navigation-tpl');
        const node = document.importNode(template.content, true);
        this.appendChild(node);
    }
}

customElements.define('vul-navigation', VulNavigation);
