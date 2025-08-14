<?php

namespace App\Http\Requests\DaftarAnggota;

use App\Http\Requests\ApiRequest;

class DaftarAnggotaUpdateReq extends ApiRequest
{
    public string $nama;
    public mixed $image;
    public string $jabatan;
    public string $deskripsi_jabatan;
    public string $urutan;

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
            'deskripsi_jabatan' => 'string',
            'urutan' => 'string',
        ];
    }
}
