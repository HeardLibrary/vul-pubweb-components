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
});

mix
    .css('src/css/vu.css', 'postcss/vul-header.css')
    .styles(
        [
            'dist/postcss/vul-header.css',
            'src/css/primary-nav-children.css',
            'src/css/vul-harden.css',
        ], 
        'dist/css/vul-pwc-header.css')
    .js(
        [
            'src/js/vul-navigation.js',
            'src/js/vul-primary-nav.js',
            'src/js/vul-mega-menu.js'
        ], 
        'dist/js/vul-pwc-header.js')
    .mergeManifest();

mix.options({
    processCssUrls: false,
    postCss: [
        purgecss
    ],
});
