<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBeatpadsTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('beatpads', function(Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('user_id')->unsigned();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');            
        });

        Schema::create('beatpads_beats', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('beatpad_id')->unsigned();
            $table->integer('beat_id')->unsigned();

            $table->foreign('beatpad_id')->references('id')->on('beatpads');
            $table->foreign('beat_id')->references('id')->on('beats');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('beatpads_beats');
        Schema::drop('beatpads');
    }
}
