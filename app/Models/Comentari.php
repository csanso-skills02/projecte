<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comentari extends Model
{
    protected $guarded = [];

    public $timestamps = false;

    public function usuari()
    {
        return $this->belongsTo(Usuari::class);
    }

    public function espai()
    {
        return $this->belongsTo(Espai::class);
    }
}
