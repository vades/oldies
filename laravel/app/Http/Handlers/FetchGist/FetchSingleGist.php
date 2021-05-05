<?php

namespace App\Http\Handlers\FetchGist;

use Illuminate\Http\Request;
use App\Http\Handlers\Http\RequestToArray;

/**
 * FetchSingleGist handler
 *
 * @author Martin Vach
 */
class FetchSingleGist
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke($url)
    {
        
      $request = new RequestToArray;
      $response = $request($url);
      dump($response);
    }
}
