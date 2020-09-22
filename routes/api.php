<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group([

  'middleware' => 'api',
  // 'namespace' => 'App\Http\Controllers',
  'prefix' => 'auth'

], function ($router) {

  Route::post('login', 'Api\AuthController@login');
  Route::post('logout', 'Api\AuthController@logout');
  Route::post('refresh', 'Api\AuthController@refresh');
  Route::post('me', 'Api\AuthController@me');
  Route::post('register-employer', 'Api\AuthController@registerEmployer');
   // Send reset password mail
   Route::post('forgot-password', 'Api\ForgotPasswordController@sendResetLinkEmail');
        
   // handle reset password form process
   Route::post('reset-password', 'Api\ResetPasswordController@reset');

});

Route::group(['middleware'=>'api','prefix'=>'admin'],function(){
  Route::get('users','Api\AdminController@getUsers');
  Route::get('languages','Api\AdminController@getLanguages');
  Route::get('content_types','Api\AdminController@getContentTypes');
  Route::get('workflows','Api\AdminController@getWorkFlows');
  Route::get('words_count','Api\AdminController@getWordsCount');
  Route::get('delivery_time','Api\AdminController@getDeliveryTime');
  
});

Route::group(['middleware'=>'api','prefix'=>'content'],function(){
 Route::post('files','Api\ContentController@uploadFiles');
 Route::post('submit_order','Api\ContentController@submitContentOrder');
 Route::get('content_orders','Api\ContentController@getContentOrders');
 Route::get('details','Api\ContentController@getContentDetails');
 Route::get('pricing','Api\ContentController@getContentPricing');
 Route::get('{id}/userOrders','Api\ContentController@getUserOrders');
});

