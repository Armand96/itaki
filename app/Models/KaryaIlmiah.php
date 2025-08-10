<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KaryaIlmiah extends Model
{
    protected $fillable = [
        'judul',
        'penerbit',
        'tahun_terbit',
        'file_path',
        'is_active',
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];
}
