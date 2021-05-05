<?php

/*
|--------------------------------------------------------------------------
| Module WEB Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('', array('as'=>'snippmanHome', 'uses'=>'Snippman\Home\HomeController'));
