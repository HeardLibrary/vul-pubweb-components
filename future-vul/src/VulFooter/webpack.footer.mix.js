let mix = require('laravel-mix');
let publicDir = '../../public/';
require('laravel-mix-merge-manifest');

mix
    .setPublicPath(publicDir)
    .css('../future-vu/css/vu.css', 'temp/postcss.css')
    .styles(
        [
            publicDir + 'temp/postcss.css',
            'css/vul-footer.css',
        ], 
        publicDir + 'css/vul-pwc-footer.css')
    .js(
        'js/vul-footer.js', 
        publicDir + 'js/vul-pwc-footer.js')
    .mergeManifest();

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['js/vul-footer.js'],
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
