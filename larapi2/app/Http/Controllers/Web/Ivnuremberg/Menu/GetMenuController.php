<?php

namespace App\Http\Controllers\Web\Ivnuremberg\Menu;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GetMenuController extends Controller
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
        return view('ivnuremberg.menu.menu', $data);
    }
}
