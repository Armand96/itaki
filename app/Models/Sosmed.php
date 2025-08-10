<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sosmed extends Model
{
    protected $fillable = [
        'name',
        'image',
        'is_active',
    ];

    protected $hidden = [
        'created_at',
        'hidden_at'
    ];
}
