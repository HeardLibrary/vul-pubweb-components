let mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath('dist');

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./src/js/vul-footer.js'],
    fontFace: true,
    keyframes: true,
    variables: true,
});

mix
    .less('src/bootstrap-3.4.1/less/bootstrap.less', 'postcss')
    .less('src/fontawesome-free-5.15.4/less/fontawesome.less', 'postcss')
    .css('src/css/vu-main-2019.css', 'postcss')
    .css('src/css/vul-footer.css', 'postcss')
    .styles([
        'dist/postcss/fontawesome.css',
    ], 'dist/postcss/vul-fontawesome.css')
    .styles([
        'dist/postcss/bootstrap.css',
        'dist/postcss/vul-fontawesome.css',
        'dist/postcss/vu-main-2019.css',
        'dist/postcss/vul-footer.css'
    ], 'dist/css/vul-pw-footer.css')
    .js('src/js/vul-footer.js', 'js/vul-pw-footer.js')
    .mergeManifest();

mix.options({
    processCssUrls: false,
    postCss: [
        purgecss
    ],
});
