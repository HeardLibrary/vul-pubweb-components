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
                            <button class="vumainmenu__dropdown dropdown-toggle btn" type="button" id="aboutBtn" data-toggle="dropdown" aria-expanded="false" data-display="static">
                                About <span class="vumainmenu__text--gold fas fa-caret-down"></span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="aboutBtn">
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/about">About the Heard Libraries</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/about/accessanduse.php">Access and Use</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/about/guidetolibraries.php">Guide to Libraries</a>
                                <a class="dropdown-item" href="https://events.vanderbilt.edu/view/month/tags/library">Library Events Calendar</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/policies">Library Policies</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/about/programs.php">Library Programs</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/staff">Staff and Departments</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/giving">Support the Libraries</a>
                                <a class="dropdown-item" href="https://www.vanderbilt.edu/coronavirus/fall-2020/fall-2020-visitors-and-suppliers/">Visitor Information</a>
                            </div>
                        </li>
                        <li class="services dropdown">
                            <button class="vumainmenu__dropdown dropdown-toggle btn" type="button" id="servicesBtn" data-toggle="dropdown" aria-expanded="false" data-display="static">
                                Services <span class="vumainmenu__text--gold fas fa-caret-down"></span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="servicesBtn">
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/services/reserves.php">Course Reserves</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/disc">Digital Scholarship</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/alumni">For Alumni</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/faculty-staff">For Faculty and Staff</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/students">For Students</a>
                                <a class="dropdown-item" href="https://illiad.library.vanderbilt.edu/illiad/logon/">Interlibrary Loan</a>
                                <a class="dropdown-item" href="https://catalog.library.vanderbilt.edu/discovery/account?vid=01VAN_INST:vanui">My Account</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/services/studyrooms.php">Study Rooms and Carrels</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/technology">Technology</a>
                            </div>
                        </li>
                        <li class="research dropdown">
                            <button class="vumainmenu__dropdown dropdown-toggle btn" type="button" id="researchBtn" data-toggle="dropdown" aria-expanded="false" data-display="static">
                                Research <span class="vumainmenu__text--gold fas fa-caret-down"></span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="researchBtn">
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/about/fellows">Buchanan Library Fellows</a>
                                <a class="dropdown-item" href="https://researchguides.library.vanderbilt.edu/az.php">Databases A-Z</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/exhibits">Exhibitions</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/immersion.php">Immersion Resources</a>
                                <a class="dropdown-item" href="https://ir.vanderbilt.edu">Institutional Repository</a>
                                <a class="dropdown-item" href="https://catalog.library.vanderbilt.edu/discovery/jsearch?vid=01VAN_INST:vanui">Journals</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/subject-specialists.php">Librarians by Subject</a>
                                <a class="dropdown-item" href="https://catalog.library.vanderbilt.edu/discovery/search?vid=01VAN_INST:vanui">Library Catalog</a>
                                <a class="dropdown-item" href="https://researchguides.library.vanderbilt.edu">Research and Course Guides</a>
                                <a class="dropdown-item" href="https://tvnews.vanderbilt.edu">Television News Archive</a>
                            </div>
                        </li>
                        <li class="help dropdown">
                            <button class="vumainmenu__dropdown dropdown-toggle btn" type="button" id="helpBtn" data-toggle="dropdown" aria-expanded="false" data-display="static">
                                Help <span class="vumainmenu__text--gold fas fa-caret-down"></span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="helpBtn">
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/about/accessibility.php">Accessibility Services</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/ask-librarian.php">Ask a Librarian</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/about/contact.php">Contact Us</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/disc/copyright.php">Copyright</a>
                                <a class="dropdown-item" href="https://researchguides.library.vanderbilt.edu/search/searching_the_library_catalog">How to Search the Catalog</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/subject-specialists.php">Librarians by Subject</a>
                                <a class="dropdown-item" href="https://researchguides.library.vanderbilt.edu">Research and Course Guides</a>
                            </div>
                        </li>
                        <li class="campus-libraries dropdown">
                            <button class="vumainmenu__dropdown dropdown-toggle btn" type="button" id="campusLibrariesBtn" data-toggle="dropdown" aria-expanded="false" data-display="static">
                                Locations <span class="vumainmenu__text--gold fas fa-caret-down"></span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="campusLibrariesBtn">
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/biomedical/">Biomedical</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/central/">Central</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/divinity/">Divinity</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/gallery/">Fine Arts Gallery</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/law/">Law</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/management/">Management</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/music/">Music</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/peabody/">Peabody</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/science/">Science &amp; Engineering</a>
                                <a class="dropdown-item" href="https://www.library.vanderbilt.edu/specialcollections/">Special Collections</a>
                            </div>
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
