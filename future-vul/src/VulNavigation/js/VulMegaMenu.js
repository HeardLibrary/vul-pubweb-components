import MegaMenu from '../../future-vu/js/components/MegaMenu';
import { externalLinks } from '../../future-vu/js/utils';

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
							<ul class="mega-menu__list js-mega-menu-list">
								<li class="mega-menu__list-item ">
									<a class="mega-menu__list-item-link" href="https://www.vanderbilt.edu/about/" aria-haspopup="true">About</a>
									<ul class="mega-menu__submenu js-mega-menu-submenu" aria-label="submenu">
										<li><a href="https://www.vanderbilt.edu/this-is-vanderbilt/">This is Vanderbilt</a></li>
										<li><a href="https://www.vanderbilt.edu/about/quick-facts/">Quick Facts</a></li>
										<li><a href="https://www.vanderbilt.edu/about/university-leadership/">University Leadership</a></li>
										<li><a href="https://www.vanderbilt.edu/diversity/">Equity, Diversity &amp; Inclusion</a></li>
										<li><a href="https://www.vanderbilt.edu/about/history/">History</a></li>
										<li><a href="https://www.vanderbilt.edu/about/contact/">Contact</a></li>
										<li><a href="https://www.vanderbilt.edu/atoz/">A to Z</a></li>
									</ul>
								</li>
								<li class="mega-menu__list-item ">
									<a class="mega-menu__list-item-link" href="https://www.vanderbilt.edu/admissions/" aria-haspopup="true">Admissions</a>
									<ul class="mega-menu__submenu js-mega-menu-submenu" aria-label="submenu">
										<li><a href="https://admissions.vanderbilt.edu/">Undergraduate Admissions</a></li>
										<li><a href="https://www.vanderbilt.edu/admissions/graduate-professional-school-admissions/">Graduate &amp; Professional School Admissions</a></li>
										<li><a href="https://www.vanderbilt.edu/admissions/financial-aid/">Financial Aid</a></li>
									</ul>
								</li>
								<li class="mega-menu__list-item ">
									<a class="mega-menu__list-item-link" href="https://www.vanderbilt.edu/academics/" aria-haspopup="true">Academics</a>
									<ul class="mega-menu__submenu js-mega-menu-submenu" aria-label="submenu">
										<li><a href="https://www.vanderbilt.edu/academics/program-finder/">Program Finder</a></li>
										<li><a href="https://www.vanderbilt.edu/academics/#schools-colleges">Schools &amp; Colleges</a></li>
										<li><a href="https://www.vanderbilt.edu/academics/residential-colleges/">Residential Colleges</a></li>
										<li><a href="https://www.vanderbilt.edu/academics/#global-edu">Study Abroad</a></li>
										<li><a href="https://www.library.vanderbilt.edu/">Libraries</a></li>
										<li><a href="https://www.vanderbilt.edu/strategicplan/">Strategic Plan</a></li>
									</ul>
								</li>
								<li class="mega-menu__list-item ">
									<a class="mega-menu__list-item-link" href="https://www.vanderbilt.edu/research/" aria-haspopup="true">Research</a>
									<ul class="mega-menu__submenu js-mega-menu-submenu" aria-label="submenu">
										<li><a href="https://www.vanderbilt.edu/atoz/#centers">Centers &amp; Institutes</a></li>
										<li><a href="https://news.vanderbilt.edu/research/">Research News</a></li>
										<li><a href="https://www.vanderbilt.edu/undergraduate-research/">Undergraduate Research</a></li>
										<li><a href="https://gradschool.vanderbilt.edu/research/">Graduate School Research</a></li>
										<li><a href="https://www.vumc.org/oor/welcome">VUMC Research</a></li>
									</ul>
								</li>
								<li class="mega-menu__list-item ">
									<a class="mega-menu__list-item-link" href="https://www.vanderbilt.edu/student-life/" aria-haspopup="true">Campus Life</a>
									<ul class="mega-menu__submenu js-mega-menu-submenu" aria-label="submenu">
										<li><a href="https://www.vanderbilt.edu/student-life/housing-and-dining/">Housing &amp; Dining</a></li>
										<li><a href="https://www.vanderbilt.edu/student-life/health-safety/">Health &amp; Safety</a></li>
										<li><a href="https://www.vanderbilt.edu/student-life/organizations-identity-centers/">Organizations &amp; Identity Centers</a></li>
										<li><a href="https://vucommodores.com/">Athletics</a></li>
										<li><a href="https://www.vanderbilt.edu/nashville/">Our Hometown - Nashville</a></li>
									</ul>
								</li>
								<li class="mega-menu__list-item ">
									<a class="mega-menu__list-item-link" href="https://www.vanderbilt.edu/news-events/" aria-haspopup="true">News &amp; Events</a>
									<ul class="mega-menu__submenu js-mega-menu-submenu" aria-label="submenu">
										<li><a href="https://news.vanderbilt.edu/">Vanderbilt News</a></li>
										<li><a href="https://news.vanderbilt.edu/research">Research News</a></li>
										<li><a href="https://news.vanderbilt.edu/vanderbilt-magazine">Vanderbilt Magazine</a></li>
										<li><a href="https://events.vanderbilt.edu/">Events</a></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>`;

		megaMenu.innerHTML = html;

		this.append(megaMenu);
    }

	connectedCallback() {
		var resource = 'http://127.0.0.1:5500/future-vul/vul-navigation.json';

        fetch(resource)
            .then((response) => response.json())
			.then((data) => {
				let panelHeardLibraries = document.querySelector('vul-navigation').shadowRoot
											.getElementById('panel-heard-libraries');

				let megaMenuList = document.createElement('ul');
					megaMenuList.classList.add('mega-menu__list', 'js-mega-menu-list');

				data.forEach(item => {
					if (item.hasOwnProperty('dropdown')) {
						let megaMenuListItem = document.createElement('li');
							megaMenuListItem.classList.add('mega-menu__list-item', 'mega-menu__list-item--has-submenu');

						let megaMenuListItemLink = document.createElement('a');
							megaMenuListItemLink.setAttribute('aria-haspopup', 'true');
							megaMenuListItemLink.classList.add('mega-menu__list-item-link');
							megaMenuListItemLink.innerText = item.text;

						let megaMenuSubmenu = document.createElement('ul');
							megaMenuSubmenu.setAttribute('aria-label', 'submenu');
							megaMenuSubmenu.classList.add('mega-menu__submenu', 'js-mega-menu-submenu');

						item.dropdown.forEach(link => {
							let megaMenuSubmenuItem = document.createElement('li');

							let a = document.createElement('a');
								a.href = link.url;
								a.innerText = link.text
							
							megaMenuSubmenuItem.append(a);
							megaMenuSubmenu.append(megaMenuSubmenuItem);
						});

						megaMenuListItem.append(megaMenuListItemLink);
						megaMenuListItem.append(megaMenuSubmenu);
						megaMenuList.append(megaMenuListItem);
						panelHeardLibraries.append(megaMenuList);
					} else {
						let megaMenuListItem = document.createElement('li');
							megaMenuListItem.classList.add('mega-menu__list-item');
						
						let a = document.createElement('a');
							a.href = item.url;
							a.innerText = item.text;

						megaMenuListItem.append(a);
						megaMenuList.append(megaMenuListItem);
					}
				});

				// Nav Mega Menus
				const navs = Array.from(
					document.querySelector('vul-navigation').shadowRoot
						.querySelectorAll('.js-site-nav')
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
			})
			.catch(console.error);
	}
}

customElements.define('vul-mega-menu', VulMegaMenu);
