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
Route::get('snippets', array('as'=>'snippets', 'uses'=>'Snippman\Snippets\Snippets\SnippetsController'));
Route::get('search', array('as'=>'snippetsSearch', 'uses'=>'Snippman\Snippets\Search\SearchController'));
Route::get('snippet/{slug}', array('as'=>'snippet', 'uses'=>'Snippman\Snippets\Snippet\SnippetController'));
