<?php

namespace App\Http\Handlers\FetchGist;

use App\Http\Resources\FetchGistResource;
use App\Http\Handlers\Http\RequestToArray;
use Illuminate\Http\Request;
use App\Http\Handlers\FetchGist\FetchSingleGist;

/**
 * FetchAllGists handler
 *
 * @author Martin Vach
 */
class FetchAllGists
{
    //private $apiUrl = 'https://api.github.com/users/vades/gists';
    private $url = 'http://localhost:3000/gists';

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
      $request = new RequestToArray;
      $response = $request($this->url);
      $this->parse($response);
        
        //dd($items);
        //return FetchGistResource::collection($collection);

        //return response()->json(['message' => 'This is index()', 'data' => $response], 200);
    }

    private function parse($response){
      foreach ($response as $key => $value) {
        $gist = new FetchSingleGist;
        $response = $gist($value->url);
        //dump($value);
      }
    }
}
