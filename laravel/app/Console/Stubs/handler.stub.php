<?php

namespace DummyNamespace;

use Illuminate\Http\Request;

/**
 * DummyClass handler
 *
 * @author Martin Vach
 */
class DummyClass
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //
        return response()->json([]);
    }
}
