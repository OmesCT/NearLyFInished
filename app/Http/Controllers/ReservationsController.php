<?php
namespace App\Http\Controllers;

use App\Models\Reservations;
use App\Models\Tables;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class ReservationsController extends Controller
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

        DB::beginTransaction(); // ใช้ transaction เพื่อป้องกันข้อมูลผิดพลาด

        try {
            // บันทึกข้อมูลการจองลงในตาราง reservations
            $reservation = Reservations::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'phone' => $request->phone,
                'table_id' => $request->table_id,
                'reserved_at' => now(),
                'expires_at' => now()->addMinutes(150), // ตั้งเวลาหมดอายุอัตโนมัติ 2ชั่วโมงครึ่ง
            ]);

            Log::info($reservation);
            // อัปเดตสถานะโต๊ะ
            Tables::where('id', $request->table_id)->update([
                'available' => false,
                'reserved_by_user_id' => auth()->id(),
            ]);

            DB::commit(); // ยืนยันการทำธุรกรรม

            return redirect()->route('reserve.index')->with('success', 'จองโต๊ะสำเร็จ!');
        } catch (\Exception $e) {
            DB::rollBack(); // ยกเลิกการทำธุรกรรมหากเกิดข้อผิดพลาด
            Log::error('Reservation Error: ' . $e->getMessage());
            return redirect()->route('reserve.index')->withErrors(['error' => 'เกิดข้อผิดพลาดในการจองโต๊ะ']);
        }
    }

    public function show($id)
    {
        $booking = Reservations::with('table')->findOrFail($id);

        return Inertia::render('Shabu/Show', [
            'booking' => $booking,
        ]);
    }

    // ฟังก์ชันสำหรับแสดงฟอร์มแก้ไขการจอง
    public function edit($id)
    {
        $booking = Reservations::findOrFail($id);
        $tables = Tables::all();
        return Inertia::render('Shabu/Edit', [
            'booking' => $booking,
            'tables' => $tables,
            'csrf_token' => csrf_token(), // Add this line
        ]);
    }

    // ฟังก์ชันสำหรับอัพเดตข้อมูลการจอง
    public function update(Request $request, $id)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'table_id' => 'required|exists:tables,id',
        ]);

        DB::beginTransaction(); // ใช้ transaction เพื่อป้องกันข้อมูลผิดพลาด

        try {
            // ค้นหาการจองที่ต้องการแก้ไข
            $reservation = Reservations::findOrFail($id);

            // ตรวจสอบว่ามีการเปลี่ยนแปลงโต๊ะหรือไม่
            $isTableChanged = $reservation->table_id != $request->table_id;

            // อัปเดตข้อมูลการจอง
            $reservation->update([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'phone' => $request->phone,
                'table_id' => $request->table_id,
                'reserved_at' => now(),
                'expires_at' => now()->addMinutes(150), // ตั้งเวลาหมดอายุอัตโนมัติ 2ชั่วโมงครึ่ง
            ]);

            // หากมีการเปลี่ยนโต๊ะให้อัปเดตสถานะโต๊ะ
            if ($isTableChanged) {
                // อัปเดตสถานะโต๊ะเก่าให้กลับมาว่าง
                Tables::where('id', $reservation->table_id)->update([
                    'available' => true,
                    'reserved_by_user_id' => null,
                ]);

                // อัปเดตสถานะโต๊ะใหม่ให้ไม่ว่าง
                Tables::where('id', $request->table_id)->update([
                    'available' => false,
                    'reserved_by_user_id' => auth()->id(),
                ]);
            }

            DB::commit(); // ยืนยันการทำธุรกรรม

            return redirect()->route('booking.details', $reservation->id)->with('success', 'ข้อมูลการจองอัปเดตสำเร็จ!');
        } catch (\Exception $e) {
            DB::rollBack(); // ยกเลิกการทำธุรกรรมหากเกิดข้อผิดพลาด
            Log::error('Update Reservation Error: ' . $e->getMessage());
            return redirect()->route('booking.edit', $id)->withErrors(['error' => 'เกิดข้อผิดพลาดในการอัปเดตข้อมูลการจอง']);
        }
    }
}

