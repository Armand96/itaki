<?php

namespace App\Exports;

use App\Models\DaftarAnggota;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class DaftarAnggotaExport implements FromCollection, WithHeadings
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return DaftarAnggota::all([
            "id",
            "nama",
            "jabatan",
            "jenjang",
            "nomor_kta",
            "nomor_registrasi",
        ]);
    }

    public function headings(): array
    {
        return [
            "id",
            "nama",
            "jabatan",
            "jenjang",
            "nomor_kta",
            "nomor_registrasi",
        ];
    }
}
