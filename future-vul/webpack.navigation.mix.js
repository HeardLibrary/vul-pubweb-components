let mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath('dist');

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/js/vul-navigation.js',
        './src/js/vul-primary-nav.js',
        './src/js/vul-mega-menu.js',
    ],
    fontFace: true,
    keyframes: true,
    variables: true,
    safelist: ['mega-menu', 'alert'],
    dynamicAttributes: ['data-selected-tab-index']
});

mix
    .sourceMaps(true, 'source-map')
    .css('src/css/vu.css', 'postcss/vul-navigation.css')
    .styles(
        [
            'dist/postcss/vul-navigation.css',
            'src/css/primary-nav-children.css',
            'src/css/vul.css',
        ], 
        'dist/css/vul-pwc-navigation.css')
    .js(
        [
            'src/js/vul-navigation.js',
            'src/js/vul-primary-nav.js',
            'src/js/vul-mega-menu.js'
        ], 
        'dist/js/vul-pwc-navigation.js')
    .mergeManifest();

mix.options({
    processCssUrls: false,
    postCss: [
        purgecss
    ],
});
