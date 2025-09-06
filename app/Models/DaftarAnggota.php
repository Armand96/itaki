<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DaftarAnggota extends Model
{
    protected $fillable = [
        "nama",
        "jabatan",
        "jenjang",
        "nomor_kta",
        "nomor_registrasi",
        "image",
        "image_thumb",
        "deskripsi_jabatan",
        "urutan"
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
