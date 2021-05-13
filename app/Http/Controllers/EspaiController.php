<?php

namespace App\Http\Controllers;

use App\Models\Espai;
use App\Models\Municipi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EspaiController extends Controller
{
    public function index()
    {
        $search = request('search');
        $municipi_id = request('municipi_id');

        $espais = Espai::with(['municipi', 'tipu', 'imatges']);

        if ($municipi_id !== null) {
            $espais->where('municipi_id', '=', $municipi_id);
        }

        if ($search !== null) {
            $espais->where('nom', 'LIKE', '%' . $search . '%');
        }

        $espais = $espais->get()->toArray();

        foreach ($espais as &$espai) {
            $lang = session()->get('lang', 'cat');
            $espai['desc'] = $espai['desc_' . $lang];
        }

        $municipis = Municipi::all()->toArray();

        return Inertia::render('Espais/Index', [
            'espais' => $espais,
            'municipis' =>  $municipis,
            'query' => [
                'municipi_id' => $municipi_id,
                'search' => $search,
            ]
        ]);
    }

    public function show($registre)
    {
        $espai = Espai::with(['municipi', 'tipu', 'imatges'])->where('registre', '=', $registre)->first()->toArray();

        $lang = session()->get('lang', 'cat');

        $espai['desc'] = $espai['desc_' . $lang];
        $espai['tipu']['nom'] = $espai['tipu'][$lang];

        if ($espai !==  null)
            return Inertia::render('Espais/Show', [
                'item' => $espai,
            ]);

        return back();
    }
}
