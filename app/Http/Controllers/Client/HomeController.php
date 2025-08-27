<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\DaftarAnggota;
use App\Models\Document;
use App\Models\Gallery;
use App\Models\KaryaIlmiah;
use App\Models\Post;
use App\Models\Regulasi;
use App\Models\Sosmed;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Exception\BadRequestException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Translation\Exception\NotFoundResourceException;

class HomeController extends Controller
{
    public function postParamCategory(Request $request)
    {
        if (!$request->has('category')) throw new BadRequestException("category must be filled");
        $postSambutan = Post::where('category', $request->category)->where('is_active', true)->first();
        if ($postSambutan) {
            return response()->json($postSambutan);
        } else {
            return throw new NotFoundResourceException("data not found");
        }
    }

    public function galleryParamCategory(Request $request)
    {
        if (!$request->has('category')) throw new BadRequestException("category must be filled");
        $dataPerPage = $request->data_per_page ? $request->data_per_page : 10;
        $galleries = Gallery::query()
            ->where('category', $request->category)
            ->orderBy('id', 'desc')
            ->paginate($dataPerPage);
        return $galleries;
    }

    public function documentParamCategory(Request $request)
    {
        if (!$request->has('category')) throw new BadRequestException("category must be filled");
        $dataPerPage = $request->data_per_page ? $request->data_per_page : 10;
        $galleries = Document::query()
            ->where('category', $request->category)
            ->orderBy('id', 'desc')
            ->paginate($dataPerPage);
        return $galleries;
    }

    public function sambutan()
    {
        $sambutan = Post::where('category', 'sambutan')->where('is_active', true)->first();
        if ($sambutan) {
            return response()->json($sambutan);
        } else {
            return throw new ResourceNotFoundException("Data not found");
        }
    }

    public function fotoPimpinan()
    {
        $fotoPimpinan = Gallery::where('category', 'foto_pimpinan')->first();
        if ($fotoPimpinan) {
            return response()->json($fotoPimpinan);
        } else {
            return throw new ResourceNotFoundException("Data not found");
        }
    }

    public function daftarAnggota(Request $request)
    {
        $dataPerPage = $request->data_per_page ? $request->data_per_page : 10;
        $daftarAnggota = DaftarAnggota::orderBy('urutan', 'asc')->paginate($dataPerPage);
        return $daftarAnggota;
    }

    public function listClient()
    {
        $listClient = Client::where('is_active', true)->get();
        return response()->json($listClient);
    }

    public function listSosmed()
    {
        $listSosmed = Sosmed::where('is_active', true)->get();
        return response()->json($listSosmed);
    }

    public function listRegulasi(Request $request)
    {
        $dataPerPage = $request->input('data_per_page', 10);

        $regulasi = Regulasi::query()
            ->when($request->filled('judul'), fn($q) => $q->where('judul', 'like', "%{$request->judul}%"))
            ->when($request->filled('kategori'), fn($q) => $q->where('kategori', 'like', "%{$request->kategori}%"))
            ->when($request->filled('no_regulasi'), fn($q) => $q->where('no_regulasi', 'like', "%{$request->no_regulasi}%"))
            ->where('is_active', true)
            ->orderBy('id', 'desc')
            ->paginate($dataPerPage);

        return $regulasi;
    }

    public function listKaryaIlmiah(Request $request)
    {
        $dataPerPage = $request->input('data_per_page', 10);

        $karyaIlmiahs = KaryaIlmiah::query()
            ->when($request->filled('judul'), fn($q) => $q->where('judul', 'like', "%{$request->title}%"))
            ->when($request->filled('penerbit'), fn($q) => $q->where('penerbit', 'like', "%{$request->title}%"))
            ->where('is_active', true)
            ->orderBy('id', 'desc')
            ->paginate($dataPerPage);

        return $karyaIlmiahs;
    }
}
