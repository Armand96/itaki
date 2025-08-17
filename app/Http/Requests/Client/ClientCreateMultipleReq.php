<?php

namespace App\Http\Requests\Client;

use App\Http\Requests\ApiRequest;

class ClientCreateMultipleReq extends ApiRequest
{
    public string $name;
    public mixed $images;
    public string $description;
    public bool $is_active;


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'images' => 'required',
            'images.*' => 'image',
            'description' => 'string',
            'is_active' => 'bool',
        ];
    }
}
