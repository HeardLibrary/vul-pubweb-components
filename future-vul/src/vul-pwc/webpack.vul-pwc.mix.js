let mix = require('laravel-mix');
let distDir = '../../dist/';
require('laravel-mix-merge-manifest');

mix
    .setPublicPath(distDir)
    .styles(
        [
            'css/vul-pwc.css'
        ], 
        distDir + 'css/vul-pwc.css')
    .mergeManifest();
