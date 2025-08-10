<?php

namespace App\Http\Controllers;

use App\Http\Requests\Kategori\KategoriCreateReq;
use App\Http\Requests\Kategori\KategoriUpdateReq;
use App\Http\Requests\ResponseFail;
use App\Http\Requests\ResponseSuccess;
use App\Models\Kategori;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;

class KategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $req)
    {
        $dataPerPage = $req->input('data_per_page', 10);

        $kategoris = Kategori::query()
            ->when($req->filled('nama_kategori'), fn($q) => $q->where('nama_kategori', 'like', "%{$req->nama_kategori}%"))
            ->when($req->filled('tujuan_menu'), fn($q) => $q->where('tujuan_menu', 'like', "%{$req->tujuan_menu}%"))
            ->orderBy('id', 'desc')
            ->paginate($dataPerPage);

        return $kategoris;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        throw new NotFoundHttpException();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(KategoriCreateReq $request)
    {
        try {
            $validated = $request->validated();
            $kategori = Kategori::create($validated);
            return response()->json(new ResponseSuccess($kategori, "Success", "Success Create Kategori"));
        } catch (\Throwable $th) {
            Log::error($th);
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Kategori $kategori)
    {
        return response()->json(new ResponseSuccess($kategori, "Success", "Success Get Kategori"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kategori $kategori)
    {
        throw new ResourceNotFoundException();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(KategoriUpdateReq $request, Kategori $kategori)
    {
        try {
            $validated = $request->validated();
            $kategori->update($validated);
            return response()->json(new ResponseSuccess($kategori, "Success", "Success Update Kategori"));
        } catch (\Throwable $th) {
            Log::error($th);
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kategori $kategori)
    {
        try {
            $kategori->delete();
            return response()->json(new ResponseSuccess($kategori, "Success", "Success Delete Kategori"));
        } catch (\Throwable $th) {
            Log::error($th);
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }
}
