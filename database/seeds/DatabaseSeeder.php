<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(BeatsTableSeeder::class);
        $this->call(CommentsTableSeeder::class);
        $this->call(BeatpadsTableSeeder::class);
        $this->call(BeatsUsersTableSeeder::class);
        $this->call(BeatpadsBeatsTableSeeder::class);
    }
}
