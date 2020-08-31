<?php

namespace App\Http\Handlers\Http;

use GuzzleHttp\Client;

/**
 * GuzzleJsonToObject handler
 *
 * @author Martin Vach
 */
class GuzzleJsonToObject
{
    /**
     * Handle the incoming Htttp request and convert it to array.
     *
     * @param  string  $url
     * @return array
     */
    public function __invoke($url)
    {
       //create new instance of Client class
      $client = new Client();

      //send get request to fetch data
      $request = $client->get($url);

      //response
      $response = $request->getBody()->getContents();
     
     return json_decode($response);
    }
}
