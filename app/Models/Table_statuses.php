<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Table_statuses extends Model
{
    use HasFactory;
    protected $table = 'table_statuses';
    protected $fillable = ['status','users_id'];

    public function user()
    {
        return $this->belongsTo(User::class, 'users_id');
    }
    
}
