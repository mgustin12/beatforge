<?php

use Illuminate\Database\Seeder;

class BeatpadsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('beatpads')->insert([
            'name' => 'Test Beatpad',
            'user_id' => 1
        ]);
    }
}
