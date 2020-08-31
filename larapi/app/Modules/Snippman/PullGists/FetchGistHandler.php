<?php

namespace App\Modules\Snippman\PullGists;

use App\Eloquent\Snippet;
use App\Http\Handlers\Http\GuzzleJsonToObject;
use App\Modules\Snippman\PullGists\FetchGistResource;

/**
 * FetchSingleGist handler
 *
 * @author Martin Vach
 */
class FetchGistHandler
{
    /**
     * Handle the incoming request.
     *
     *@return void
     */
    public function __invoke($url)
    {

        $request = new GuzzleJsonToObject;
        $response = $request($url);
        return $this->parse($response);
    }
    /**
     * Parse single gist
     */
    private function parse($response)
    {
        return new FetchGistResource($response);
        return $response;

    }
   
}
