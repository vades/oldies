<?php

namespace App\Modules\Snippman\Snippets\Search;

use Illuminate\Http\Request;
use App\Eloquent\Snippet;

class SearchController
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
      $q = $request->q ?: '';
      $snippets = Snippet::requestFilter($request)->requestOrderBy($request)->where('public',1);
      return view('snippman.snippets.search')
      ->with('count',$snippets->count())
      ->with('snippets',$snippets->get())
      ->with('q',$q);
    }
}
