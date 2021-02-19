<?php

namespace App\Http\Controllers\Web\Ivnuremberg\Places;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GetPlacesController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        return view('ivnuremberg.places.places');
    }
}
