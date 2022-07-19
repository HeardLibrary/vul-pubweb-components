class VulNavigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const vuNav = document.createElement('div');
        vuNav.classList.add('vu-navbar', 'vu-navbar-inverse', 'no-border-radius');
        vuNav.innerHTML = `
            <div class="container">
                <nav class="vumainmenu vu-navbar-collapse collapse" aria-label="Library" aria-expanded="false">
                    <ul id="sitenav" class="vu-nav vu-navbar-nav vu-navbar-left vunavigation">
                        <li class="home">
                            <a href="/" aria-label="Jean &amp; Alexander Heard Libraries Home">Home</a>
                        </li>

                        <li class="about dropdown">
                            <a href="#" role="button" aria-haspopup="true" data-toggle="dropdown" class="vumainmenu__dropdown dropdown-toggle">
                                About <span class="vumainmenu__text--gold fas fa-caret-down"></span>
                            </a>
                            <ul class="dropdown-pane dropdown-menu">
                                <li><a href="https://www.library.vanderbilt.edu/about">About the Heard Libraries</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/about/accessanduse.php">Access and Use</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/about/guidetolibraries.php">Guide to Libraries</a></li>
                                <li><a href="https://events.vanderbilt.edu/view/month/tags/library">Library Events Calendar</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/policies">Library Policies</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/about/programs.php">Library Programs</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/staff">Staff and Departments</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/giving">Support the Libraries</a></li>
                                <li><a href="https://www.vanderbilt.edu/coronavirus/fall-2020/fall-2020-visitors-and-suppliers/">Visitor Information</a></li>
                            </ul>
                        </li>

                        <li class="services dropdown">
                            <a href="#" role="button" aria-haspopup="true" data-toggle="dropdown" class="vumainmenu__dropdown dropdown-toggle">
                                Services <span class="vumainmenu__text--gold fas fa-caret-down"></span>
                            </a>
                            <ul class="dropdown-pane dropdown-menu">
                                <li><a href="https://www.library.vanderbilt.edu/services/reserves.php">Course Reserves</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/disc">Digital Scholarship</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/alumni">For Alumni</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/faculty-staff">For Faculty and Staff</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/students">For Students</a></li>
                                <li><a href="https://illiad.library.vanderbilt.edu/illiad/logon/">Interlibrary Loan</a></li>
                                <li><a href="https://catalog.library.vanderbilt.edu/discovery/account?vid=01VAN_INST:vanui">My Account</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/services/studyrooms.php">Study Rooms and Carrels</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/technology">Technology</a></li>
                            </ul>
                        </li>

                        <li class="research dropdown">
                            <a href="#" role="button" aria-haspopup="true" data-toggle="dropdown" class="vumainmenu__dropdown dropdown-toggle">
                                Research <span class="vumainmenu__text--gold fas fa-caret-down"></span>
                            </a>
                            <ul class="dropdown-pane dropdown-menu">
                                <li><a href="https://www.library.vanderbilt.edu/about/fellows">Buchanan Library Fellows</a></li>
                                <li><a href="https://researchguides.library.vanderbilt.edu/az.php">Databases A-Z</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/exhibits">Exhibitions</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/immersion.php">Immersion Resources</a></li>
                                <li><a href="https://ir.vanderbilt.edu">Institutional Repository</a></li>
                                <li><a href="https://catalog.library.vanderbilt.edu/discovery/jsearch?vid=01VAN_INST:vanui">Journals</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/subject-specialists.php">Librarians by Subject</a></li>
                                <li><a href="https://catalog.library.vanderbilt.edu/discovery/search?vid=01VAN_INST:vanui">Library Catalog</a></li>
                                <li><a href="https://researchguides.library.vanderbilt.edu">Research and Course Guides</a></li>
                                <li><a href="https://tvnews.vanderbilt.edu">Television News Archive</a></li>
                            </ul>
                        </li>

                        <li class="help dropdown">
                            <a href="#" role="button" aria-haspopup="true" data-toggle="dropdown" class="vumainmenu__dropdown dropdown-toggle">
                                Help <span class="vumainmenu__text--gold fas fa-caret-down"></span>
                            </a>
                            <ul class="dropdown-pane dropdown-menu">
                                <li><a href="https://www.library.vanderbilt.edu/about/accessibility.php">Accessibility Services</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/ask-librarian.php">Ask a Librarian</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/about/contact.php">Contact Us</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/disc/copyright.php">Copyright</a></li>
                                <li><a href="https://researchguides.library.vanderbilt.edu/search/searching_the_library_catalog">How to Search the Catalog</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/subject-specialists.php">Librarians by Subject</a></li>
                                <li><a href="https://researchguides.library.vanderbilt.edu">Research and Course Guides</a></li>
                            </ul>
                        </li>

                        <li class="campus-libraries dropdown">
                            <a href="#" role="button" aria-haspopup="true" data-toggle="dropdown" class="vumainmenu__dropdown dropdown-toggle">
                                Locations <span class="vumainmenu__text--gold fas fa-caret-down"></span>
                            </a>
                            <ul class="dropdown-pane dropdown-menu">
                                <li><a href="https://www.library.vanderbilt.edu/biomedical/">Biomedical</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/central/">Central</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/divinity/">Divinity</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/gallery/">Fine Arts Gallery</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/law/">Law</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/management/">Management</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/music/">Music</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/peabody/">Peabody</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/science/">Science &amp; Engineering</a></li>
                                <li><a href="https://www.library.vanderbilt.edu/specialcollections/">Special Collections</a></li>
                            </ul>
                        </li>

                        <li class="hours">
                            <a href="https://www.library.vanderbilt.edu/hours.php">Hours</a>
                        </li>

                        <li>
                            <a href="https://www.library.vanderbilt.edu/ask-librarian.php">Ask a Librarian</a>
                        </li>
                    </ul>
                </nav>
            </div>
        `;
        this.appendChild(vuNav);
    }
}

customElements.define('vul-navigation', VulNavigation);
