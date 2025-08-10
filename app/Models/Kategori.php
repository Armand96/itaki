<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kategori extends Model
{
    protected $fillable = [
        'nama_kategori',
        'menu_tujuan'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
