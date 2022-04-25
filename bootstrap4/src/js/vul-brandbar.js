class VulBrandbar extends HTMLElement {
    constructor() {
        super();

        const brandbar = document.createElement('nav');
        brandbar.classList.add('vu-navbar', 'vu-navbar-inverse');
        brandbar.id = 'main_navbar';
        brandbar.setAttribute('role', 'navigation');
        brandbar.setAttribute('aria-label', 'Vanderbilt University');

        brandbar.innerHTML = `
            <div class="container">
                <div class="vu-navbar-header">
                    <button type="button" class="vu-navbar-toggle" data-toggle="collapse" data-target=".vu-navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="vu-navbar-brand" href="http://www.vanderbilt.edu">
                        <img class="hidden-xs hidden-sm hidden-md" src="https://www.library.vanderbilt.edu/images/vanderbilt2022.svg" alt="Vanderbilt University" width="100%" height="90%">
                        <img class="visible-xs visible-sm visible-md" src="https://www.library.vanderbilt.edu/images/vanderbilt2022.svg" alt="Vanderbilt University" width="100%" height="90%">
                    </a>
                </div>
                <div class="vubrandbar collapse vu-navbar-collapse">
                    <ul class="vu-nav vu-navbar-nav vu-navbar-right vu-toolbar">
                        <!-- Logins -->
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i class="vubrandbar__icon glyphicon glyphicon-lock"></i>&nbsp; Logins <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="https://catalog.library.vanderbilt.edu/discovery/account?vid=01VAN_INST:vanui">My Account</a></li>
                                <li><a href="http://gmail.vanderbilt.edu">VUGmail</a></li>
                                <li><a href="https://outlook.office.com/vanderbilt.edu">VMail</a></li>
                                <li><a href="http://yes.vanderbilt.edu/">YES</a></li>
                                <li><a href="http://www.vanderbilt.edu/brightspace/">Brightspace</a></li>
                                <li><a href="https://oraclecloud.vanderbilt.edu/">SkyVU</a></li>
                                <li><a href="https://anchorlink.vanderbilt.edu/account/logon">Anchor Link</a></li>
                            </ul>
                        </li>

                        <!-- Resources -->
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i class="vubrandbar__icon glyphicon glyphicon-cog"></i>&nbsp; Resources <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="http://vu.edu/peoplefinder">PeopleFinder</a></li>
                                <li><a href="http://www.library.vanderbilt.edu/">Libraries</a></li>
                                <li><a href="http://news.vanderbilt.edu">News</a></li>
                                <li><a href="http://events.vanderbilt.edu">Calendar</a></li>
                                <li><a href="http://www.vanderbilt.edu/map/">Maps</a></li>
                                <li><a href="http://www.vanderbilt.edu/atoz/letter/A">A-Z</a></li>
                                <li><a href="https://social.vanderbilt.edu">Get Social</a></li>
                            </ul>
                        </li>

                        <!-- Explore VU -->
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i class="vubrandbar__icon glyphicon glyphicon-th"></i>&nbsp; Explore VU <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="http://www.vanderbilt.edu/about/">About</a></li>
                                <li><a href="http://www.vanderbilt.edu/prospective/">Admissions</a></li>
                                <li><a href="http://www.vanderbilt.edu/academics/">Academics</a></li>
                                <li><a href="http://research.vanderbilt.edu/">Research</a></li>
                                <li><a href="http://www.vanderbilt.edu/student/">Students</a></li>
                                <li><a href="http://www.vanderbilt.edu/faculty-staff/">Faculty &amp; Staff</a></li>
                                <li><a href="http://www.vucommodores.com/">Athletics</a></li>
                                <li class="last"><a href="http://www.mc.vanderbilt.edu/">Medical Center</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        `;

        this.appendChild(brandbar);
    }
}

customElements.define('vul-brandbar', VulBrandbar);
