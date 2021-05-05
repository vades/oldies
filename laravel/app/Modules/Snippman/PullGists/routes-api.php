<?php

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

// Todo: Remove after PullGists completion
Route::get('public/pull-gists', 'Snippman\PullGists\PullGistsHandler');
