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
//
Use App\Http\Controllers\DashController;
use Illuminate\Support\Facades\Route;
//estoy enrutando el proyecto a la unica vista que tiene
Route::get('/', [DashController::class, 'index']);
Route::post('/search',[DashController::class, 'search']);
