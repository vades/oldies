<?php

header('Access-Control-Allow-Origin:  *');
header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization');

/*
|--------------------------------------------------------------------------
| Module API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/**
 * Home
 */
Route::group([], base_path('app/Modules/Api/Home/routes-api.php'));

/**
 * Contact form
 */
Route::group([], base_path('app/Modules/Api/ContactForm/routes-api.php'));

/**
 * Auth routes
 */
Route::group([], base_path('app/Modules/Api/Auth/routes-api.php'));

/**
 * Snippman specifics modules
 */
// Todo: Remove after PullGists completion
Route::group([], base_path('app/Modules/Snippman/PullGists/routes-api.php'));