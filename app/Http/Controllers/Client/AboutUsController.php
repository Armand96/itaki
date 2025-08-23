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
        if($sejarah) {
            return response()->json($sejarah);
        } else {
            throw new ResourceNotFoundException("Data not found");
        }
    }

    public function visiMisi()
    {
        $visi = Post::where('category', 'visi')->where('is_active', true)->first();
        $misi = Post::where('category', 'misi')->where('is_active', true)->first();

        $visiImage = Gallery::where('category', 'visi')->first();
        $misiImage = Gallery::where('category', 'misi')->first();

        return response()->json([
            'visi' => $visi,
            'visi_image' => $visiImage,
            'misi_image' => $misiImage,
            'misi' => $misi
        ]);
    }

    public function kodeEtik()
    {
        $document = Document::where('category', 'kode_etik')->first();
        if($document) {
            return response()->json($document);
        } else {
            throw new ResourceNotFoundException("Data not found");
        }
    }

}
