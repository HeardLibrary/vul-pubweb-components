let mix = require('laravel-mix');

mix.setPublicPath('dist');

mix.less('src/bootstrap-3.4.1/less/bootstrap.less', 'css')
    .styles([
        'dist/css/bootstrap.css', 
        'src/css/vu-brandbar.css', 
        'src/css/vu-main-2019.css', 
        'src/css/vul-header-bs3.css'
    ], 'dist/css/vul-pw-header.css')
    .js([
        'src/js/vul-brandbar.js', 
        'src/js/vul-header.js', 
        'src/js/vul-navigation.js'
    ], 'dist/js/vul-pw-header.js');
