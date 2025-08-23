<?php

namespace App\Http\Requests\Document;

use App\Http\Requests\ApiRequest;

class DocumentCreateReq extends ApiRequest
{
    public string $title;
    public string $category;
    public mixed $file;
    public string $description;
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'string|required',
            'category' => 'string|required',
            'file' => 'file',
            'description' => 'string'
        ];
    }
}
