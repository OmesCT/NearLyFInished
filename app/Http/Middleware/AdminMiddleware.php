<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    public function handle($request, Closure $next)
    {
        if (Auth::check() && preg_match('/^csmju\d{2}@gmail\.com$/', Auth::user()->email)) {
            return $next($request);
        }

        return redirect('/')->with('error', 'You do not have access to this page.');
    }
}

