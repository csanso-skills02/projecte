<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class EspaiController extends Controller
{
    public function index()
    {
        return Inertia::render('Espais/Index');
    }
}
