<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tables extends Model
{
    use HasFactory;

    protected $fillable = [
        'seat',
        'available',
        'reserved_by_user_id',
    ];

    // เพิ่มความสัมพันธ์กับโมเดล Reservations
    public function reservations()
    {
        return $this->hasMany(Reservations::class);
    }
}

