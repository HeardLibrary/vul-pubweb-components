import PrimaryNav from '../../future-vu/js/components/PrimaryNav';
import { externalLinks } from '../../future-vu/js/utils';
import { fetchWpMenu } from './utils'

class VulPrimaryNav extends HTMLElement {
    constructor() {
        super();

		const primaryNav = document.createElement('div');
			  primaryNav.classList.add('primary-nav__inner');

		var html = `
			<div class="primary-nav__logo">
				<a class="primary-nav__logo-link" href="https://www.vanderbilt.edu/">
					<svg viewBox="0 0 91 65" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
						<path d="M17.53.46H.954v.76C5.918 4.614 8.3 7.249 11.39 13.886l23.863 51.02h10.7L17.531.46Z" fill="url(#a)"></path>
						<path d="M45.953 64.905V42.38L32.78 14.14C29.69 7.552 30.5 4.21 35.72 1.22V.46H17.53l28.423 64.445Z" fill="url(#b)"></path>
						<path d="M74.376.46h16.577v.76c-4.965 3.393-7.346 6.029-10.436 12.666l-23.863 51.02h-10.7L74.375.46Z" fill="url(#c)"></path>
						<path d="M45.953 64.905V42.38l13.173-28.24c3.09-6.587 2.28-9.93-2.939-12.92V.46h18.19L45.952 64.905Z" fill="url(#d)"></path>
						<defs>
							<linearGradient id="a" x1="-18.727" y1="7.122" x2="32.009" y2="24.948" gradientUnits="userSpaceOnUse">
								<stop stop-color="#FEEEB6"></stop>
								<stop offset="1" stop-color="#B49248"></stop>
							</linearGradient>
							<linearGradient id="b" x1="6.636" y1="-13.443" x2="45.312" y2="78.813" gradientUnits="userSpaceOnUse">
								<stop stop-color="#FEEEB6"></stop>
								<stop offset="1" stop-color="#B49248"></stop>
							</linearGradient>
							<linearGradient id="c" x1="46.492" y1=".907" x2="65.066" y2="71.683" gradientUnits="userSpaceOnUse">
								<stop stop-color="#FEEEB6"></stop>
								<stop offset="1" stop-color="#B49248"></stop>
							</linearGradient>
							<linearGradient id="d" x1="32.686" y1="-3.16" x2="66.858" y2="37.94" gradientUnits="userSpaceOnUse">
								<stop stop-color="#FEEEB6"></stop>
								<stop offset="1" stop-color="#B49248"></stop>
							</linearGradient>
						</defs>
					</svg>
					<span class="visually-hidden">Vanderbilt University</span>
				</a>
			</div>
			<div class="primary-nav__content">
				<div class="primary-nav__top">
					<a class="primary-nav__logo-text" href="https://www.vanderbilt.edu/">
						<svg class="primary-nav__logo-text-svg" aria-hidden="true" focusable="false">
							<use xlink:href="#vanderbilt-logo-text"></use>
						</svg>
						<svg class="primary-nav__logo-text-svg-full" aria-hidden="true" focusable="false">
							<use xlink:href="#vanderbilt-logo-text-full"></use>
						</svg>
						<span class="visually-hidden">Vanderbilt University</span>
					</a>
					<div class="primary-nav__tools ">
						<div class="primary-nav__search js-nav-search">
							<svg aria-hidden="true" focusable="false">
								<use xlink:href="#search"></use>
							</svg>
							<form action="https://www.library.vanderbilt.edu/site-search/" class="js-nav-search-form" method="get" role="search">
								<input class="primary-nav__search-input js-nav-search-input" type="text" placeholder="Search the library site" name="q" aria-label="Search the library site">
							</form>
						</div>
						<button class="primary-nav__menu-btn js-mega-menu-open" aria-label="Open Mega Menu">
							<svg aria-hidden="true" focusable="false">
								<use xlink:href="#chevron"></use>
							</svg>
							<span>Menu</span>
						</button>
					</div>
				</div>
				<div class="primary-nav__bottom">
					<a href="https://www.library.vanderbilt.edu" class="primary-nav__site-link">
						<span>Heard Libraries</span>
					</a>
				</div>
			</div>
		</div>`;

		primaryNav.innerHTML = html;

		this.append(primaryNav);
    }

	async connectedCallback() {
		const heardLibraries = await fetchWpMenu(3);
		this.addMenu(heardLibraries);

		const primaryNavigation = document.querySelector('vul-navigation').shadowRoot.querySelector('.primary-nav');
		if (primaryNavigation) {
			new PrimaryNav(primaryNavigation);
		}

		externalLinks(this);
	}

	addMenu(menu) {
		const topItems = menu.filter(item => item.menu_item_parent == 0);

		topItems.forEach(topItem => {
			topItem.children = menu.filter(item => item.menu_item_parent == topItem.ID);
		});

		let html = '<ul class="primary-nav__links">';

		topItems.forEach(topItem => {
			if (topItem.children.length > 0) {
				html += '<li class="primary-nav__links--item primary-nav__has-children">';
				html += `<a class="primary-nav__has-children--toggle">${topItem.title}</a>`;

				html += '<ul class="primary-nav__has-children--list">';

				topItem.children.forEach(link => {
					html += '<li class="primary-nav__has-children--item">';
					html += `<a href="${link.url}">${link.title}</a>`;
					html += '</li>';
				});

				html += '</ul>'; // End .primary-nav__has-children--list
				html += '</li>'; // End .primary-nav__links--item
			} else {
				html += '<li class="primary-nav__links--item">';
				html += `<a href="${topItem.url}">${topItem.title}</a>`;
				html += '</li>';
			}
		});

		html += '</ul>'; // End .primary-nav__links

		document.querySelector('vul-navigation').shadowRoot
				.querySelector('.primary-nav__bottom')
				.insertAdjacentHTML('beforeend', html);
	}
}

customElements.define('vul-primary-nav', VulPrimaryNav);
