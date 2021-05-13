<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Espai extends Model
{
    protected $guarded = [];

    public $timestamps = false;

    public function modalitats()
    {
        return $this->belongsToMany(Modalitat::class);
    }

    public function serveis()
    {
        return $this->belongsToMany(Servei::class);
    }

    public function exposicions()
    {
        return $this->hasMany(Exposicio::class);
    }
}
