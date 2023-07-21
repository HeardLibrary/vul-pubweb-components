let mix = require('laravel-mix');
let distDir = '../../dist/';
require('laravel-mix-merge-manifest');

mix
    .setPublicPath(distDir)
    .sourceMaps(true, 'source-map')
    .css('../future-vu/css/vu.css', 'temp/postcss.css')
    .styles(
        [
            distDir + 'temp/postcss.css',
            '../future-vu/css/primary-nav-children.css',
            'css/vul-navigation.css',
        ], 
        distDir + 'css/vul-navigation.css')
    .js(
        [
            'js/VulNavigation.js',
            'js/VulPrimaryNav.js',
            'js/VulMegaMenu.js'
        ], 
        distDir + 'js/vul-navigation.js')
    .mergeManifest();

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        'js/VulNavigation.js',
        'js/VulPrimaryNav.js',
        'js/VulMegaMenu.js',
    ],
    fontFace: true,
    keyframes: true,
    variables: true,
    safelist: ['mega-menu'],
    dynamicAttributes: ['data-selected-tab-index']
});

mix
    .options({
        processCssUrls: false,
        postCss: [
            purgecss
        ],
    });
