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
        Schema::create('karya_ilmiahs', function (Blueprint $table) {
            $table->id();
            $table->string('judul', 150);
            $table->string('penerbit', 150);
            $table->date('tahun_terbit');
            $table->string('file_path', 150);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('karya_ilmiahs');
    }
};
