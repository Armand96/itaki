<?php

namespace App\Http\Requests\Post;

use App\Http\Requests\ApiRequest;

class PostCreateReq extends ApiRequest
{
    public string $title;
    public string $slug;
    public string $category;
    public string $cover_image;
    public string $content;
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
            'slug' => 'required|string',
            'category' => 'required|string',
            'cover_image' => 'string',
            'content' => 'required|string',
            'is_active' => 'boolean',
        ];
    }
}
