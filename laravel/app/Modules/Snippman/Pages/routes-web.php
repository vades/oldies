<?php

/*
|--------------------------------------------------------------------------
| Module WEB Routes
|--------------------------------------------------------------------------
|
| Here is where you can register WEB routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('page/about', array('as'=>'snippmanAbout', 'uses'=>'Snippman\Pages\About\AboutController'));
Route::get('page/contact', array('as'=>'snippmanContact', 'uses'=>'Snippman\Pages\Contact\ContactController'));
