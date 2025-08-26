"use client";
import Image from "next/image";

export default function SkemaSertifikasi() {
  return (
    <div className="luminix-padding-section">
      <div className="container">
        {/* Judul */}
        <div className="luminix-section-title center mb-10">
          <h2 className="text-3xl font-bold">Sertifikasi</h2>
        </div>

        {/* Gambar Skema */}
        <div className="flex justify-center mb-12">
          <Image
            src="/images/sertifikasi/skema-sertifikasi.png" // taruh file gambar di public/images/sertifikasi/
            alt="Skema Sertifikasi"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Persyaratan */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Persyaratan</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Pendidikan:</span> Gelar sarjana
              atau setara dalam bidang terkait.
            </li>
            <li>
              <span className="font-semibold">Pengalaman Kerja:</span> Minimal
              3-5 tahun pengalaman dalam manajemen proyek.
            </li>
            <li>
              <span className="font-semibold">Pelatihan:</span> Menyelesaikan
              pelatihan atau kursus yang disetujui dalam manajemen proyek.
            </li>
            <li>
              <span className="font-semibold">Ujian Sertifikasi:</span> Lulus
              ujian sertifikasi yang meliputi pengetahuan tentang manajemen
              proyek, teknik perencanaan, pengelolaan risiko, dan kontrol
              anggaran.
            </li>
            <li>
              <span className="font-semibold">Etika Profesional:</span> Mematuhi
              standar etika yang ditetapkan oleh lembaga sertifikasi.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
