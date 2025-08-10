<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ResponseFail;
use App\Http\Requests\ResponseSuccess;
use App\Http\Requests\Sosmed\SosmedCreateReq;
use App\Models\Sosmed;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Translation\Exception\NotFoundResourceException;

class SosmedController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $req)
    {
        $dataPerPage = $req->data_per_page ? $req->data_per_page : 10;
        $sosmeds = Sosmed::query()
            ->when($req->filled('name'), fn($q) => $q->where('name', 'like', "%{$req->name}%"))
            ->when($req->filled('is_active'), fn($q) => $q->where('is_active', $req->is_active))
            ->orderBy('id', 'desc')
            ->paginate($dataPerPage);

        return $sosmeds;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        throw new NotFoundResourceException();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SosmedCreateReq $request)
    {
        try {
            $validated = $request->validated();
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $imageName = time() . '.' . $file->extension();
                $path = $file->storeAs('sosmed', $imageName, 'public');
                array_push($imagePaths, $path);
                $validated['image'] = $path;
                // $validated['image_thumb'] = $path;
            }
            $sosmed = Sosmed::create($validated);
            return response()->json(new ResponseSuccess($sosmed, "Success", "Success Create Sosmed"));
        } catch (\Throwable $th) {
            Log::error($th);
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Sosmed $sosmed)
    {
        return response()->json(new ResponseSuccess($sosmed, "Success", "Success Get Sosmed"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sosmed $sosmed)
    {
        throw new NotFoundResourceException();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sosmed $sosmed)
    {
        try {
            $validated = $request->validated();
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $imageName = time() . '.' . $file->extension();
                $path = $file->storeAs('sosmed', $imageName, 'public');
                $validated['image'] = $path;
                // $validated['image_thumb'] = $path;
                Storage::disk('public')->delete($sosmed->image);
            }
            $sosmed->update($validated);
            return response()->json(new ResponseSuccess($sosmed, "Success", "Success Update Sosmed"));
        } catch (\Throwable $th) {
            Log::error($th);
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sosmed $sosmed)
    {
        try {
            $sosmed->delete();
            Storage::disk('public')->delete($sosmed->image);
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Error", $th->getMessage()), 500);
        }
    }
}
