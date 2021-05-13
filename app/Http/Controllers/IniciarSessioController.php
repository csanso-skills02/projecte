<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
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
            return redirect(route('home'));
        } else {
            return back()->with('error', 'Login incorrecte.');
        }
    }

    public function logout()
    {
        if (Auth::user())
            Auth::logout();

        return back()->with('success', 'Sortit correctament.');
    }
}
