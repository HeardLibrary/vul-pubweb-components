(()=>{var e,t={647:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}function i(e){var t="function"==typeof Map?new Map:void 0;return i=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return r(e,arguments,s(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),l(i,e)},i(e)}function r(e,t,n){return r=o()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var r=new(Function.bind.apply(e,i));return n&&l(r,n.prototype),r},r.apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var c=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(p,e);var i,r,c,a,v,h=(i=p,r=o(),function(){var e,t=s(i);if(r){var o=s(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return n(this,e)});function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(e=h.call(this)).attachShadow({mode:"open"}),e}return c=p,(a=[{key:"connectedCallback",value:function(){var e=this.shadowRoot;e.innerHTML='\n            <svg display="none" width="0" height="0" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <defs>\n                    <symbol id="youtube" viewBox="0 0 30 22">\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7205 1.03071C28.0108 1.37843 29.0284 2.40116 29.3727 3.70002C30 6.05571 30 10.9682 30 10.9682C30 10.9682 30 15.8807 29.3727 18.2364C29.0284 19.5353 28.0108 20.558 26.7205 20.9057C24.3818 21.5364 15 21.5364 15 21.5364C15 21.5364 5.61818 21.5364 3.27955 20.9057C1.9892 20.558 0.971591 19.5353 0.627273 18.2364C0 15.8807 0 10.9682 0 10.9682C0 10.9682 0 6.05571 0.627273 3.70002C0.971591 2.40116 1.9892 1.37843 3.27955 1.03071C5.61818 0.400024 15 0.400024 15 0.400024C15 0.400024 24.3818 0.400024 26.7205 1.03071ZM19.7726 10.9682L11.9316 15.429V6.50739L19.7726 10.9682Z" fill="currentColor"></path>\n                    </symbol>\n            \n                    <symbol id="facebook" viewBox="0 0 30 30">\n                        <path fill="currentColor" d="M12.75,12 L10.5,12 L10.5,15 L12.75,15 L12.75,24 L16.5,24 L16.5,15 L19.2315,15 L19.5,12 L16.5,12 L16.5,10.74975 C16.5,10.0335 16.644,9.75 17.33625,9.75 L19.5,9.75 L19.5,6 L16.644,6 C13.947,6 12.75,7.18725 12.75,9.46125 L12.75,12 Z"></path>\n                    </symbol>\n            \n                    <symbol id="flickr" viewBox="0 0 16 7">\n                        <path d="M0.5 3.9375C0.5 3.12527 0.842821 2.34632 1.45305 1.77199C2.06327 1.19766 2.89092 0.875 3.75391 0.875C4.6169 0.875 5.44454 1.19766 6.05477 1.77199C6.66499 2.34632 7.00781 3.12527 7.00781 3.9375C7.00781 4.33967 6.92365 4.73791 6.76012 5.10947C6.5966 5.48103 6.35692 5.81863 6.05477 6.10301C5.75261 6.38739 5.3939 6.61298 4.99912 6.76688C4.60434 6.92079 4.18122 7 3.75391 7C3.3266 7 2.90347 6.92079 2.50869 6.76688C2.11391 6.61298 1.7552 6.38739 1.45305 6.10301C0.842821 5.52868 0.5 4.74973 0.5 3.9375H0.5ZM8.86719 3.9375C8.86719 3.12527 9.21001 2.34632 9.82023 1.77199C10.4305 1.19766 11.2581 0.875 12.1211 0.875C12.9841 0.875 13.8117 1.19766 14.422 1.77199C15.0322 2.34632 15.375 3.12527 15.375 3.9375C15.375 4.74973 15.0322 5.52868 14.422 6.10301C13.8117 6.67734 12.9841 7 12.1211 7C11.2581 7 10.4305 6.67734 9.82023 6.10301C9.21001 5.52868 8.86719 4.74973 8.86719 3.9375Z" fill="currentColor"></path>\n                    </symbol>\n            \n                    <symbol id="instagram" viewBox="0 0 30 30">\n                        <path fill="currentColor" d="M15,4.5 C12.1475,4.5 11.791375,4.513125 10.671375,4.563 C9.553125,4.6155 8.791875,4.791375 8.1225,5.05125 C7.432125,5.319 6.845875,5.678625 6.26225,6.26225 C5.678625,6.845875 5.318125,7.43125 5.05125,8.1225 C4.791375,8.791875 4.614625,9.553125 4.563,10.671375 C4.5105,11.791375 4.5,12.1475 4.5,15 C4.5,17.8525 4.513125,18.208625 4.563,19.328625 C4.6155,20.446 4.791375,21.208125 5.05125,21.8775 C5.319,22.567 5.678625,23.154125 6.26225,23.73775 C6.845875,24.3205 7.43125,24.681875 8.1225,24.94875 C8.79275,25.20775 9.554,25.385375 10.671375,25.437 C11.791375,25.4895 12.1475,25.5 15,25.5 C17.8525,25.5 18.208625,25.486875 19.328625,25.437 C20.446,25.3845 21.208125,25.20775 21.8775,24.94875 C22.567,24.681 23.154125,24.3205 23.73775,23.73775 C24.3205,23.154125 24.681875,22.569625 24.94875,21.8775 C25.20775,21.208125 25.385375,20.446 25.437,19.328625 C25.4895,18.208625 25.5,17.8525 25.5,15 C25.5,12.1475 25.486875,11.791375 25.437,10.671375 C25.3845,9.554 25.20775,8.791 24.94875,8.1225 C24.681,7.432125 24.3205,6.845875 23.73775,6.26225 C23.154125,5.678625 22.569625,5.318125 21.8775,5.05125 C21.208125,4.791375 20.446,4.614625 19.328625,4.563 C18.208625,4.5105 17.8525,4.5 15,4.5 Z M15,6.39 C17.802625,6.39 18.136875,6.404 19.24375,6.452125 C20.2675,6.50025 20.823125,6.67 21.192375,6.81525 C21.684125,7.005125 22.032375,7.232625 22.401625,7.59925 C22.76825,7.96675 22.99575,8.315875 23.185625,8.807625 C23.329125,9.176875 23.500625,9.7325 23.547,10.75625 C23.596875,11.864 23.60825,12.1965 23.60825,15 C23.60825,17.8035 23.595125,18.136875 23.5435,19.24375 C23.490125,20.2675 23.3195,20.823125 23.175125,21.192375 C22.979125,21.684125 22.756,22.032375 22.3885,22.401625 C22.021875,22.76825 21.6675,22.99575 21.181,23.185625 C20.8135,23.329125 20.249125,23.500625 19.225375,23.547 C18.110625,23.596875 17.7825,23.60825 14.97375,23.60825 C12.164125,23.60825 11.836,23.595125 10.722125,23.5435 C9.6975,23.490125 9.133125,23.3195 8.765625,23.175125 C8.26775,22.979125 7.925625,22.756 7.559,22.3885 C7.190625,22.021875 6.95525,21.6675 6.7715,21.181 C6.627125,20.8135 6.457375,20.249125 6.404,19.225375 C6.364625,18.122875 6.350625,17.7825 6.350625,14.986875 C6.350625,12.190375 6.364625,11.849125 6.404,10.7335 C6.457375,9.70975 6.627125,9.14625 6.7715,8.77875 C6.95525,8.28 7.190625,7.93875 7.559,7.570375 C7.925625,7.20375 8.26775,6.9675 8.765625,6.784625 C9.133125,6.639375 9.68525,6.46875 10.709,6.41625 C11.824625,6.376875 12.15275,6.36375 14.960625,6.36375 L15,6.39 L15,6.39 Z M15,9.60825 C12.020625,9.60825 9.60825,12.02325 9.60825,15 C9.60825,17.979375 12.02325,20.39175 15,20.39175 C17.979375,20.39175 20.39175,17.97675 20.39175,15 C20.39175,12.020625 17.97675,9.60825 15,9.60825 Z M15,18.5 C13.06625,18.5 11.5,16.93375 11.5,15 C11.5,13.06625 13.06625,11.5 15,11.5 C16.93375,11.5 18.5,13.06625 18.5,15 C18.5,16.93375 16.93375,18.5 15,18.5 Z M21.86525,9.395625 C21.86525,10.09125 21.3,10.655625 20.60525,10.655625 C19.909625,10.655625 19.34525,10.090375 19.34525,9.395625 C19.34525,8.700875 19.9105,8.13649899 20.60525,8.13649899 C21.299125,8.135625 21.86525,8.700875 21.86525,9.395625 Z"></path>\n                    </symbol>\n            \n                    <symbol id="linkedin" viewBox="0 0 30 30">\n                        <path fill="currentColor" d="M23.6375751,22.75 L20.0622266,22.75 L20.0622266,17.1475477 C20.0622266,15.8115705 20.0350644,14.0923048 18.1991019,14.0923048 C16.3349711,14.0923048 16.0502712,15.5459847 16.0502712,17.048959 L16.0502712,22.75 L12.4749227,22.75 L12.4749227,11.2292092 L15.9094302,11.2292092 L15.9094302,12.7995859 L15.9557065,12.7995859 C16.4355718,11.8941797 17.6025398,10.9384732 19.3459497,10.9384732 C22.9685805,10.9384732 23.6385811,13.3227095 23.6385811,16.4262407 L23.6385811,22.75 L23.6375751,22.75 Z M8.4368111,9.65279641 C7.28593923,9.65279641 6.36141891,8.72123404 6.36141891,7.5753922 C6.36141891,6.43055637 7.28694524,5.5 8.4368111,5.5 C9.58365895,5.5 10.5132093,6.43055637 10.5132093,7.5753922 C10.5132093,8.72123404 9.58265294,9.65279641 8.4368111,9.65279641 Z M10.2295154,22.75 L6.64410684,22.75 L6.64410684,11.2292092 L10.2295154,11.2292092 L10.2295154,22.75 Z"></path>\n                    </symbol>\n            \n                    <symbol id="medium" viewBox="0 0 30 30">\n                        <path fill="currentColor" d="M22.9833468,9.23153259 C22.8522194,9.33133261 22.7873068,9.49565684 22.8148297,9.65812814 L22.8148297,20.3430503 C22.787771,20.5051334 22.8526349,20.6688807 22.9833468,20.7684674 L24.4646468,22.2226633 L24.4646468,22.5420207 L17.0145444,22.5420207 L17.0145444,22.2238417 L18.5488743,20.7331142 C18.6997147,20.5822738 18.6997147,20.5386715 18.6997147,20.3088755 L18.6997147,11.6709049 L14.4337592,22.5066675 L13.8563233,22.5066675 L8.88801712,11.6709049 L8.88801712,18.9336352 C8.84660153,19.238797 8.94785968,19.5460481 9.16259381,19.7667928 L11.1588724,22.1873101 L11.1588724,22.5066675 L5.5,22.5066675 L5.5,22.1884885 L7.49745705,19.7667928 C7.71063005,19.5456817 7.8059957,19.2363996 7.75435713,18.9336352 L7.75435713,10.5360665 C7.77821657,10.3027497 7.68934984,10.0720464 7.51513366,9.91502822 L5.74040191,7.77733672 L5.74040191,7.45915772 L11.2484339,7.45915772 L15.5061403,16.7959437 L19.2488681,7.45797928 L24.5,7.45797928 L24.5,7.77733672 L22.9833468,9.23153259 Z"></path>\n                    </symbol>\n            \n                    <symbol id="reddit" viewBox="0 0 30 30">\n                        <path fill="currentColor" d="M20.7268208,4.39713974 C21.5763333,4.39713974 22.2702666,5.08986859 22.2702666,5.93938117 C22.2613406,6.77184986 21.5938091,7.44723228 20.7615017,7.46589089 C19.9291942,7.4845495 19.2320672,6.83975991 19.1858445,6.00852754 L15.9791814,5.33311565 L14.9913761,9.95974884 C17.2435722,10.0461818 19.2883293,10.740115 20.7626287,11.7970667 C21.1429338,11.4155269 21.6640011,11.1908012 22.25298,11.1908012 C23.4482244,11.1908012 24.4187432,12.16132 24.4187432,13.3565644 C24.4187432,14.2406502 23.881624,15.002495 23.1716389,15.3494616 C23.2068719,15.5616567 23.2242195,15.7764361 23.2234987,15.9915351 C23.2234987,19.3179695 19.3587104,22.0048 14.5752631,22.0048 C9.79181583,22.0048 5.92702751,19.3179695 5.92702751,15.9915351 C5.92702751,15.7655746 5.94554886,15.5396142 5.98012204,15.332175 C5.1991423,14.9856181 4.69611314,14.2109822 4.69720809,13.3565644 C4.69720809,12.16132 5.66772861,11.1908012 6.86297305,11.1908012 C7.43466538,11.1908012 7.97178453,11.4328135 8.35332433,11.795832 C9.84367561,10.7055419 11.906954,10.03013 14.2110099,9.95974884 L15.3037695,4.79599651 C15.3298674,4.69657806 15.39133,4.61009142 15.4766355,4.55274945 C15.565328,4.50111828 15.6694999,4.482735 15.7705076,4.50088967 L19.3587104,5.26273452 C19.606341,4.73158437 20.1407938,4.3934513 20.7268208,4.39713974 Z M11.1451091,13.3565644 C10.2943618,13.3565644 9.60166331,14.0504976 9.60166331,14.9000102 C9.60166331,15.748288 10.2943618,16.4409865 11.1451091,16.4409865 C11.9933869,16.4409865 12.6860854,15.748288 12.6860854,14.8987755 C12.6860854,14.0492629 11.9933869,13.3565644 11.1438744,13.3565644 L11.1451091,13.3565644 Z M17.9362707,13.3565644 C17.0879929,13.3565644 16.3952944,14.0492629 16.3952944,14.9000102 C16.3952944,15.748288 17.0879929,16.4409865 17.9375055,16.4409865 C18.7870181,16.4409865 19.4797165,15.748288 19.4797165,14.8987755 C19.4797165,14.0504976 18.7857833,13.3565644 17.9362707,13.3565644 L17.9362707,13.3565644 Z M11.1870909,18.2832434 C11.080415,18.2827338 10.9778724,18.3244611 10.9018621,18.3993106 C10.7457493,18.5579022 10.7457493,18.8124112 10.9018621,18.9710029 C11.9415272,20.010668 13.9689976,20.0983357 14.5579765,20.0983357 C15.1469554,20.0983357 17.1571393,20.0291894 18.214091,18.9710029 C18.3630944,18.8143415 18.3781895,18.5733403 18.2498989,18.3993106 C18.0911595,18.2423858 17.8357112,18.2423858 17.6769718,18.3993106 C17.0015599,19.0574359 15.5976416,19.3006829 14.5752631,19.3006829 C13.5528846,19.3006829 12.1316797,19.0586706 11.4735544,18.3993106 C11.3975191,18.3235898 11.2943969,18.281363 11.1870909,18.2820087 L11.1870909,18.2832434 Z"></path>\n                    </symbol>\n            \n                    <symbol id="rss" viewBox="0 0 16 16">\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 16H16C16 12 14.63 8 11.55 4.92C8.47 1.84 4.41 0 0 0V3C3.64 3 7.04 4.25 9.58 6.79C12.12 9.33 13.09 12.46 13 16ZM8 16H11C11 13.11 9.75 10.35 7.71 8.3C5.66 6.26 2.89 5 0 5V8C2.2 8 4.37 8.53 5.93 10.08C7.48 11.64 8 13.8 8 16ZM5 13.5C5 12.12 3.88 11 2.5 11C1.12 11 0 12.12 0 13.5C0 14.88 1.12 16 2.5 16C3.88 16 5 14.88 5 13.5Z" fill="currentColor"></path>\n                    </symbol>\n            \n                    <symbol id="tumblr" viewBox="0 0 30 30">\n                        <path fill="currentColor" d="M16.6871922,23.5375 C12.8594844,23.5375 11.4029563,20.7146313 11.4029563,18.7192328 L11.4029563,12.8254797 L9.58718125,12.8254797 L9.58718125,10.4963875 C12.3153531,9.50958594 12.9782313,7.04220625 13.1270406,5.63452969 C13.1375625,5.53832969 13.2134703,5.5 13.2570609,5.5 L15.9003062,5.5 L15.9003062,10.0950531 L19.5085578,10.0950531 L19.5085578,12.8254797 L15.8860266,12.8254797 L15.8860266,18.4396516 C15.8980516,19.1919656 16.1678625,20.2216063 17.544725,20.2216063 L17.6123656,20.2216063 C18.0866016,20.206575 18.7291875,20.0675359 19.0673906,19.9067016 L19.9361969,22.4808031 C19.6085156,22.9587969 18.1324469,23.51345 16.8127031,23.5359969 L16.678925,23.5359969 L16.6871922,23.5375 Z"></path>\n                    </symbol>\n            \n                    <symbol id="twitter" viewBox="0 0 30 30">\n                        <path fill="currentColor" d="M25.3044801,9.0053673 C24.5785869,9.32443226 23.8034805,9.54179013 22.9873632,9.64103655 C23.8190647,9.13988312 24.458835,8.35001282 24.7614956,7.40758189 C23.9814679,7.8628031 23.1169577,8.19417132 22.1966727,8.37872046 C21.461757,7.59213103 20.4143381,7.1 19.2512685,7.1 C17.0227351,7.1 15.215794,8.9069411 15.215794,11.1330138 C15.215794,11.452899 15.2527039,11.7604809 15.3199618,12.0549393 C11.9652686,11.8966371 8.99197695,10.2857282 7.00212715,7.85049982 C6.6518939,8.44269749 6.45586171,9.13086072 6.45586171,9.88054032 C6.45586171,11.2831138 7.1694517,12.515902 8.25049953,13.2401548 C7.58858329,13.2188291 6.96603754,13.0367407 6.42305297,12.7349003 L6.42305297,12.7849336 C6.42305297,14.7411545 7.81168269,16.3725688 9.65963471,16.7441277 C9.32088452,16.835172 8.9632693,16.8843851 8.59663169,16.8843851 C8.33908311,16.8843851 8.09219738,16.8597785 7.84531165,16.8138463 C8.36286945,18.4157328 9.85074559,19.5837238 11.6215971,19.6165325 C10.2436302,20.6984006 8.49738526,21.3430922 6.61662451,21.3430922 C6.29673934,21.3430922 5.97767439,21.3242272 5.656969,21.2881376 C7.45242704,22.431522 9.56777025,23.1 11.8553593,23.1 C19.2816166,23.1 23.3375965,16.951643 23.3375965,11.6284257 C23.3375965,11.4570001 23.3375965,11.283934 23.3252932,11.1116881 C24.1135231,10.5465576 24.8016863,9.83214743 25.3430304,9.02177167 L25.3044801,9.0053673 Z"></path>\n                    </symbol>\n            \n                    <svg id="tiktok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2859 3333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd">\n                        <path fill="currentColor" d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"></path>\n                    </svg>\n            \n                    <svg id="pinterest" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" fill="currentColor" viewBox="0 0 579.148 579.148" style="enable-background:new 0 0 579.148 579.148;" xml:space="preserve">\n                        <g>\n                            <g>\n                                <path d="M434.924,38.847C390.561,12.954,342.107,0.01,289.574,0.01c-52.54,0-100.992,12.944-145.356,38.837\n                                C99.854,64.741,64.725,99.87,38.837,144.228C12.944,188.597,0,237.049,0,289.584c0,58.568,15.955,111.732,47.883,159.486\n                                c31.922,47.768,73.771,83.08,125.558,105.949c-1.01-26.896,0.625-49.137,4.902-66.732l37.326-157.607\n                                c-6.285-12.314-9.425-27.645-9.425-45.999c0-21.365,5.404-39.217,16.212-53.538c10.802-14.333,24.003-21.5,39.59-21.5\n                                c12.564,0,22.246,4.143,29.034,12.448c6.787,8.292,10.184,18.727,10.184,31.292c0,7.797-1.451,17.289-4.334,28.47\n                                c-2.895,11.187-6.665,24.13-11.31,38.837c-4.651,14.701-7.98,26.451-9.994,35.252c-3.525,15.33-0.63,28.463,8.672,39.4\n                                c9.295,10.936,21.616,16.4,36.952,16.4c26.898,0,48.955-14.951,66.176-44.865c17.217-29.914,25.826-66.236,25.826-108.973\n                                c0-32.925-10.617-59.701-31.859-80.312c-21.242-20.606-50.846-30.918-88.795-30.918c-42.486,0-76.862,13.642-103.123,40.906\n                                c-26.267,27.277-39.401,59.896-39.401,97.84c0,22.625,6.414,41.609,19.229,56.941c4.272,5.029,5.655,10.428,4.149,16.205\n                                c-0.508,1.512-1.511,5.281-3.017,11.309c-1.505,6.029-2.515,9.934-3.017,11.689c-2.014,8.049-6.787,10.564-14.333,7.541\n                                c-19.357-8.043-34.064-21.99-44.113-41.85c-10.055-19.854-15.08-42.852-15.08-68.996c0-16.842,2.699-33.685,8.103-50.527\n                                c5.404-16.842,13.819-33.115,25.264-48.832c11.432-15.698,25.135-29.596,41.102-41.659c15.961-12.069,35.38-21.738,58.256-29.04\n                                c22.871-7.283,47.51-10.93,73.904-10.93c35.693,0,67.744,7.919,96.146,23.751c28.402,15.839,50.086,36.329,65.043,61.463\n                                c14.951,25.135,22.436,52.026,22.436,80.692c0,37.705-6.541,71.641-19.607,101.807c-13.072,30.166-31.549,53.855-55.43,71.072\n                                c-23.887,17.215-51.035,25.826-81.445,25.826c-15.336,0-29.664-3.58-42.986-10.748c-13.33-7.166-22.503-15.648-27.528-25.453\n                                c-11.31,44.486-18.097,71.018-20.361,79.555c-4.78,17.852-14.584,38.457-29.413,61.836c26.897,8.043,54.296,12.062,82.198,12.062\n                                c52.534,0,100.987-12.943,145.35-38.83c44.363-25.895,79.492-61.023,105.387-105.393c25.887-44.365,38.838-92.811,38.838-145.352\n                                c0-52.54-12.951-100.985-38.838-145.355C514.422,99.87,479.287,64.741,434.924,38.847z"></path>\n                            </g>\n                        </g>\n                    </svg>\n            \n                    <svg id="snapchat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                        <path d="M5.829 4.533c-.6 1.344-.363 3.752-.267 5.436-.648.359-1.48-.271-1.951-.271-.49 0-1.075.322-1.167.802-.066.346.089.85 1.201 1.289.43.17 1.453.37 1.69.928.333.784-1.71 4.403-4.918 4.931-.251.041-.43.265-.416.519.056.975 2.242 1.357 3.211 1.507.099.134.179.7.306 1.131.057.193.204.424.582.424.493 0 1.312-.38 2.738-.144 1.398.233 2.712 2.215 5.235 2.215 2.345 0 3.744-1.991 5.09-2.215.779-.129 1.448-.088 2.196.058.515.101.977.157 1.124-.349.129-.437.208-.992.305-1.123.96-.149 3.156-.53 3.211-1.505.014-.254-.165-.477-.416-.519-3.154-.52-5.259-4.128-4.918-4.931.236-.557 1.252-.755 1.69-.928.814-.321 1.222-.716 1.213-1.173-.011-.585-.715-.934-1.233-.934-.527 0-1.284.624-1.897.286.096-1.698.332-4.095-.267-5.438-1.135-2.543-3.66-3.829-6.184-3.829-2.508 0-5.014 1.268-6.158 3.833z" fill="currentColor"></path>\n                    </svg>\n                </defs>\n            </svg>\n        ';var t=document.querySelector('script[src*="vul-pwc-footer.js"]').src.replaceAll("js","css"),n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href",t),e.prepend(n);var i=document.createElement("footer");i.classList.add("site-footer","site-footer--standard"),i.setAttribute("data-component","Site Footer"),i.innerHTML='\n                    <div class="site-footer__inner">\n                        <div class="site-footer__logo">\n                            <a class="site-footer__logo-link" href="https://www.vanderbilt.edu/">\n                                <svg viewBox="0 0 584 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">\n                                    <path d="m204.749 61.98-13.527-29.26c-1.425-3.08-2.208-3.92-4.968-5.04v-.7h16.334v.7c-3.865 1.21-4.464 2.239-3.176 5.086l10.63 23.52 9.978-22.26c1.288-2.893.506-4.619-5.614-6.345v-.701h14.171v.7c-2.301 1.12-3.082 1.96-4.519 5.04l-13.517 29.26h-5.792Zm35.015-28.698c1.287-2.848.689-4.293-3.359-5.6v-.702h12.1l13.527 29.26c1.427 3.08 2.071 3.921 4.048 5.04v.7h-15.412v-.7c3.865-1.214 4.462-2.24 3.174-5.087l-2.3-5.087h-16.609l-1.704 3.819c-1.288 2.895-.505 4.621 5.614 6.348v.7h-14.171v-.7c2.346-1.4 3.404-2.613 4.876-5.834l10.216-22.157Zm-3.451 14.746h13.849l-6.948-15.352-6.901 15.352Zm69.934 13.955h-4.786l-25.215-28.144v18.348c0 5.692.874 6.953 6.994 9.099v.7h-14.63v-.7c3.775-2.007 4.372-3.407 4.372-9.1V35.383c0-5.694-.782-6.626-4.831-7.7v-.702h12.007l22.822 25.48V36.78c0-5.693-.873-6.953-6.994-9.1v-.7h14.632v.7c-3.765 2.006-4.371 3.407-4.371 9.1v25.203Zm9.432 0v-.701c4.048-1.073 4.831-2.007 4.831-7.7v-18.2c0-5.694-.783-6.626-4.831-7.7v-.702h19.828c11.504 0 21.672 7.466 21.672 17.5 0 10.033-10.167 17.5-21.672 17.5l-19.828.003Zm12.192-3.08h7.409c7.958 0 13.617-4.434 13.617-14.422 0-9.987-5.659-14.419-13.617-14.419h-7.409v28.84ZM360.63 26.98h34.413l1.151 12.086h-.691c-4.554-8.166-6.947-9.006-11.409-9.006h-11.266v12.412h7.316c2.116 0 3.174-.559 6.533-6.626h.689v16.34h-.689c-3.359-6.066-4.417-6.628-6.533-6.628h-7.316v13.349h11.042c4.878 0 7.5-1.309 12.194-9.942h.689l-1.243 13.022h-34.88v-.701c4.048-1.073 4.831-2.007 4.831-7.7V35.382c0-5.694-.783-6.626-4.831-7.7v-.702Zm59.813 34.3v.7h-17.492v-.7c4.049-1.073 4.831-2.007 4.831-7.7V35.383c0-5.694-.782-6.626-4.831-7.7v-.702h19.922c11.594 0 17.3 3.313 17.3 9.006 0 4.107-4.187 7.094-11.411 7.888 4.831.747 6.994 3.078 8.971 7.558l2.578 5.882c1.103 2.52 1.609 3.08 3.765 3.966v.7h-5.245c-4.142 0-5.475-1.12-6.81-4.76l-2.336-6.347c-1.657-4.48-3.037-5.414-7.179-5.414h-7.361v8.122c.005 5.74.796 6.626 5.298 7.7Zm11.689-25.06c0-4.392-3.129-6.16-9.709-6.16h-7.273V42.38h7.269c6.58 0 9.713-1.772 9.713-6.158Zm33.909 25.76h-19.412v-.7c3.954-1.073 4.601-2.007 4.601-7.7V35.383c0-5.694-.781-6.626-4.831-7.7v-.702h18.955c11.503 0 17.208 3.359 17.208 8.446 0 4.434-4.187 7.281-11.686 7.887 8.512.561 13.388 4.294 13.388 9.007-.008 5.88-6.079 9.66-18.227 9.66h.004Zm-1.105-19.786c6.35 0 9.57-1.774 9.57-6.067s-3.22-6.067-9.57-6.067h-6.352v12.134h6.352Zm.783 16.707c6.994 0 10.259-2.007 10.259-6.814 0-4.806-3.265-6.813-10.259-6.813h-7.135V58.9h7.135Zm39.706 3.08h-17.023v-.7c4.05-1.074 4.831-2.008 4.831-7.7V35.382c0-5.694-.781-6.626-4.831-7.7v-.702h17.023v.7c-4.048 1.074-4.831 2.006-4.831 7.7v18.2c0 5.693.783 6.627 4.831 7.7v.7Zm5.061 0v-.7c4.049-1.074 4.831-2.008 4.831-7.7V35.382c0-5.694-.782-6.626-4.831-7.7v-.702h17.475v.7c-4.519 1.074-5.291 2.006-5.291 7.7V58.9h9.201c5.29 0 8.005-1.773 12.744-10.874h.691l-1.335 13.955h-33.485Zm36.113-35.001h35.244l1.196 12.554h-.689c-4.557-8.162-6.995-9.474-11.464-9.474h-2.99v23.52c0 5.74.783 6.627 5.292 7.7v.7H555.26v-.7c4.518-1.073 5.29-1.96 5.29-7.7V30.06h-2.992c-4.462 0-6.9 1.306-11.456 9.474h-.689l1.186-12.554ZM216.528 78.612h14.401v.693c-3.681 2.007-4.142 3.407-4.142 9.1v11.434c0 9.193-5.705 14.234-16.191 14.234-10.261 0-16.15-4.247-16.15-13.067V87.01c0-5.692-.781-6.626-4.831-7.7v-.698H207.1v.693c-4.509 1.073-5.293 2.007-5.293 7.7v14.001c0 7.327 4.095 9.706 10.86 9.706 6.947 0 10.857-3.359 10.857-10.873V88.41c0-5.692-.873-6.953-6.992-9.1l-.004-.698Zm57.328 34.999h-4.786l-25.207-28.14v18.332c0 5.695.873 6.955 6.992 9.101v.699h-15.088v-.689c4.003-2.007 4.831-3.407 4.831-9.101V87.008c0-5.692-.691-6.626-4.601-7.7v-.698h11.778l22.822 25.482V88.41c0-5.692-.874-6.953-6.992-9.1v-.698h14.63v.693c-3.765 2.007-4.37 3.407-4.37 9.1l-.009 25.206Zm26.453 0h-17.023v-.697c4.05-1.073 4.833-2.007 4.833-7.7V87.01c0-5.692-.783-6.626-4.833-7.7v-.698h16.794v.693c-3.911 1.073-4.6 2.007-4.6 7.7v18.202c0 5.692.782 6.626 4.829 7.699v.705Zm20.108 0-13.528-29.26c-1.425-3.079-2.163-3.92-4.286-5.046v-.699h15.645v.7c-3.865 1.214-4.464 2.239-3.176 5.086l10.629 23.521 9.978-22.26c1.288-2.894.505-4.622-5.614-6.348v-.699h14.171v.7c-2.3 1.12-3.082 1.96-4.518 5.038l-13.505 29.267h-5.796Zm25.903-35h34.414l1.148 12.087h-.689c-4.554-8.168-6.947-9.006-11.411-9.006h-11.264v12.412h7.316c2.116 0 3.175-.56 6.533-6.626h.689v16.333h-.689c-3.358-6.067-4.417-6.626-6.533-6.626h-7.316v13.346h11.042c4.876 0 7.501-1.306 12.192-9.93h.691l-1.242 13.019H346.32v-.706c4.048-1.073 4.831-2.007 4.831-7.7V87.01c0-5.692-.783-6.626-4.831-7.7v-.698Zm59.811 34.303v.699h-17.49v-.699c4.048-1.073 4.831-2.007 4.831-7.7V87.01c0-5.692-.783-6.626-4.831-7.7v-.698h19.923c11.593 0 17.298 3.313 17.298 9.006 0 4.107-4.232 7.094-11.409 7.886 4.876.747 7.084 3.128 9.11 7.56l2.713 5.88c1.105 2.381 2.071 3.174 4.648 3.968v.699h-6.12c-4.142 0-5.383-1.119-6.81-4.759l-2.483-6.347c-1.749-4.48-3.037-5.414-7.177-5.414h-7.493v8.122c0 5.738.791 6.626 5.29 7.701Zm11.692-25.064c0-4.392-3.129-6.158-9.709-6.158h-7.273V94.01h7.269c6.58 0 9.713-1.77 9.713-6.159Zm51.621 15.121c0 6.301-6.486 11.108-17.39 11.108-4.694 0-9.754-.982-13.665-2.802l-2.622 2.569h-.691l-1.38-14.189h.694c5.522 7.748 12.332 11.853 18.773 11.853 7.408 0 10.72-2.751 10.72-5.599 0-2.146-1.473-4.107-6.213-4.993l-10.95-2.1c-8.472-1.633-11.861-5.18-11.861-9.894 0-5.693 5.338-10.78 16.15-10.78 4.002 0 8.235.888 12.426 2.566l2.345-2.333h.691l1.198 12.794h-.708c-5.752-7.608-11.456-10.455-16.568-10.455-7.269 0-10.26 2.754-10.26 5.368 0 2.332 1.694 4.201 6.165 5.04l11.272 2.1c8.466 1.581 11.87 5.081 11.87 9.747h.004Zm21.395 10.64h-17.023v-.697c4.047-1.073 4.831-2.007 4.831-7.7V87.01c0-5.692-.784-6.626-4.831-7.7v-.698h17.023v.693c-4.048 1.073-4.831 2.007-4.831 7.7v18.202c0 5.692.783 6.626 4.831 7.699v.705Zm6.024-35h35.239l1.197 12.555h-.691c-4.554-8.168-6.992-9.474-11.456-9.474h-2.982v23.521c0 5.738.781 6.626 5.29 7.699v.699h-17.944v-.697c4.519-1.073 5.291-1.961 5.291-7.7V81.692h-2.992c-4.462 0-6.902 1.306-11.456 9.474h-.691l1.195-12.554Zm50.833 35v-.697c4.518-1.073 5.29-1.961 5.29-7.7v-4.949L541.393 84.35c-1.932-2.612-3.451-3.872-5.889-5.04v-.698h16.242v.693c-3.636 1.073-3.728 2.52-1.797 5.087l9.295 12.506 8.252-11.054c1.979-2.706 1.519-4.853-4.095-6.533v-.7h14.448v.694c-2.53 1.215-4.187 2.66-5.889 5.04l-11.596 15.914v4.948c0 5.738.784 6.626 5.293 7.699v.699l-17.961.006Z"></path>\n                                    <path d="M33.456.806H.961v1.489c9.733 6.654 14.401 11.819 20.458 24.828l46.777 100.009h20.975L33.456.806Z" fill="url(#lockup-a)"></path>\n                                    <path d="M89.171 127.132V82.978L63.351 27.62C57.291 14.71 58.88 8.155 69.11 2.295V.805H33.457l55.714 126.327Z" fill="url(#lockup-b)"></path>\n                                    <path d="M144.885.806h32.495v1.489c-9.733 6.652-14.4 11.819-20.458 24.828l-46.777 100.009H89.17L144.885.806Z" fill="url(#lockup-c)"></path>\n                                    <path d="M89.17 127.132V82.978l25.822-55.358c6.058-12.91 4.468-19.465-5.761-25.325V.805h35.654L89.17 127.133Z" fill="url(#lockup-d)"></path>\n                                    <defs>\n                                        <linearGradient id="lockup-a" x1="-37.616" y1="13.865" x2="61.836" y2="48.808" gradientUnits="userSpaceOnUse">\n                                            <stop stop-color="#FEEEB6"></stop>\n                                            <stop offset="1" stop-color="#B49248"></stop>\n                                        </linearGradient>\n                                        <linearGradient id="lockup-b" x1="12.103" y1="-26.446" x2="87.915" y2="154.395" gradientUnits="userSpaceOnUse">\n                                            <stop stop-color="#FEEEB6"></stop>\n                                            <stop offset="1" stop-color="#B49248"></stop>\n                                        </linearGradient>\n                                        <linearGradient id="lockup-c" x1="90.226" y1="1.682" x2="126.635" y2="140.418" gradientUnits="userSpaceOnUse">\n                                            <stop stop-color="#FEEEB6"></stop>\n                                            <stop offset="1" stop-color="#B49248"></stop>\n                                        </linearGradient>\n                                        <linearGradient id="lockup-d" x1="63.163" y1="-6.29" x2="130.147" y2="74.274" gradientUnits="userSpaceOnUse">\n                                            <stop stop-color="#FEEEB6"></stop>\n                                            <stop offset="1" stop-color="#B49248"></stop>\n                                        </linearGradient>\n                                    </defs>\n                                </svg>\n                                <span class="visually-hidden">Vanderbilt University</span>\n                            </a>\n                        </div>\n                        <div class="site-footer__primary">\n                            <div class="site-footer__links">\n                                <div class="site-footer__link-sets">\n                                    <ul class="site-footer__link-set site-footer__link-set--1">\n                                        <li class="site-footer__link-set-item"><a href="/hours">Library Hours</a></li>\n                                        <li class="site-footer__link-set-item"><a href="/about">About the Libraries</a></li>\n                                        <li class="site-footer__link-set-item"><a href="/about/employment">Employment</a></li>\n                                        <li class="site-footer__link-set-item"><a href="/staff">Staff Directory</a></li>\n                                        <li class="site-footer__link-set-item"><a href="/about/accessibility">Accessibility Services</a></li>\n                                    </ul>\n                                    <ul class="site-footer__link-set site-footer__link-set--2">\n                                        <li class="site-footer__link-set-item"><a href="https://www.vanderbilt.edu/work-at-vanderbilt/">Working at Vanderbilt</a></li>\n                                        <li class="site-footer__link-set-item"><a href="https://events.vanderbilt.edu/">Events</a></li>\n                                        <li class="site-footer__link-set-item"><a href="https://www.vanderbilt.edu/logins/">Logins</a></li>\n                                        <li class="site-footer__link-set-item"><a href="https://www.vanderbilt.edu/map/">Campus Map</a></li>\n                                        <li class="site-footer__link-set-item"><a href="https://news.vanderbilt.edu/experts/">Media Resources</a></li>\n                                    </ul>\n                                </div>\x3c!-- site-footer__link-sets --\x3e\n                                <div class="site-footer__contact">\n                                    <p>419 21st Avenue South •&nbsp;Nashville, TN 37203</p><p><a href="/contact">Contact Us</a> <img src="/static/img/USA_Federal_depository_library_logo.png" class="depository-logo" title="Vanderbilt is a US Federal Depository Library" alt="Vanderbilt is a US Federal Depository Library"></p>\n                                    <p><a href="https://www.vanderbilt.edu/about/privacy/">Vanderbilt University\'s Online Privacy Notice</a></p>\n                                </div>\n                                <div class="site-footer__comm-links">\n                                    <ul class="site-footer__social">\n                                        <li>\n                                            <a class="site-footer__social-link" href="https://twitter.com/vandylibraries">\n                                                <span class="visually-hidden">Twitter</span>\n                                                <svg><use xlink:href="#twitter"></use></svg>\n                                            </a>\n                                        </li>\n                                        <li>\n                                            <a class="site-footer__social-link" href="https://www.facebook.com/vandylibraries">\n                                                <span class="visually-hidden">Facebook</span>\n                                                <svg><use xlink:href="#facebook"></use></svg>\n                                            </a>\n                                        </li>\n                                        <li>\n                                            <a class="site-footer__social-link" href="https://www.linkedin.com/company/jean-and-alexander-heard-libraries">\n                                                <span class="visually-hidden">LinkedIn</span>\n                                                <svg><use xlink:href="#linkedin"></use></svg>\n                                            </a>\n                                        </li>\n                                        <li>\n                                            <a class="site-footer__social-link" href="https://www.instagram.com/vandylibraries/">\n                                                <span class="visually-hidden">Instagram</span>\n                                                <svg><use xlink:href="#instagram"></use></svg>\n                                            </a>\n                                        </li>\n                                        <li>\n                                            <a class="site-footer__social-link" href="https://www.youtube.com/playlist?list=PLB1EPeYUwa4n_I0CyMrQidztwO-SdENRm">\n                                                <span class="visually-hidden">YouTube</span>\n                                                <svg><use xlink:href="#youtube"></use></svg>\n                                            </a>\n                                        </li>\n                                        <li>\n                                            <a class="site-footer__social-link" href="https://www.tiktok.com/@vanderbiltu">\n                                                <span class="visually-hidden">TikTok</span>\n                                                <svg><use xlink:href="#tiktok"></use></svg>\n                                            </a>\n                                        </li>\n                                        <li>\n                                            <a class="site-footer__social-link" href="https://www.flickr.com/photos/vulibrary">\n                                                <span class="visually-hidden">Flickr</span>\n                                                <svg><use xlink:href="#flickr"></use></svg>\n                                            </a>\n                                        </li>\n                                    </ul>\n                                </div> \x3c!-- site-comm-links --\x3e\n                            </div> \x3c!-- site-footer__links--\x3e\n                        </div> \x3c!-- site-footer__primary --\x3e\n                        <div class="site-footer__secondary">\n                            <div class="site-footer__universal">\n                                <p>Vanderbilt University is committed to principles of equal opportunity and affirmative action. Vanderbilt University does not discriminate against individuals on the basis of their race, sex, sexual orientation, gender identity, religion, color, national or ethnic origin, age, disability, military service, or genetic information in its administration of educational policies, programs, or activities; admissions policies; scholarship and loan programs; athletic or other University-administered programs; or employment. <a href="https://www.vanderbilt.edu/about/accessibility/">Accessibility information</a>. Vanderbilt®, Vanderbilt University® and the Vanderbilt logos are trademarks of The Vanderbilt University. Site Development: <a href="https://web.vanderbilt.edu/">Digital Strategies (Communications and Marketing)</a> and <a href="https://ltds.library.vanderbilt.edu/">Library Technology and Digital Services</a>. <a href="https://dev-library2023.library.vanderbilt.edu/wp-login.php?redirect_to=https%3A%2F%2Fdev-library2023.library.vanderbilt.edu%2Flibrary-reserve-form%2F">©</a> 2023</p>\n                            </div>\n                        </div> \x3c!-- site-footer__secondary --\x3e\n                    </div>\n                ',e.appendChild(i)}}])&&t(c.prototype,a),v&&t(c,v),Object.defineProperty(c,"prototype",{writable:!1}),p}(i(HTMLElement));customElements.define("vul-footer",c)},735:()=>{}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,i),o.exports}i.m=t,e=[],i.O=(t,n,r,o)=>{if(!n){var l=1/0;for(v=0;v<e.length;v++){for(var[n,r,o]=e[v],s=!0,c=0;c<n.length;c++)(!1&o||l>=o)&&Object.keys(i.O).every((e=>i.O[e](n[c])))?n.splice(c--,1):(s=!1,o<l&&(l=o));if(s){e.splice(v--,1);var a=r();void 0!==a&&(t=a)}}return t}o=o||0;for(var v=e.length;v>0&&e[v-1][2]>o;v--)e[v]=e[v-1];e[v]=[n,r,o]},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={767:0,476:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[l,s,c]=n,a=0;if(l.some((t=>0!==e[t]))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(c)var v=c(i)}for(t&&t(n);a<l.length;a++)o=l[a],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(v)},n=self.webpackChunkvul_public_web_components=self.webpackChunkvul_public_web_components||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),i.O(void 0,[476],(()=>i(647)));var r=i.O(void 0,[476],(()=>i(735)));r=i.O(r)})();