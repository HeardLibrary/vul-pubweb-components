class PrimaryNav {
    constructor(menu) {
        this.menu = menu;
        this.parents = Array.from(
            this.menu.querySelectorAll(".primary-nav__has-children")
        );
        if (this.parents) {
            this.overlay = document.getElementById("overlay");
        }
        this.init();
    }

    closeParents(target) {
        target
            .querySelectorAll(".primary-nav__has-children.open")
            .forEach((item) => {
                item.classList.remove("open");
            });
    }

    toggleOverlay(target) {
        let activeParents = this.menu.getElementsByClassName("open");

        if (activeParents.length > 0) {
            jQuery(target).fadeIn();
            this.menu.classList.add("open");
        } else {
            jQuery(target).fadeOut();
            this.menu.classList.remove("open");
        }
    }

    makeSticky(target) {
        let stickyNav = document.querySelector(target);
        if (stickyNav) {
            if (document.documentElement.scrollTop > 0) {
                stickyNav.classList.add("sticky");
            } else {
                stickyNav.classList.remove("sticky");
            }
        }
    }

    init() {
        if (this.menu) {
            // Drop down child menus
            if (this.parents) {
                this.parents.forEach((parent) => {
                    parent
                        .querySelector(".primary-nav__has-children--toggle")
                        .addEventListener("click", () => {
                            let wasOpen = parent.classList.contains("open");
                            this.closeParents(this.menu);
                            if (wasOpen == false) {
                                parent.classList.add("open");
                                this.menu.classList.add("open");
                            } else {
                                parent.classList.remove("open");
                                this.menu.classList.remove("open");
                            }
                            this.toggleOverlay(this.overlay);
                        });
                });
            }
            // When the overlay is clicked
            if (this.overlay) {
                this.overlay.addEventListener("click", () => {
                    this.closeParents(this.menu);
                    this.toggleOverlay(this.overlay);
                });
            }
        }
        // Sticky navigation
        window.onload = () => {
            this.makeSticky(".primary-nav--sticky");
        };
        document.addEventListener("scroll", () => {
            this.makeSticky(".primary-nav--sticky");
        });
    }
}

export default PrimaryNav;
