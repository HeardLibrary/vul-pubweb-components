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
								<input class="primary-nav__search-input js-nav-search-input" type="text" placeholder="Search this site" name="q" aria-label="Search this site">
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
					<a href="/" class="primary-nav__site-link">
						<span>Heard Libraries</span>
					</a>
					<ul class="primary-nav__links">
						<li class="primary-nav__links--item primary-nav__has-children">
							<a class="primary-nav__has-children--toggle ">About</a>
							<ul class="primary-nav__has-children--list">
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/about/">About the Libraries</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://strategy.library.vanderbilt.edu">Strategic Plan</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="#">Leadership</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="#">Departments</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/staff/">Staff Directory</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/about/library-policies/">Policies</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/hours/">Hours</a>
								</li>
							</ul>
						</li>
						<li class="primary-nav__links--item primary-nav__has-children">
							<a class="primary-nav__has-children--toggle ">Locations</a>
							<ul class="primary-nav__has-children--list">
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/biomedical/">Biomedical</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/central/">Central</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/divinity/">Divinity</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/gallery/">Fine Arts Gallery</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/law/">Law</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/management/">Management</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/music/">Music</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/peabody/">Peabody</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/science/">Science and Engineering</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/specialcollections/">Special Collections</a>
								</li>
							</ul>
						</li>
						<li class="primary-nav__links--item primary-nav__has-children">
							<a class="primary-nav__has-children--toggle ">Research</a>
							<ul class="primary-nav__has-children--list">
								<li class="primary-nav__has-children--item">
									<a href="https://catalog.library.vanderbilt.edu/">Search Collections</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/staff/subject-specialists/">Subject Specialists</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/digitalcommons/">Digital Commons</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/disc/">Digital Scholarship</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="#">Special Collections &amp; Archives</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://researchguides.library.vanderbilt.edu/">Research Guides</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://ir.vanderbilt.edu/">Institutional Repository</a>
								</li>
							</ul>
						</li>
						<li class="primary-nav__links--item primary-nav__has-children">
							<a class="primary-nav__has-children--toggle ">Services</a>
							<ul class="primary-nav__has-children--list">
								<li class="primary-nav__has-children--item">
									<a href="https://catalog.library.vanderbilt.edu/discovery/account?vid=01VAN_INST:vanui">My Account</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="#">Course Reserves</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://illiad.library.vanderbilt.edu/illiad/logon/">Resource Sharing Services</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/technology/">Technology</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="#">Classroom Instruction</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="#">Room Reservations</a>
								</li>
							</ul>
						</li>
						<li class="primary-nav__links--item primary-nav__has-children">
							<a class="primary-nav__has-children--toggle ">News &amp; Events</a>
							<ul class="primary-nav__has-children--list">
								<li class="primary-nav__has-children--item">
									<a href="https://events.vanderbilt.edu/view/month/tags/library">Events</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/exhibits/">Exhibits</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://newsonline.library.vanderbilt.edu/">News</a>
								</li>
							</ul>
						</li>
						<li class="primary-nav__links--item primary-nav__has-children">
							<a class="primary-nav__has-children--toggle ">Help</a>
							<ul class="primary-nav__has-children--list">
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/about/accessibility/">Accessibility</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/ask-librarian/">Ask a Librarian</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/about/contact/">Contact</a>
								</li>
								<li class="primary-nav__has-children--item">
									<a href="https://www.library.vanderbilt.edu/feedback/">Report a Problem</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>`;

		primaryNav.innerHTML = html;

		this.append(primaryNav);
    }
}

customElements.define('vul-primary-nav', VulPrimaryNav);
