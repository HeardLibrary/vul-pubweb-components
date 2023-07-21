let mix = require('laravel-mix');
let distDir = '../../dist/';
require('laravel-mix-merge-manifest');

mix
    .setPublicPath(distDir)
    .css('../future-vu/css/vu.css', 'temp/postcss.css')
    .styles(
        [
            distDir + 'temp/postcss.css',
            'css/vul-footer.css',
        ], 
        distDir + 'css/vul-footer.css')
    .js(
        'js/VulFooter.js', 
        distDir + 'js/vul-footer.js')
    .mergeManifest();

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['js/VulFooter.js'],
    fontFace: true,
    keyframes: true,
    variables: true,
});

mix
    .options({
        processCssUrls: false,
        postCss: [
            purgecss
        ],
    });
