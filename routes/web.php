<?php

use App\Http\Controllers\IniciarSessioController;
use App\Http\Controllers\IniciController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [IniciController::class, 'index'])
    ->name('home');

Route::get('/iniciar', [IniciarSessioController::class, 'mostrarLogin'])
    ->name('login')
    ->middleware('guest');

Route::post('/iniciar', [IniciarSessioController::class, 'intent'])
    ->name('login.intent')
    ->middleware('guest');
