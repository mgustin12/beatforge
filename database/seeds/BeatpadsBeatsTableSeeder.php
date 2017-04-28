<?php

use Illuminate\Database\Seeder;

class BeatpadsBeatsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('beatpads_beats')->insert([
            'beatpad_id' => 1,
            'beat_id' => 1
        ]);
    }
}
