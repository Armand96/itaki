<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Document\DocumentCreateReq;
use App\Http\Requests\Document\DocumentUpdateReq;
use App\Http\Requests\ResponseFail;
use App\Http\Requests\ResponseSuccess;
use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $req)
    {
        $dataPerPage = $req->input('data_per_page', 10);

        $documents = Document::query()
            ->when($req->filled('title'), fn($q) => $q->where('title', 'like', "%{$req->title}%"))
            ->orderBy('id', 'desc')
            ->paginate($dataPerPage);

        return $documents;
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
    public function store(DocumentCreateReq $request)
    {
        try {
            $validated = $request->validated();

            if ($request->hasFile('file')) {
                $file = $request->file('file');
                $fileName = time() . '.' . $file->extension();
                $path = $file->storeAs('document', $fileName, 'public');
                $validated['file_path'] = $path;
            }

            $document = Document::create($validated);
            return response()->json(new ResponseSuccess($document, "Success", "Success Create Document"));
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Document $document)
    {
        return response()->json(new ResponseSuccess($document, "Success", "Success Get Document"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Document $document)
    {
        throw new ResourceNotFoundException();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DocumentUpdateReq $request, Document $document)
    {
        try {
            $validated = $request->validated();

            if ($request->hasFile('file')) {
                $file = $request->file('file');
                $fileName = time() . '.' . $file->extension();
                $path = $file->storeAs('document', $fileName, 'public');
                $validated['file_path'] = $path;
                $document->pdf_path && Storage::disk('public')->delete($document->pdf_path ?? "");
            }

            $document->update($validated);
            return response()->json(new ResponseSuccess($document, "Success", "Success Update Document"));
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Document $document)
    {
        try {
            $document->delete();
            $document->pdf_path && Storage::disk('public')->delete($document->pdf_path ?? "");
            return response()->json(new ResponseSuccess($document, "Success", "Success Delete Document"));
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Error", $th->getMessage()), 500);
        }
    }
}
