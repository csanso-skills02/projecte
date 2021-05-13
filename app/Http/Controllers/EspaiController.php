<?php

namespace App\Http\Controllers;

use App\Models\Espai;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EspaiController extends Controller
{
    public function index()
    {
        return Inertia::render('Espais/Index', [
            'espais' => Espai::with(['municipi'])->get(),
        ]);
    }

    public function show($registre)
    {
        $espai = Espai::with(['municipi'])->where('registre', '=', $registre)->first();

        if ($espai !==  null)
            return Inertia::render('Espais/Show', [
                'item' => $espai->toArray(),
            ]);

        return back();
    }
}
