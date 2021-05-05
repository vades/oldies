<?php

namespace App\Modules\Snippman\Snippets\Snippet;

use App\Http\Controllers\Controller;
use App\Eloquent\Snippet;
use App\Events\SnippetShown;

class SnippetController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  string  $slug
     * @return mixed
     */
    public function __invoke($slug)
    {
      $parts = explode('-',$slug);
      $id = last($parts);
      $snippet = Snippet::find($id);

      // fire event once user has been created
      event(new SnippetShown($snippet));
      return view('snippman.snippets.snippet')
      ->with('snippet',$snippet);
    }
}
