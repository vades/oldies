<?php

namespace App\Modules\Snippman\Home;
use Illuminate\Http\Request;
use App\Eloquent\Snippet;

/**
 * Home controller
 *
 * @author Martin Vach
 */
class HomeController
{
    /**
     * Handle the homepage.
     *
     *@return void
     */
    public function __invoke(Request $request)
    {
      $snippets = Snippet::requestOrderBy($request)->where('public',1)->get();
      return view('snippman.home.home')
      ->with('snippets',$snippets);
    }
}
