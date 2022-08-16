let mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath('dist');

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./src/js/*.js'],
    keyframes: true,
    variables: true,
    safelist: ['fa', 'fa-plus-square', 'fa-external-link-square'],
    blocklist: ['fab', 'sr-only' ,'sr-only-focusable']
});

mix
    .less('src/fontawesome-free-5.15.4/less/fontawesome.less', 'postcss')
    .less('src/fontawesome-free-5.15.4/less/solid.less', 'postcss')
    .less('src/fontawesome-free-5.15.4/less/brands.less', 'postcss')
    .styles([
        'dist/postcss/fontawesome.css',
        'dist/postcss/solid.css',
        'dist/postcss/brands.css',
    ], 'dist/css/vul-pw-fontawesome.css')
    .mergeManifest();

mix.options({
    processCssUrls: false,
    postCss: [
        purgecss
    ],
});
