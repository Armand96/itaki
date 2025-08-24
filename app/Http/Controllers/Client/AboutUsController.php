<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Document;
use App\Models\Gallery;
use App\Models\Post;
use Illuminate\Http\Request;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;

class AboutUsController extends Controller
{
    public function sejarah()
    {
        $sejarah = Post::where('category', 'sejarah')->where('is_active', true)->first();
        if ($sejarah) {
            return response()->json($sejarah);
        } else {
            throw new ResourceNotFoundException("Data not found");
        }
    }

    public function visi()
    {
        $visi = Post::where('category', 'visi')->where('is_active', true)->first();
        if ($visi) {
            return response()->json($visi);
        } else {
            throw new ResourceNotFoundException("Data not found");
        }
    }

    public function misi()
    {
        $misi = Post::where('category', 'misi')->where('is_active', true)->first();
        if ($misi) {
            return response()->json($misi);
        } else {
            throw new ResourceNotFoundException("Data not found");
        }
    }

    public function visiImage()
    {
        $visiImage = Gallery::where('category', 'visi')->first();
        if ($visiImage) {
            return response()->json($visiImage);
        } else {
            throw new ResourceNotFoundException("Data not found");
        }
    }
    public function misiImage()
    {
        $misiImage = Gallery::where('category', 'visi')->first();
        if ($misiImage) {
            return response()->json($misiImage);
        } else {
            throw new ResourceNotFoundException("Data not found");
        }
    }

    public function kodeEtik()
    {
        $document = Document::where('category', 'kode_etik')->first();
        if ($document) {
            return response()->json($document);
        } else {
            throw new ResourceNotFoundException("Data not found");
        }
    }
}
