require('laravel-mix-merge-manifest');

const mix = require('laravel-mix');
const distDir = '../../dist/';
const min = mix.inProduction() ? '.min' : '';
const purgecss = require('@fullhuman/postcss-purgecss')({
    fontFace: true,
    keyframes: true,
    variables: true,
    safelist: ['alert-bar', 'a'],
});

mix
    .setPublicPath(distDir)
    .css('../future-vu/css/vu.css', 'temp/postcss.css')
    .styles(
        [
            distDir + 'temp/postcss.css',
            'vu-alert.css',
        ],
        distDir + 'css/vu-alert' + min + '.css')
    .mergeManifest()
    .options({
        processCssUrls: false,
        postCss: [
            purgecss
        ],
    });
