<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\GistCollection;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Handlers\FetchGist\FetchAllGists;

class FetchGistController extends Controller
{
    //private $apiUrl = 'https://api.github.com/users/vades/gists';
    private $apiUrl = 'http://localhost:3000/gists';
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
      $gists = new FetchAllGists;
      $response = $gists($request);
      //return response()->json($response);
    }
}

