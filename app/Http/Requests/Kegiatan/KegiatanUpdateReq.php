<?php

namespace App\Http\Requests\Kegiatan;

use App\Http\Requests\ApiRequest;

class KegiatanUpdateReq extends ApiRequest
{
    public string $judul;
    public string $kategori;
    // public string $short_desc;
    public string $detail;
    public string $tgl_event;
    public string $status_event;
    public string $url_video;
    public string $is_active;
    public mixed $image;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'judul' => 'required|string',
            'kategori' => 'required|string',
            // 'short_desc' => 'required|string',
            'detail' => 'required|string',
            'tgl_event' => 'required|date',
            'status_event' => 'required|boolean',
            'is_active' => 'boolean',
            // 'url_video' => 'string',
            'image' => 'image',
        ];
    }
}
