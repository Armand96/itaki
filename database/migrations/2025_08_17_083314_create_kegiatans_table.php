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
        Schema::create('kegiatans', function (Blueprint $table) {
            $table->id();
            $table->string("judul", 100);
            $table->string("slug", 200);
            $table->enum('kategori', ['seminar', 'webinar']);
            $table->string('short_desc', 200);
            $table->string('cover_image', 150)->nullable();
            $table->string('cover_image_thumb', 150)->nullable();
            $table->text('detail');
            $table->date('tgl_event');
            $table->text('url_video')->nullable();
            $table->boolean('status_event')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kegiatans');
    }
};
