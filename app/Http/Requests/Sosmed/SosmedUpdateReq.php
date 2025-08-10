<?php

namespace App\Http\Requests\Sosmed;

use App\Http\Requests\ApiRequest;

class SosmedUpdateReq extends ApiRequest
{
    public string $name;
    public mixed $image;
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
            'is_active' => 'boolean'
        ];
    }
}
