<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cancelled extends Model
{
    protected $table = 'cancelled';
    protected $fillable = ['table_id', 'employee_id', 'customer_id', 'cancelled_at'];

    public function table()
    {
        return $this->belongsTo(Tables::class, 'table_id');
    }


    public function customer()
    {
        return $this->belongsTo(Customers::class, 'customer_id');
    }
}
