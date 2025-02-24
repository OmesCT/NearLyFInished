<?php

namespace App\Http\Controllers;

use App\Models\Tables;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TablesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tables = Tables::all(); // ดึงข้อมูลจากฐานข้อมูล
        return Inertia::render('Shabu/Reserve', ['tables' => $tables]);
    }




    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Tables $tables)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tables $tables)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tables $tables)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tables $tables)
    {
        //
    }
    public function reserve(Request $request, $id)
    {
        $table = Table::findOrFail($id);

        // อัพเดตสถานะโต๊ะ
        $table->update([
            'available' => false,
            'reserved_by_user_id' => $request->reserve_by_user_id, // หรือ user id ที่จอง
        ]);

        return response()->json($table);
    }
}
