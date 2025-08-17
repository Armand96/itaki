<?php

use App\Http\Controllers\Admin\ClientController;
use App\Http\Controllers\Admin\DaftarAnggotaController;
use App\Http\Controllers\Admin\DocumentController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\SosmedController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\WebSettingController;
use App\Http\Controllers\Client\WebSettingCController;
use App\Http\Controllers\KaryaIlmiahController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\KegiatanController;
use App\Http\Controllers\RegulasiController;
use App\Http\Requests\ResponseFail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', [UserController::class, 'login'])->middleware('throttle:global');
Route::get('/unauthorized', function () {
    return response()->json(new ResponseFail(null, "Error", "Unauthorized"), 401);
})->name('login');

// Protected routes (Require authentication)
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', function (Request $request) {
        return response()->json($request->user());
    });

    Route::post('/logout', function (Request $request) {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out successfully!']);
    });
});

Route::get("/kegiatan_enum", [KegiatanController::class, 'getEnum']);

// ->middleware('auth:sanctum') // add this to admin before deploying
Route::prefix('admin')->group(
    function () {
        Route::resource('kegiatan', KegiatanController::class);
        Route::resource('regulasi', RegulasiController::class);
        Route::resource('karya_ilmiah', KaryaIlmiahController::class);
        Route::resource('kategori', KategoriController::class);
        Route::resource('sosmed', SosmedController::class);
        Route::resource('user', UserController::class);
        Route::resource('client', ClientController::class);
        Route::resource('daftar_anggota', DaftarAnggotaController::class);
        Route::resource('document', DocumentController::class);
        Route::resource('gallery', GalleryController::class);
        Route::resource('post', PostController::class);
        Route::resource('web_setting', WebSettingController::class);
        Route::post('gallery_multiple_upload', [GalleryController::class, 'multiple']);
        Route::post('client_multiple_upload', [ClientController::class, 'multiple']);
        Route::post('web_setting_with_upload', [WebSettingController::class, 'createWithUpload']);
        Route::put('web_setting_with_upload/{web_setting}', [WebSettingController::class, 'updateWithUpload']);
        Route::get('display_tim',  [DaftarAnggotaController::class, 'displayTeam']);
    }
);

Route::middleware(['throttle:global'])->group(function () {
    //WEB SETTING
    Route::get('web_setting', [WebSettingCController::class, 'index']);
    Route::get('web_setting/{web_setting}', [WebSettingCController::class, 'show']);
});
