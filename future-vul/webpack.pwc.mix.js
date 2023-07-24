const mix = require('laravel-mix');
const distDir = './dist/';
require('laravel-mix-merge-manifest');
mix.setPublicPath(distDir);

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        'src/pwc/js/VulNavigation.js',
        'src/pwc/js/VulPrimaryNav.js',
        'src/pwc/js/VulMegaMenu.js',
        'src/pwc/js/VulFooter.js',
    ],
    fontFace: true,
    keyframes: true,
    variables: true,
    safelist: ['mega-menu'],
    dynamicAttributes: ['data-selected-tab-index']
});

mix
    .sourceMaps(true, 'source-map')
    .css('src/future-vu/css/vu.css', 'temp/postcss.css')
    .styles(
        [
            distDir + 'temp/postcss.css',
            'src/future-vu/css/primary-nav-children.css',
            'src/pwc/css/vul-navigation.css',
            'src/pwc/css/vul-footer.css',
        ], 
        distDir + 'css/component.css')
    .js(
        [
            'src/pwc/jsindex.js',
            'src/pwc/js/VulNavigation.js',
            'src/pwc/js/VulPrimaryNav.js',
            'src/pwc/js/VulMegaMenu.js',
            'src/pwc/js/VulFooter.js',
        ], 
        distDir + 'js/pwc.js')
    .mergeManifest()
    .options({
        processCssUrls: false,
        postCss: [
            purgecss
        ],
    });

mix
    .styles(
        [
            'src/pwc/css/pwc.css'
        ], 
        distDir + 'css/pwc.css');
    