<?php

namespace App\Http\Controllers;

use App\Models\Comentari;
use App\Models\Espai;
use App\Models\Municipi;
use App\Models\Tipu;
use App\Models\Usuari;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EspaiController extends Controller
{
    public function index()
    {
        $search = request('search');
        $municipi_id = request('municipi_id');
        $tipu_id = request('tipu_id');

        $espais = Espai::with(['municipi', 'tipu', 'imatges']);

        if ($municipi_id !== null) {
            $espais->where('municipi_id', '=', $municipi_id);
        }

        if ($tipu_id !== null) {
            $espais->where('tipu_id', '=', $tipu_id);
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

        $tipus = Tipu::all()->toArray();

        foreach ($tipus as &$tipu) {
            $lang = session()->get('lang', 'cat');
            $tipu['nom'] = $tipu[$lang];
        }

        return Inertia::render('Espais/Index', [
            'espais' => $espais,
            'municipis' =>  $municipis,
            'tipus' =>  $tipus,
            'query' => [
                'municipi_id' => $municipi_id,
                'search' => $search,
                'tipu_id' => $tipu_id,
            ]
        ]);
    }

    public function show($registre)
    {
        $espai = Espai::with(['municipi', 'tipu', 'imatges'])->where('registre', '=', $registre)->first()->toArray();

        $lang = session()->get('lang', 'cat');

        $espai['desc'] = $espai['desc_' . $lang];
        $espai['tipu']['nom'] = $espai['tipu'][$lang];

        $espai['comentaris'] = Comentari::where('espai_id', '=', $espai['id'])->get()->toArray();

        foreach ($espai['comentaris'] as &$comentari) {
            $comentari['usuari'] = Usuari::find($comentari['usuari_id']);
        }

        if ($espai !==  null)
            return Inertia::render('Espais/Show', [
                'item' => $espai,
            ]);

        return back();
    }
}
