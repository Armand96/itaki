<?php

namespace App\Http\Requests\KaryaIlmiah;

use App\Http\Requests\ApiRequest;

class KaryaIlmiahUpdateReq extends ApiRequest
{
    public string $judul;
    public string $penerbit;
    public mixed $file;
    public string $tahun_terbit;
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
            'file' => 'file',
            'penerbit' => 'string|required',
            'tahun_terbit' => 'date|required',
            'is_active' => 'boolean'
        ];
    }
}
