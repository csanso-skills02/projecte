<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Modalitat extends Model
{
    // use HasFactory;

    public $timestamps = false;

    public function espais()
    {
        return $this->belongsToMany(Espai::class);
    }
}
