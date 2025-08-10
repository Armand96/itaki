<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\DaftarAnggota\DaftarAnggotaCreateReq;
use App\Http\Requests\DaftarAnggota\DaftarAnggotaUpdateReq;
use App\Http\Requests\ResponseFail;
use App\Http\Requests\ResponseSuccess;
use App\Models\DaftarAnggota;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class DaftarAnggotaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $req)
    {
        $dataPerPage = $req->input('data_per_page', 10);

        $anggotas = DaftarAnggota::query()
            ->when($req->filled('name'), fn($q) => $q->where('name', 'like', "%{$req->name}%"))
            ->when($req->filled('description'), fn($q) => $q->where('description', 'like', "%{$req->description}%"))
            ->when($req->filled('is_active'), fn($q) => $q->where('is_active', '=', "{$req->description}"))
            ->orderBy('id', 'desc')
            ->paginate($dataPerPage);

        return $anggotas;
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
    public function store(DaftarAnggotaCreateReq $request)
    {
        try {
            $validated = $request->validated();
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $imageName = time() . '.' . $file->extension();
                $path = $file->storeAs('anggota', $imageName, 'public');
                $validated['image'] = $path;
                $validated['image_thumb'] = $path;
            }
            $daftarAnggota = DaftarAnggota::create($validated);
            return response()->json(new ResponseSuccess($daftarAnggota, "Success", "Success Create Anggota"));
        } catch (\Throwable $th) {
            Log::error($th);
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(DaftarAnggota $daftarAnggota)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DaftarAnggota $daftarAnggota)
    {
        throw new NotFoundHttpException();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DaftarAnggotaUpdateReq $request, DaftarAnggota $daftarAnggota)
    {
        try {
            $validated = $request->validated();
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $imageName = time() . '.' . $file->extension();
                $path = $file->storeAs('anggota', $imageName, 'public');
                array_push($imagePaths, $path);
                $validated['image'] = $path;
                $validated['image_thumb'] = $path;
                Storage::disk('public')->delete($daftarAnggota->image);
                Storage::disk('public')->delete($daftarAnggota->image_thumb);
            }
            $daftarAnggota->update($validated);
            return response()->json(new ResponseSuccess($daftarAnggota, "Success", "Success Update Anggota"));
        } catch (\Throwable $th) {
            Log::error($th);
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DaftarAnggota $daftarAnggota)
    {
        try {
            $daftarAnggota->delete();
            Storage::disk('public')->delete($daftarAnggota->image);
            Storage::disk('public')->delete($daftarAnggota->image_thumb);
        } catch (\Throwable $th) {
            Log::error($th);
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }
}
