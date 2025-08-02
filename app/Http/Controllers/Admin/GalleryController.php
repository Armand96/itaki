<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Gallery\GalleryCreateReq;
use App\Http\Requests\Gallery\GalleryUpdateReq;
use App\Http\Requests\ResponseFail;
use App\Http\Requests\ResponseSuccess;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Translation\Exception\NotFoundResourceException;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $req)
    {
        $dataPerPage = $req->data_per_page ? $req->data_per_page : 10;
        $galleries = Gallery::query()
            ->when($req->filled('name'), fn($q) => $q->where('name', 'like', "%{$req->name}%"))
            ->orderBy('id', 'desc')
            ->paginate($dataPerPage);

        return $galleries;
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
    public function store(GalleryCreateReq $request)
    {
        try {
            $validated = $request->validated();
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $imageName = time() . '.' . $file->extension();
                $path = $file->storeAs('products', $imageName, 'public');
                array_push($imagePaths, $path);
                $validated['image'] = $path;
                $validated['image_thumb'] = $path;
                $gallery = Gallery::create($validated);
                return response()->json(new ResponseSuccess($gallery, "Success", "Success Upload Image"));
            }
        } catch (\Throwable $th) {
            Log::error($th);
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Gallery $gallery)
    {
        return response()->json(new ResponseSuccess($gallery, "Success", "Success Get Gallery"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gallery $gallery)
    {
        throw new NotFoundResourceException();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(GalleryUpdateReq $request, Gallery $gallery)
    {
        try {
            $validated = $request->validated();
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $imageName = time() . '.' . $file->extension();
                $path = $file->storeAs('products', $imageName, 'public');
                array_push($imagePaths, $path);
                $validated['image'] = $path;
                $validated['image_thumb'] = $path;
                Storage::disk('public')->delete($gallery->image);
                Storage::disk('public')->delete($gallery->image_thumb);
                $gallery->update($validated);
                return response()->json(new ResponseSuccess($gallery, "Success", "Success Upload Image"));
            }
        } catch (\Throwable $th) {
            Log::error($th);
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gallery $gallery)
    {
        try {
            $gallery->delete();
            Storage::disk('public')->delete($gallery->image);
            Storage::disk('public')->delete($gallery->image_thumb);
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Error", $th->getMessage()), 500);
        }
    }
}
