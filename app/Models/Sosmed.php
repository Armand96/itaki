<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sosmed extends Model
{
    protected $fillable = [
        'name',
        'image_path',
        'link',
        'is_active',
    ];

    protected $hidden = [
        'created_at',
        'hidden_at'
    ];
}
