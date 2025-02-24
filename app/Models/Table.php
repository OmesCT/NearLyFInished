<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Table extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'available', 'reserved_by_user_id'];

    public function user()
    {
        return $this->belongsTo(User::class, 'reserved_by_user_id');
    }
}
