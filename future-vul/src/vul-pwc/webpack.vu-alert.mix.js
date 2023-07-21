let mix = require('laravel-mix');
let distDir = '../../dist/';
require('laravel-mix-merge-manifest');

mix
    .setPublicPath(distDir)
    .css('../future-vu/css/vu.css', 'temp/postcss.css')
    .styles(
        [
            distDir + 'temp/postcss.css',
            'css/vu-alert.css',
        ],
        distDir + 'css/vu-alert.css')
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
