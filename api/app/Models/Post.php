<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['content'];
    protected $hidden = ['author_id'];

    public function author() {
        return $this->belongsTo(User::class, 'author_id');
    }
}
