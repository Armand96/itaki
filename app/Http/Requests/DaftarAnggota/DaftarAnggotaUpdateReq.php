<?php

namespace App\Http\Requests\DaftarAnggota;

use App\Http\Requests\ApiRequest;

class DaftarAnggotaUpdateReq extends ApiRequest
{
    public string $nama;
    public mixed $image;
    public string $jabatan;
    public string $jenjang;
    public string $nomor_kta;
    public string $nomor_registrasi;
    public string $deskripsi_jabatan;
    public string $urutan;
    public string $is_active;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nama' => 'required|string',
            'image' => 'image',
            'jabatan' => 'string',
            'jenjang' => 'string',
            'nomor_kta' => 'string',
            'nomor_registrasi' => 'string',
            'deskripsi_jabatan' => 'string',
            'urutan' => 'string',
            'is_active' => 'boolean',
        ];
    }
}
