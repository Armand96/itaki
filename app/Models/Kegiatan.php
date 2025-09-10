<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Kegiatan extends Model
{
    protected $fillable = [
        'judul',
        'kategori',
        'short_desc',
        'detail',
        'tgl_event',
        'status_event',
        'url_video',
        'cover_image',
        'cover_image_thumb',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function setJudulAttribute($value)
    {
        $this->attributes['judul'] = $value;
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
