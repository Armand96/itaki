<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    protected $fillable = [
        'title',
        'file_path',
        'description'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
