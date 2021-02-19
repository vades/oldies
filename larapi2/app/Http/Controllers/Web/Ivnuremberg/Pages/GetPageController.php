<?php

namespace App\Http\Controllers\Web\Ivnuremberg\Pages;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GetPageController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, string $slug)
    {
        $data = ['slug' => $slug];
        return view('ivnuremberg.pages.page', $data);
    }
}
