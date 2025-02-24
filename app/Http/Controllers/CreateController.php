<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Tables;

class CreateController extends Controller
{
    public function showCreateForm(Request $request)
    {
        $table_id = $request->query('table_id');
        $table = Tables::findOrFail($table_id);

        return Inertia::render('Shabu/Create', [
            'table_id' => $table_id,
            'table' => $table,
        ]);
    }
}
