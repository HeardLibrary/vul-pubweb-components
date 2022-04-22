let mix = require('laravel-mix');

mix.less('bootstrap-3.4.1/less/bootstrap.less', 'dist/css')
    .js(['src/js/vul-brandbar.js', 'src/js/vul-header.js', 'src/js/vul-navigation.js'], 'dist/js/vul-pw-header.js');
