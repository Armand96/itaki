<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Regulasi extends Model
{
    protected $fillable = [
        'judul',
        'no_regulasi',
        'tahun_terbit',
        'pdf_path',
        'is_active',
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];
}
