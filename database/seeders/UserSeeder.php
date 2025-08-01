<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $password = Hash::make(env('DB_PASSWORD', 'admin'));
        $dbname = env('DB_DATABASE', 'tokonlen');
        DB::insert("INSERT INTO `$dbname`.`users` (`id`, `name`, `username`, `email`, `image`, `image_thumb`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES (1, 'Admin', 'admin', 'zhindayacatalog@gmail.com', NULL, NULL, NULL, '$password', NULL, NULL, NULL)");
    }
}
