<?php

use Illuminate\Database\Seeder;

class BeatsUsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('beats_users')->insert([
            'beat_id' => 1,
            'user_id' => 1
        ]);
    }
}
