<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Post extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'category',
        'cover_image',
        'content',
        'is_active',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $slug = Str::slug($value);

        $count = static::where('slug', '=', "$slug%")->count();
        $this->attributes['slug'] = $count ? "{$slug}-{$count}" : $slug;
    }

    public function getRouteKeyName(): string
    {
        return 'id'; // Default lookup field is `id`
    }

    public function resolveRouteBinding($value, $field = null): ?Model
    {
        return $this->where('id', $value)->orWhere('slug', $value)->first();
    }
}
