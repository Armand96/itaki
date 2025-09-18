<?php

use App\Http\Controllers\Admin\DaftarAnggotaController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/storagez/{path}', function ($path) {
    $file = storage_path('app/public/' . $path);

    if (!file_exists($file)) {
        abort(404);
    }

    return Response::file($file, [
        'Access-Control-Allow-Origin' => '*',
        'Access-Control-Allow-Methods' => 'GET, OPTIONS',
        'Access-Control-Allow-Headers' => 'Origin, Content-Type, Accept'
    ]);
})->where('path', '.*');

Route::get('/daftar_anggota/export', [DaftarAnggotaController::class, 'export']);

Route::prefix('/admin')->group(function () {
    Route::get('/{any?}', function () {
        return view('backoffice.dashboard');
    })->where('any', '.*'); // Menangkap semua path setelah /admin
});


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
