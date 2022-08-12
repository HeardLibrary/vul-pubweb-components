let mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath('dist');

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/js/vul-brandbar.js', 
        './src/js/vul-header.js', 
        './src/js/vul-navigation.js',
        './src/js/vul-banner.js',
        './src/js/vul-banner-alt.js'
    ],
    fontFace: true,
    keyframes: true,
    variables: true,
    safelist: ['open', 'collapsing', 'in', 'graphic-header__small']
});

mix
    .less('src/bootstrap-3.4.1/less/bootstrap.less', 'postcss')
    .css('src/css/vu-brandbar.css', 'postcss')
    .css('src/css/vu-main-2019.css', 'postcss')
    .css('src/css/vul-header.css', 'postcss')
    .styles([
        'dist/postcss/bootstrap.css', 
        'dist/postcss/vu-brandbar.css', 
        'dist/postcss/vu-main-2019.css', 
        'dist/postcss/vul-header.css'
    ], 'dist/css/vul-pw-header.css')
    .js([
        'src/js/vul-brandbar.js', 
        'src/js/vul-header.js', 
        'src/js/vul-banner.js',
        'src/js/vul-banner-alt.js',
        'src/js/vul-navigation.js'
    ], 'dist/js/vul-pw-header.js')
    .mergeManifest();

mix.options({
    processCssUrls: false,
    postCss: [
        purgecss
    ],
});
