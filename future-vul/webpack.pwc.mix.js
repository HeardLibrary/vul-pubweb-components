require('laravel-mix-merge-manifest');

const mix = require('laravel-mix');
const distDir = './dist/';
const min = mix.inProduction() ? '.min' : '';
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        'src/pwc/js/VulNavigation.js',
        'src/pwc/js/VulFooter.js',
    ],
    fontFace: true,
    keyframes: true,
    variables: true,
    safelist: ['mega-menu'],
    blocklist: ['html'],
    dynamicAttributes: ['data-selected-tab-index']
});

mix.setPublicPath(distDir);

mix
    .css('src/future-vu/css/vu.css', 'temp/postcss.css')
    .styles(
        [
            distDir + 'temp/postcss.css',
            'src/future-vu/css/primary-nav-children.css',
            'src/pwc/css/component.css',
        ], 
        distDir + 'css/component' + min + '.css')
    .js(
        [
            'src/pwc/js/index.js',
            'src/pwc/js/VulNavigation.js',
            'src/pwc/js/VulFooter.js',
        ], 
        distDir + 'js/pwc' + min + '.js')
    .sourceMaps(!mix.inProduction())
    .mergeManifest()
    .options({
        processCssUrls: false,
        postCss: [
            purgecss
        ],
    });

mix
    .styles(
        [
            'src/pwc/css/pwc.css'
        ], 
        distDir + 'css/pwc' + min + '.css');
    