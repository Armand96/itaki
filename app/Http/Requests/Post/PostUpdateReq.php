<?php

namespace App\Http\Requests\Post;

use App\Http\Requests\ApiRequest;

class PostUpdateReq extends ApiRequest
{
    public string $title;
    public string $category;
    public mixed $image;
    public string $value;
    public bool $is_active;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string',
            'category' => 'required|string',
            'image' => 'file',
            'value' => 'required|string',
            'is_active' => 'boolean',
        ];
    }
}
