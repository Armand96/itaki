<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/{any?}', function ($any = null) {
    // Jika $any null (akses "/"), fallback ke index.html
    if (!$any) {
        return Response::file(public_path('compro/index.html'));
    }

    $fullPath = public_path("compro/{$any}");

    if (File::exists($fullPath)) {
        return Response::file($fullPath);
    }

    $htmlPath = public_path("compro/{$any}.html");
    if (File::exists($htmlPath)) {
        return Response::file($htmlPath);
    }

    $txtPath = public_path("compro/{$any}.txt");
    if (File::exists($txtPath)) {
        return response(File::get($txtPath), 200)->header('Content-Type', 'text/plain');
    }

    // fallback terakhir ke index.html
    return Response::file(public_path('compro/index.html'));
})->where('any', '.*');
