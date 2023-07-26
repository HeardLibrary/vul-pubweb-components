import { externalLinks } from '../../future-vu/js/utils';
import { vulFooterSvgs, attachPwcStyle } from '../../pwc/utils';

class VulFooter extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        attachPwcStyle(shadow);
        shadow.innerHTML += vulFooterSvgs();

        let html = `
            <div class="site-footer__inner">
                <div class="site-footer__logo">
                    <a class="site-footer__logo-link" href="https://www.vanderbilt.edu/">
                        <svg viewBox="0 0 584 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m204.749 61.98-13.527-29.26c-1.425-3.08-2.208-3.92-4.968-5.04v-.7h16.334v.7c-3.865 1.21-4.464 2.239-3.176 5.086l10.63 23.52 9.978-22.26c1.288-2.893.506-4.619-5.614-6.345v-.701h14.171v.7c-2.301 1.12-3.082 1.96-4.519 5.04l-13.517 29.26h-5.792Zm35.015-28.698c1.287-2.848.689-4.293-3.359-5.6v-.702h12.1l13.527 29.26c1.427 3.08 2.071 3.921 4.048 5.04v.7h-15.412v-.7c3.865-1.214 4.462-2.24 3.174-5.087l-2.3-5.087h-16.609l-1.704 3.819c-1.288 2.895-.505 4.621 5.614 6.348v.7h-14.171v-.7c2.346-1.4 3.404-2.613 4.876-5.834l10.216-22.157Zm-3.451 14.746h13.849l-6.948-15.352-6.901 15.352Zm69.934 13.955h-4.786l-25.215-28.144v18.348c0 5.692.874 6.953 6.994 9.099v.7h-14.63v-.7c3.775-2.007 4.372-3.407 4.372-9.1V35.383c0-5.694-.782-6.626-4.831-7.7v-.702h12.007l22.822 25.48V36.78c0-5.693-.873-6.953-6.994-9.1v-.7h14.632v.7c-3.765 2.006-4.371 3.407-4.371 9.1v25.203Zm9.432 0v-.701c4.048-1.073 4.831-2.007 4.831-7.7v-18.2c0-5.694-.783-6.626-4.831-7.7v-.702h19.828c11.504 0 21.672 7.466 21.672 17.5 0 10.033-10.167 17.5-21.672 17.5l-19.828.003Zm12.192-3.08h7.409c7.958 0 13.617-4.434 13.617-14.422 0-9.987-5.659-14.419-13.617-14.419h-7.409v28.84ZM360.63 26.98h34.413l1.151 12.086h-.691c-4.554-8.166-6.947-9.006-11.409-9.006h-11.266v12.412h7.316c2.116 0 3.174-.559 6.533-6.626h.689v16.34h-.689c-3.359-6.066-4.417-6.628-6.533-6.628h-7.316v13.349h11.042c4.878 0 7.5-1.309 12.194-9.942h.689l-1.243 13.022h-34.88v-.701c4.048-1.073 4.831-2.007 4.831-7.7V35.382c0-5.694-.783-6.626-4.831-7.7v-.702Zm59.813 34.3v.7h-17.492v-.7c4.049-1.073 4.831-2.007 4.831-7.7V35.383c0-5.694-.782-6.626-4.831-7.7v-.702h19.922c11.594 0 17.3 3.313 17.3 9.006 0 4.107-4.187 7.094-11.411 7.888 4.831.747 6.994 3.078 8.971 7.558l2.578 5.882c1.103 2.52 1.609 3.08 3.765 3.966v.7h-5.245c-4.142 0-5.475-1.12-6.81-4.76l-2.336-6.347c-1.657-4.48-3.037-5.414-7.179-5.414h-7.361v8.122c.005 5.74.796 6.626 5.298 7.7Zm11.689-25.06c0-4.392-3.129-6.16-9.709-6.16h-7.273V42.38h7.269c6.58 0 9.713-1.772 9.713-6.158Zm33.909 25.76h-19.412v-.7c3.954-1.073 4.601-2.007 4.601-7.7V35.383c0-5.694-.781-6.626-4.831-7.7v-.702h18.955c11.503 0 17.208 3.359 17.208 8.446 0 4.434-4.187 7.281-11.686 7.887 8.512.561 13.388 4.294 13.388 9.007-.008 5.88-6.079 9.66-18.227 9.66h.004Zm-1.105-19.786c6.35 0 9.57-1.774 9.57-6.067s-3.22-6.067-9.57-6.067h-6.352v12.134h6.352Zm.783 16.707c6.994 0 10.259-2.007 10.259-6.814 0-4.806-3.265-6.813-10.259-6.813h-7.135V58.9h7.135Zm39.706 3.08h-17.023v-.7c4.05-1.074 4.831-2.008 4.831-7.7V35.382c0-5.694-.781-6.626-4.831-7.7v-.702h17.023v.7c-4.048 1.074-4.831 2.006-4.831 7.7v18.2c0 5.693.783 6.627 4.831 7.7v.7Zm5.061 0v-.7c4.049-1.074 4.831-2.008 4.831-7.7V35.382c0-5.694-.782-6.626-4.831-7.7v-.702h17.475v.7c-4.519 1.074-5.291 2.006-5.291 7.7V58.9h9.201c5.29 0 8.005-1.773 12.744-10.874h.691l-1.335 13.955h-33.485Zm36.113-35.001h35.244l1.196 12.554h-.689c-4.557-8.162-6.995-9.474-11.464-9.474h-2.99v23.52c0 5.74.783 6.627 5.292 7.7v.7H555.26v-.7c4.518-1.073 5.29-1.96 5.29-7.7V30.06h-2.992c-4.462 0-6.9 1.306-11.456 9.474h-.689l1.186-12.554ZM216.528 78.612h14.401v.693c-3.681 2.007-4.142 3.407-4.142 9.1v11.434c0 9.193-5.705 14.234-16.191 14.234-10.261 0-16.15-4.247-16.15-13.067V87.01c0-5.692-.781-6.626-4.831-7.7v-.698H207.1v.693c-4.509 1.073-5.293 2.007-5.293 7.7v14.001c0 7.327 4.095 9.706 10.86 9.706 6.947 0 10.857-3.359 10.857-10.873V88.41c0-5.692-.873-6.953-6.992-9.1l-.004-.698Zm57.328 34.999h-4.786l-25.207-28.14v18.332c0 5.695.873 6.955 6.992 9.101v.699h-15.088v-.689c4.003-2.007 4.831-3.407 4.831-9.101V87.008c0-5.692-.691-6.626-4.601-7.7v-.698h11.778l22.822 25.482V88.41c0-5.692-.874-6.953-6.992-9.1v-.698h14.63v.693c-3.765 2.007-4.37 3.407-4.37 9.1l-.009 25.206Zm26.453 0h-17.023v-.697c4.05-1.073 4.833-2.007 4.833-7.7V87.01c0-5.692-.783-6.626-4.833-7.7v-.698h16.794v.693c-3.911 1.073-4.6 2.007-4.6 7.7v18.202c0 5.692.782 6.626 4.829 7.699v.705Zm20.108 0-13.528-29.26c-1.425-3.079-2.163-3.92-4.286-5.046v-.699h15.645v.7c-3.865 1.214-4.464 2.239-3.176 5.086l10.629 23.521 9.978-22.26c1.288-2.894.505-4.622-5.614-6.348v-.699h14.171v.7c-2.3 1.12-3.082 1.96-4.518 5.038l-13.505 29.267h-5.796Zm25.903-35h34.414l1.148 12.087h-.689c-4.554-8.168-6.947-9.006-11.411-9.006h-11.264v12.412h7.316c2.116 0 3.175-.56 6.533-6.626h.689v16.333h-.689c-3.358-6.067-4.417-6.626-6.533-6.626h-7.316v13.346h11.042c4.876 0 7.501-1.306 12.192-9.93h.691l-1.242 13.019H346.32v-.706c4.048-1.073 4.831-2.007 4.831-7.7V87.01c0-5.692-.783-6.626-4.831-7.7v-.698Zm59.811 34.303v.699h-17.49v-.699c4.048-1.073 4.831-2.007 4.831-7.7V87.01c0-5.692-.783-6.626-4.831-7.7v-.698h19.923c11.593 0 17.298 3.313 17.298 9.006 0 4.107-4.232 7.094-11.409 7.886 4.876.747 7.084 3.128 9.11 7.56l2.713 5.88c1.105 2.381 2.071 3.174 4.648 3.968v.699h-6.12c-4.142 0-5.383-1.119-6.81-4.759l-2.483-6.347c-1.749-4.48-3.037-5.414-7.177-5.414h-7.493v8.122c0 5.738.791 6.626 5.29 7.701Zm11.692-25.064c0-4.392-3.129-6.158-9.709-6.158h-7.273V94.01h7.269c6.58 0 9.713-1.77 9.713-6.159Zm51.621 15.121c0 6.301-6.486 11.108-17.39 11.108-4.694 0-9.754-.982-13.665-2.802l-2.622 2.569h-.691l-1.38-14.189h.694c5.522 7.748 12.332 11.853 18.773 11.853 7.408 0 10.72-2.751 10.72-5.599 0-2.146-1.473-4.107-6.213-4.993l-10.95-2.1c-8.472-1.633-11.861-5.18-11.861-9.894 0-5.693 5.338-10.78 16.15-10.78 4.002 0 8.235.888 12.426 2.566l2.345-2.333h.691l1.198 12.794h-.708c-5.752-7.608-11.456-10.455-16.568-10.455-7.269 0-10.26 2.754-10.26 5.368 0 2.332 1.694 4.201 6.165 5.04l11.272 2.1c8.466 1.581 11.87 5.081 11.87 9.747h.004Zm21.395 10.64h-17.023v-.697c4.047-1.073 4.831-2.007 4.831-7.7V87.01c0-5.692-.784-6.626-4.831-7.7v-.698h17.023v.693c-4.048 1.073-4.831 2.007-4.831 7.7v18.202c0 5.692.783 6.626 4.831 7.699v.705Zm6.024-35h35.239l1.197 12.555h-.691c-4.554-8.168-6.992-9.474-11.456-9.474h-2.982v23.521c0 5.738.781 6.626 5.29 7.699v.699h-17.944v-.697c4.519-1.073 5.291-1.961 5.291-7.7V81.692h-2.992c-4.462 0-6.902 1.306-11.456 9.474h-.691l1.195-12.554Zm50.833 35v-.697c4.518-1.073 5.29-1.961 5.29-7.7v-4.949L541.393 84.35c-1.932-2.612-3.451-3.872-5.889-5.04v-.698h16.242v.693c-3.636 1.073-3.728 2.52-1.797 5.087l9.295 12.506 8.252-11.054c1.979-2.706 1.519-4.853-4.095-6.533v-.7h14.448v.694c-2.53 1.215-4.187 2.66-5.889 5.04l-11.596 15.914v4.948c0 5.738.784 6.626 5.293 7.699v.699l-17.961.006Z"></path>
                            <path d="M33.456.806H.961v1.489c9.733 6.654 14.401 11.819 20.458 24.828l46.777 100.009h20.975L33.456.806Z" fill="url(#lockup-a)"></path>
                            <path d="M89.171 127.132V82.978L63.351 27.62C57.291 14.71 58.88 8.155 69.11 2.295V.805H33.457l55.714 126.327Z" fill="url(#lockup-b)"></path>
                            <path d="M144.885.806h32.495v1.489c-9.733 6.652-14.4 11.819-20.458 24.828l-46.777 100.009H89.17L144.885.806Z" fill="url(#lockup-c)"></path>
                            <path d="M89.17 127.132V82.978l25.822-55.358c6.058-12.91 4.468-19.465-5.761-25.325V.805h35.654L89.17 127.133Z" fill="url(#lockup-d)"></path>
                            <defs>
                                <linearGradient id="lockup-a" x1="-37.616" y1="13.865" x2="61.836" y2="48.808" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FEEEB6"></stop>
                                    <stop offset="1" stop-color="#B49248"></stop>
                                </linearGradient>
                                <linearGradient id="lockup-b" x1="12.103" y1="-26.446" x2="87.915" y2="154.395" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FEEEB6"></stop>
                                    <stop offset="1" stop-color="#B49248"></stop>
                                </linearGradient>
                                <linearGradient id="lockup-c" x1="90.226" y1="1.682" x2="126.635" y2="140.418" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FEEEB6"></stop>
                                    <stop offset="1" stop-color="#B49248"></stop>
                                </linearGradient>
                                <linearGradient id="lockup-d" x1="63.163" y1="-6.29" x2="130.147" y2="74.274" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FEEEB6"></stop>
                                    <stop offset="1" stop-color="#B49248"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <span class="visually-hidden">Vanderbilt University</span>
                    </a>
                </div>
                <div class="site-footer__primary">
                    <div class="site-footer__links">
                        <div class="site-footer__link-sets">
                            <ul class="site-footer__link-set site-footer__link-set--1">
                                <li class="site-footer__link-set-item"><a href="https://www.library.vanderbilt.edu/hours/">Library Hours</a></li>
                                <li class="site-footer__link-set-item"><a href="https://www.library.vanderbilt.edu/about/">About the Libraries</a></li>
                                <li class="site-footer__link-set-item"><a href="https://www.library.vanderbilt.edu/about/employment/">Employment</a></li>
                                <li class="site-footer__link-set-item"><a href="https://www.library.vanderbilt.edu/staff/">Staff Directory</a></li>
                                <li class="site-footer__link-set-item"><a href="https://www.library.vanderbilt.edu/about/accessibility/">Accessibility Services</a></li>
                            </ul>
                            <ul class="site-footer__link-set site-footer__link-set--2">
                                <li class="site-footer__link-set-item"><a href="https://www.vanderbilt.edu/work-at-vanderbilt/">Working at Vanderbilt</a></li>
                                <li class="site-footer__link-set-item"><a href="https://events.vanderbilt.edu/">Events</a></li>
                                <li class="site-footer__link-set-item"><a href="https://www.vanderbilt.edu/logins/">Logins</a></li>
                                <li class="site-footer__link-set-item"><a href="https://www.vanderbilt.edu/map/">Campus Map</a></li>
                                <li class="site-footer__link-set-item"><a href="https://news.vanderbilt.edu/experts/">Media Resources</a></li>
                            </ul>
                        </div><!-- site-footer__link-sets -->
                        <div class="site-footer__contact">
                            <p>419 21st Avenue South •&nbsp;Nashville, TN 37203</p><p><a href="https://www.library.vanderbilt.edu/contact/">Contact Us</a> <img src="https://www.library.vanderbilt.edu/static/img/USA_Federal_depository_library_logo.png" class="depository-logo" title="Vanderbilt is a US Federal Depository Library" alt="Vanderbilt is a US Federal Depository Library"></p>
                            <p><a href="https://www.vanderbilt.edu/about/privacy/">Vanderbilt University's Online Privacy Notice</a></p>
                        </div>
                        <div class="site-footer__comm-links">
                            <ul class="site-footer__social">
                                <li>
                                    <a class="site-footer__social-link" href="https://twitter.com/vandylibraries">
                                        <span class="visually-hidden">Twitter</span>
                                        <svg><use xlink:href="#twitter"></use></svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="site-footer__social-link" href="https://www.facebook.com/vandylibraries">
                                        <span class="visually-hidden">Facebook</span>
                                        <svg><use xlink:href="#facebook"></use></svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="site-footer__social-link" href="https://www.linkedin.com/company/jean-and-alexander-heard-libraries">
                                        <span class="visually-hidden">LinkedIn</span>
                                        <svg><use xlink:href="#linkedin"></use></svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="site-footer__social-link" href="https://www.instagram.com/vandylibraries/">
                                        <span class="visually-hidden">Instagram</span>
                                        <svg><use xlink:href="#instagram"></use></svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="site-footer__social-link" href="https://www.youtube.com/playlist?list=PLB1EPeYUwa4n_I0CyMrQidztwO-SdENRm">
                                        <span class="visually-hidden">YouTube</span>
                                        <svg><use xlink:href="#youtube"></use></svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="site-footer__social-link" href="https://www.tiktok.com/@vanderbiltu">
                                        <span class="visually-hidden">TikTok</span>
                                        <svg><use xlink:href="#tiktok"></use></svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="site-footer__social-link" href="https://www.flickr.com/photos/vulibrary">
                                        <span class="visually-hidden">Flickr</span>
                                        <svg><use xlink:href="#flickr"></use></svg>
                                    </a>
                                </li>
                            </ul>
                        </div> <!-- site-comm-links -->
                    </div> <!-- site-footer__links-->
                </div> <!-- site-footer__primary -->
                <div class="site-footer__secondary">
                    <div class="site-footer__universal">
                        <p>Vanderbilt University is committed to principles of equal opportunity and affirmative action. Vanderbilt University does not discriminate against individuals on the basis of their race, sex, sexual orientation, gender identity, religion, color, national or ethnic origin, age, disability, military service, or genetic information in its administration of educational policies, programs, or activities; admissions policies; scholarship and loan programs; athletic or other University-administered programs; or employment. <a href="https://www.vanderbilt.edu/about/accessibility/">Accessibility information</a>. Vanderbilt®, Vanderbilt University® and the Vanderbilt logos are trademarks of The Vanderbilt University. Site Development: <a href="https://web.vanderbilt.edu/">Digital Strategies (Communications and Marketing)</a> and <a href="https://ltds.library.vanderbilt.edu/">Library Technology and Digital Services</a>. © 2023</p>
                    </div>
                </div> <!-- site-footer__secondary -->
            </div>
        `;

        const footer = document.createElement('footer');
              footer.classList.add('site-footer', 'site-footer--standard');
              footer.setAttribute('data-component', 'Site Footer');
              footer.setAttribute('data-theme', 'light');
              footer.insertAdjacentHTML('afterbegin', html);

        shadow.append(footer);

        externalLinks(shadow);
    }
}

customElements.define('vul-footer', VulFooter);
