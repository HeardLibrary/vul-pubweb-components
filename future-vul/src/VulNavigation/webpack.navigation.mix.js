let mix = require('laravel-mix');
let publicDir = '../../public/';
require('laravel-mix-merge-manifest');

mix
    .setPublicPath(publicDir)
    .sourceMaps(true, 'source-map')
    .css('../future-vu/css/vu.css', 'temp/postcss.css')
    .styles(
        [
            publicDir + 'temp/postcss.css',
            '../future-vu/css/primary-nav-children.css',
            'css/vul-navigation.css',
        ], 
        publicDir + 'css/vul-pwc-navigation.css')
    .js(
        [
            'js/vul-navigation.js',
            'js/vul-primary-nav.js',
            'js/vul-mega-menu.js'
        ], 
        publicDir + 'js/vul-pwc-navigation.js')
    .mergeManifest();

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        'js/vul-navigation.js',
        'js/vul-primary-nav.js',
        'js/vul-mega-menu.js',
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
