<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Reservations;
use App\Models\Tables;

class AdminController extends Controller
{
    public function index()
    {
        if (!Auth::check()) {
            return Inertia::location('/login'); // ใช้ Inertia::location เพื่อ redirect
        }

        $reservations = Reservation::select('id', 'first_name', 'phone', 'table_id')->get();
        $tables = Table::select('id', 'seat', 'available')->get();

        return Inertia::render('Admin/Panel', [
            'reservations' => $reservations,
            'tables' => $tables
        ]);
    }


    public function deleteReservation($id)
{
    $reservation = Reservations::find($id);

    if ($reservation) {
        // อัปเดตสถานะ available ของโต๊ะเป็น true
        $table = Tables::find($reservation->table_id);
        if ($table) {
            $table->available = true;
            $table->save();
        }

        // ลบข้อมูลการจอง
        $reservation->delete();

        return redirect()->route('admin.panel')->with('success', 'Reservation deleted successfully and table is now available.');
    }

    return redirect()->route('admin.panel')->with('error', 'Reservation not found.');
}


    public function edit($id)
    {
        $reservation = Reservations::find($id);
        if (!$reservation) {
            return redirect()->route('admin.panel')->with('error', 'Reservation not found.');
        }

        return Inertia::render('Admin/Edit', [
            'reservation' => $reservation
        ]);
    }

    public function update(Request $request, $id)
    {
        $reservation = Reservations::find($id);
        if ($reservation) {
            $reservation->update($request->only('first_name', 'email'));
            return redirect()->route('admin.panel')->with('success', 'Reservation updated successfully.');
        }

        return redirect()->route('admin.panel')->with('error', 'Reservation not found.');
    }

}
