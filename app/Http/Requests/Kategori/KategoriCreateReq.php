<?php

namespace App\Http\Requests\Kategori;

use App\Http\Requests\ApiRequest;

class KategoriCreateReq extends ApiRequest
{
    public string $nama_kategori;
    public string $menu_tujuan;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nama_kategori' => 'required|string',
            'menu_tujuan' => 'required|string',
        ];
    }
}
