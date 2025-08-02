<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DaftarAnggota extends Model
{
    protected $fillable = [
        "nama",
        "jabatan",
        "deskripsi_jabatan",
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
