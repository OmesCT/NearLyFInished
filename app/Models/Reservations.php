<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Log;

class Reservations extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'table_id',
        'reserved_at',
        'expires_at',
        'number_of_guests'
    ];

    public function table()
    {
        return $this->belongsTo(Tables::class, 'table_id');
    }


}
