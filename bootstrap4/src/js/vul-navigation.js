class VulNavigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let division = this.hasAttribute('division') ? this.getAttribute('division') : 'heard';
        const vuNavbar = document.createElement('div');
              vuNavbar.classList.add('vu-navbar', 'vu-navbar-inverse', 'no-border-radius');

        var resource = 'https://d1opv9heh1fms9.cloudfront.net/vul-navigation.json';
        var options = {
            method: 'GET',
            mode: 'cors'
        };

        fetch(resource, options)
            .then((response) => {  
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                return response.json();
            })
            .then((navigation) => {
                var html = `<div class="container">`;
                    html +=     `<nav class="vumainmenu collapse vu-navbar-collapse" aria-label="Library">`;
                    html +=         `<ul id="sitenav" class="vu-nav vu-navbar-nav vu-navbar-left vunavigation">`;

                navigation[division].forEach(item => {
                    if (item.hasOwnProperty('dropdown')) {
                        html += `<li class="${item.text.toLowerCase()} dropdown">`;
                        html +=     `<button type="button" id="${item.text.toLowerCase()}Btn" data-toggle="dropdown" aria-expanded="false" data-display="static" class="vumainmenu__dropdown dropdown-toggle btn">`;
                        html +=         `${item.text} <span class="vumainmenu__text--gold fas fa-caret-down" aria-hidden="true"></span>`;
                        html +=     `</button>`
                        html +=     `<div class="dropdown-menu" aria-labelledby="${item.text.toLowerCase()}Btn">`;

                        item.dropdown.forEach(link => {
                            html +=     `<a class="dropdown-item" href="${link.url}">${link.text}</a>`;
                        });

                        html +=     `</div>`;
                        html += `</li>`;
                    } else {
                        html += `<li>`;
                        html +=     `<a href="${item.url}">${item.text}</a>`;
                        html += `</li>`;
                    }
                });

                vuNavbar.innerHTML = html;
            });

        this.appendChild(vuNavbar);
    }
}

customElements.define('vul-navigation', VulNavigation);
