<?php
namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Models\Reservations;
use Carbon\Carbon;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function () {
            Reservations::where('expires_at', '<', Carbon::now())
                ->chunk(100, function ($expiredReservations) {
                    foreach ($expiredReservations as $reservation) {
                        if ($reservation->table) {
                            $reservation->table->update([
                                'available' => true,
                                'reserved_by_user_id' => null,
                            ]);
                        }
                        $reservation->delete();
                    }
                });
        })->everyMinute();
    }
}
