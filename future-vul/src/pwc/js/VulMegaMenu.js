import MegaMenu from '../../future-vu/js/components/MegaMenu';
import { externalLinks } from '../../future-vu/js/utils';
import { fetchWpMenu } from './utils'

class VulMegaMenu extends HTMLElement {
    constructor() {
        super();

		const megaMenu = document.createElement('div');
			  megaMenu.classList.add('mega-menu', 'js-mega-menu');
			  megaMenu.setAttribute('data-theme', 'dark');
			  megaMenu.setAttribute('role', 'dialog');

		var html = `
			<div class="mega-menu__inner">
				<button class="mega-menu__close-btn js-mega-menu-close">
					<svg>
						<use xlink:href="#x"></use>
					</svg>
					<span class="visually-hidden">Close Menu</span>
				</button>

				<div class="mega-menu__logo">
					<a href="/">
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

				<div class="mega-menu__search">
					<svg aria-hidden="true" focusable="false">
						<use xlink:href="#search"></use>
					</svg>
					<form action="https://www.library.vanderbilt.edu/site-search/" class="mega-menu__search-form js-mega-menu-search-form" method="get" role="search">
						<input class="mega-menu__search-input js-mega-menu-search-input" type="text" placeholder="Search the library site" name="q" aria-label="Search the library site">
					</form>
				</div>

				<div class="mega-menu__content js-mega-menu-tabs">
					<div class="mega-menu__tabs " role="tablist" aria-label="Department Tabs">
						<button class="mega-menu__tab button" role="tab" aria-selected="true" aria-controls="panel-heard-libraries" id="heard-libraries" tabindex="0">
							Heard Libraries
						</button>
						<button class="mega-menu__tab button" role="tab" aria-selected="false" aria-controls="panel-all-vanderbilt" id="all-vanderbilt" tabindex="-1">
							All Vanderbilt
						</button>
					</div>
					<div class="mega-menu__panels">
						<div class="mega-menu__panel mega-menu__panel-local" id="panel-heard-libraries" role="tabpanel" tabindex="0" aria-labelledby="heard-libraries">
						</div>

						<div class="mega-menu__panel " id="panel-all-vanderbilt" role="tabpanel" tabindex="0" aria-labelledby="all-vanderbilt" hidden="">
						</div>
					</div>
				</div>
			</div>
		</div>`;

		megaMenu.innerHTML = html;

		this.append(megaMenu);
    }

	async connectedCallback() {
		const heardLibraries = await fetchWpMenu(3);
		this.addMenu(heardLibraries, 'heard-libraries');
		
		const allVanderbilt = await fetchWpMenu(4);
		this.addMenu(allVanderbilt, 'all-vanderbilt');

		// Nav Mega Menus
		const navs = Array.from(
			document.querySelector('vul-navigation').shadowRoot.querySelectorAll('.js-site-nav')
		);
		if (navs.length) {
			navs.forEach(nav => {
				const openButton = nav.querySelector('.js-mega-menu-open');
				const closeButton = nav.querySelector('.js-mega-menu-close');
				const modalElem = nav.querySelector('.js-mega-menu');

				new MegaMenu(openButton, closeButton, modalElem);
			});
		}

		externalLinks(this);
	}

	addMenu(menu, panel) {
		const topItems = menu.filter(item => item.menu_item_parent == 0);

		topItems.forEach(topItem => {
			topItem.children = menu.filter(item => item.menu_item_parent == topItem.ID);
		});

		let html = '<ul class="mega-menu__list js-mega-menu-list">';

		topItems.forEach(topItem => {
			if (topItem.children.length > 0) {
				if (panel === 'heard-libraries') {
					html += '<li class="mega-menu__list-item mega-menu__list-item--has-submenu">';
					html += `<a class="mega-menu__list-item-link" aria-haspopup="true">${topItem.title}</a>`;
				}

				if (panel === 'all-vanderbilt') {
					html += '<li class="mega-menu__list-item">';
					html += `<a class="mega-menu__list-item-link" href="${topItem.url}" aria-haspopup="true">${topItem.title}</a>`;
				}

				html += '<ul class="mega-menu__submenu js-mega-menu-submenu" aria-label="submenu">';

				topItem.children.forEach(link => {
					html += '<li>';
					html += `<a href="${link.url}">${link.title}</a>`;
					html += '</li>';
				});

				html += '</ul>'; // End .mega-menu__submenu
				html += '</li>'; // End .mega-menu__list-item
			} else {
				html += '<li class="mega-menu__list-item ">';
				html += `<a class="mega-menu__list-item-link" href="${topItem.url}">${topItem.title}</a>`;
				html += '</li>';
			}
		});

		html += '</ul>'; // End .mega-menu__list

		document.querySelector('vul-navigation').shadowRoot
				.getElementById('panel-' + panel)
				.insertAdjacentHTML('afterbegin', html);
	}
}

customElements.define('vul-mega-menu', VulMegaMenu);
