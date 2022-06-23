class VulBrandbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
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
                            <button class="dropdown-toggle btn" type="button" id="loginsBtn" data-toggle="dropdown" aria-expanded="false" data-display="static">
                                <i class="vubrandbar__icon glyphicon glyphicon-lock"></i>&nbsp; Logins <span class="caret"></span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="loginsBtn">
                                <a class="dropdown-item" href="https://catalog.library.vanderbilt.edu/discovery/account?vid=01VAN_INST:vanui">My Account</a>
                                <a class="dropdown-item" href="http://gmail.vanderbilt.edu">VUGmail</a>
                                <a class="dropdown-item" href="https://outlook.office.com/vanderbilt.edu">VMail</a>
                                <a class="dropdown-item" href="http://yes.vanderbilt.edu/">YES</a>
                                <a class="dropdown-item" href="http://www.vanderbilt.edu/brightspace/">Brightspace</a>
                                <a class="dropdown-item" href="https://oraclecloud.vanderbilt.edu/">SkyVU</a>
                                <a class="dropdown-item" href="https://anchorlink.vanderbilt.edu/account/logon">Anchor Link</a>
                            </div>
                        </li>

                        <!-- Resources -->
                        <li class="dropdown">
                            <button class="dropdown-toggle btn" type="button" id="resourcesBtn" data-toggle="dropdown" aria-expanded="false" data-display="static">
                                <i class="vubrandbar__icon glyphicon glyphicon-cog"></i>&nbsp; Resources <span class="caret"></span>
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="http://vu.edu/peoplefinder">PeopleFinder</a>
                                <a class="dropdown-item" href="http://www.library.vanderbilt.edu/">Libraries</a>
                                <a class="dropdown-item" href="http://news.vanderbilt.edu">News</a>
                                <a class="dropdown-item" href="http://events.vanderbilt.edu">Calendar</a>
                                <a class="dropdown-item" href="http://www.vanderbilt.edu/map/">Maps</a>
                                <a class="dropdown-item" href="http://www.vanderbilt.edu/atoz/letter/A">A-Z</a>
                                <a class="dropdown-item" href="https://social.vanderbilt.edu">Get Social</a>
                            </div>
                        </li>

                        <!-- Explore VU -->
                        <li class="dropdown">
                            <button class="dropdown-toggle btn" type="button" id="exploreBtn" data-toggle="dropdown" aria-expanded="false" data-display="static">
                                <i class="vubrandbar__icon glyphicon glyphicon-th"></i>&nbsp; Explore VU <span class="caret"></span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="exploreBtn">
                                <a class="dropdown-item" href="http://www.vanderbilt.edu/about/">About</a>
                                <a class="dropdown-item" href="http://www.vanderbilt.edu/prospective/">Admissions</a>
                                <a class="dropdown-item" href="http://www.vanderbilt.edu/academics/">Academics</a>
                                <a class="dropdown-item" href="http://research.vanderbilt.edu/">Research</a>
                                <a class="dropdown-item" href="http://www.vanderbilt.edu/student/">Students</a>
                                <a class="dropdown-item" href="http://www.vanderbilt.edu/faculty-staff/">Faculty &amp; Staff</a>
                                <a class="dropdown-item" href="http://www.vucommodores.com/">Athletics</a>
                                <a class="dropdown-item" href="http://www.mc.vanderbilt.edu/">Medical Center</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        `;

        this.appendChild(brandbar);
    }
}

customElements.define('vul-brandbar', VulBrandbar);
