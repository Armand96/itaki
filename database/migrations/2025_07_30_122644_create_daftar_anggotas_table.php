<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('daftar_anggotas', function (Blueprint $table) {
            $table->id();
            $table->string("nama", 150);
            $table->string("jabatan", 50);
            $table->integer("jenjang");
            $table->integer("nomor_kta");
            $table->string("nomor_registrasi", 150);
            $table->string("image", 200)->nullable();
            $table->string("image_thumb", 200)->nullable();
            $table->text("deskripsi_jabatan")->nullable();
            $table->integer("urutan", false, true)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('daftar_anggotas');
    }
};
