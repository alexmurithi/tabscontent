<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContentDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::enableForeignKeyConstraints();

        Schema::create('content_details', function (Blueprint $table) {

            $table->bigIncrements('id');
            $table->bigInteger('content_levels_id')->unsigned()->index();
            $table->string('price');
            $table->string('deadline');
            $table->timestamps();

            $table->foreign('content_levels_id')->references('id')->on('content_levels')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('content_details');
    }
}
