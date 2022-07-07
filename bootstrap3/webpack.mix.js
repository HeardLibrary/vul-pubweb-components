let mix = require('laravel-mix');

mix.setPublicPath('dist');

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./src/js/*.js'], // separate these into their own purgecss variable to extract CSS specific to each component?
    fontFace: true,
    keyframes: true,
    variables: true,
    safelist: ['open', 'collapsing', 'in', 'fa', 'fa-plus-square', 'fa-external-link-square']
});

mix.less('src/bootstrap-3.4.1/less/bootstrap.less', 'css')
    .less('src/fontawesome-free-5.15.4/less/fontawesome.less', 'css')
    .less('src/fontawesome-free-5.15.4/less/solid.less', 'css')
    .less('src/fontawesome-free-5.15.4/less/brands.less', 'css')
    .less('src/fontawesome-free-5.15.4/less/v4-shims.less', 'css')
    .styles([
        'dist/css/fontawesome.css',
        'dist/css/solid.css',
        'dist/css/brands.css',
        'dist/css/v4-shims.css'
    ], 'dist/css/vul-fontawesome.css')
    .styles([
        'dist/css/bootstrap.css', 
        'dist/css/vul-fontawesome.css',
        'src/css/vu-brandbar.css', 
        'src/css/vu-main-2019-header.css', 
        'src/css/vul-header.css'
    ], 'dist/css/vul-pw-header.css')
    .styles([
        'dist/css/bootstrap.css',
        'dist/css/vul-fontawesome.css',
        'src/css/vu-main-2019-footer.css',
        'src/css/vul-footer.css'
    ], 'dist/css/vul-pw-footer.css')
    .js([
        'src/js/vul-brandbar.js', 
        'src/js/vul-header.js', 
        'src/js/vul-banner.js',
        'src/js/vul-navigation.js'
    ], 'dist/js/vul-pw-header.js')
    .copy('src/js/vul-footer.js', 'dist/js/vul-pw-footer.js');

mix.options({
    processCssUrls: false,
    postCss: [
        purgecss
    ],
});
