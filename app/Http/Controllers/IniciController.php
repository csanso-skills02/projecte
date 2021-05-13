<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class IniciController extends Controller
{
    public function index()
    {
        return Inertia::render('Inici/Index');
    }
}
