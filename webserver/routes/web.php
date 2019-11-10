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

Route::get('/', function () {
    return view('welcome');
});



Route::get('/home', 'HomeController@index')->name('home');



Route::group(['prefix' => 'admin'] , function(){
    Auth::routes();
    Route::get('/','admin\HomeController@getIndex')->name('admin.home.get.index');
    // -- Categories
    Route::group(['prefix' => 'category'] , function(){
        Route::get('/','admin\CategoryController@getList')->name('admin.category.get.index');
        Route::get('/list','admin\CategoryController@getList')->name('admin.category.get.list');
        Route::get('/edit/{id}','admin\CategoryController@getEdit')->name('admin.category.get.edit');
        
        Route::post('/list','admin\CategoryController@postCreate')->name('admin.category.post.create');
        Route::post('/edit/{id}','admin\CategoryController@postEdit')->name('admin.category.post.edit');
    });
    // -- news
    Route::group(['prefix' => 'news'] , function(){
        Route::get('/','admin\NewsController@getList')->name('admin.news.get.index');
        Route::get('/detail/{id}','admin\NewsController@getDetail')->name('admin.news.get.detail');
        Route::get('/list','admin\NewsController@getList')->name('admin.news.get.list');
        Route::get('/create','admin\NewsController@getCreate')->name('admin.news.get.create');
        Route::get('/edit/{id}','admin\NewsController@getEdit')->name('admin.news.get.edit');
    
        Route::post('/create','admin\NewsController@postCreate')->name('admin.news.post.create');
        Route::post('/edit/{id}','admin\NewsController@postEdit')->name('admin.news.post.edit');
    });
    // -- forms
    Route::group(['prefix' => 'forms'] , function(){
        Route::get('/','admin\FormController@getList')->name('admin.forms.get.index');
        Route::get('/detail/{id}','admin\FormController@getDetail')->name('admin.forms.get.detail');
        Route::get('/list','admin\FormController@getList')->name('admin.forms.get.list');
        Route::get('/create','admin\FormController@getCreate')->name('admin.forms.get.create');
        Route::get('/edit/{id}','admin\FormController@getEdit')->name('admin.forms.get.edit');    
        
        Route::post('/create','admin\FormController@postCreate')->name('admin.forms.post.create');
        Route::post('/edit/{id}','admin\FormController@postEdit')->name('admin.forms.post.edit');
    });
    // -- partners
    Route::group(['prefix' => 'partners'] , function(){
        Route::get('/','admin\PartnerController@getList')->name('admin.partners.get.index');
        Route::get('/list','admin\PartnerController@getList')->name('admin.partners.get.list');
        Route::get('/create','admin\PartnerController@getCreate')->name('admin.partners.get.create');
        Route::get('/edit/{id}','admin\PartnerController@getEdit')->name('admin.partners.get.edit');
        
        Route::post('/create','admin\PartnerController@postCreate')->name('admin.partners.post.create');
        Route::post('/edit/{id}','admin\PartnerController@postEdit')->name('admin.partners.post.edit');
    });
    // -- Users
    Route::group(['prefix' => 'users'] , function(){
        Route::get('/','admin\UserController@getList')->name('admin.users.get.index');
        Route::get('/list','admin\UserController@getList')->name('admin.users.get.list');
        Route::get('/create','admin\UserController@getCreate')->name('admin.users.get.create');
        Route::get('/edit/{id}','admin\UserController@getEdit')->name('admin.users.get.edit');
    
        Route::post('/create','admin\UserController@postCreate')->name('admin.users.post.create');
        Route::post('/edit/{id}','admin\UserController@postEdit')->name('admin.users.post.edit');
    });
    
});