let mix = require('laravel-mix');
let publicDir = '../../public/';
require('laravel-mix-merge-manifest');

mix
    .setPublicPath(publicDir)
    .css('../future-vu/css/vu.css', 'temp/postcss.css')
    .styles(
        [
            publicDir + 'temp/postcss.css',
            'css/vu-alert.css',
        ],
        publicDir + 'css/vu-alert.css')
    .mergeManifest();

const purgecss = require('@fullhuman/postcss-purgecss')({
    fontFace: true,
    keyframes: true,
    variables: true,
    safelist: ['alert-bar', 'a'],
});

mix
    .options({
        processCssUrls: false,
        postCss: [
            purgecss
        ],
    });
