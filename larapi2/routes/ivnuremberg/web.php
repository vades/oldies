<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

 /**
     * Home
     */
    Route::get('/', 'Web\Ivnuremberg\Home\GetHomeController')->name('ivn.home');

    /**
     * Menu
     */
    Route::get('/menu', 'Web\Ivnuremberg\Menu\GetMenuController')->name('ivn.menu');

    /**
     * Places
     */
    Route::get('/places', 'Web\Ivnuremberg\Places\GetPlacesController')->name('ivn.places');
    Route::get('/place/{slug}', 'Web\Ivnuremberg\Places\GetPlaceController')->name('ivn.place');

    /**
     * Pages
     */
    Route::get('/pages', 'Web\Ivnuremberg\Pages\GetPagesController')->name('ivn.pages');
    Route::get('/page/{slug}', 'Web\Ivnuremberg\Pages\GetPageController')->name('ivn.page');

    Route::get('500', function () {
        abort(500);
    });

     /**
     * Fallback route
     */

    Route::fallback('Web\Ivnuremberg\Error\Error404Controller');



/* Route::get('/', function () {
    return view('ivnuremberg.welcome');
}); */

/* Route::fallback(function () {
    return response()->json([
        'name' => 'Abigail',
        'state' => 'CA'
    ]);
}); */
