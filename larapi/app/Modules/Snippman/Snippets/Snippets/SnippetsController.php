<?php

namespace App\Modules\Snippman\Snippets\Snippets;

use Illuminate\Http\Request;
use App\Eloquent\Snippet;

class SnippetsController
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
      $snippets = Snippet::requestFilter($request)->requestOrderBy($request)->where('public',1)->get();
      return view('snippman.snippets.snippets')
      ->with('snippets',$snippets)
      ->with('q',$q);
    }
}
