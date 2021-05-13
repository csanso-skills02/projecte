<?php

namespace App\Http\Controllers;

use App\Models\Comentari;
use Illuminate\Http\Request;

class ComentariController extends Controller
{
    public function afegir()
    {
        $espai_id = request('espai_id');
        $text = request('text');

        if ($espai_id !== null && $text !== null) {

            $user = request()->user();

            if ($user !== null) {
                Comentari::create([
                    'espai_id' => $espai_id,
                    'usuari_id' => $user->id,
                    'data' => date('Y-m-d', strtotime('now')),
                    'hora' => date('H:i:s', strtotime('now')),
                    'text' => $text,
                ]);

                return back()->with('success', 'Comentari publicat.');
            }
        }

        return back()->with('error', 'Comentari no publicat.');
    }
}
