<?php

namespace App\Http\Controllers;
use App\Models\Customer;
use App\Models\Tables;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomersController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'table_id' => 'required|exists:tables,id',
        ]);

        // บันทึกข้อมูลลูกค้า
        $customer = Customer::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
        ]);

        // อัปเดตสถานะโต๊ะว่า "ถูกจองแล้ว"
        Tables::where('id', $request->table_id)->update([
            'available' => 0,
            'reserved_by_user_id' => auth()->id(), // ใช้ reserved_by_user_id แทน
        ]);


        return redirect()->route('reserve.index')->with('success', 'จองโต๊ะสำเร็จ!');
    }

}
