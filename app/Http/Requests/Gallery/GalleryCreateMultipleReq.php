<?php

namespace App\Http\Requests\Gallery;

use App\Http\Requests\ApiRequest;

class GalleryCreateMultipleReq extends ApiRequest
{
    public string $category;
    public string $description;
    public mixed $images;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'category' => 'required|string',
            'description' => 'required|string',
            'images' => 'required',
            'images.*' => 'image',
        ];
    }
}
