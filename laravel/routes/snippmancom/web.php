<?php

/*
|--------------------------------------------------------------------------
| Web Routes - vades.net
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['domain' => 'snippman.com.{loc}'], function() { 
  Route::get('/', 'SnippmanCom\HomeController');
});


