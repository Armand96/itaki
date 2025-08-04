<?php

namespace App\Http\Requests\Client;

use App\Http\Requests\ApiRequest;

class ClientCreateReq extends ApiRequest
{
    public string $category;
    public mixed $image;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'category' => 'required|string',
            'image' => 'image',
        ];
    }
}
