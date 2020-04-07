<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
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

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group(['middleware' => ['auth:sanctum']], function() {
    Route::resources(['posts' => PostController::class]);
    Route::get('user', 'AuthController@getAuthenticatedUser');
    Route::post('auth/logout', 'AuthController@logout');
});

Route::post('auth/login', 'AuthController@login');
Route::post('auth/signup', 'AuthController@signup');
//Route::post('auth/logout', 'AuthController@logout');
