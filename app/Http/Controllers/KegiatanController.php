<?php

namespace App\Http\Controllers;

use App\Http\Requests\Kegiatan\KegiatanCreateReq;
use App\Http\Requests\Kegiatan\KegiatanUpdateReq;
use App\Http\Requests\ResponseFail;
use App\Http\Requests\ResponseSuccess;
use App\Models\Kegiatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Translation\Exception\NotFoundResourceException;

class KegiatanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $req)
    {
        $dataPerPage = $req->input('data_per_page', 10);

        $kegiatans = Kegiatan::query()
            ->when($req->filled('kategori'), fn($q) => $q->where('kategori', 'like', "%{$req->kategori}%"))
            ->when($req->filled('short_desc'), fn($q) => $q->where('short_desc', 'like', "%{$req->short_desc}%"))
            ->when($req->filled('detail'), fn($q) => $q->where('detail', 'like', "%{$req->detail}%"))
            ->when($req->filled('tgl_event'), fn($q) => $q->where('tgl_event', '=', "%{$req->tgl_event}%"))
            ->when($req->filled('status_event'), fn($q) => $q->where('status_event', '=', "%{$req->status_event}%"))
            ->when($req->filled('is_active'), fn($q) => $q->where('is_active', true))
            ->orderBy('id', 'desc')
            ->paginate($dataPerPage);

        return $kegiatans;
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
    public function store(KegiatanCreateReq $request)
    {
        try {
            $validated = $request->validated();

            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $imageName = time() . '.' . $file->extension();
                $path = $file->storeAs('kegiatan', $imageName, 'public');
                $validated['cover_image'] = $path;
                $validated['cover_image_thumb'] = $path;
            }

            $kegiatan = kegiatan::create($validated);
            return response()->json(new ResponseSuccess($kegiatan, "Success", "Success Create kegiatan"));
        } catch (\Throwable $th) {
            Log::error($th);
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Kegiatan $kegiatan)
    {
        return response()->json(new ResponseSuccess($kegiatan, "Success", "Success Get Kegiatan"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kegiatan $kegiatan)
    {
        throw new ResourceNotFoundException();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(KegiatanUpdateReq $request, Kegiatan $kegiatan)
    {
        try {
            $validated = $request->validated();

            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $imageName = time() . '.' . $file->extension();
                $path = $file->storeAs('post', $imageName, 'public');
                $validated['cover_image'] = $path;
                $kegiatan->cover_image && Storage::disk('public')->delete($kegiatan->cover_image ?? "");
                $kegiatan->cover_image_thumb && Storage::disk('public')->delete($kegiatan->cover_image_thumb);
            }

            $kegiatan->update($validated);
            return response()->json(new ResponseSuccess($kegiatan, "Success", "Success Update kegiatan"));
        } catch (\Throwable $th) {
            Log::error($th);
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kegiatan $kegiatan)
    {
        try {
            $kegiatan->delete();
            if($kegiatan->cover_image) {
                $kegiatan->cover_image && Storage::disk('public')->delete($kegiatan->cover_image);
                $kegiatan->cover_image_thumb && Storage::disk('public')->delete($kegiatan->cover_image_thumb);
            }
            return response()->json(new ResponseSuccess($kegiatan, "Success", "Success Delete Kegiatan"));
        } catch (\Throwable $th) {
            Log::error($th);
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    public function getEnum()
    {
        return response()->json([
            ['key' => 'seminar', 'value' => 'Seminar'],
            ['key' => 'webinar', 'value' => 'Webinar'],
        ]);
    }
}
