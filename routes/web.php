<?php

use App\Http\Controllers\CreateController;
use App\Http\Controllers\ReservationsController;
use App\Http\Controllers\TablesController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;
use App\Http\Middleware\AdminMiddleware;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // เส้นทางการจองโต๊ะ
    Route::get('/reserve', [TablesController::class, 'index'])->name('reserve.index');
    Route::post('/reserve', [ReservationsController::class, 'store'])->name('reserve.store');
    Route::post('/tables/{table}/reserve', [ReservationsController::class, 'store'])->name('tables.reserve');
    Route::patch('/api/tables/{id}/reserve', [ReservationsController::class, 'store']);

    // หน้าแสดงรายละเอียดการจอง
    Route::get('/booking-details/{id}', [ReservationsController::class, 'show'])->name('booking.details');


    // หน้าสร้างการจอง
    Route::get('/create', [CreateController::class, 'showCreateForm'])->name('create');

    // API สำหรับการจอง
    Route::post('/reserve-table', [ReservationsController::class, 'reserveTable']);
});

Route::middleware(['auth', AdminMiddleware::class])->group(function () {
    Route::get('/admin/panel', [AdminController::class, 'index'])->name('admin.panel');
    Route::delete('/admin/delete/{id}', [AdminController::class, 'deleteReservation'])->name('admin.delete');
    Route::get('/admin/edit/{id}', [AdminController::class, 'edit'])->name('admin.edit');
    Route::post('/admin/update/{id}', [AdminController::class, 'update'])->name('admin.update');
});

Route::middleware('auth')->group(function () {
    // เส้นทางที่เพิ่มขึ้นสำหรับการแก้ไขข้อมูลการจอง
    Route::get('/booking/{id}/edit', [ReservationsController::class, 'edit'])->name('booking.edit');
    Route::put('/booking/{id}', [ReservationsController::class, 'update'])->name('booking.update');
});

require __DIR__ . '/auth.php';

