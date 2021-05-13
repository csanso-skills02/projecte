<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Espai extends Model
{
    protected $guarded = [];

    public function exposicions()
    {
        return $this->hasMany(Exposicio::class);
    }
}
