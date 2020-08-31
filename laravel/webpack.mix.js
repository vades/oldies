const mix = require('laravel-mix');

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

/*mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/styles.scss', 'public/css');*/
   mix.disableNotifications();
  //mix.disableSuccessNotifications();
mix.browserSync('127.0.0.1:8000');

//mix.js('resources/js/app.js', 'public/js');
mix.combine([
  'resources/js/vendor/jquery/jquery-3.4.1.min.js',
  'resources/js/vendor/parsley/parsley.min.js',
  ], 'public/js/vendor.js');
mix.combine([
  'resources/js/app/toggler.js',
  'resources/js/app/contact-form.js'
  ], 'public/js/build.js');

mix.minify('public/js/build.js')

mix.sourceMaps(true, 'source-map');
mix.sass('resources/sass/csskit.scss', 'public/css');
mix.sass('resources/sass/snippman.scss', 'public/css');

