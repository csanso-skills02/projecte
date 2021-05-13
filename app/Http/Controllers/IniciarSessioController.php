<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class IniciarSessioController extends Controller
{
    public function mostrarLogin()
    {
        return Inertia::render('Auth/Iniciar.vue');
    }

    public function intent()
    {
        if (Auth::attempt(['email' => request('email'), 'password' => request('contrasenya')])) {
            return 'success';
        } else {
            return 'failed';
        }
    }
}
