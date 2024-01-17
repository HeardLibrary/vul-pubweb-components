import { externalLinks } from '../../future-vu/js/utils';
import { vulFooterSvgs, attachPwcStyle } from '../../pwc/js/utils';

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
                            <p>
                                419 21st Avenue South •&nbsp;Nashville, TN 37203</p><p><a href="https://www.library.vanderbilt.edu/contact/">Contact Us</a> 

                                <svg viewBox="0 0 600 475" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" aria-labelledby="depositoryTitle" class="depository-logo" role="img">
                                    <title id="depositoryTitle">Vanderbilt is a US Federal Depository Library</title>
                                    <path id="path3417" d="M291.315,434.301C274.271,432.726 264.932,431.253 253.677,428.365C215.69,418.619 183.343,400.002 154.8,371.459C113.236,329.895 89.483,276.619 84.354,213.451C83.753,206.048 83.315,167.626 83.315,122.3L83.315,43.945L522.03,43.945L522.672,50.091C523.719,60.101 523.385,200.364 522.284,213.445C518.756,255.361 509.287,287.955 491.169,320.547C454.854,385.872 392.786,427.429 321.815,433.935C311.455,434.884 299.216,435.031 291.315,434.301Z" style="fill:rgb(0,44,100);fill-rule:nonzero;"/>
                                    <path id="path3415" d="M319.815,424.996C343.957,422.984 380.317,411.302 402.712,398.362C440.422,376.572 469.609,344.751 489.774,303.445C500.784,280.891 506.264,248.827 506.298,206.761C506.313,187.795 505.998,183.362 503.786,171.386C497.044,134.884 478.732,100.048 453.463,75.657C447.589,69.987 446.38,68.262 446.123,65.18C445.602,58.944 445.848,58.976 397.966,58.959C360.529,58.947 354.686,59.149 351.705,60.564C346.834,62.876 345.453,70.09 349.815,70.44C355.181,70.871 359.211,72.215 363.315,74.944C368.636,78.482 372.296,78.711 379.315,75.945C385.84,73.373 389.125,73.418 392,76.119C393.708,77.723 394.315,79.396 394.315,82.497C394.315,88.107 392.495,89.473 385.204,89.336C378.762,89.214 372.555,86.624 362.306,79.78C353.432,73.854 351.505,73.866 332.454,79.961C317.928,84.609 315.94,85.512 314.303,88.205C310.835,93.908 310.816,99.755 314.235,109.712C315.929,114.646 317.315,119.592 317.315,120.705C317.315,122.064 318.193,122.948 319.99,123.399C322.191,123.952 323.081,123.54 325.006,121.08C328.587,116.504 332.943,115.478 340.531,117.421C351.983,120.353 359.72,124.946 372.201,136.222C379.054,142.415 386.937,162.875 389.355,180.744C390.985,192.8 390.087,212.894 387.466,222.976C380.204,250.916 363.842,275.855 343.629,289.793C339.151,292.881 326.827,298.871 321.388,300.604C314.221,302.887 297.107,303.417 288.658,301.616C271.559,297.973 251.96,284.311 238.573,266.703C233.955,260.629 228.991,247.151 227.23,235.905C225.801,226.778 226.609,210.499 228.865,202.945C234.655,183.558 251.464,165.222 273.003,154.797C284.698,149.136 288.1,144.668 286.885,136.563C286.034,130.891 283.309,126.721 278.14,123.186L273.815,120.228L182.815,119.836L91.815,119.445L91.921,137.368L92.026,155.292L95.656,158.618L99.286,161.945L154.8,161.945C185.333,161.945 210.315,162.093 210.315,162.274C210.315,162.455 208.292,166.154 205.819,170.493C191.619,195.41 187.83,222.642 194.347,252.945C196.825,264.466 206.608,283.773 216.494,296.651C230.943,315.473 254.493,330.387 277.315,335.169C287.618,337.327 306.798,338.023 318.585,336.665L325.355,335.885L321.744,340.911C315.149,350.09 308.69,368.443 304.685,389.382C302.676,399.883 297.18,414.285 293.373,419.022C291.691,421.115 290.315,423.284 290.315,423.842C290.315,424.404 293.554,425.011 297.565,425.202C301.552,425.392 305.715,425.629 306.815,425.73C307.915,425.83 313.765,425.5 319.815,424.996Z" style="fill:white;fill-rule:nonzero;"/>
                                    <path id="path3413" d="M276.257,420.961C280.676,419.694 286.067,414.528 288.274,409.445C289.229,407.245 291.25,399.82 292.765,392.945C295.536,380.365 299.4,369.097 305.185,356.723C306.906,353.041 308.315,349.854 308.315,349.641C308.315,349.428 305.727,349.179 302.565,349.089C299.402,348.998 293.008,348.221 288.354,347.363C283.701,346.504 278.511,346.061 276.821,346.378C271.987,347.285 256.118,364.435 245.356,380.384C239.457,389.126 231.636,395.52 221.091,400.222C217.393,401.87 214.578,403.562 214.837,403.981C216.422,406.545 239.507,414.406 260.315,419.466C271.56,422.201 271.841,422.228 276.257,420.961Z" style="fill:white;fill-rule:nonzero;"/>
                                    <path id="path3411" d="M212.693,391.944C223.119,385.851 228.751,380.604 235.058,371.105C241.402,361.549 245.289,357.581 256.01,349.72C259.967,346.819 263.23,344.128 263.26,343.742C263.29,343.355 261.177,342.097 258.565,340.946C253.562,338.741 243.112,332.653 234.965,327.195C229.322,323.414 224.213,322.987 214.476,325.482C208.746,326.95 192.316,335.211 183.815,340.898C171.935,348.845 163.811,351.942 154.495,352.073C151.096,352.121 148.315,352.359 148.315,352.602C148.315,356.381 160.873,368.759 176.563,380.445C191.05,391.234 199.012,395.945 202.762,395.945C204.553,395.945 208.717,394.267 212.693,391.944Z" style="fill:white;fill-rule:nonzero;"/>
                                    <path id="path3409" d="M157.615,342.291C159.375,341.381 164.19,338.305 168.315,335.454C184.417,324.327 200.758,317.226 212.565,316.226C216.277,315.912 219.315,315.491 219.315,315.291C219.315,314.626 195.068,283.497 192.005,280.23C185.868,273.684 169.566,273.53 156.646,279.897C147.073,284.614 136.132,287.167 125.331,287.205C118.311,287.23 114.929,286.796 112.55,285.566C110.484,284.498 109.315,284.299 109.315,285.016C109.315,287.091 130.357,328.235 133.857,333.002C140.901,342.598 150.078,346.186 157.615,342.291Z" style="fill:white;fill-rule:nonzero;"/>
                                    <path id="path3407" d="M123.315,276.484C142.252,272.214 166.562,267.586 172.043,267.207C176.451,266.902 179.201,267.24 181.455,268.365C183.207,269.239 184.783,269.81 184.959,269.634C185.134,269.459 184.369,266.869 183.259,263.88C182.149,260.891 180.666,253.045 179.963,246.445C179.261,239.845 178.138,233.434 177.467,232.198C176.797,230.962 174.351,228.937 172.031,227.698C167.975,225.531 166.596,225.425 135.815,224.937C107.476,224.487 103.324,224.215 99.523,222.562C97.163,221.535 94.99,220.937 94.693,221.233C94.199,221.727 97.187,241.542 100.8,261.73C102.493,271.194 103.268,272.976 106.943,275.867C110.093,278.344 114.353,278.505 123.315,276.484Z" style="fill:white;fill-rule:nonzero;"/>
                                    <path id="path3405" d="M297.464,270.482C301.063,265.906 308.259,266.217 312.274,271.122C313.704,272.87 315.249,272.985 333.815,272.725L353.815,272.445L354.075,227.695L354.336,182.945L340.315,182.945L340.315,174.445C340.315,164.642 340.432,164.721 330.008,167.436C322.021,169.517 314.863,173.352 309.358,178.501L304.667,182.889L300.741,178.856C295.648,173.623 288.351,169.505 280.671,167.527C270.203,164.832 270.44,164.682 270.105,174.195L269.815,182.445L255.315,183.032L255.315,227.322C255.315,251.681 255.615,271.911 255.982,272.278C256.348,272.645 265.396,272.945 276.088,272.945L295.527,272.945L297.464,270.482Z" style="fill:white;fill-rule:nonzero;"/>
                                    <path id="path3403" d="M265.315,229.445C265.315,194.611 265.352,193.945 267.315,193.945C269.27,193.945 269.315,194.611 269.315,223.945L269.315,253.945L274.637,253.945C277.564,253.945 282.176,254.7 284.887,255.623C289.609,257.232 301.315,263.552 301.315,264.493C301.315,264.741 293.215,264.945 283.315,264.945L265.315,264.945L265.315,229.445Z" style="fill:rgb(195,0,53);fill-rule:nonzero;"/>
                                    <path id="path3401" d="M311.815,262.394C321.154,256.584 326.367,254.641 333.92,254.156L341.372,253.678L341.093,223.811L340.815,193.944L346.315,193.945L346.315,264.945L307.815,264.882L311.815,262.394Z" style="fill:rgb(195,0,53);fill-rule:nonzero;"/>
                                    <path id="path3399" d="M297.815,250.284C293.889,247.338 284.329,242.945 281.843,242.945L279.315,242.945L279.315,180.722L283.065,181.408C288.188,182.345 294.725,186.304 297.796,190.332L300.346,193.674L300.08,222.729C299.817,251.597 299.802,251.775 297.815,250.284Z" style="fill:rgb(195,0,53);fill-rule:nonzero;"/>
                                    <path id="path3397" d="M311.315,222.735C311.315,196.722 311.508,193.109 313.019,190.917C316.135,186.396 322.392,182.584 328.611,181.417L332.315,180.722L332.315,242.945L329.782,242.945C327.167,242.945 318.901,246.73 314.065,250.141L311.315,252.081L311.315,222.735Z" style="fill:rgb(195,0,53);fill-rule:nonzero;"/>
                                    <path id="path3393" d="M178.315,216.055C178.315,212.016 181.097,197.403 182.967,191.617C184.393,187.205 184.386,186.419 182.885,182.49C179.68,174.097 181.703,174.509 140.962,173.936L104.815,173.427L97.461,170.186L90.107,166.945L90.793,175.195C92.108,190.989 94.225,204.954 95.813,208.3C96.692,210.152 98.536,212.18 99.91,212.806C101.607,213.579 112.333,213.945 133.313,213.945C164.267,213.945 173.027,214.688 175.372,217.514C177.227,219.748 178.315,219.209 178.315,216.055Z" style="fill:white;fill-rule:nonzero;"/>
                                </svg>
                            </p>
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
                        <p>Vanderbilt University is committed to principles of equal opportunity and affirmative action. Vanderbilt University does not discriminate against individuals on the basis of their race, sex, sexual orientation, gender identity, religion, color, national or ethnic origin, age, disability, military service, or genetic information in its administration of educational policies, programs, or activities; admissions policies; scholarship and loan programs; athletic or other University-administered programs; or employment. <a href="https://www.vanderbilt.edu/about/accessibility/">Accessibility information</a>. Vanderbilt®, Vanderbilt University® and the Vanderbilt logos are trademarks of The Vanderbilt University. Site Development: <a href="https://web.vanderbilt.edu/">Digital Strategies (Communications and Marketing)</a> and <a href="https://ltas.library.vanderbilt.edu/">Library Technology and Assessment Services</a>. © 2024</p>
                    </div>
                </div> <!-- site-footer__secondary -->
            </div>
        `;

        const footer = document.createElement('footer');
              footer.classList.add('site-footer', 'site-footer--standard');
              footer.setAttribute('data-component', 'Site Footer');
              footer.setAttribute('data-theme', 'light');
              footer.insertAdjacentHTML('afterbegin', html);
        
        const template = document.getElementById('vul-footer');
        if (template) {
            let content = template.content;
            content.firstElementChild.style.marginTop = '1rem';
            footer.querySelector('.site-footer__universal').append(content);
        }

        shadow.append(footer);

        externalLinks(shadow);
    }
}

customElements.define('vul-footer', VulFooter);
