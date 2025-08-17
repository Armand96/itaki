<?php

namespace App\Http\Controllers;

use App\Http\Requests\Regulasi\RegulasiUpdateReq;
use App\Http\Requests\Regulasi\RegulasiCreateReq;
use App\Http\Requests\ResponseFail;
use App\Http\Requests\ResponseSuccess;
use App\Models\Regulasi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;

class RegulasiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $req)
    {
        $dataPerPage = $req->input('data_per_page', 10);

        $posts = Regulasi::query()
            ->when($req->filled('judul'), fn($q) => $q->where('judul', 'like', "%{$req->judul}%"))
            ->when($req->filled('kategori'), fn($q) => $q->where('kategori', 'like', "%{$req->kategori}%"))
            ->when($req->filled('no_regulasi'), fn($q) => $q->where('no_regulasi', 'like', "%{$req->no_regulasi}%"))
            ->when($req->filled('tahun_terbit'), fn($q) => $q->where('tahun_terbit', "$req->tahun_terbit"))
            ->when($req->filled('is_active'), fn($q) => $q->where('is_active', "$req->is_active"))
            ->orderBy('id', 'desc')
            ->paginate($dataPerPage);

        return $posts;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        throw new ResourceNotFoundException();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RegulasiCreateReq $request)
    {
        try {
            $validated = $request->validated();

            if ($request->hasFile('file')) {
                $file = $request->file('file');
                $fileName = time() . '.' . $file->extension();
                $path = $file->storeAs('regulasi', $fileName, 'public');
                $validated['pdf_path'] = $path;
            }

            $regulasi = Regulasi::create($validated);
            return response()->json(new ResponseSuccess($regulasi, "Success", "Success Create Regulasi"));
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Regulasi $regulasi)
    {
        return response()->json(new ResponseSuccess($regulasi, "Success", "Success Get Regulasi"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Regulasi $regulasi)
    {
        throw new ResourceNotFoundException();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RegulasiUpdateReq $request, Regulasi $regulasi)
    {
        try {
            $validated = $request->validated();

            if ($request->hasFile('file')) {
                $file = $request->file('file');
                $fileName = time() . '.' . $file->extension();
                $path = $file->storeAs('regulasi', $fileName, 'public');
                $validated['pdf_path'] = $path;
            }

            $regulasi->update($validated);
            return response()->json(new ResponseSuccess($regulasi, "Success", "Success Update Regulasi"));
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Regulasi $regulasi)
    {
        try {
            $regulasi->delete();
            Storage::disk('public')->delete($regulasi->pdf_path);
            return response()->json(new ResponseSuccess($regulasi, "Success", "Success Delete Regulasi"));
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Error", $th->getMessage()), 500);
        }
    }
}
