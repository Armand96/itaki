<?php

namespace App\Http\Requests\Post;

use App\Http\Requests\ApiRequest;

class DocumentUpdateReq extends ApiRequest
{
    public string $title;
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
            'file' => 'file',
            'description' => 'string'
        ];
    }
}
