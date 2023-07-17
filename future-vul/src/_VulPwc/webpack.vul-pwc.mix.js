let mix = require('laravel-mix');
let publicDir = '../../public/';
require('laravel-mix-merge-manifest');

mix
    .setPublicPath(publicDir)
    .styles(
        [
            'css/vul-pwc.css'
        ], 
        publicDir + 'css/vul-pwc.css')
    .mergeManifest();
