<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Http\Requests\Post\PostCreateReq;
use App\Http\Requests\Post\PostUpdateReq;
use App\Http\Requests\ResponseFail;
use App\Http\Requests\ResponseSuccess;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $req)
    {
        $dataPerPage = $req->input('data_per_page', 10);

        $posts = Post::query()
            ->when($req->filled('title'), fn($q) => $q->where('title', 'like', "%{$req->title}%"))
            ->when($req->filled('category'), fn($q) => $q->where('category', 'like', "%{$req->category}%"))
            ->orderBy('id', 'desc')
            ->paginate($dataPerPage);

        return $posts;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PostCreateReq $request)
    {
        $path = "";
        try {
            $validated = $request->validated();
            $validated['content'] = $validated['value'];
            unset($validated['value']);

            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $imageName = time() . '.' . $file->extension();
                $path = $file->storeAs('post', $imageName, 'public');
                $validated['cover_image'] = $path;
            }

            $post = Post::create($validated);
            return response()->json(new ResponseSuccess($post, "Success", "Success Create post"));
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            $isExist = Storage::disk('public')->exists($path) ?? false;
            if ($isExist) Storage::disk('public')->delete($path);
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()), 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return response()->json(new ResponseSuccess($post, "Success", "Success Get Product"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PostUpdateReq $request, Post $post)
    {
        try {
            $validated = $request->validated();
            $validated['content'] = $validated['value'];
            unset($validated['value']);

            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $imageName = time() . '.' . $file->extension();
                $path = $file->storeAs('post', $imageName, 'public');
                $validated['cover_image'] = $path;
                $post->cover_image && Storage::disk('public')->delete($post->cover_image);
            }

            $post->update($validated);
            return response()->json(new ResponseSuccess($post, "Success", "Success Update Product"));
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Error", $th->getMessage()), 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        try {
            $post->update(['is_active' => false]);
            if($post->cover_image) {
                Storage::disk('public')->delete($post->cover_image);
            }
            return response()->json(new ResponseSuccess($post, "Success", "Success Set Product To Inactive"));
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Error", $th->getMessage()), 500);
        }
    }
}
