<?php

namespace App\Modules\Snippman\PullGists;

use App\Http\Resources\FetchGistResource;
use App\Http\Handlers\Http\GuzzleJsonToObject;
use App\Modules\Snippman\PullGists\FetchGistHandler;
use App\Modules\Snippman\PullGists\StoreGistHandler;


/**
 * FetchAllGists handler
 *
 * @author Martin Vach
 */
class PullGistsHandler
{
    private $url = 'https://api.github.com/users/vades/gists';
    //private $url = 'http://localhost:3000/all';

    /**
     * Handle the incoming request.
     *
     *@return void
     */
    public function __invoke()
    {
     
      $request = new GuzzleJsonToObject;
      $response = $request($this->url);
      return response()->json($this->parse($response));
    }
    /**
     * Parse gists
     */
    private function parse($response){
     $arr = [];
     //foreach (array_slice((array)$response, 0, 1) as $key => $value) {
      foreach ($response as $key => $value) {
        $gist = new FetchGistHandler;
        $data = $gist($value->url);
        $store = new StoreGistHandler;
        $store(collect($data));
        array_push($arr, collect($data));
      }
      return $arr;
    }
}
