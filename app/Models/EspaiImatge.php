<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EspaiImatge extends Model
{
    protected $guarded = [];

    public $timestamps = false;

    public function espais()
    {
        $this->belongsTo(Espai::class);
    }
}
