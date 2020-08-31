<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSnippetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('snippets', function (Blueprint $table) {
          $table->increments('id');
          $table->integer('user_id');
          $table->string('sku')->unique();
          $table->string('category')->nullable();
          $table->string('title')->nullable();
          $table->text('content')->nullable();
          $table->tinyInteger('public')->default(0);
          $table->longText('meta')->nullable();
          $table->integer('shown');
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
        Schema::dropIfExists('snippets');
    }
}
