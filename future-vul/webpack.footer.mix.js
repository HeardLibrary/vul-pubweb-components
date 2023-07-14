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
    .css('src/css/vu.css', 'postcss/vul-footer.css')
    .styles(
        [
            'dist/postcss/vul-footer.css',
            'src/css/vul.css',
        ], 
        'dist/css/vul-pwc-footer.css')
    .js(
        'src/js/vul-footer.js', 
        'js/vul-pwc-footer.js')
    .mergeManifest();

mix.options({
    processCssUrls: false,
    postCss: [
        purgecss
    ],
});
