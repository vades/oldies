<?php

namespace App\Modules\Snippman\Pages\About;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AboutController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return view
     */
    public function __invoke(Request $request)
    {
      return view('snippman.pages.about');
    }
}
