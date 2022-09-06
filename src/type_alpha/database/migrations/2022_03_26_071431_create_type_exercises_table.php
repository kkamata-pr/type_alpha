<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTypeExercisesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // 練習問題集
        Schema::create('type_exercises', function (Blueprint $table) {
            $table->id('exercises_id');
            $table->string('exercises_text', 255); // 英語、ローマ字
            $table->string('translate_ja'  , 255); // 日本語訳
            $table->integer('category_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('type_exercises');
    }
}
