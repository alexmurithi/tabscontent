<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContentOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('content_orders', function (Blueprint $table) {
            $table->id();
            $table->integer('content_type_id');
            $table->integer('workflow_type_id');
            $table->integer('language_id');
            $table->integer('amount_of_words_id');
            $table->integer('delivery_time_id');
            $table->string('amount_paid');
            $table->text('instructions')->nullable();
            $table->integer('upload_id')->nullable();
            $table->integer('user_id');
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
        Schema::dropIfExists('content_orders');
    }
}
