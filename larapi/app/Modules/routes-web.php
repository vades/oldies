<?php

/*
|--------------------------------------------------------------------------
| Module Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**
 * Home route
 */
Route::group([], base_path('app/Modules/Snippman/Home/routes-web.php'));
Route::group([], base_path('app/Modules/Snippman/Snippets/routes-web.php'));
Route::group([], base_path('app/Modules/Snippman/Pages/routes-web.php'));