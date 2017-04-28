<?php

use Illuminate\Database\Seeder;

class BeatsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('beats')->insert([
            'name' => 'Test Beat',
            'user_id' => 1,
            'path' => 'https://s3-us-west-2.amazonaws.com/beatforge/beats/trad_kick_01_C.wav',
            'upvotes' => 5
        ]);
    }
}
