<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Gallery\GalleryCreateMultipleReq;
use App\Http\Requests\Gallery\GalleryCreateReq;
use App\Http\Requests\Gallery\GalleryUpdateReq;
use App\Http\Requests\ResponseFail;
use App\Http\Requests\ResponseSuccess;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
            ->when($req->filled('category'), fn($q) => $q->where('category', 'like', "%{$req->category}%"))
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
                $path = $file->storeAs('gallery', $imageName, 'public');
                $validated['image'] = $path;
                $validated['image_thumb'] = $path;
            }
            $gallery = Gallery::create($validated);
            return response()->json(new ResponseSuccess($gallery, "Success", "Success Upload Image"));
        } catch (\Throwable $th) {
            Log::error($th);
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    public function multiple(GalleryCreateMultipleReq $request)
    {
        $galleryImages = [];
        $imagePaths = [];
        try {
            DB::beginTransaction();
            $galleryImage = array();
            $validated = $request->validated();
            if ($request->hasFile('images')) {
                $files = $request->file('images');

                foreach ($files as $key => $file) {
                    $imageName = time() . '_' . $key + 1 . '.' . $file->extension();
                    $path = $file->storeAs('gallery', $imageName, 'public');
                    array_push($imagePaths, $path);
                    $validated['image'] = $path;
                    $validated['image_thumb'] = $path;
                    $galleryImage = Gallery::create($validated);
                    array_push($galleryImages, $galleryImage);
                }
                DB::commit();
                return response()->json(new ResponseSuccess($galleryImages, "Success", "Success Upload Images"));
            } else {
                return response()->json(new ResponseFail((object) null, "Bad Request", "Image File required"), 404);
            }
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            DB::rollBack();
            //throw $th;
            foreach ($imagePaths as $key => $value) {
                $isExist = Storage::disk('public')->exists($value) ?? false;
                if ($isExist) Storage::disk('public')->delete($value);
            }
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()), 500);
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
                $path = $file->storeAs('gallery', $imageName, 'public');
                $validated['image'] = $path;
                $validated['image_thumb'] = $path;
                Storage::disk('public')->delete($gallery->image);
                Storage::disk('public')->delete($gallery->image_thumb);
            }
            $gallery->update($validated);
            return response()->json(new ResponseSuccess($gallery, "Success", "Success Upload Image"));
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
            return response()->json(new ResponseSuccess($gallery, "Success", "Success Delete Image"));
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Error", $th->getMessage()), 500);
        }
    }
}
