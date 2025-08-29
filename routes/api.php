<?php

use App\Http\Controllers\Admin\ClientController;
use App\Http\Controllers\Admin\DaftarAnggotaController;
use App\Http\Controllers\Admin\DocumentController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\SosmedController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\WebSettingController;
use App\Http\Controllers\Client\AboutUsController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Client\WebSettingCController;
use App\Http\Controllers\KaryaIlmiahController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\KegiatanController;
use App\Http\Controllers\RegulasiController;
use App\Http\Requests\ResponseFail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
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
Route::get('kategori', function() {
    return Config::get('category');
});

// ->middleware('auth:sanctum') // add this to admin before deploying
Route::prefix('admin')->middleware('api')->group(
    function () {
        Route::apiResource('kegiatan', KegiatanController::class);
        Route::apiResource('regulasi', RegulasiController::class);
        Route::apiResource('karya_ilmiah', KaryaIlmiahController::class);
        Route::apiResource('kategori', KategoriController::class);
        Route::apiResource('sosmed', SosmedController::class);
        Route::apiResource('user', UserController::class);
        Route::apiResource('client', ClientController::class);
        Route::apiResource('daftar_anggota', DaftarAnggotaController::class);
        Route::apiResource('document', DocumentController::class);
        Route::apiResource('gallery', GalleryController::class);
        Route::apiResource('post', PostController::class);
        Route::apiResource('web_setting', WebSettingController::class);
        Route::post('gallery_multiple_upload', [GalleryController::class, 'multiple']);
        Route::post('client_multiple_upload', [ClientController::class, 'multiple']);
        Route::post('web_setting_with_upload', [WebSettingController::class, 'createWithUpload']);
        Route::put('web_setting_with_upload/{web_setting}', [WebSettingController::class, 'updateWithUpload']);
        Route::get('display_tim',  [DaftarAnggotaController::class, 'displayTeam']);
    }
);

Route::middleware(['throttle:global', 'api'])->prefix('client')->group(function () {

    // HOME
    Route::get('sambutan', [HomeController::class, 'sambutan']);
    Route::get('foto_pimpinan', [HomeController::class, 'fotoPimpinan']);
    Route::get('daftar_anggota', [HomeController::class, 'daftarAnggota']);
    Route::get('list_client', [HomeController::class, 'listClient']);
    Route::get('list_sosmed', [HomeController::class, 'listSosmed']);
    Route::get('list_regulasi', [HomeController::class, 'listRegulasi']);
    Route::get('list_karya_ilmiah', [HomeController::class, 'listKaryaIlmiah']);
    Route::get('list_kegiatan', [HomeController::class, 'listKegiatan']);
    Route::get('kegiatan/{kegiatan}', [HomeController::class, 'kegiatanSingle']);

    // ABOUT US
    Route::get('sejarah', [AboutUsController::class, 'sejarah']);
    Route::get('visi', [AboutUsController::class, 'visi']);
    Route::get('misi', [AboutUsController::class, 'misi']);
    Route::get('visi_image', [AboutUsController::class, 'visiImage']);
    Route::get('misi_image', [AboutUsController::class, 'misiImage']);
    Route::get('kode_etik', [AboutUsController::class, 'kodeEtik']);
    Route::get('struktur_organisasi', [AboutUsController::class, 'strukturOrganisasi']);
    Route::get('sertifikasi', [AboutUsController::class, 'sertifikasi']);

    // MANUAL FILTER
    Route::get('post_with_category', [HomeController::class, 'postParamCategory']);
    Route::get('gallery_with_category', [HomeController::class, 'galleryParamCategory']);
    Route::get('document_with_category', [HomeController::class, 'documentParamCategory']);
    Route::get('list_kategori', [HomeController::class, 'listKategori']);
    Route::get('galleries', [HomeController::class, 'galleriesMultipleCategories']);

    //WEB SETTING
    Route::get('web_setting', [WebSettingCController::class, 'index']);
    Route::get('web_setting/{web_setting}', [WebSettingCController::class, 'show']);
});
