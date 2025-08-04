<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Client\ClientCreateReq;
use App\Http\Requests\Client\ClientUpdateReq;
use App\Http\Requests\ResponseFail;
use App\Http\Requests\ResponseSuccess;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $req)
    {
        $dataPerPage = $req->input('data_per_page', 10);

        $clients = Client::query()
            ->when($req->filled('title'), fn($q) => $q->where('title', 'like', "%{$req->title}%"))
            ->when($req->filled('description'), fn($q) => $q->where('description', 'like', "%{$req->description}%"))
            ->orderBy('id', 'desc')
            ->paginate($dataPerPage);

        return $clients;
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
    public function store(ClientCreateReq $request)
    {
        try {
            $validated = $request->validated();
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $imageName = time() . '.' . $file->extension();
                $path = $file->storeAs('client', $imageName, 'public');
                array_push($imagePaths, $path);
                $validated['image'] = $path;
                $validated['image_thumb'] = $path;
            }
            $client = Client::create($validated);
            return response()->json(new ResponseSuccess($client, "Success", "Success Create Client"));
        } catch (\Throwable $th) {
            Log::error($th);
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        return response()->json(new ResponseSuccess($client, "Success", "Success Get Client"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        throw new NotFoundHttpException();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ClientUpdateReq $request, Client $client)
    {
        try {
            $validated = $request->validated();
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $imageName = time() . '.' . $file->extension();
                $path = $file->storeAs('client', $imageName, 'public');
                array_push($imagePaths, $path);
                $validated['image'] = $path;
                $validated['image_thumb'] = $path;
                Storage::disk('public')->delete($client->image);
                Storage::disk('public')->delete($client->image_thumb);
            }
            $client->update($validated);
            return response()->json(new ResponseSuccess($client, "Success", "Success Update Client"));
        } catch (\Throwable $th) {
            Log::error($th);
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        try {
            $client->delete();
            Storage::disk('public')->delete($client->image);
            Storage::disk('public')->delete($client->image_thumb);
        } catch (\Throwable $th) {
            Log::error($th);
            //throw $th;
            return response()->json(new ResponseFail((object) null, "Server Error", $th->getMessage()));
        }
    }
}
