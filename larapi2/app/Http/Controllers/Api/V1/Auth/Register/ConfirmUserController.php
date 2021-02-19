<?php

namespace App\Http\Controllers\Api\V1\Auth\Register;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConfirmUserController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        return response()->json([
            'message' => __METHOD__
        ]);
    }
}
