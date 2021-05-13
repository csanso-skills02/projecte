<?php

namespace App\Http\Controllers;

use App\Models\Espai;
use App\Models\Municipi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EspaiController extends Controller
{
    public function index()
    {
        $search = request('search');
        $municipi_id = request('municipi_id');

        $espais = Espai::with(['municipi']);

        if ($municipi_id !== null) {
            $espais->where('municipi_id', '=', $municipi_id);
        }

        if ($search !== null) {
            $espais->where('nom', 'LIKE', '%' . $search . '%');
        }

        $espais = $espais->get();

        return Inertia::render('Espais/Index', [
            'espais' => $espais,
            'municipis' => Municipi::all(),
            'query' => [
                'municipi_id' => $municipi_id,
                'search' => $search,
            ]
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
