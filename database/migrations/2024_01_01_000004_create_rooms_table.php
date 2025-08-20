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
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->string('room_number');
            $table->enum('type', ['Standard', 'VIP', 'ICU', 'Emergency', 'Operating']);
            $table->enum('status', ['available', 'occupied', 'maintenance'])->default('available');
            $table->decimal('price_per_day', 8, 2)->nullable();
            $table->text('description')->nullable();
            $table->json('amenities')->nullable(); // Array of amenities
            $table->integer('floor')->nullable();
            $table->timestamps();
            
            // Indexes for performance
            $table->unique('room_number');
            $table->index('type');
            $table->index('status');
            $table->index(['type', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rooms');
    }
};