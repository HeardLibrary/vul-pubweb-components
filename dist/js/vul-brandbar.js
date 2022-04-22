class VulBrandbar extends HTMLElement {
    connectedCallback() {
        const template = document.getElementById('vul-brandbar-tpl');
        const node = document.importNode(template.content, true);
        this.appendChild(node);
    }
}

customElements.define('vul-brandbar', VulBrandbar);
