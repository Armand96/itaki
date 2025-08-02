<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    protected $fillable = [
        'title',
        'file_path',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
