<?php

namespace App\Http\Controllers\Web\Ivnuremberg\Error;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Error404Controller extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $data = [];
        return view('ivnuremberg.errors.404', $data);
    }
}
