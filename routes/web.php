<?php

use App\Http\Controllers\ComentariController;
use App\Http\Controllers\EspaiController;
use App\Http\Controllers\IniciarSessioController;
use App\Http\Controllers\IniciController;
use App\Http\Controllers\LangController;
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


Route::get('/iniciar', [IniciarSessioController::class, 'mostrarLogin'])
    ->name('login')
    ->middleware('guest');

Route::post('/iniciar', [IniciarSessioController::class, 'intent'])
    ->name('login.intent')
    ->middleware('guest');

Route::get('/logout', [IniciarSessioController::class, 'logout'])
    ->name('logout')
    ->middleware('auth');

Route::get('/', [IniciController::class, 'index'])
    ->name('home');

Route::get('/espais', [EspaiController::class, 'index'])
    ->name('espais.index');

Route::get('/espais/{registre}', [EspaiController::class, 'show'])
    ->name('espais.show');

Route::get('/lang-change', [LangController::class, 'change'])
    ->name('lang.change');

Route::post('/comentari-afegir', [ComentariController::class, 'afegir'])
    ->name('comentari.afegir');
