<?php

namespace App\Http\Requests\Regulasi;

use App\Http\Requests\ApiRequest;

class RegulasiCreateReq extends ApiRequest
{
    public string $judul;
    public string $kategori;
    public string $no_regulasi;
    public string $tahun_terbit;
    public mixed $file;
    public bool $is_active;
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'judul' => 'string|required',
            'kategori' => 'string|required',
            'no_regulasi' => 'string|required',
            'tahun_terbit' => 'string|required',
            'file' => 'file',
            'is_active' => 'boolean',
        ];
    }
}
