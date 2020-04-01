<?php

use Illuminate\Database\Seeder;
use App\Models\Post;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::create([
            'content' => 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
            'author_id' => '1'
        ]);
    }
}
