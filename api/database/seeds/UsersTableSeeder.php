<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Post;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class)->create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('qwe' ),
            'api_token' => 'ZDZ7KiH9K4YpxbxcqpxASoFSeKFtLUhIb9Qze3HttPZEsdcMawqsCHWlyA1F'
        ])->posts()->saveMany(factory(Post::class, 3)->make());

        factory(User::class, 5)->create()
            ->each(function ($user) {
                $user->posts()->saveMany(factory(Post::class, 3)->make());
            });
    }
}
