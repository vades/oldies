/**
 * Watching Assets For Changes: npm run watch
 */
const mix = require('laravel-mix');

mix.webpackConfig({
    optimization: {
        runtimeChunk: true
    }
});



/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/* mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css'); */
//mix.setPublicPath('../ivnuremberg');
mix.setPublicPath(path.normalize('../ivnuremberg'));
mix.disableNotifications();
//mix.browserSync('http://ivnuremberg/');

//mix.browserSync('http://localhost:3000/');


mix.copy('resources/js/jquery-3.5.1.min.js', '../ivnuremberg/ivnuremberg/assets/js/jquery-3.5.1.min.js');
mix.combine([
    'resources/js/app.js',
    ], '../ivnuremberg/ivnuremberg/assets/js/build.js');
  
mix.minify('../ivnuremberg/ivnuremberg/assets/js/build.js');

//resources/js/jquery-3.5.1.min.js

//mix.ts('resources/ts/app.ts', 'public/js/build-ts.js');

mix.sourceMaps(true, 'source-map');
mix.sass('resources/scss/ngkit/styles.scss', 'ivnuremberg/assets/css');
mix.sass('resources/scss/ivnuremberg/ivnuremberg.scss', 'ivnuremberg/assets/css');
mix.browserSync('http://ivnuremberg/');
