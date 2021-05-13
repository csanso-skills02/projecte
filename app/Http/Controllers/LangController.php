<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LangController extends Controller
{
    public function change()
    {
        $abbr = request('abbr');

        if ($abbr !== null) {
            session()->put('lang', $abbr);

            return back();
        }

        return back();
    }
}
