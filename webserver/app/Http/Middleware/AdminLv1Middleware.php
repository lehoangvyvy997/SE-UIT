<?php

namespace App\Http\Middleware;

use Closure;

class AdminLv1Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(!Auth::guard('admin')->check()){
            return redirect()->route('admin.get.login');
        }
        return $next($request);
    }
}
