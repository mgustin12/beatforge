<?php

use Illuminate\Database\Seeder;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('comments')->insert([
            'text' => 'Just a comment',
            'user_id' => 1,
            'beat_id' => 1
        ]);
    }
}
