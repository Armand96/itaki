<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    protected $fillable = [
        'category',
        'image',
        'image_thumb',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
