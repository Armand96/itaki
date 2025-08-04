<?php

namespace App\Http\Requests\Client;

use App\Http\Requests\ApiRequest;

class ClientCreateReq extends ApiRequest
{
    public string $name;
    public mixed $image;
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
            'image' => 'image',
            'description' => 'string',
            'is_active' => 'bool',
        ];
    }
}
