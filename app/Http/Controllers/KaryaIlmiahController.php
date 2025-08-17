<?php

namespace App\Http\Controllers;

use App\Http\Requests\KaryaIlmiah\KaryaIlmiahCreateReq;
use App\Http\Requests\KaryaIlmiah\KaryaIlmiahUpdateReq;
use App\Http\Requests\ResponseFail;
use App\Http\Requests\ResponseSuccess;
use App\Models\KaryaIlmiah;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;

class KaryaIlmiahController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $req)
    {
        $dataPerPage = $req->input('data_per_page', 10);

        $karyaIlmiahs = KaryaIlmiah::query()
            ->when($req->filled('title'), fn($q) => $q->where('title', 'like', "%{$req->title}%"))
            ->orderBy('id', 'desc')
            ->paginate($dataPerPage);

        return $karyaIlmiahs;
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
    public function store(KaryaIlmiahCreateReq $request)
    {
        try {
            $validated = $request->validated();

            if ($request->hasFile('file')) {
                $file = $request->file('file');
                $fileName = time() . '.' . $file->extension();
                $path = $file->storeAs('karya_ilmiah', $fileName, 'public');
                $validated['file_path'] = $path;
            }

            $karyaIlmiah = KaryaIlmiah::create($validated);
            return response()->json(new ResponseSuccess($karyaIlmiah, "Success", "Success Create Karya Ilmiah"));
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(KaryaIlmiah $karyaIlmiah)
    {
        return response()->json(new ResponseSuccess($karyaIlmiah, "Success", "Success Get Karya Ilmiah"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(KaryaIlmiah $karyaIlmiah)
    {
        throw new ResourceNotFoundException();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(KaryaIlmiahUpdateReq $request, KaryaIlmiah $karyaIlmiah)
    {
        try {
            $validated = $request->validated();

            if ($request->hasFile('file')) {
                $file = $request->file('file');
                $fileName = time() . '.' . $file->extension();
                $path = $file->storeAs('karya_ilmiah', $fileName, 'public');
                $validated['file_path'] = $path;
            }

            $karyaIlmiah->update($validated);
            return response()->json(new ResponseSuccess($karyaIlmiah, "Success", "Success Update Karya Ilmiah"));
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(KaryaIlmiah $karyaIlmiah)
    {
        try {
            $karyaIlmiah->delete();
            Storage::disk('public')->delete($karyaIlmiah->file_path);
            return response()->json(new ResponseSuccess($karyaIlmiah, "Success", "Success Update Karya Ilmiah"));
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Error", $th->getMessage()), 500);
        }
    }
}
